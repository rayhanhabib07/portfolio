"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section id="contact" className="py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[#4A90E2] mb-3 tracking-wide">Contact</p>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-[#1B2631] mb-4">
          Let&apos;s Talk
        </h2>
        <p className="text-[#6B7280] text-lg mb-14 max-w-xl">
          Have a project in mind? Send me a message or book a call — I&apos;ll
          get back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[#1B2631] mb-1.5">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#1B2631] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-colors duration-200"
                  placeholder="Your name"
                  aria-required="true"
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[#1B2631] mb-1.5">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#1B2631] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-colors duration-200"
                  placeholder="your@email.com"
                  aria-required="true"
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#1B2631] mb-1.5">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#1B2631] placeholder-[#9CA3AF] text-sm focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  aria-required="true"
                  disabled={status === "loading"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 px-6 rounded-lg font-medium text-sm text-white bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed"
                aria-live="polite"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending&hellip;
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <p role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Thanks! I&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p role="alert" aria-live="assertive" className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-8">
            <div className="rounded-lg border border-dashed border-[#E5E7EB] bg-[#F9FAFB]/50 p-8 flex flex-col items-center justify-center min-h-[200px]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#9CA3AF] mb-3" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <p className="text-sm font-medium text-[#9CA3AF] mb-1">Schedule a call</p>
              <p className="text-xs text-[#D1D5DB]">Cal.com or Calendly embed goes here</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#1B2631] mb-3">Or reach me directly</h3>

              <a
                href="mailto:rayhanhabib07@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#4A90E2]/40 transition-colors duration-200 group"
              >
                <span className="w-9 h-9 rounded-lg flex items-center justify-center text-[#4A90E2] bg-[#4A90E2]/10 shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm text-[#1B2631] group-hover:text-[#4A90E2] transition-colors duration-200">
                    rayhanhabib07@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rayhanhabib07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#4A90E2]/40 transition-colors duration-200 group"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <span className="w-9 h-9 rounded-lg flex items-center justify-center text-[#4A90E2] bg-[#4A90E2]/10 shrink-0" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-0.5">LinkedIn</p>
                  <p className="text-sm text-[#1B2631] group-hover:text-[#4A90E2] transition-colors duration-200">
                    linkedin.com/in/rayhanhabib07
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
