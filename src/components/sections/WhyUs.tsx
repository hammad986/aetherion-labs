import { BrainCircuit, Layers, Zap, Users } from "lucide-react";

const reasons = [
  {
    title: "AI-First Development",
    description: "We don't just bolt on APIs. We architect systems around intelligent workflows, making AI a core competency of your product.",
    icon: <BrainCircuit className="h-6 w-6 text-white" />
  },
  {
    title: "Modern Tech Stack",
    description: "Built strictly on Next.js, TypeScript, and modern scalable infrastructure ensuring your application is performant and future-proof.",
    icon: <Layers className="h-6 w-6 text-white" />
  },
  {
    title: "Fast Execution",
    description: "Startup-speed delivery. We utilize proven modular architectures to dramatically cut development time without sacrificing quality.",
    icon: <Zap className="h-6 w-6 text-white" />
  },
  {
    title: "Direct Founder Communication",
    description: "No account managers playing telephone. You communicate directly with the engineering lead building your product.",
    icon: <Users className="h-6 w-6 text-white" />
  }
];

export function WhyUs() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-gray-900 to-gray-900 opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Aetherion Labs</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We operate differently than traditional agencies. We bring a product-centric, engineering-first approach designed for the speed of modern startups.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 shadow-inner">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
