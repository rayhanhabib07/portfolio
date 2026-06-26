type Service = {
  icon: React.ReactNode;
  name: string;
  description: string;
  useCases: string[];
};

const services: Service[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    name: "Full-Stack Web Application",
    description: "Custom web applications built end-to-end — from database schema to polished UI. React frontend, Node.js backend, PostgreSQL database, deployed and production-ready.",
    useCases: ["SaaS products", "Customer portals", "Internal tools"],
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>,
    name: "Admin Dashboard",
    description: "Data-rich dashboards that give you control over your business operations. Real-time data, role-based access, analytics, and an interface your team will actually use.",
    useCases: ["Order management", "Inventory tracking", "User administration"],
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="M9 15l3-3 3 3" /></svg>,
    name: "Excel → Web App Migration",
    description: "Replace spreadsheets, Access databases, and manual processes with modern, multi-user web applications. Same data, better interface, proper access control.",
    useCases: ["Spreadsheet conversions", "Data centralisation", "Process automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a8680] mb-3">Services</p>
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-normal text-[#e0ddd5] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          What I Build
        </h2>
        <p className="text-[#8a8680] text-base mb-14 max-w-2xl">
          Three productised offerings. Clear scope, direct communication, and a
          focus on shipping something that solves your problem.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col p-6 sm:p-8 rounded-xl border border-[#333330] bg-[#222220] hover:border-[#8a8680]/40 transition-colors duration-300">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[#c8b89a] bg-[#c8b89a]/10 mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-[#e0ddd5] mb-3">{service.name}</h3>
              <p className="text-sm text-[#8a8680] leading-relaxed mb-6 flex-1">{service.description}</p>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#5a5850] mb-2">Use cases</p>
                <ul className="space-y-1">
                  {service.useCases.map((uc) => (
                    <li key={uc} className="text-sm text-[#8a8680] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#c8b89a] shrink-0" aria-hidden="true" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-[#c8b89a] hover:text-[#e0ddd5] transition-colors duration-200 mt-6">
                Get a quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
