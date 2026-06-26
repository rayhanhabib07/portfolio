type Testimonial = { quote: string; author: string; role: string; rating: 1 | 2 | 3 | 4 | 5 };

const testimonials: Testimonial[] = [];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-[#c8b89a]" : "text-[#333330]"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 rounded-xl border border-[#333330] bg-[#222220] text-left flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < testimonial.rating} />)}
      </div>
      <blockquote className="text-sm text-[#8a8680] leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p className="text-sm font-medium text-[#e0ddd5]">{testimonial.author}</p>
        <p className="text-xs text-[#5a5850]">{testimonial.role}</p>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div className="p-6 rounded-xl border border-dashed border-[#333330] bg-[#222220]/50 flex flex-col items-center justify-center min-h-[200px]">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, j) => <StarIcon key={j} filled={false} />)}
      </div>
      <p className="text-sm text-[#5a5850] italic mb-3">&ldquo;Review pending&rdquo;</p>
      <div className="w-8 h-[1px] bg-[#333330]" aria-hidden="true" />
    </div>
  );
}

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;
  const placeholderCount = Math.max(0, 3 - testimonials.length);

  return (
    <section className="py-24 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a8680] mb-3">Testimonials</p>
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-normal text-[#e0ddd5] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          What Clients Say
        </h2>
        <p className="text-[#8a8680] text-base mb-14 max-w-xl mx-auto">
          {hasTestimonials ? "Real feedback from real engagements." : "Every completed project becomes a testimonial here. Real feedback from real engagements — coming soon."}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => <TestimonialCard key={t.author} testimonial={t} />)}
          {placeholderCount > 0 && [...Array(placeholderCount)].map((_, i) => <PlaceholderCard key={`p-${i}`} />)}
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 mt-12 text-sm text-[#c8b89a] hover:text-[#e0ddd5] transition-colors duration-200">
          Be my next success story →
        </a>
      </div>
    </section>
  );
}
