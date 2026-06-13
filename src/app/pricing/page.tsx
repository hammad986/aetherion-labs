import { pricing } from "@/content/pricing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FAQSchema, BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Engagement",
  description: "Transparent project-based pricing for AI software development. Starter projects from $3k, Growth from $8k, Custom enterprise solutions from $20k+.",
  alternates: {
    canonical: "https://aetherionlabs.qzz.io/pricing",
  },
  openGraph: {
    title: "Pricing & Engagement | Aetherion Labs",
    description: "Transparent project-based pricing for AI software development. Starter, Growth, and Custom enterprise engagement models.",
    url: "https://aetherionlabs.qzz.io/pricing",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Engagement | Aetherion Labs",
    description: "Transparent project-based pricing for AI software development.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://aetherionlabs.qzz.io/" },
  { name: "Pricing & Engagement", url: "https://aetherionlabs.qzz.io/pricing" },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <FAQSchema />
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Engagement Models
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We work on a project-basis with transparent pricing ranges. Every engagement begins with a tailored architectural proposal.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((tier) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden flex flex-col ${
                tier.highlighted
                  ? 'border-primary shadow-xl scale-105 z-10 bg-white'
                  : 'border-gray-200 bg-white hover:border-primary/30 transition-colors'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</CardTitle>
                <div className="text-3xl font-extrabold text-primary mb-4">{tier.priceRange}</div>
                <p className="text-gray-500 text-sm">{tier.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Ideal For</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.idealCustomer}</p>
                </div>

                <div className="mb-8 flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Expected Deliverables</h4>
                  <ul className="space-y-3">
                    {tier.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">Estimated Timeline: <span className="text-gray-900 font-bold">{tier.timeline}</span></span>
                </div>

                <Link
                  href={`/contact?type=${tier.id}`}
                  className={buttonVariants({
                    size: "lg",
                    variant: tier.highlighted ? "default" : "outline",
                    className: `w-full rounded-full ${tier.highlighted ? '' : 'border-gray-200 hover:bg-gray-50'}`
                  })}
                >
                  Request Proposal
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center bg-white p-12 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which tier fits?</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Let's have a quick 15-minute discovery call to discuss your exact needs and we'll provide a custom architectural proposal and fixed-price quote.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
