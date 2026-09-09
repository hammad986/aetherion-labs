import { pricingCategories, pricingNotice } from "@/content/pricing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";
import { FAQSchema, BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Aetherion Labs | Software Development Pricing",
  },
  description: "Transparent, milestone-based pricing for websites, web applications, AI systems, and prototypes. Clear scopes and direct founder collaboration.",
  alternates: {
    canonical: "https://hammad.dpdns.org/pricing",
  },
  openGraph: {
    title: "Aetherion Labs | Software Development Pricing",
    description: "Transparent project estimates for websites, custom web apps, AI systems, and prototypes. Flexible scopes with direct founder collaboration.",
    url: "https://hammad.dpdns.org/pricing",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Software Development Pricing",
    description: "Transparent project estimates for websites, custom web apps, AI systems, and prototypes.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://hammad.dpdns.org/" },
  { name: "Pricing", url: "https://hammad.dpdns.org/pricing" },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <FAQSchema />
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            <FileText className="h-3.5 w-3.5" /> Project-Based Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-6 leading-tight">
            Transparent Pricing for Every Project Scale
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We work on a clear project basis without hidden agency fees or surprise retainers. Every engagement begins with a defined scope and milestone plan.
          </p>

          {/* Mandatory Project Notice Banner */}
          <div className="bg-gradient-to-r from-emerald-50/90 via-sky-50/80 to-emerald-50/90 border border-emerald-200/80 rounded-2xl p-5 max-w-3xl mx-auto shadow-2xs text-left sm:text-center">
            <p className="text-sm text-gray-800 font-medium">
              💡 <strong className="text-gray-950">Important Note:</strong> {pricingNotice.note}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* Pricing Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {pricingCategories.map((tier) => (
            <Card
              key={tier.id}
              id={tier.id}
              className={`relative overflow-hidden flex flex-col rounded-3xl transition-all duration-300 ${
                tier.highlighted
                  ? 'border-primary shadow-xl shadow-primary/10 bg-white ring-1 ring-primary/30'
                  : 'border-gray-200/90 bg-white hover:border-primary/40 hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className={`text-center py-1.5 text-xs font-bold uppercase tracking-wider ${
                  tier.highlighted
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {tier.badge}
                </div>
              )}

              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-bold text-gray-950 mb-2">
                  {tier.category}
                </CardTitle>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
                  {tier.startingPrice}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </CardHeader>

              <CardContent className="p-8 pt-2 flex-1 flex flex-col">
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                    Ideal For
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    {tier.idealFor}
                  </p>
                </div>

                <div className="mb-6 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    What&apos;s Typically Included
                  </span>
                  <ul className="space-y-2.5">
                    {tier.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Typical Timeline:</span>
                  <strong className="text-gray-900 font-semibold">{tier.typicalTimeline}</strong>
                </div>

                <Link
                  href={`/contact?type=${tier.id}`}
                  className={buttonVariants({
                    size: "lg",
                    variant: tier.highlighted ? "default" : "outline",
                    className: `w-full rounded-full font-semibold shadow-xs ${
                      tier.highlighted
                        ? 'bg-primary hover:bg-emerald-600 text-white'
                        : 'border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-950'
                    }`
                  })}
                >
                  Get a Project Estimate <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Studio Commitments Strip */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-10 shadow-xs mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
            Our Pricing & Collaboration Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pricingNotice.commitments.map((commitment, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">{commitment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote Help Card */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-10 sm:p-12 rounded-3xl shadow-xl space-y-6">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/10 text-emerald-400 mb-2">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">
            Have an unusual project or custom requirement?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Tell us about your idea, required functionality, and any target budget. We will review your requirements and provide a customized technical recommendation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-emerald-600 text-white shadow-md shadow-primary/20",
              })}
            >
              Get a Project Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
