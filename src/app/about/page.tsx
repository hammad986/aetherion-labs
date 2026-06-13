import { companyInfo } from "@/content/company";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code2, BrainCircuit, Rocket } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema, HowToSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aetherion Labs, our mission to build AI-powered software, our engineering philosophy, and the founder behind the code.",
  alternates: {
    canonical: "https://aetherionlabs.qzz.io/about",
  },
  openGraph: {
    title: "About Us | Aetherion Labs",
    description: "Learn about Aetherion Labs, our mission to build AI-powered software, our engineering philosophy, and the founder behind the code.",
    url: "https://aetherionlabs.qzz.io/about",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Aetherion Labs",
    description: "Learn about Aetherion Labs, our mission to build AI-powered software, our engineering philosophy, and the founder behind the code.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://aetherionlabs.qzz.io/" },
  { name: "About Us", url: "https://aetherionlabs.qzz.io/about" },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <BreadcrumbListSchema items={breadcrumbs} />
      <HowToSchema />

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
        {/* Founder Section */}
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
                Hi, I am {companyInfo.founder.name}. I started {companyInfo.name} because I saw a gap in the agency market. Too many agencies focus solely on surface-level design or generic WordPress templates, ignoring the immense potential of deeply integrated software.
              </p>
              <p>
                My background is rooted in full-stack engineering, complex automation, and building AI-native applications. I wanted to create a studio that brings Silicon Valley-level engineering standards to startups and creators anywhere in the world.
              </p>
              <p>
                When you work with Aetherion Labs, you are not getting passed off to a junior developer. You are working directly with the architect building your systems, ensuring your vision is executed precisely and efficiently.
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

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-gray-50 rounded-3xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower startups and creators with enterprise-grade AI software that was previously only accessible to large corporations. We believe that intelligent automation should not be a luxury — it should be the foundation every ambitious product is built on.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every startup has access to the same caliber of AI engineering as Fortune 500 companies. We are building towards a future where intelligent systems handle the complex operational heavy lifting, freeing founders to focus on what matters most — their customers and their vision.
            </p>
          </div>
        </div>

        {/* AI & Automation Expertise */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-primary border border-green-100">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in building AI-native applications powered by large language models, computer vision, and custom machine learning pipelines. From RAG-based document intelligence to autonomous AI agents, we architect systems that think, reason, and adapt. Our expertise spans OpenAI GPT-4, Anthropic Claude, Google Gemini, LangChain, FAISS vector databases, and custom fine-tuned models.
              </p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-primary border border-green-100">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                We replace repetitive operational tasks with intelligent, reliable automation pipelines. Our systems handle document processing, data extraction, workflow orchestration, and third-party API integrations at scale. We build with Python, Redis queues, serverless architectures, and event-driven patterns that ensure zero-touch automation for your most critical business processes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-primary border border-green-100">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Development</h3>
              <p className="text-gray-600 leading-relaxed">
                From idea to launched product in weeks. We build MVPs and full-scale SaaS platforms using Next.js, TypeScript, React, PostgreSQL, and modern cloud infrastructure. Every product we ship is type-safe, performant, and built to scale from day one. We do not cut corners — we architect for the long term.
              </p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-primary border border-green-100">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud & Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                We deploy to AWS, Vercel, Netlify, and Cloudflare with confidence. Our infrastructure-as-code approach ensures reproducible, secure, and scalable deployments. We implement CI/CD pipelines, automated testing, monitoring, and alerting so your systems run reliably at any scale.
              </p>
            </div>
          </div>
        </div>

        {/* Core Philosophy */}
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-white text-center mb-32">
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
