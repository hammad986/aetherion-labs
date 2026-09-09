import { Building2, Lightbulb, CodeSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Startups",
    description: "Launch MVPs fast and scale your tech stack intelligently from day one.",
    icon: <RocketIcon className="h-8 w-8 text-primary mb-4" /> // using custom or matched
  },
  {
    title: "SaaS Founders",
    description: "Integrate powerful AI models into your existing applications to increase ARR.",
    icon: <CodeSquare className="h-8 w-8 text-primary mb-4" />
  },
  {
    title: "Small Businesses",
    description: "Automate manual data entry, document processing, and operational bottlenecks.",
    icon: <Building2 className="h-8 w-8 text-primary mb-4" />
  },
  {
    title: "Creators",
    description: "Build custom digital products, specialized tools, and community platforms.",
    icon: <Lightbulb className="h-8 w-8 text-primary mb-4" />
  }
];

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function Industries() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Who We Work With</h2>
          <p className="text-lg text-gray-500">
            We partner with ambitious teams and individuals ready to leverage technology for serious growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <Card key={i} className="border-gray-200 bg-white hover:border-primary/50 transition-colors shadow-sm text-center pt-6">
              <CardContent className="flex flex-col items-center">
                {industry.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
