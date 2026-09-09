const techCategories = [
  {
    category: "Frontend & Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Python", "REST & GraphQL", "FastAPI"]
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "Supabase", "Redis", "Vector Databases"]
  },
  {
    category: "AI & Machine Learning",
    items: ["OpenAI API", "Google Gemini", "LangChain", "OpenCV"]
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "AWS", "Cloudflare", "Docker"]
  }
];

export function Technology() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            Engineering Toolchain
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Modern, Battle-Tested Technologies
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We build with stable, industry-standard tools chosen for speed, security, and developer maintainability — ensuring you own software that lasts.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs"
                  >
                    {tech}
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
