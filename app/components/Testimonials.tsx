type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const testimonials: Testimonial[] = [];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-amber-400" : "text-[#E5E7EB]"}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-left flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>
      <blockquote className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p className="text-sm font-medium text-[#1B2631]">{testimonial.author}</p>
        <p className="text-xs text-[#9CA3AF]">{testimonial.role}</p>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div className="p-6 rounded-xl border border-dashed border-[#E5E7EB] bg-[#F9FAFB]/50 flex flex-col items-center justify-center min-h-[200px]">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, j) => (
          <StarIcon key={j} filled={false} />
        ))}
      </div>
      <p className="text-sm text-[#9CA3AF] italic mb-3">&ldquo;Review pending&rdquo;</p>
      <div className="w-8 h-[1px] bg-[#E5E7EB]" aria-hidden="true" />
    </div>
  );
}

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;
  const placeholderCount = Math.max(0, 3 - testimonials.length);

  return (
    <section className="py-24 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-medium text-[#4A90E2] mb-3 tracking-wide">Testimonials</p>
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-[#1B2631] mb-4">
          What Clients Say
        </h2>
        <p className="text-[#6B7280] text-lg mb-14 max-w-xl mx-auto">
          {hasTestimonials
            ? "Real feedback from real engagements."
            : "Every completed project becomes a testimonial here. Real feedback from real engagements — coming soon."}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} testimonial={t} />
          ))}
          {placeholderCount > 0 &&
            [...Array(placeholderCount)].map((_, i) => (
              <PlaceholderCard key={`placeholder-${i}`} />
            ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-[#4A90E2] hover:text-[#357ABD] transition-colors duration-200"
        >
          Be my next success story
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
