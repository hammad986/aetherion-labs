import { companyInfo } from "@/content/company";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Workflow, Layers, ShieldCheck, Globe2, UserCheck } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: {
    absolute: "Aetherion Labs | Founder-Led Software Development Studio",
  },
  description: "Meet Aetherion Labs, a founder-led custom software and web development studio. We build production-ready digital products for clients across the US, Canada, and worldwide.",
  alternates: {
    canonical: "https://hammad.dpdns.org/about",
  },
  openGraph: {
    title: "Aetherion Labs | Founder-Led Software Development Studio",
    description: "Learn about Aetherion Labs, our engineering philosophy, and how we collaborate directly with founders and business owners.",
    url: "https://hammad.dpdns.org/about",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Founder-Led Software Development Studio",
    description: "Learn about Aetherion Labs, our engineering philosophy, and how we collaborate directly with founders and business owners.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://hammad.dpdns.org/" },
  { name: "About", url: "https://hammad.dpdns.org/about" },
];

const studioPillars = [
  {
    title: "Full-Stack Web Engineering",
    description: "Modern, type-safe web applications and high-performance websites built with Next.js, React, TypeScript, and clean CSS architectures.",
    icon: <Code2 className="h-6 w-6 text-primary" />
  },
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI integration using modern LLM APIs, retrieval-augmented generation (RAG) over business documents, and custom workflow logic.",
    icon: <Cpu className="h-6 w-6 text-primary" />
  },
  {
    title: "Automation & Integrations",
    description: "Connecting disjointed systems, automating manual operational data flows, and engineering reliable backend pipelines.",
    icon: <Workflow className="h-6 w-6 text-primary" />
  },
  {
    title: "Product Development & MVPs",
    description: "From napkin sketches to launched products. We guide technical scoping, build scalable database architectures, and deliver clean source code.",
    icon: <Layers className="h-6 w-6 text-primary" />
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
              <Globe2 className="h-3.5 w-3.5" /> Founder-Led Studio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 mb-6 leading-tight">
              Engineering Practical Software With Direct Collaboration
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Aetherion Labs is a custom software and digital product development studio. We design and build websites, web apps, AI tools, and automation systems for startups, businesses, creators, and innovators.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Founder Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <Image
                src={companyInfo.founder.photo}
                alt={companyInfo.founder.name}
                fill
                sizes="(max-width: 1024px) 384px, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:w-7/12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-700">
              <UserCheck className="h-3.5 w-3.5 text-primary" /> Meet the Founder & Builder
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
              {companyInfo.founder.name}
            </h2>

            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-primary">
              {companyInfo.founder.roles.map((role, rIdx) => (
                <span key={rIdx} className="bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                  {role}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                I founded Aetherion Labs with a simple philosophy: software engineering should be transparent, founder-led, and centered on real utility. Traditional agencies often trap clients in layers of sales reps, account managers, and junior subcontractors — leading to miscommunication, inflated budgets, and missed deadlines.
              </p>
              <p>
                At Aetherion Labs, you work directly with me. From initial architectural planning to writing production code and post-launch support, I personally ensure every line of code is clean, performant, and aligned with your business goals.
              </p>
              <p>
                We serve clients across the United States, Canada, and internationally. Whether you are a startup needing an MVP, a small business modernizing your customer portal, a creator building an audience tool, or a developer needing prototype support, we bring hands-on dedication to every project.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <a
                href={companyInfo.founder.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-1.5"
              >
                LinkedIn Profile <ArrowRight className="h-3 w-3" />
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={companyInfo.founder.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-1.5"
              >
                GitHub Repositories <ArrowRight className="h-3 w-3" />
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={companyInfo.founder.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-1.5"
              >
                Personal Portfolio <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Capabilities Grid */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-4">
              Our Core Technical Pillars
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We specialize in the four disciplines required to design, build, and deploy modern digital software products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-gray-200/90 bg-gray-50/40 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Client Commitment */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-14 text-white mb-20 shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Our Commitment to Clients
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We believe quality software is built on honest expectations, disciplined engineering, and active communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left">
              <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700">
                <ShieldCheck className="h-6 w-6 text-emerald-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-1.5">No Bloat</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We write lean, maintainable code without bloated templates or unnecessary dependencies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700">
                <Code2 className="h-6 w-6 text-emerald-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-1.5">100% IP Ownership</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  You own all source code, design assets, and database structures outright upon project completion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-800/80 border border-gray-700">
                <Globe2 className="h-6 w-6 text-emerald-400 mb-3" />
                <h4 className="font-bold text-white text-base mb-1.5">Global Delivery</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Async-friendly workflows with US and Canadian business hours overlap for frictionless reviews.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-emerald-600 text-white shadow-md shadow-primary/25",
                })}
              >
                Start a Project With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
