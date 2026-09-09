import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-sky-500/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-1.5 text-xs md:text-sm font-medium text-gray-700 shadow-xs backdrop-blur-md mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span>Founder-Led Custom Software & Web Studio</span>
          <span className="text-gray-300">•</span>
          <span className="text-primary font-semibold">Taking New Projects</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          Build Your Idea. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-gray-900 via-primary to-emerald-600 bg-clip-text text-transparent">
            Launch Your Project.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
          We design and build websites, web apps, AI solutions, automation systems, and custom software for startups, businesses, creators, and project owners.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all",
            })}
          >
            Start a Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="#selected-work"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900",
            })}
          >
            View Our Work
          </Link>
        </div>

        {/* Subtle Trust Line */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-gray-500 bg-gray-50/80 border border-gray-200/80 rounded-full px-5 py-2">
          <span>Founder-led development</span>
          <span className="text-gray-300">•</span>
          <span>Custom-built</span>
          <span className="text-gray-300">•</span>
          <span>US/Canada focused</span>
          <span className="text-gray-300">•</span>
          <span>Worldwide delivery</span>
        </div>
      </div>
    </section>
  );
}
