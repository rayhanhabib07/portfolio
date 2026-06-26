type Post = { title: string; excerpt: string; date: string; slug: string; tag: string };

const posts: Post[] = [];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function Blog() {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6" aria-labelledby="blog-heading">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a8680] mb-3">Blog</p>
        <h2
          id="blog-heading"
          className="text-3xl sm:text-4xl font-normal text-[#e0ddd5] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Writing
        </h2>
        <p className="text-[#8a8680] text-base mb-14 max-w-2xl">
          Thoughts on full-stack development, engineering decisions, and building for the web.
        </p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-[#333330] bg-[#222220] hover:border-[#8a8680]/40 transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs text-[#c8b89a] bg-[#c8b89a]/10">{post.tag}</span>
                  <time dateTime={post.date} className="text-xs text-[#5a5850]">{formatDate(post.date)}</time>
                </div>
                <h3 className="text-lg font-medium text-[#e0ddd5] group-hover:text-[#c8b89a] transition-colors duration-200 mb-1">{post.title}</h3>
                <p className="text-sm text-[#8a8680] leading-relaxed">{post.excerpt}</p>
              </div>
              <svg className="w-5 h-5 text-[#5a5850] group-hover:text-[#c8b89a] transition-colors shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
