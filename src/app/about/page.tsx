import { companyInfo } from "@/content/company";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code2, BrainCircuit, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story and vision behind Aetherion Labs.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Engineering the Future of <span className="text-primary">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              We are a specialized engineering studio dedicated to helping ambitious startups and creators leverage artificial intelligence and modern web technologies to scale faster.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image 
                src={companyInfo.founder.photo} 
                alt={companyInfo.founder.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Founder-Led Engineering</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Hi, I'm {companyInfo.founder.name}. I started {companyInfo.name} because I saw a gap in the agency market. Too many agencies focus solely on surface-level design or generic WordPress templates, ignoring the immense potential of deeply integrated software.
              </p>
              <p>
                My background is rooted in full-stack engineering, complex automation, and building AI-native applications. I wanted to create a studio that brings Silicon Valley-level engineering standards to startups and creators anywhere in the world.
              </p>
              <p>
                When you work with Aetherion Labs, you're not getting passed off to a junior developer. You're working directly with the architect building your systems, ensuring your vision is executed precisely and efficiently.
              </p>
            </div>
            <div className="pt-6">
              <div className="flex items-center gap-4 text-gray-900 font-bold mb-2">
                {companyInfo.founder.name}
              </div>
              <div className="text-gray-500 text-sm">Founder & Lead Engineer</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-left">
            <div>
              <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-primary border border-gray-700">
                <BrainCircuit />
              </div>
              <h3 className="text-xl font-bold mb-4">AI as a Foundation</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe AI should not be an afterthought. We build systems where intelligence is natively integrated into the core architecture to provide maximum leverage.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-primary border border-gray-700">
                <Code2 />
              </div>
              <h3 className="text-xl font-bold mb-4">Uncompromising Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                We use strictly modern, type-safe technologies (Next.js, TypeScript). This ensures the software we hand over is maintainable, scalable, and secure.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 text-primary border border-gray-700">
                <Rocket />
              </div>
              <h3 className="text-xl font-bold mb-4">Speed to Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                We understand that in startups, speed is a feature. Our modular approach allows us to deploy highly complex applications in weeks, not months.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to see what we can build together?</h2>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 h-14" })}>
            Let's Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
