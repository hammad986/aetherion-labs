import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Globe, Zap, Search, ShieldCheck } from "lucide-react";

const websiteTypes = [
  "Business & Corporate Websites",
  "Service & Consultancy Websites",
  "High-Converting Landing Pages",
  "Appointment & Booking Websites",
  "Restaurant & Café Websites",
  "Professional & Legal Websites",
  "Portfolio & Creator Websites",
  "Modern E-Commerce Storefronts"
];

const websiteBenefits = [
  {
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Fast Loading Speeds",
    desc: "Built with Next.js and clean code, not bloated page builders that drag down your conversion rate."
  },
  {
    icon: <Search className="h-5 w-5 text-primary" />,
    title: "Search Engine Ready",
    desc: "Semantic HTML, OpenGraph tags, structured Schema markup, and clean metadata for US and global search ranking."
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: "Zero Security Vulnerabilities",
    desc: "Modern static/server architectures that don't rely on vulnerable third-party plugins or brittle CMS setups."
  }
];

export function BusinessWebsitesSection() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-white/10">
              <Globe className="h-3.5 w-3.5" /> High-Performance Web Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Need a Website for Your Business?
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Your website is often the first impression a prospective client has of your business. We design and build clean, custom websites that establish instant credibility, communicate your value clearly, and drive inbound inquiries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {websiteTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{type}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact?type=website"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-emerald-600 text-white shadow-lg shadow-primary/20",
                })}
              >
                Get a Website Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing#websites"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full px-8 h-14 text-base font-semibold border-gray-700 bg-gray-800/60 hover:bg-gray-800 text-gray-200 hover:text-white",
                })}
              >
                View Website Pricing
              </Link>
            </div>
          </div>

          {/* Right Column: Benefit Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-gray-800/90 border border-gray-700/80 rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur-sm space-y-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Why Custom-Built Beats Generic Templates
              </h3>
              <div className="space-y-6">
                {websiteBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gray-700/80 border border-gray-600 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-700/80 text-center">
                <p className="text-xs text-gray-400 leading-normal">
                  Typical turnaround: <strong className="text-gray-200">1 to 3 weeks</strong> • Direct communication with your builder • 100% code ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
