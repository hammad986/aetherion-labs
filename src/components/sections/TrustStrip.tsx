import { Shield, UserCheck, Layers, Lock, Globe2, FileCheck } from "lucide-react";

const trustIndicators = [
  {
    icon: <UserCheck className="h-5 w-5 text-primary" />,
    label: "Founder-Led Development",
    detail: "Direct collaboration with senior engineers"
  },
  {
    icon: <Layers className="h-5 w-5 text-primary" />,
    label: "Custom-Built Solutions",
    detail: "No generic templates or bloated builders"
  },
  {
    icon: <FileCheck className="h-5 w-5 text-primary" />,
    label: "Modern Technology Stack",
    detail: "Next.js, TypeScript, Python, PostgreSQL"
  },
  {
    icon: <Lock className="h-5 w-5 text-primary" />,
    label: "NDA Available",
    detail: "Strict IP protection & confidentiality"
  },
  {
    icon: <Globe2 className="h-5 w-5 text-primary" />,
    label: "Remote Delivery",
    detail: "Serving US, Canada, & global clients"
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    label: "Clear Project Scope",
    detail: "Fixed deliverables and milestone updates"
  }
];

export function TrustStrip() {
  return (
    <section className="border-y border-gray-100 bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustIndicators.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center mb-2.5 border border-green-100/60">
                {item.icon}
              </div>
              <span className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight mb-1">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
