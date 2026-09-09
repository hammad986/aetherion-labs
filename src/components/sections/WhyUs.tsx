import { 
  Users, 
  Code2, 
  Layers, 
  Split, 
  FileCheck2, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  LifeBuoy 
} from "lucide-react";

const whyUsPoints = [
  {
    title: "Direct Founder Communication",
    description: "You work and communicate directly with the software engineer architecting your system — no junior pass-offs or account managers playing telephone.",
    icon: <Users className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "100% Custom Development",
    description: "Every solution is built specifically around your business requirements, data structures, and workflows. No rigid, cookie-cutter templates.",
    icon: <Code2 className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Modern Engineering Standards",
    description: "We build on battle-tested, type-safe foundations like Next.js, React, TypeScript, Python, and PostgreSQL for long-term scalability and security.",
    icon: <Layers className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "No Unnecessary Layers",
    description: "By eliminating corporate agency overhead, we keep development agile, decisions fast, communication transparent, and costs focused entirely on high-quality code.",
    icon: <Split className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Clear, Defined Project Scope",
    description: "Before writing any code, we agree on clear deliverables, technical specifications, and milestones so there are never hidden surprises.",
    icon: <FileCheck2 className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Practical, High-ROI Solutions",
    description: "We don't chase tech fads or over-engineer simple problems. We build pragmatic software that drives genuine business efficiency and revenue.",
    icon: <Wrench className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Fast Iteration Cycles",
    description: "Staging deployments and rapid build cadences let you review live, working features early and frequently throughout the development cycle.",
    icon: <Zap className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Mutual NDA Available",
    description: "Your intellectual property, proprietary business data, and project concepts are strictly protected from day one upon request.",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />
  },
  {
    title: "Post-Delivery Support & Handoff",
    description: "Comprehensive code documentation, walkthrough tutorials, and available maintenance retainers ensure your software thrives post-launch.",
    icon: <LifeBuoy className="h-5 w-5 text-emerald-400" />
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-gray-900 to-gray-900 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-white/10 mb-4">
            The Studio Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Why Work With Aetherion Labs
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are an engineering-first studio designed for modern founders, small business owners, and creators who need dependable software without traditional agency friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-800/70 border border-gray-700/80 hover:border-emerald-500/50 hover:bg-gray-800 transition-all duration-300 flex flex-col"
            >
              <div className="h-10 w-10 rounded-xl bg-gray-700/80 border border-gray-600 flex items-center justify-center mb-5 flex-shrink-0">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
