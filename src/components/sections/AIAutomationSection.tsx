import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { 
  Bot, 
  FileSearch, 
  Workflow, 
  Sparkles, 
  ArrowRight,
  Database
} from "lucide-react";

const aiSolutions = [
  {
    title: "AI Chatbots & Assistants",
    summary: "Customer support copilots and knowledge base assistants grounded in your specific documents, guidelines, and product data.",
    points: ["Grounded on your business data", "24/7 client inquiry handling", "Escalation to human team"],
    icon: <Bot className="h-6 w-6 text-primary" />
  },
  {
    title: "Document AI & Extraction",
    summary: "Automatically parse, categorize, and extract structured data from unstructured PDFs, invoices, contracts, and receipts.",
    points: ["Replaces brittle legacy OCR", "Strict JSON schema validation", "Human-in-the-loop review queues"],
    icon: <FileSearch className="h-6 w-6 text-primary" />
  },
  {
    title: "RAG & Semantic Search",
    summary: "Enable your users or team to 'chat with your files' — searching across thousands of pages in seconds with citation accuracy.",
    points: ["Vector embeddings (pgvector/FAISS)", "Source document referencing", "High precision, low hallucination"],
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    title: "Workflow & Process Automation",
    summary: "Connect disconnected business tools into hands-off automation pipelines that run automatically in the background.",
    points: ["Webhook & API integrations", "Data extraction and synchronization", "Automatic email and Slack notifications"],
    icon: <Workflow className="h-6 w-6 text-primary" />
  }
];

export function AIAutomationSection() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
              <Sparkles className="h-3.5 w-3.5" /> Practical AI & Automation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              AI & Automation That Actually Delivers Business Value
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We cut through the AI hype to build functional tools that save real operational hours, automate manual busywork, and enhance your digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact?type=ai-app"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full px-7 h-12 text-sm font-semibold shadow-sm",
              })}
            >
              Start an AI Project <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSolutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col group"
            >
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white border border-green-100/70">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {item.summary}
              </p>
              <ul className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-500">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 font-medium text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
