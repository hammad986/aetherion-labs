import { services } from "@/content/services";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { buttonVariants } from "@/components/ui/button";
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
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Briefcase
} from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema, ServicesPageSchema, ServiceSchema as ServiceSchemaComponent } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: {
    absolute: "Aetherion Labs | Custom Software & AI Development Services",
  },
  description: "Explore our custom software and AI development services: modern websites, web applications, AI chatbots, automation systems, and SaaS prototypes for businesses and startups.",
  alternates: {
    canonical: "https://hammad.dpdns.org/services",
  },
  openGraph: {
    title: "Aetherion Labs | Custom Software & AI Development Services",
    description: "Custom software, web applications, AI solutions, automation, and website engineering for businesses, startups, and creators.",
    url: "https://hammad.dpdns.org/services",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Custom Software & AI Development Services",
    description: "Custom software, web applications, AI solutions, automation, and website engineering.",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-7 w-7 text-primary" />,
  LayoutDashboard: <LayoutDashboard className="h-7 w-7 text-primary" />,
  Cpu: <Cpu className="h-7 w-7 text-primary" />,
  MessageSquare: <MessageSquare className="h-7 w-7 text-primary" />,
  Workflow: <Workflow className="h-7 w-7 text-primary" />,
  Rocket: <Rocket className="h-7 w-7 text-primary" />,
  GraduationCap: <GraduationCap className="h-7 w-7 text-primary" />,
  Layers: <Layers className="h-7 w-7 text-primary" />
};

const breadcrumbs = [
  { name: "Home", url: "https://hammad.dpdns.org/" },
  { name: "Services", url: "https://hammad.dpdns.org/services" },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <BreadcrumbListSchema items={breadcrumbs} />
      <ServicesPageSchema />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            <Briefcase className="h-3.5 w-3.5" /> Full-Spectrum Studio Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-6 leading-tight">
            Custom Software & Digital Product Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From modern business websites and internal tools to advanced AI applications and working prototypes, we build reliable, custom software engineered for your exact needs.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 md:px-6 py-20 space-y-24">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/90 shadow-sm p-8 sm:p-12 lg:p-14"
          >
            <ServiceSchemaComponent service={{
              id: service.id,
              title: service.title,
              description: service.shortDescription,
              features: service.keyFeatures
            }} />

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column: Core Info & Breakdown */}
              <div className="lg:w-7/12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                    {iconMap[service.icon] || <Sparkles className="h-7 w-7 text-primary" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Service Offering 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {service.whatItIs}
                </p>

                {/* Who It's For */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Who It Is For
                  </h4>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {service.whoItIsFor}
                  </p>
                </div>

                {/* Example Use Cases */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Example Use Cases
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.exampleUseCases.map((useCase, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={service.ctaHref}
                    className={buttonVariants({
                      size: "lg",
                      className: "rounded-full px-8 h-12 text-sm font-semibold shadow-xs",
                    })}
                  >
                    {service.ctaText} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: What Can Be Built & Key Features */}
              <div className="lg:w-5/12 space-y-6">
                <div className="bg-gray-50/80 rounded-2xl p-7 border border-gray-200/80 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    What Can Be Built
                  </h4>
                  <ul className="space-y-2.5">
                    {service.whatCanBeBuilt.map((item, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-7 border border-gray-200/80 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Key Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {service.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-600">
                        <span className="h-1 w-1 rounded-full bg-gray-400 mr-2 flex-shrink-0 mt-1.5"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <FinalCTASection />
    </div>
  );
}
