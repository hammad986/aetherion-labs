import { Card, CardContent } from "@/components/ui/card";
import { Search, Map, Layers, Code2, TestTube, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Discovery",
    description: "Deep dive into your business model, identifying operational bottlenecks and technical requirements.",
    icon: <Search className="h-5 w-5" />
  },
  {
    title: "Planning",
    description: "Aligning on goals, defining core features, mapping user journeys, and finalizing the product roadmap.",
    icon: <Map className="h-5 w-5" />
  },
  {
    title: "Architecture",
    description: "Designing scalable database schemas, system boundaries, and selecting the optimal technology stack.",
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: "Development",
    description: "Iterative, agile engineering focusing on code quality, performance, and integrating intelligent AI logic.",
    icon: <Code2 className="h-5 w-5" />
  },
  {
    title: "Testing",
    description: "Rigorous QA, automated testing, and security auditing to ensure enterprise-grade reliability.",
    icon: <TestTube className="h-5 w-5" />
  },
  {
    title: "Delivery",
    description: "Seamless deployment, hand-off documentation, and continuous monitoring for performance optimization.",
    icon: <Rocket className="h-5 w-5" />
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Methodology</h2>
          <p className="text-lg text-gray-500">
            A structured, transparent engineering process designed to eliminate risk and guarantee product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Subtle connecting line for larger screens */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gray-100 -z-10"></div>
          
          {processSteps.map((step, index) => (
            <Card key={index} className="border-gray-100 bg-white shadow-sm relative z-10 pt-6 group hover:border-primary/50 transition-colors">
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 text-gray-900 font-bold border-4 border-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed pl-14">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
