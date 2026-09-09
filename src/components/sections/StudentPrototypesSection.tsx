import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, Code2, Cpu, LayoutDashboard, Database, Presentation, ArrowRight, CheckCircle2 } from "lucide-react";

const prototypeCapabilities = [
  {
    title: "Prototype Development",
    desc: "Transform rough concepts or architecture diagrams into functional, click-through working software.",
    icon: <Code2 className="h-5 w-5 text-primary" />
  },
  {
    title: "Web & Full-Stack Apps",
    desc: "Modern frontends connected to robust backends with user authentication and database models.",
    icon: <LayoutDashboard className="h-5 w-5 text-primary" />
  },
  {
    title: "AI & Machine Learning Prototypes",
    desc: "Computer vision, NLP pipelines, LLM prompts, and data analytics models packaged into accessible demos.",
    icon: <Cpu className="h-5 w-5 text-primary" />
  },
  {
    title: "Dashboards & Data Systems",
    desc: "Interactive data visualization interfaces, chart telemetry, and structured database queries.",
    icon: <Database className="h-5 w-5 text-primary" />
  },
  {
    title: "Project Demonstrations",
    desc: "Deployable live URLs and clean presentations designed to demonstrate software functionality clearly.",
    icon: <Presentation className="h-5 w-5 text-primary" />
  },
  {
    title: "Technical Implementation Support",
    desc: "Hands-on engineering guidance, code walkthroughs, clear documentation, and setup instructions.",
    icon: <GraduationCap className="h-5 w-5 text-primary" />
  }
];

export function StudentPrototypesSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            <GraduationCap className="h-4 w-4" /> Practical Technical Support
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Student Projects & Prototypes
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Have a project idea that needs to become a working application? We help turn concepts into functional websites, web apps, AI applications, dashboards, and software prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {prototypeCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-gray-200/90 bg-gray-50/40 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-10 w-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center mb-5 text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical Standards & CTA Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50/80 via-white to-sky-50/60 border border-green-200/70 rounded-3xl p-8 md:p-12 text-center shadow-xs">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Development Support for Builders, Researchers & Students
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you are validating an indie project concept, building an academic research demo, or preparing an interactive technical demonstration, we provide clean, readable code and one-on-one architecture walkthroughs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-700 mb-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Clean & readable code
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Setup & execution README
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Code walkthrough session
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Accessible pricing tiers
            </span>
          </div>

          <Link
            href="/contact?type=student-prototype"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8 h-14 text-base font-semibold shadow-md",
            })}
          >
            Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
