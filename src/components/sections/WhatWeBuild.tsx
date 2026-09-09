import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  Globe, 
  LayoutDashboard, 
  Cpu, 
  MessageSquare, 
  Workflow, 
  Rocket, 
  GraduationCap, 
  Layers, 
  ArrowRight 
} from "lucide-react";

const buildCategories = [
  {
    title: "Websites",
    description: "Modern, high-converting business websites, portfolios, landing pages, and ecommerce storefronts engineered for speed and search ranking.",
    tags: ["Business Sites", "Landing Pages", "Portfolios", "E-commerce"],
    icon: <Globe className="h-6 w-6 text-primary" />,
    href: "/services#website-development"
  },
  {
    title: "Web Applications",
    description: "Dynamic, database-backed web applications, customer portals, interactive dashboards, and administrative systems built with Next.js and React.",
    tags: ["Customer Portals", "Admin Panels", "Dashboards", "User Auth"],
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
    href: "/services#web-application-development"
  },
  {
    title: "AI Applications",
    description: "Custom AI systems powered by modern LLMs, document analysis, computer vision, and retrieval-augmented generation (RAG).",
    tags: ["RAG Systems", "Document AI", "Vision Systems", "LLM APIs"],
    icon: <Cpu className="h-6 w-6 text-primary" />,
    href: "/services#ai-applications"
  },
  {
    title: "AI Chatbots",
    description: "Intelligent, context-aware conversational agents trained on your business data to handle customer inquiries and qualify leads 24/7.",
    tags: ["Support Copilots", "Knowledge Bots", "Lead Intake", "Multi-Channel"],
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    href: "/services#ai-chatbots"
  },
  {
    title: "Automation",
    description: "Reliable automated workflows, scheduled scrapers, multi-app API integrations, and backend data pipelines that eliminate repetitive work.",
    tags: ["Workflow Pipelines", "API Integrations", "Data Extraction", "Webhooks"],
    icon: <Workflow className="h-6 w-6 text-primary" />,
    href: "/services#automation-integrations"
  },
  {
    title: "SaaS & MVPs",
    description: "From concept to market-ready product in weeks. We build scalable multi-tenant SaaS products with user management and Stripe subscriptions.",
    tags: ["0-to-1 Builds", "Stripe Billing", "User Workspaces", "Fast Validation"],
    icon: <Rocket className="h-6 w-6 text-primary" />,
    href: "/services#saas-mvp-development"
  },
  {
    title: "Student Projects & Prototypes",
    description: "Hands-on development support to turn project concepts, capstone ideas, or innovative prototypes into functional working software demos.",
    tags: ["Working Demos", "Proof of Concept", "Clean Code", "Architecture"],
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    href: "/services#student-prototypes"
  },
  {
    title: "Custom Software",
    description: "Bespoke internal business tools, operational management systems, and specialized software engineered precisely around your workflows.",
    tags: ["Internal Tools", "Operations Software", "Database Systems", "Bespoke Logic"],
    icon: <Layers className="h-6 w-6 text-primary" />,
    href: "/services#custom-software"
  }
];

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From fast business websites to sophisticated AI applications, we engineer digital products that solve real problems.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-emerald-700 transition-colors"
          >
            Explore all services <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildCategories.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200/80 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col group rounded-2xl overflow-hidden"
            >
              <CardContent className="p-7 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white border border-green-100/80">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mb-4">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-xs font-semibold text-primary group-hover:underline mt-auto pt-2"
                >
                  Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
