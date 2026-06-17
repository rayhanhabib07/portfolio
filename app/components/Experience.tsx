type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const experiences: ExperienceEntry[] = [
  {
    title: "Chief Executive Officer",
    company: "Craftly",
    period: "May 2025 – Present",
    location: "Remote",
    bullets: [
      "Lead product strategy and direction across a multi-product roadmap",
      "Launched workspace application with 200+ active users",
      "Championing decentralised node architecture to reduce infrastructure costs",
      "Represented Craftly in Bangladesh's national startup and innovation programme",
    ],
  },
  {
    title: "Student Consultant & IELTS Instructor",
    company: "Brave Education",
    period: "Nov 2023 – Nov 2024",
    location: "Bangladesh",
    bullets: [
      "Taught IELTS preparation and advised students on UK study routes",
      "Named Employee of the Month three times",
      "Guided students on speaking and writing performance",
    ],
  },
  {
    title: "Language Instructor",
    company: "R.M Computer Institute & English Language Centre",
    period: "Mar 2022 – Aug 2023",
    location: "Bangladesh",
    bullets: [
      "Designed and delivered IELTS and spoken-English courses",
      "Helped students achieve band scores for university admission",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#0d0d0d]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3b82f6] mb-3 tracking-widest uppercase">
          04 / Experience
        </p>
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Experience
        </h2>

        {/* Timeline */}
        <ol className="relative" aria-label="Work experience timeline">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-[#27272a]"
            aria-hidden="true"
          />

          {experiences.map((entry, index) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className={`relative pl-12 ${
                index < experiences.length - 1 ? "pb-12" : ""
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-[#3b82f6] bg-[#0d0d0d] flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-[#27272a] bg-[#111111] p-6 hover:border-[#3b82f6]/40 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="text-[#3b82f6] font-medium text-sm mt-0.5">
                      {entry.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#71717a] font-mono">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {entry.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#71717a] font-mono">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {entry.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2" aria-label="Responsibilities and achievements">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#a1a1aa]"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
