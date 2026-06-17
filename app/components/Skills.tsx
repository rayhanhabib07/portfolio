const skillGroups = [
  {
    category: "Technical",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "Graphic Design",
    ],
  },
  {
    category: "Languages",
    skills: [
      "English (Fluent)",
      "Bengali (Native)",
      "Hindi (Fluent)",
      "Arabic (Reading)",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0d0d0d]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3b82f6] mb-3 tracking-widest uppercase">
          02 / Skills
        </p>
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-mono text-[#71717a] uppercase tracking-widest mb-4 border-b border-[#27272a] pb-2">
                {group.category}
              </h3>
              <div
                className="flex flex-wrap gap-3"
                role="list"
                aria-label={`${group.category} skills`}
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="px-4 py-2 rounded-full text-sm font-medium text-[#ededed] border border-[#27272a] bg-[#111111] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
