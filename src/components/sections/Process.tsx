import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/content/process";
import { MessageSquareText, Search, FileSpreadsheet, Code2, CheckCheck, Rocket } from "lucide-react";

const stepIcons = [
  <MessageSquareText key="1" className="h-5 w-5 text-primary" />,
  <Search key="2" className="h-5 w-5 text-primary" />,
  <FileSpreadsheet key="3" className="h-5 w-5 text-primary" />,
  <Code2 key="4" className="h-5 w-5 text-primary" />,
  <CheckCheck key="5" className="h-5 w-5 text-primary" />,
  <Rocket key="6" className="h-5 w-5 text-primary" />
];

export function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 border-b border-gray-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            Transparent Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A straightforward, client-first process designed to make working together clear, predictable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="border-gray-200/90 bg-white shadow-xs rounded-2xl p-6 group hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <CardContent className="p-0 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                    Step {step.number}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
                    {stepIcons[index] || <Code2 className="h-5 w-5 text-primary" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-primary mb-3">
                  {step.shortDesc}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
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
