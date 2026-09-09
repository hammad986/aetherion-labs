import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/content/company";
import { Mail, Clock, Shield, MessageSquare, Globe2 } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema, ContactPageSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: {
    absolute: "Aetherion Labs | Start a Project",
  },
  description: "Get in touch with Aetherion Labs to discuss your custom website, web application, AI system, or software prototype. Transparent estimates and prompt responses.",
  alternates: {
    canonical: "https://hammad.dpdns.org/contact",
  },
  openGraph: {
    title: "Aetherion Labs | Start a Project",
    description: "Get in touch with Aetherion Labs to discuss your custom website, web application, AI system, or software prototype. Transparent estimates and prompt responses.",
    url: "https://hammad.dpdns.org/contact",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Start a Project",
    description: "Get in touch with Aetherion Labs to discuss your custom website, web application, AI system, or software prototype.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://hammad.dpdns.org/" },
  { name: "Contact", url: "https://hammad.dpdns.org/contact" },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <BreadcrumbListSchema items={breadcrumbs} />
      <ContactPageSchema />

      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Information & Trust Column */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
                <Globe2 className="h-3.5 w-3.5" /> Serving US, Canada & Worldwide
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-6 leading-tight">
                Let&apos;s Discuss Your <span className="text-primary">Project</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Whether you need a new business website, a custom web app, an AI chatbot, or a working prototype, tell us what you&apos;re trying to build. We&apos;ll provide technical feedback and a clear estimate.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="h-11 w-11 rounded-xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 border border-green-100">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Prompt Response</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We review all project inquiries promptly and respond with initial thoughts, clarifying questions, or an invitation for a discovery chat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="h-11 w-11 rounded-xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 border border-green-100">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Mutual NDA Available</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your proprietary business concepts, software ideas, and client data are safe. We can sign a mutual non-disclosure agreement prior to technical deep-dives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="h-11 w-11 rounded-xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 border border-green-100">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Free Initial Consultation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every collaboration starts with a no-pressure discussion to confirm feasibility, architecture recommendations, and estimated budgets before committing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="h-11 w-11 rounded-xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 border border-green-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Prefer Direct Email?</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Feel free to email us directly at{" "}
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-primary font-semibold hover:underline">
                      {companyInfo.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* What to expect card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-lg space-y-4">
              <h4 className="font-bold text-base text-white uppercase tracking-wider text-xs">
                What Happens Next
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mt-0.5">1</span>
                  <span>We review your requirements and technical scope</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mt-0.5">2</span>
                  <span>We schedule a brief conversation or reply with clarifying details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mt-0.5">3</span>
                  <span>You receive a clear scope outline and transparent estimate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2">
            <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
