import { services } from "@/content/services";
import { companyInfo } from "@/content/company";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CheckCircle2, Cpu, Workflow, MessageSquare, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Enterprise-grade software development and AI automation services.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-8 w-8 text-primary" />,
  Workflow: <Workflow className="h-8 w-8 text-primary" />,
  MessageSquare: <MessageSquare className="h-8 w-8 text-primary" />,
  Rocket: <Rocket className="h-8 w-8 text-primary" />
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Engineering Services
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We don't just write code. We architect scalable solutions that leverage AI and automation to create distinct competitive advantages for {companyInfo.positioning.toLowerCase().replace('.', '')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24 space-y-32">
        {services.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2">
              <div className="h-16 w-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 shadow-sm border border-green-100">
                {iconMap[service.icon]}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {service.description}
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Key Capabilities</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
              {/* Abstract visualization placeholder for the service */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-50 border-8 border-white shadow-lg text-primary mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-mono opacity-50 uppercase tracking-widest">{service.id.replace(/-/g, ' ')}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ContactCTA />
    </div>
  );
}
