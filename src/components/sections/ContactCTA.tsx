import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Ready to build something serious?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Let's discuss your project requirements, technical architecture, and how we can accelerate your time to market.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "rounded-full px-8 h-14 text-base text-primary bg-white hover:bg-gray-100" })}>
          Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
