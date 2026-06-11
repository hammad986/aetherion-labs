import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Aetherion Labs. Read our operational guidelines and client responsibilities.',
  openGraph: {
    title: 'Terms of Service | Aetherion Labs',
    description: 'Terms of Service for Aetherion Labs. Read our operational guidelines and client responsibilities.',
    url: '/terms-of-service',
  },
};

export default function TermsOfService() {
  const lastUpdated = "June 12, 2026";

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      <div className="bg-gray-50 border-b border-gray-100 pt-16 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="max-w-3xl prose prose-lg text-gray-600">
          <p>
            Welcome to Aetherion Labs ("Company", "we", "our", "us"), founded by Muhammed Hammad S. These Terms of Service ("Terms") govern your use of our website and the custom software development, AI integration, and design services we provide (collectively, the "Services"). By accessing our website or engaging us for Services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Service Scope</h2>
          <p>
            Aetherion Labs provides custom software engineering, AI application development, and digital automation services. The specific scope of work, deliverables, timelines, and technical requirements for any project will be mutually agreed upon and detailed in a separate Statement of Work (SOW) or Architectural Proposal prior to the commencement of any development.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Project Estimates</h2>
          <p>
            Any quotes, estimates, or architectural proposals provided are valid for 30 days from the date of issuance unless otherwise stated. We reserve the right to revise estimates if the scope of the project changes significantly from the initial requirements discussed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Client Responsibilities</h2>
          <p>
            To ensure the timely and successful delivery of projects, clients must provide necessary materials, access to systems (such as APIs, hosting environments, or databases), and prompt feedback on deliverables. Delays in client feedback or failure to provide required assets may result in project timeline extensions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Intellectual Property</h2>
          <p>
            Upon receipt of full and final payment, the intellectual property rights to the custom software code, designs, and deliverables created specifically for the client will be transferred to the client. Aetherion Labs retains the right to reuse underlying open-source libraries, generic code snippets, algorithms, and architectural frameworks developed prior to or independently of the client's project. We also reserve the right to feature the completed project in our portfolio and marketing materials unless a specific Non-Disclosure Agreement (NDA) states otherwise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Payments</h2>
          <p>
            Invoices are due upon receipt unless otherwise specified in the SOW. A standard project requires a non-refundable upfront deposit before development begins, with remaining milestone payments tied to specific deliverables. We reserve the right to halt development or withhold final deployment if payments are not made according to the agreed schedule.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Revisions and Scope Creep</h2>
          <p>
            Projects include a predetermined number of revision rounds as defined in the SOW. Requests for additional features, design overhauls, or significant changes to the agreed-upon architecture that fall outside the original scope will be treated as "scope creep" and billed at our standard hourly rate or requiring an addendum to the SOW.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Delivery and Deployment</h2>
          <p>
            We will make every reasonable effort to meet proposed project deadlines. However, software development is inherently complex, and unforeseen technical challenges may arise. We are not liable for business losses caused by delayed delivery. Upon completion, we will deploy the software to the client's chosen production environment and provide a hand-off technical document if requested.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Aetherion Labs and its founder shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; or (iii) unauthorized access, use, or alteration of your transmissions or content.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Termination</h2>
          <p>
            Either party may terminate a project if the other party fundamentally breaches these Terms or the SOW. Upon termination by the client, Aetherion Labs shall be compensated for all work performed and expenses incurred up to the date of termination. Deposits are non-refundable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at contact.aetherionlabs@gmail.com or by post to:
          </p>
          <address className="not-italic text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4">
            <strong>Aetherion Labs</strong><br />
            Attn: Muhammed Hammad S<br />
            mdhammad2906@gmail.com<br />
            Vellore , TamilNadu, 635810<br />
          </address>
        </div>
      </div>
    </div>
  );
}
