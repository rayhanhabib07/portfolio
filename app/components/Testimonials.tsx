export default function Testimonials() {
  return (
    <section
      className="py-24 px-6"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-medium text-[#3b82f6] mb-3 tracking-wide">
          Testimonials
        </p>
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          What Clients Say
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-14 max-w-xl mx-auto">
          Every completed project becomes a testimonial here. Real feedback from
          real engagements — coming soon.
        </p>

        {/* Placeholder cards — replace with real testimonials as they come in.
            Each card should have: quote, author name, role/company, optional avatar.
            Example:
            { quote: "Shadhin delivered our dashboard ahead of schedule...",
              author: "Jane Smith", role: "CEO, Acme Corp" } */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-dashed border-[#27272a] bg-[#18181b]/40 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#27272a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#3f3f46] italic mb-3">
                &ldquo;Review pending&rdquo;
              </p>
              <div className="w-8 h-[1px] bg-[#27272a]" aria-hidden="true" />
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-[#3b82f6] hover:text-[#2563eb] transition-colors duration-200"
        >
          Be my next success story
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
      </div>
    </section>
  );
}
