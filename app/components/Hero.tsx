"use client";

import { useEffect, useState } from "react";

const HEADLINE = "I build web apps and dashboards that replace your spreadsheets.";
const TYPE_MS = 45;

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(HEADLINE);
      setDone(true);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, TYPE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="min-h-[85vh] flex items-center pt-16"
      aria-label="Shadhin — Full-Stack Developer"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8680] mb-8">
            A Field Guide to Shadhin · Full-Stack Developer
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#e0ddd5] leading-[1.12] tracking-tight mb-8 relative"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            aria-label={HEADLINE}
          >
            <span className="invisible" aria-hidden="true">{HEADLINE}</span>
            <span className="absolute inset-0" aria-hidden="true">
              {typed}
              {!done && (
                <span
                  className="inline-block w-[2px] h-[0.8em] bg-[#c8b89a] align-baseline ml-[2px]"
                  style={{ animation: "blink 0.53s step-end infinite" }}
                />
              )}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#8a8680] leading-relaxed mb-12 max-w-2xl">
            Full-stack developer based in London. I help businesses move from
            spreadsheets and manual processes to modern, production-ready web
            applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-medium text-sm bg-[#e0ddd5] text-[#1a1a1a] hover:bg-[#c8b89a] transition-colors duration-200"
            >
              Book a Discovery Call
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded font-medium text-sm text-[#e0ddd5] border border-[#333330] hover:border-[#8a8680] transition-colors duration-200"
            >
              See My Work
            </a>
          </div>

          <div className="flex flex-wrap gap-3" aria-label="Tech stack">
            {["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Python"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded text-xs text-[#8a8680] border border-[#333330]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </section>
  );
}
