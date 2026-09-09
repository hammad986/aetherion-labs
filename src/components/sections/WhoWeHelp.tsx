import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Building2, 
  Sparkles, 
  GraduationCap, 
  Store, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    title: "Startups & Founders",
    description: "Launch your MVP quickly without agency bureaucracy. We help you turn early concepts into scalable, investor-ready web software with clean code and robust architecture.",
    idealOfferings: "MVPs • Web Apps • SaaS Platforms • AI Integrations",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    href: "/contact?type=saas-mvp"
  },
  {
    title: "Small Businesses",
    description: "Modernize your company with custom software, streamlined customer portals, booking systems, or automated workflows that save dozens of manual hours every week.",
    idealOfferings: "Custom Portals • Internal Dashboards • Business Systems",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    href: "/contact?type=web-app"
  },
  {
    title: "Creators & Professionals",
    description: "Showcase your work, sell digital tools, or establish an elite professional identity with bespoke portfolios, high-converting landing pages, and custom micro-apps.",
    idealOfferings: "Portfolio Websites • Custom Tools • Brand Showcases",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    href: "/contact?type=website"
  },
  {
    title: "Students & Developers",
    description: "Turn your project idea or capstone concept into working software. We provide hands-on technical implementation support, clean source code, and working prototypes.",
    idealOfferings: "Prototypes • Demos • ML/AI Projects • Working Code",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    href: "/contact?type=student-prototype"
  },
  {
    title: "Local Businesses",
    description: "Attract more local clients with fast, mobile-friendly websites, online appointment booking, menu showcases, and clear contact pathways that rank on search.",
    idealOfferings: "Business Websites • Booking Engines • Local SEO",
    icon: <Store className="h-6 w-6 text-primary" />,
    href: "/contact?type=website"
  },
  {
    title: "Anyone With a Project Idea",
    description: "Have a unique software concept, an automation pipeline, or an unconventional project? Tell us what you want to achieve. We love tackling creative technical challenges.",
    idealOfferings: "Custom Software • Feasibility Scoping • Prototypes",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    href: "/contact?type=custom-software"
  }
];

export function WhoWeHelp() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            Client Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Who We Build For
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We partner with ambitious creators, owners, and innovators at every scale — from first-time founders to established businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <Card
              key={idx}
              className="border-gray-200/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all rounded-2xl bg-white flex flex-col group"
            >
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors [&>svg]:group-hover:text-white border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-100 mb-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Common Builds
                  </div>
                  <div className="text-xs font-medium text-gray-800">
                    {item.idealOfferings}
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-xs font-semibold text-primary hover:underline mt-auto pt-2"
                >
                  Start a project <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
