import { services } from "@/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Workflow, MessageSquare, Rocket, CheckCircle2 } from "lucide-react";

// Map string icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6 text-primary" />,
  Workflow: <Workflow className="h-6 w-6 text-primary" />,
  MessageSquare: <MessageSquare className="h-6 w-6 text-primary" />,
  Rocket: <Rocket className="h-6 w-6 text-primary" />
};

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg text-gray-500">
              End-to-end development capabilities designed to accelerate your growth and automate your operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-gray-200 overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors [&>svg]:group-hover:text-white">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
