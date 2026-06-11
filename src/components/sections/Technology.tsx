import { Card } from "@/components/ui/card";

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "Gemini API",
  "LangChain",
  "FAISS"
];

export function Technology() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Technologies We Use</h2>
          <p className="text-lg text-gray-500">
            We build on a modern, robust stack favored by the world's fastest-growing startups.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <div 
              key={tech} 
              className="px-6 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-800 font-medium shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
