type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: "Craftly Robot",
    description:
      "AI platform that lets non-technical users build and publish their own apps through plain-language prompts — no coding required. 200+ active users with an in-app bug reporting system feeding a CI/CD pipeline.",
    tags: ["AI", "Product", "Startup"],
    links: [{ label: "Live Site", href: "https://hello.craftlyrobot.com" }],
  },
  {
    name: "DevPulse — REST API",
    description:
      "REST API built with Express and TypeScript backed by PostgreSQL (raw SQL), implementing JWT authentication and role-based authorisation.",
    tags: ["TypeScript", "Express", "PostgreSQL", "JWT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rayhanhabib07/DevPulse",
      },
    ],
  },
  {
    name: "Fruit-BD — TypeScript App",
    description:
      "Full-stack TypeScript web application built as part of ongoing full-stack development practice.",
    tags: ["TypeScript", "Full-Stack"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rayhanhabib07/Fruit-BD",
      },
    ],
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3b82f6] mb-3 tracking-widest uppercase">
          03 / Projects
        </p>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-[#27272a] bg-[#111111] p-6 hover:border-[#3b82f6]/40 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              {/* Card top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3b82f6]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 100%)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3b82f6] transition-colors duration-200">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-[#a1a1aa] border border-[#27272a] bg-[#0a0a0a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3b82f6] hover:text-[#8b5cf6] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                    aria-label={`${link.label} for ${project.name} (opens in new tab)`}
                  >
                    {link.label === "GitHub" ? (
                      <GitHubIcon />
                    ) : (
                      <ExternalLinkIcon />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
