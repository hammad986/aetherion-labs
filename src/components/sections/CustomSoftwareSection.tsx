import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Database, 
  SlidersHorizontal, 
  Users, 
  CreditCard,
  ArrowRight,
  Code2
} from "lucide-react";

const capabilities = [
  {
    title: "Operational Dashboards",
    description: "Real-time metrics, telemetry charts, and analytics that turn complex business data into clear, actionable decisions.",
    icon: <LayoutDashboard className="h-5 w-5 text-primary" />
  },
  {
    title: "Admin Panels & Management",
    description: "Bespoke internal backends for managing products, user accounts, orders, inventory, and company records securely.",
    icon: <SlidersHorizontal className="h-5 w-5 text-primary" />
  },
  {
    title: "Customer & Client Portals",
    description: "Self-service portals where your clients can log in, view status updates, download documents, and submit requests.",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  {
    title: "Booking & Reservation Engines",
    description: "Automated scheduling, appointment calendar booking, reminders, and availability systems customized to your operational model.",
    icon: <CreditCard className="h-5 w-5 text-primary" />
  },
  {
    title: "Database-Driven Applications",
    description: "Robust data architectures built on PostgreSQL or Supabase with relational schemas, row-level security, and fast querying.",
    icon: <Database className="h-5 w-5 text-primary" />
  },
  {
    title: "API & Third-Party Integrations",
    description: "Connect your custom software directly into Stripe, HubSpot, Google Workspace, QuickBooks, Slack, and external services.",
    icon: <Code2 className="h-5 w-5 text-primary" />
  }
];

export function CustomSoftwareSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            Custom Web Apps & Systems
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Custom Software Built Around Your Workflow
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            When off-the-shelf software doesn&apos;t fit your operational needs, we engineer tailored web applications, customer portals, and internal tools that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-11 w-11 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center mb-6 text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Have a unique software concept?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              We help founders and businesses scope, architect, and build custom web applications with clear milestone deliverables.
            </p>
          </div>
          <Link
            href="/contact?type=web-app"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full px-8 h-14 text-base font-semibold bg-white text-gray-900 hover:bg-gray-100 flex-shrink-0 shadow-md",
            })}
          >
            Discuss Your Software Idea <ArrowRight className="ml-2 h-5 w-5 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
