"use client";

import { useState } from "react";

const concepts = [
  {
    tag: "Your address",
    analogy: "Like the address on your shopfront.",
    plain: "Your domain is the name people type to reach you — yourbusiness.com. It’s how customers find you, and how your email works.",
    you: "Registered in your name and owned by you. I handle the setup and the renewals, so it never expires by accident.",
  },
  {
    tag: "Your home online",
    analogy: "Like the building your shop sits in.",
    plain: "Hosting is the space on the internet where your website lives. Without it, there’s nothing for visitors to load.",
    you: "Fast, secure, and always on. I keep it running so your site loads quickly and stays online — day and night.",
  },
  {
    tag: "Your upkeep",
    analogy: "Like a caretaker who keeps the lights on.",
    plain: "Websites need looking after — security updates, backups, small edits and the occasional fix. A care plan covers all of it.",
    you: "One monthly payment, from £29. I handle the upkeep in the background; you reach me whenever you need a change.",
    price: "from £29/mo",
  },
];

const journey = [
  { title: "Launch day", body: "Your site goes live and I check every page, link and form works." },
  { title: "It’s yours from day one", body: "Domain, hosting and files are set up in your name — not mine." },
  { title: "I look after it", body: "Updates, security and backups run quietly in the background." },
  { title: "Free to leave, always", body: "Want to move on? I hand over every login and file. No lock-in." },
];

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: "Essential",
    price: "£29",
    tagline: "Keep the lights on.",
    features: [
      "Hosting + domain renewals managed",
      "SSL security certificate",
      "Daily backups",
      "Security updates",
      "Uptime monitoring",
      "Support within 48 hours",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "£59",
    tagline: "For sites that keep changing.",
    features: [
      "Everything in Essential",
      "Up to 1 hour of edits each month",
      "Priority support within 24 hours",
      "Monthly check-in",
    ],
    popular: true,
  },
  {
    name: "Partner",
    price: "£119",
    tagline: "Like having a developer on call.",
    features: [
      "Everything in Growth",
      "Up to 3 hours of development monthly",
      "Performance & analytics report",
      "First in the queue, always",
    ],
    popular: false,
  },
];

function ConceptCard({ c, i }: { c: typeof concepts[number]; i: number }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex flex-col rounded-2xl p-7 transition-transform duration-300 ease-out"
      style={{
        background: hover
          ? "linear-gradient(180deg, rgba(200,184,154,0.07), rgba(34,34,32,0.6))"
          : "rgba(34,34,32,0.5)",
        border: "1px solid rgba(200,184,154,0.16)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 48px -24px rgba(0,0,0,0.7)" : "none",
      }}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-[#5a5850]">
          0{i + 1}
        </span>
        {c.price ? (
          <span
            className="rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide"
            style={{
              background: "rgba(200,184,154,0.12)",
              color: "#c8b89a",
              border: "1px solid rgba(200,184,154,0.16)",
            }}
          >
            {c.price}
          </span>
        ) : (
          <span
            className="h-2 w-2 rounded-full transition-opacity duration-300"
            style={{ background: "#c8b89a", opacity: hover ? 1 : 0.35 }}
          />
        )}
      </div>

      <h3
        className="mb-1 text-2xl text-[#e0ddd5]"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {c.tag}
      </h3>
      <p
        className="mb-5 text-sm italic text-[#c8b89a]"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {c.analogy}
      </p>
      <p className="mb-6 text-[15px] leading-relaxed text-[#8a8680]">
        {c.plain}
      </p>

      <div
        className="mt-auto rounded-xl p-4"
        style={{
          background: "rgba(200,184,154,0.06)",
          border: "1px solid rgba(200,184,154,0.16)",
        }}
      >
        <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-[#5a5850]">
          What this means for you
        </p>
        <p className="text-[14px] leading-relaxed text-[#e0ddd5]">
          {c.you}
        </p>
      </div>
    </div>
  );
}

function PlanCard({ p }: { p: Plan }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex flex-col rounded-2xl p-7 transition-transform duration-300 ease-out"
      style={{
        background: p.popular
          ? "linear-gradient(180deg, rgba(200,184,154,0.10), rgba(34,34,32,0.5))"
          : "rgba(34,34,32,0.5)",
        border: p.popular
          ? "1px solid rgba(200,184,154,0.45)"
          : "1px solid rgba(255,255,255,0.07)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 48px -24px rgba(0,0,0,0.7)" : "none",
      }}
    >
      {p.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-[#c8b89a] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#1a1a1a]">
          Most popular
        </span>
      )}

      <h4
        className="text-lg text-[#e0ddd5]"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {p.name}
      </h4>
      <p className="mb-5 text-[13px] text-[#8a8680]">{p.tagline}</p>

      <div className="mb-6 flex items-baseline gap-1">
        <span
          className="text-4xl text-[#e0ddd5]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {p.price}
        </span>
        <span className="text-sm text-[#5a5850]">/month</span>
      </div>

      <ul className="mb-7 flex flex-col gap-3">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] text-[#8a8680]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="#c8b89a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-auto inline-block rounded-full px-5 py-2.5 text-center text-sm font-medium transition-colors duration-200"
        style={
          p.popular
            ? { background: "#c8b89a", color: "#1a1a1a" }
            : { background: "transparent", color: "#e0ddd5", border: "1px solid rgba(255,255,255,0.07)" }
        }
      >
        Get started
      </a>
    </div>
  );
}

export default function AfterLaunch() {
  return (
    <section id="after-launch" className="relative w-full overflow-hidden px-6 py-24 md:py-32 bg-[#1a1a1a]">
      {/* Ambient warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,184,154,0.10), rgba(200,184,154,0) 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c8b89a]">
          After launch
        </p>
        <h2
          className="max-w-2xl text-4xl leading-[1.1] sm:text-5xl text-[#e0ddd5]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Your site is live.
          <br />I look after the rest.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8a8680]">
          No jargon. Think of your website like a shop: it needs an{" "}
          <span className="text-[#e0ddd5]">address</span> so customers can find you, and a{" "}
          <span className="text-[#e0ddd5]">building</span> to keep everything in. I set up both,
          put them in your name, and keep them running &mdash; so you can focus on your business, not your tech.
        </p>

        {/* Concept cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {concepts.map((c, i) => (
            <ConceptCard key={c.tag} c={c} i={i} />
          ))}
        </div>

        {/* Ownership strip */}
        <div
          className="mt-6 flex flex-col gap-4 rounded-2xl p-8 md:flex-row md:items-center md:gap-8"
          style={{
            background: "linear-gradient(100deg, rgba(200,184,154,0.12), rgba(34,34,32,0.4))",
            border: "1px solid rgba(200,184,154,0.16)",
          }}
        >
          <div
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full"
            style={{
              background: "rgba(200,184,154,0.15)",
              border: "1px solid rgba(200,184,154,0.16)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="5" stroke="#c8b89a" strokeWidth="1.6" />
              <path d="M11.5 11.5L20 20M17 17l2-2M14 14l2-2" stroke="#c8b89a" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h3
              className="text-2xl text-[#e0ddd5]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              You own everything.
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#8a8680]">
              The domain, the website, the files &mdash; all in your name from day one. I manage it; I don&apos;t hold
              it hostage. If you ever want to move on, I hand over every login. No layers, no lock-in.
            </p>
          </div>
        </div>

        {/* The journey */}
        <div className="mt-20">
          <h3 className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-[#5a5850]">
            What happens, step by step
          </h3>
          <div className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4" style={{ background: "rgba(255,255,255,0.07)" }}>
            {journey.map((s, i) => (
              <div key={s.title} className="flex flex-col bg-[#222220] p-7">
                <span className="mb-4 font-mono text-xs tracking-widest text-[#c8b89a]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  className="mb-2 text-lg text-[#e0ddd5]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {s.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[#8a8680]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Care plans */}
        <div className="mt-24">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c8b89a]">
            Care plans
          </p>
          <h3
            className="max-w-2xl text-3xl leading-tight sm:text-4xl text-[#e0ddd5]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Pick how hands-on you want me to be.
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#8a8680]">
            Your site works perfectly without a plan &mdash; these are for peace of mind. Most clients choose one
            so updates, security and small changes are simply handled.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <PlanCard key={p.name} p={p} />
            ))}
          </div>

          <p className="mt-6 text-center text-[13px] text-[#5a5850]">
            Billed monthly by Direct Debit &middot; Cancel anytime &middot; Prices exclude VAT
          </p>
        </div>

        {/* Soft CTA */}
        <div className="mt-20 text-center">
          <p
            className="mx-auto mb-5 max-w-md text-[17px] text-[#e0ddd5]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Not sure which you need? Tell me about your site and I&apos;ll point you to the right one.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#c8b89a] px-7 py-3 text-sm font-medium text-[#1a1a1a] hover:bg-[#b0a080] transition-colors duration-200"
          >
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
}
