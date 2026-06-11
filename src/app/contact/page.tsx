import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/content/company";
import { Mail, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aetherion Labs to discuss your project.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Information Side */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                Let's Build Something <span className="text-primary">Exceptional</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                Whether you need a full platform build, a custom automation system, or an AI integration, we're ready to engineer it.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-gray-200 shadow-sm text-primary">
                    <Clock />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Response</h3>
                  <p className="text-gray-500">We review all inquiries and respond within 24 hours to schedule a discovery call.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-gray-200 shadow-sm text-primary">
                    <Shield />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Strict Confidentiality</h3>
                  <p className="text-gray-500">Your ideas and business logic are safe. We can sign an NDA before any deep technical discussions.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-gray-200 shadow-sm text-primary">
                    <Mail />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Direct Contact</h3>
                  <p className="text-gray-500">Prefer email? Reach us directly at <a href={`mailto:${companyInfo.contact.email}`} className="text-primary font-medium hover:underline">{companyInfo.contact.email}</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
