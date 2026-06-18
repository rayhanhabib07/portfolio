export default function Hero() {
  return (
    <section
      className="min-h-[85vh] flex items-center pt-16"
      aria-label="Shadhin — Full-Stack Developer"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27272a] bg-[#18181b] mb-8 text-sm text-[#a1a1aa]">
            <span
              className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              aria-hidden="true"
            />
            Available for new projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            I build web apps and dashboards that replace your spreadsheets.
          </h1>

          <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed mb-10 max-w-2xl">
            Full-stack developer based in London. I help businesses move from
            spreadsheets and manual processes to modern, production-ready web
            applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              Book a Discovery Call
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-medium text-sm text-white border border-[#27272a] hover:border-[#3b82f6] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              See My Work
            </a>
          </div>

          <div className="flex flex-wrap gap-3" aria-label="Tech stack">
            {["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs text-[#a1a1aa] border border-[#27272a] bg-[#18181b]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
