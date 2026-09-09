import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BreadcrumbListSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aetherion Labs. Learn how we collect, use, and protect your data when you use our website and services.',
  alternates: {
    canonical: 'https://hammad.dpdns.org/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Aetherion Labs',
    description: 'Privacy Policy for Aetherion Labs. Learn how we collect, use, and protect your data.',
    url: 'https://hammad.dpdns.org/privacy-policy',
    siteName: 'Aetherion Labs',
  },
};

const breadcrumbs = [
  { name: 'Home', url: 'https://hammad.dpdns.org/' },
  { name: 'Privacy Policy', url: 'https://hammad.dpdns.org/privacy-policy' },
];

export default function PrivacyPolicy() {
  const lastUpdated = 'June 12, 2026';

  return (
    <div className='bg-white min-h-screen pb-24 font-sans'>
      <BreadcrumbListSchema items={breadcrumbs} />
      <div className='bg-gray-50 border-b border-gray-100 pt-16 pb-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <Link href='/' className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors'>
            <ArrowLeft className='mr-2 h-4 w-4' /> Back to Home
          </Link>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4'>
              Privacy Policy
            </h1>
            <p className='text-lg text-gray-500'>
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-6 pt-16'>
        <div className='max-w-3xl prose prose-lg text-gray-600'>
          <p>
            At Aetherion Labs (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), founded by Muhammed Hammad S, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>
          <p>
            When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>2. Contact Form Submissions</h2>
          <p>
            If you contact us directly via our website forms, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. We use this information strictly to respond to your inquiries and facilitate business communication.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>3. Email Communication</h2>
          <p>
            We may use your email address to send you service-related notices (including any notices required by law, in lieu of communication by postal mail). We may also use your contact information to send you marketing messages. If you do not want to receive such messages, you may opt out by following the instructions in the message.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>4. Analytics Usage</h2>
          <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service. This helps us understand how users interact with our website, allowing us to improve user experience. The information collected is aggregated and does not personally identify you.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>5. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>6. Third-Party Services</h2>
          <p>
            We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: data analysis, email delivery, hosting services, customer service, and marketing efforts. We may allow selected third parties to use tracking technology on the website.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>7. Data Retention</h2>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>8. Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>9. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to request access and obtain a copy of your personal information, to request rectification or erasure; to restrict the processing of your personal information; and if applicable, to data portability.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mt-12 mb-4'>10. Contact Information</h2>
          <p>
            If you have questions or comments about this policy, you may email us at contact.aetherionlabs@gmail.com or by post to:
          </p>
          <address className='not-italic text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4'>
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
