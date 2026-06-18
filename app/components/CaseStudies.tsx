type CaseStudy = {
  number: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  build: string;
  result: string;
  stack: string[];
  links: { label: string; href: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    name: "FruitBD",
    tagline: "Full-stack e-commerce platform with admin dashboard",
    problem:
      "An online fruit and grocery retailer was processing orders through WhatsApp messages and tracking inventory in a shared spreadsheet. Orders were routinely lost or duplicated, stock levels were unreliable, and the owner had zero visibility into revenue patterns. They needed a proper e-commerce system with admin control, secure payments, and real-time inventory — but couldn’t justify enterprise pricing.",
    approach:
      "I scoped the build in three phases: storefront first, so customers could place structured orders from day one; admin dashboard second, giving the owner full operational control without touching code; and payment integration last. Each phase shipped as a working increment — the business didn’t have to wait for everything to be built before getting value.",
    build:
      "The frontend is a React application with TypeScript and Tailwind CSS — component-driven, fully responsive, and optimised for the product browsing and checkout flow. The backend runs Node.js with Express and TypeScript, backed by PostgreSQL for relational data across products, orders, customers, and inventory. Key engineering decisions: JWT-based authentication with role separation (customer vs. admin), a normalised inventory schema that adjusts stock levels on every order event, and a clean API layer separating business logic from route handling.",
    result:
      "A complete, deployable commerce system with customer-facing storefront, admin dashboard, authentication, and payment processing. The admin panel handles product management, order fulfilment, and inventory tracking in real time — replacing what previously required three spreadsheets and constant manual coordination.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    links: [
      { label: "View Source", href: "https://github.com/rayhanhabib07/Fruit-BD" },
    ],
  },
  {
    number: "02",
    name: "DevPulse",
    tagline: "REST API with authentication and role-based authorisation",
    problem:
      "A development team’s operational data — developer profiles, project assignments, skill sets, availability — was scattered across spreadsheets, Notion pages, and Slack threads. There was no single source of truth, no programmatic access for internal tooling, and no access control beyond “whoever has the link can edit.”",
    approach:
      "API-first architecture: build a standalone backend service with proper authentication and documentation that any frontend or internal tool could consume. Security was non-negotiable — every endpoint needed JWT authentication and role-based access control. I chose raw SQL over an ORM for full control over query performance and schema design.",
    build:
      "Express with TypeScript, backed by PostgreSQL using raw SQL queries. The architecture centres on three patterns: stateless JWT authentication with refresh token rotation, a role-based middleware layer that enforces permissions declaratively at the route level, and structured error handling with consistent response shapes regardless of failure type. The schema uses normalisation with foreign key constraints and indexes on frequently queried columns.",
    result:
      "A production-ready REST API with complete authentication, granular role-based authorisation, and clean endpoint structure. The codebase demonstrates backend engineering depth — thoughtful data modelling, security architecture, and API design without relying on framework abstractions.",
    stack: ["Express", "TypeScript", "PostgreSQL", "JWT", "REST API"],
    links: [
      { label: "View Source", href: "https://github.com/rayhanhabib07/DevPulse" },
    ],
  },
  {
    number: "03",
    name: "Agency Starter",
    tagline: "Production-ready agency landing page with contact form pipeline",
    problem:
      "Freelancers and small agencies need a professional web presence fast, but most templates ship with broken contact forms or none at all. The result is either a static page with a mailto link (which kills conversions) or weeks spent wiring up form handling, email notifications, and database storage from scratch.",
    approach:
      "Build an opinionated starter that works end-to-end out of the box: landing page, contact form with server-side validation, database storage, and email notifications. Every integration degrades gracefully — if a credential isn’t configured yet, that step is skipped instead of crashing. This lets developers ship immediately and wire up services incrementally.",
    build:
      "Next.js App Router with TypeScript and Tailwind CSS for the frontend. The contact form submits to a serverless API route that validates input with Zod, stores submissions in a Supabase Postgres table (with Row Level Security, no public access), and sends email notifications via Resend. Rate limiting (5 per IP per 10 minutes) is built in. The database migration lives in the repo and the schema enforces server-only access through RLS with zero policies.",
    result:
      "A deployable, production-grade agency starter used as the foundation for client projects. Live on Vercel with automatic CI/CD from GitHub. The contact pipeline handles validation, storage, and notifications — a complete backend in a single API route that just works.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://agency-starter-app.vercel.app" },
      { label: "View Source", href: "https://github.com/rayhanhabib07/agency-starter" },
    ],
  },
];

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
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
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function SectionBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-[#3b82f6] uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="py-24 px-6"
      aria-labelledby="work-heading"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[#3b82f6] mb-3 tracking-wide">
          Case Studies
        </p>
        <h2
          id="work-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Featured Work
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-16 max-w-2xl">
          Each project is written as a story — the problem, the approach, the
          engineering, and the outcome.
        </p>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 sm:p-10"
            >
              <div className="flex items-start gap-4 mb-8">
                <span className="text-sm font-mono text-[#3b82f6] mt-1">
                  {study.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {study.name}
                  </h3>
                  <p className="text-[#a1a1aa] mt-1">{study.tagline}</p>
                </div>
              </div>

              <div className="grid gap-8 sm:gap-10">
                <SectionBlock label="The Problem">{study.problem}</SectionBlock>
                <SectionBlock label="The Approach">
                  {study.approach}
                </SectionBlock>

                <div>
                  <p className="text-xs font-medium text-[#3b82f6] uppercase tracking-widest mb-3">
                    The Build
                  </p>
                  <div
                    className="flex flex-wrap gap-2 mb-4"
                    aria-label="Tech stack"
                  >
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-[#a1a1aa] border border-[#27272a] bg-[#09090b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
                    {study.build}
                  </p>
                </div>

                <SectionBlock label="The Result">{study.result}</SectionBlock>
              </div>

              <div className="flex gap-4 mt-10 pt-6 border-t border-[#27272a]">
                {study.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:text-[#2563eb] transition-colors duration-200"
                    aria-label={`${link.label} for ${study.name} (opens in new tab)`}
                  >
                    {link.label === "View Source" ? (
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
