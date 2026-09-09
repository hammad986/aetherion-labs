import { companyInfo } from '@/content/company';
import { ProjectSchema } from '@/content/projects';
import { services } from '@/content/services';

export function GlobalSchema() {
  const sameAs = [
    companyInfo.social.github,
    companyInfo.social.linkedin,
    companyInfo.social.instagram,
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hammad.dpdns.org/#organization",
        "name": "Aetherion Labs",
        "legalName": "Aetherion Labs",
        "url": "https://hammad.dpdns.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hammad.dpdns.org/icon.png",
          "width": 512,
          "height": 512,
        },
        "description": "Founder-led custom software and digital product development studio serving clients across the United States, Canada, and worldwide.",
        "sameAs": sameAs,
        "founder": {
          "@type": "Person",
          "name": companyInfo.founder.name,
          "jobTitle": "Founder & Lead Engineer",
          "url": "https://hammad.dpdns.org/about",
          "sameAs": [
            companyInfo.founder.social.linkedin,
            companyInfo.founder.social.github,
            companyInfo.founder.social.instagram,
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": companyInfo.contact.email,
          "contactType": "customer support",
          "areaServed": ["United States", "Canada", "Worldwide"],
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hammad.dpdns.org/#website",
        "url": "https://hammad.dpdns.org/",
        "name": "Aetherion Labs",
        "alternateName": "Aetherion Labs",
        "description": "Founder-led custom software and digital product development studio serving clients across the United States, Canada, and worldwide.",
        "publisher": {
          "@id": "https://hammad.dpdns.org/#organization"
        },
        "inLanguage": "en-US"
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
    "@type": "Article",
    "headline": project.title,
    "description": project.description,
    "author": {
      "@id": "https://hammad.dpdns.org/#organization"
    },
    "publisher": {
      "@id": "https://hammad.dpdns.org/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hammad.dpdns.org/projects/${project.slug}`
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "keywords": project.technologies.join(', '),
    "about": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "applicationCategory": project.category,
      "operatingSystem": project.type === "Desktop Application" ? "Windows, macOS, Linux" : "Web Browser",
      "url": project.demoUrl || project.downloadUrl || "https://hammad.dpdns.org",
      "author": {
        "@id": "https://hammad.dpdns.org/#organization"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: { id: string; title: string; description: string; features: string[] } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@id": "https://hammad.dpdns.org/#organization"
    },
    "serviceType": service.title,
    "areaServed": ["United States", "Canada", "Worldwide"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://hammad.dpdns.org/services#${service.id}`,
      "servicePhone": null
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map((feature, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aetherion Labs Custom Software & Web Development Services",
    "description": "Custom websites, web applications, AI chatbots, workflow automation, and software engineering services.",
    "provider": {
      "@id": "https://hammad.dpdns.org/#organization"
    },
    "areaServed": ["United States", "Canada", "Worldwide"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": services.map((service, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDescription,
          "url": `https://hammad.dpdns.org/services#${service.id}`
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Aetherion Labs",
    "description": "Get in touch with Aetherion Labs to discuss your custom website, web application, AI, or software prototype project.",
    "url": "https://hammad.dpdns.org/contact",
    "mainEntity": {
      "@id": "https://hammad.dpdns.org/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbListSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
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
        "name": "What does Aetherion Labs do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aetherion Labs is a founder-led custom software and digital product development studio. We design and build business websites, custom web applications, AI applications, AI chatbots, workflow automation pipelines, SaaS MVPs, student prototypes, and custom business tools."
        }
      },
      {
        "@type": "Question",
        "name": "Who does Aetherion Labs work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with startups, founders, small businesses, local businesses, creators, professionals, indie developers, and students with software ideas. We serve clients across the US, Canada, and internationally."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate with clear, transparent project-based pricing. Business websites start from $1,200, web applications from $3,000, AI applications from $3,500, automation workflows from $1,500, and student prototypes from $350. Full SaaS MVPs and complex software are quoted on a custom scope basis."
        }
      },
      {
        "@type": "Question",
        "name": "How long does development typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Websites and automation pipelines typically take 1-3 weeks. Web applications and AI copilots take 3-6 weeks, and full SaaS MVPs take 4-8 weeks depending on scope and feature complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs before project discussions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We respect your intellectual property and confidentiality. We are happy to execute a mutual non-disclosure agreement before any deep technical discussions."
        }
      },
      {
        "@type": "Question",
        "name": "What is your student project positioning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide ethical, professional development support to turn concept ideas, prototypes, and technical architectures into working demonstration software, complete with clean source code and walkthrough tutorials."
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

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Aetherion Labs Client Development Process",
    "description": "Our 6-step collaborative process for scoping, building, and launching custom software.",
    "totalTime": "P4W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "3000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Tell Us What You Need",
        "text": "Submit an inquiry detailing your project goals, references, or requirements.",
        "url": "https://hammad.dpdns.org/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "We Review the Idea",
        "text": "Technical feasibility review and discovery conversation.",
        "url": "https://hammad.dpdns.org/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "Scope & Estimate",
        "text": "Transparent project scope, deliverables, and milestone estimates.",
        "url": "https://hammad.dpdns.org/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "Development",
        "text": "Agile, custom development with live previews and iterative feedback.",
        "url": "https://hammad.dpdns.org/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "Review & Revisions",
        "text": "Hands-on client testing, revisions, and performance optimization.",
        "url": "https://hammad.dpdns.org/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "Launch & Handoff",
        "text": "Production deployment, 100% source code handover, and post-launch support.",
        "url": "https://hammad.dpdns.org/#how-it-works"
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
