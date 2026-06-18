import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z
    .email()
    .trim()
    .max(200)
    .refine((e) => !e.includes("\n") && !e.includes("\r"), {
      message: "Invalid email",
    }),
  message: z.string().trim().min(10).max(5000),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipTimestamps.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (recent.length >= MAX_PER_WINDOW) {
    ipTimestamps.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipTimestamps.set(ip, recent);
  return false;
}

function clientIp(req: Request): string {
  // On Vercel, x-real-ip is set by the platform and is trustworthy.
  // x-forwarded-for is checked as fallback but only the first value
  // (set by Vercel's edge proxy) is used.
  return (
    req.headers.get("x-real-ip")?.trim() ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

async function storeInSupabase(data: {
  name: string;
  email: string;
  message: string;
}) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.warn("[contact] Supabase env vars missing — skipping DB write.");
    return;
  }

  const supabase = createClient(url, key);
  const { error } = await supabase.from("contacts").insert(data);

  if (error) {
    console.error("[contact] DB insert failed:", error.code);
    throw new Error("Database write failed");
  }
}

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_TO;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn("[contact] Resend env vars missing — skipping email.");
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New contact from ${data.name.slice(0, 50)} — shadhincodes.com`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    replyTo: data.email,
  });

  if (error) {
    console.error("[contact] Email send failed:", error.name);
    throw new Error("Email send failed");
  }
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check your input and try again." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  try {
    await storeInSupabase(data);
    await sendNotificationEmail(data);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
