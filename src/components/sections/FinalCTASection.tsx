import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageSquare, Shield, Clock } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-white/10 mb-8">
          <MessageSquare className="h-3.5 w-3.5" /> Start With a Free Discovery Conversation
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
          Have an idea? <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-white bg-clip-text text-transparent">
            Let&apos;s build it.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell us what you&apos;re trying to build, even if you don&apos;t know the exact technology yet. We&apos;ll review the requirements and help define the best approach.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-9 h-14 text-base font-semibold bg-primary hover:bg-emerald-600 text-white shadow-xl shadow-primary/25 w-full sm:w-auto",
            })}
          >
            Start a Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/pricing"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "rounded-full px-8 h-14 text-base font-semibold border-gray-700 bg-gray-800/80 hover:bg-gray-800 text-gray-200 hover:text-white w-full sm:w-auto",
            })}
          >
            Get a Project Estimate
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-emerald-400" /> Fast response time
          </span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-emerald-400" /> Mutual NDA available
          </span>
          <span className="text-gray-700">•</span>
          <span>No commitment required</span>
        </div>
      </div>
    </section>
  );
}
