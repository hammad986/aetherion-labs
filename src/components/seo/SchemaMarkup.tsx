import { companyInfo } from '@/content/company';
import { ProjectSchema } from '@/content/projects';

export function GlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aetherionlabs.qzz.io/#organization",
        "name": companyInfo.name,
        "url": "https://aetherionlabs.qzz.io",
        "logo": "https://aetherionlabs.qzz.io/icon.png",
        "description": companyInfo.positioning,
        "founder": {
          "@type": "Person",
          "name": companyInfo.founder.name,
          "jobTitle": "Founder & Lead Architect",
          "sameAs": [
            companyInfo.founder.social.linkedin,
            companyInfo.founder.social.github,
            companyInfo.founder.social.portfolio
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": companyInfo.contact.email,
          "contactType": "sales"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aetherionlabs.qzz.io/#website",
        "url": "https://aetherionlabs.qzz.io",
        "name": companyInfo.name,
        "publisher": {
          "@id": "https://aetherionlabs.qzz.io/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: ProjectSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category,
    "operatingSystem": project.type === "Desktop Application" ? "Windows, macOS, Linux" : "Web Browser",
    "url": project.demoUrl || project.downloadUrl || "https://aetherionlabs.qzz.io",
    "author": {
      "@id": "https://aetherionlabs.qzz.io/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most MVP projects take 4-8 weeks, while enterprise systems can take 3-6 months depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing maintenance and support retainers to ensure your systems scale securely."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
