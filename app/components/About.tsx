export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-mono text-[#3b82f6] mb-3 tracking-widest uppercase">
              01 / About
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              About Me
            </h2>
            <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
              I&apos;m a Computer Science undergraduate at London South Bank
              University and CEO of Craftly, a startup building an AI platform
              that lets non-technical users create and publish apps from
              plain-language prompts. I combine a technical foundation in
              Python, Java, C++, JavaScript, TypeScript, and SQL with proven
              leadership, communication, and multilingual skills across English,
              Bengali, and Hindi. I&apos;ve been recognised three times as
              Employee of the Month for reliability and performance.
            </p>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                ),
                label: "Education",
                value: "CS @ London South Bank University",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                ),
                label: "Role",
                value: "CEO, Craftly",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Location",
                value: "London SW8, UK",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Status",
                value: "Open to opportunities",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl border border-[#27272a] bg-[#111111] hover:border-[#3b82f6]/50 transition-colors duration-300"
              >
                <div className="text-[#3b82f6] mb-2">{item.icon}</div>
                <p className="text-xs text-[#71717a] mb-1 font-mono uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm text-[#ededed] font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
