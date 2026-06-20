type Post = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tag: string;
};

const posts: Post[] = [];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Blog() {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6" aria-labelledby="blog-heading">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-[#4A90E2] mb-3 tracking-wide">Blog</p>
        <h2 id="blog-heading" className="text-3xl sm:text-4xl font-bold text-[#1B2631] mb-4">
          Writing
        </h2>
        <p className="text-[#6B7280] text-lg mb-14 max-w-2xl">
          Thoughts on full-stack development, engineering decisions, and
          building for the web.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] hover:border-[#4A90E2]/40 transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-medium text-[#4A90E2] bg-[#4A90E2]/10">
                    {post.tag}
                  </span>
                  <time dateTime={post.date} className="text-xs text-[#9CA3AF]">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h3 className="text-lg font-semibold text-[#1B2631] group-hover:text-[#4A90E2] transition-colors duration-200 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{post.excerpt}</p>
              </div>
              <svg
                className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#4A90E2] transition-colors duration-200 shrink-0 hidden sm:block"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
