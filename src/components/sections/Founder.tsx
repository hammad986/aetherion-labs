import { companyInfo } from "@/content/company";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src={companyInfo.founder.photo} 
                alt={companyInfo.founder.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-primary mb-6">
              Engineering Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
              {companyInfo.founder.name}
            </h2>
            <p className="text-xl text-gray-500 font-medium mb-6">Founder & Lead Architect</p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {companyInfo.founder.bio}
            </p>
            
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {companyInfo.founder.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-100">
              <a href={companyInfo.founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={companyInfo.founder.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.36 0-1.4-.5-2.55-1.33-3.4.13-.33.6-1.6-.13-3.36 0 0-1.08-.34-3.5 1.3-1-.28-2.1-.42-3.2-.42s-2.2.14-3.2.42c-2.42-1.64-3.5-1.3-3.5-1.3-.73 1.76-.26 3.03-.13 3.36-.83.85-1.33 2-1.33 3.4 0 4.83 3 6.02 6 6.36-.9.2-1.6.9-1.9 2.1-.8.36-2.7.46-4-1.2-1.1-1.3-2-1.3-2-1.3-1.1-.1-.1.9-.1.9 1.1.4 1.7 1.7 1.7 1.7 1.1 2.3 3.2 2.1 4 1.8v2.7"></path></svg>
              </a>
              <a href={companyInfo.founder.social.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-medium text-sm">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
