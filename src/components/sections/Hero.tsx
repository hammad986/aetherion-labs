import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { companyInfo } from "@/content/company";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/50 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Aetherion Labs is now taking new clients for Q3
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Build Faster with <span className="text-primary">AI-Powered</span> Web Apps & Automation
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
          {companyInfo.name} helps startups and creators launch custom AI tools, automation systems, and modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 h-14 text-base w-full sm:w-auto" })}>Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
          <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 h-14 text-base w-full sm:w-auto border-gray-200" })}>View Projects <ChevronRight className="ml-1 h-5 w-5 text-gray-400" /></Link>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col items-center">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">Engineered with Modern Technologies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
             <span className="text-xl font-bold font-mono text-gray-800">Next.js</span>
             <span className="text-xl font-bold font-mono text-gray-800">React</span>
             <span className="text-xl font-bold font-mono text-gray-800">TypeScript</span>
             <span className="text-xl font-bold font-mono text-gray-800">Tailwind</span>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-white to-white"></div>
    </section>
  );
}
