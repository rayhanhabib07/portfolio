"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Non-OK response");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3b82f6] mb-3 tracking-widest uppercase">
          05 / Contact
        </p>
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Get in Touch
        </h2>
        <p className="text-[#a1a1aa] text-base sm:text-lg mb-12 max-w-xl">
          Have a project in mind or want to collaborate? Send me a message and
          I&apos;ll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#ededed] mb-1.5"
                  >
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#111111] text-[#ededed] placeholder-[#52525b] text-sm focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-colors duration-200"
                    placeholder="Your name"
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#ededed] mb-1.5"
                  >
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#111111] text-[#ededed] placeholder-[#52525b] text-sm focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-colors duration-200"
                    placeholder="your@email.com"
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#ededed] mb-1.5"
                  >
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#27272a] bg-[#111111] text-[#ededed] placeholder-[#52525b] text-sm focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  }}
                  aria-live="polite"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2 justify-center">
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Feedback messages */}
                {status === "success" && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-950/40 border border-green-800 rounded-xl px-4 py-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Thanks! I&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    aria-live="assertive"
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-950/40 border border-red-800 rounded-xl px-4 py-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Direct contact links */}
          <div className="flex flex-col justify-start gap-6">
            <h3 className="text-lg font-semibold text-white">
              Or reach me directly
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:rayhanhabib07@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#27272a] bg-[#111111] hover:border-[#3b82f6]/40 hover:bg-[#1a1a1a] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3b82f6] shrink-0" style={{ background: "rgba(59,130,246,0.1)" }} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#71717a] font-mono uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-[#ededed] group-hover:text-[#3b82f6] transition-colors duration-200">
                    rayhanhabib07@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rayhanhabib07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#27272a] bg-[#111111] hover:border-[#3b82f6]/40 hover:bg-[#1a1a1a] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3b82f6] shrink-0" style={{ background: "rgba(59,130,246,0.1)" }} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#71717a] font-mono uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <p className="text-sm text-[#ededed] group-hover:text-[#3b82f6] transition-colors duration-200">
                    linkedin.com/in/rayhanhabib07
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rayhanhabib07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#27272a] bg-[#111111] hover:border-[#3b82f6]/40 hover:bg-[#1a1a1a] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
                aria-label="GitHub profile (opens in new tab)"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3b82f6] shrink-0" style={{ background: "rgba(59,130,246,0.1)" }} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#71717a] font-mono uppercase tracking-wider mb-0.5">GitHub</p>
                  <p className="text-sm text-[#ededed] group-hover:text-[#3b82f6] transition-colors duration-200">
                    github.com/rayhanhabib07
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
