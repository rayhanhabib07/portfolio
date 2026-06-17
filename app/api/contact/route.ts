import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(5000),
});

// Best-effort in-memory rate limit (5 submissions per IP per 10 min).
// Resets on cold start — acceptable for a low-traffic portfolio form.
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
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
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
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("[contact] Supabase env vars missing — skipping DB write.");
  } else {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase
      .from("contacts")
      .insert({ name, email, message });

    if (error) {
      console.error("[contact] DB insert failed:", error);
      return NextResponse.json(
        { ok: false, error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
