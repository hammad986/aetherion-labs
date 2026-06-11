import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Activity, PenTool, Eye } from "lucide-react";

const solutions = [
  {
    title: "AI Document Intelligence",
    description: "Extract structured data, classify information, and automate document workflows with context-aware language models.",
    icon: <FileSearch className="h-6 w-6 text-primary" />
  },
  {
    title: "AI Operational Dashboards",
    description: "Unify business telemetry and interact with your operational data using intelligent, natural language copilots.",
    icon: <Activity className="h-6 w-6 text-primary" />
  },
  {
    title: "AI Proposal Automation",
    description: "Generate highly personalized, professional business proposals and documents instantly using custom AI logic.",
    icon: <PenTool className="h-6 w-6 text-primary" />
  },
  {
    title: "Computer Vision Applications",
    description: "Deploy robust image processing and real-time detection systems for specialized desktop or cloud environments.",
    icon: <Eye className="h-6 w-6 text-primary" />
  }
];

export function FeaturedSolutions() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Enterprise-Grade Solutions</h2>
          <p className="text-lg text-gray-500">
            We build specialized capabilities that solve complex business challenges through artificial intelligence and automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
