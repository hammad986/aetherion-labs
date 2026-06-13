import { companyInfo } from '@/content/company';
import { ProjectSchema } from '@/content/projects';
import { services } from '@/content/services';

export function GlobalSchema() {
  const sameAs = [
    companyInfo.social.github,
    companyInfo.social.linkedin,
    companyInfo.social.portfolio,
    companyInfo.social.instagram,
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aetherionlabs.qzz.io/#organization",
        "name": companyInfo.name,
        "url": "https://aetherionlabs.qzz.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aetherionlabs.qzz.io/icon.png",
          "width": 512,
          "height": 512,
        },
        "description": companyInfo.positioning,
        "sameAs": sameAs,
        "founder": {
          "@type": "Person",
          "name": companyInfo.founder.name,
          "jobTitle": "Founder & Lead Architect",
          "url": companyInfo.founder.social.portfolio,
          "sameAs": [
            companyInfo.founder.social.linkedin,
            companyInfo.founder.social.github,
            companyInfo.founder.social.instagram,
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": companyInfo.contact.email,
          "contactType": "sales",
          "areaServed": "Worldwide",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aetherionlabs.qzz.io/#website",
        "url": "https://aetherionlabs.qzz.io",
        "name": companyInfo.name,
        "description": companyInfo.positioning,
        "publisher": {
          "@id": "https://aetherionlabs.qzz.io/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aetherionlabs.qzz.io/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
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
    "@type": "Article",
    "headline": project.title,
    "description": project.description,
    "author": {
      "@id": "https://aetherionlabs.qzz.io/#organization"
    },
    "publisher": {
      "@id": "https://aetherionlabs.qzz.io/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aetherionlabs.qzz.io/projects/${project.slug}`
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "keywords": project.technologies.join(', '),
    "about": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "applicationCategory": project.category,
      "operatingSystem": project.type === "Desktop Application" ? "Windows, macOS, Linux" : "Web Browser",
      "url": project.demoUrl || project.downloadUrl || "https://aetherionlabs.qzz.io",
      "author": {
        "@id": "https://aetherionlabs.qzz.io/#organization"
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
      "@id": "https://aetherionlabs.qzz.io/#organization"
    },
    "serviceType": service.title,
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://aetherionlabs.qzz.io/services#${service.id}`,
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
    "name": "Aetherion Labs Engineering Services",
    "description": "Enterprise-grade software development and AI automation services for startups and businesses.",
    "provider": {
      "@id": "https://aetherionlabs.qzz.io/#organization"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services",
      "itemListElement": services.map((service, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://aetherionlabs.qzz.io/services#${service.id}`
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
    "description": "Get in touch with Aetherion Labs to discuss your AI software development project.",
    "url": "https://aetherionlabs.qzz.io/contact",
    "mainEntity": {
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
        "name": "What services does Aetherion Labs offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aetherion Labs specializes in AI web applications, automation systems, AI chatbots and integrations, and startup MVP development. We build production-ready software using modern technologies like Next.js, TypeScript, LangChain, and custom LLM integrations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most MVP projects take 3-6 weeks, while comprehensive SaaS platforms take 6-12 weeks. Enterprise-grade systems with complex AI integrations can take 3-6 months depending on scope and requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing maintenance and support retainers to ensure your systems scale securely. We also provide hand-off documentation and can train your team on the delivered systems."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Aetherion Labs use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use strictly modern, type-safe technologies including Next.js, React, TypeScript, Python, LangChain, OpenAI GPT-4, Anthropic Claude, PostgreSQL, Supabase, and cloud platforms like AWS and Vercel."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign NDAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we take confidentiality seriously. We can sign an NDA before any deep technical discussions to protect your ideas and business logic."
        }
      },
      {
        "@type": "Question",
        "name": "What is the pricing model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work on a project-basis with transparent pricing ranges. Starter projects range from $3k-$8k, Growth projects from $8k-$20k, and Custom enterprise solutions start at $20k+. Every engagement begins with a free discovery call and tailored architectural proposal."
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
    "name": "Aetherion Labs Engineering Process",
    "description": "Our structured, transparent engineering process designed to eliminate risk and guarantee product quality.",
    "totalTime": "P8W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "5000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Discovery",
        "text": "Deep dive into your business model, identifying operational bottlenecks and technical requirements.",
        "url": "https://aetherionlabs.qzz.io/#process"
      },
      {
        "@type": "HowToStep",
        "name": "Planning",
        "text": "Aligning on goals, defining core features, mapping user journeys, and finalizing the product roadmap.",
        "url": "https://aetherionlabs.qzz.io/#process"
      },
      {
        "@type": "HowToStep",
        "name": "Architecture",
        "text": "Designing scalable database schemas, system boundaries, and selecting the optimal technology stack.",
        "url": "https://aetherionlabs.qzz.io/#process"
      },
      {
        "@type": "HowToStep",
        "name": "Development",
        "text": "Iterative, agile engineering focusing on code quality, performance, and integrating intelligent AI logic.",
        "url": "https://aetherionlabs.qzz.io/#process"
      },
      {
        "@type": "HowToStep",
        "name": "Testing",
        "text": "Rigorous QA, automated testing, and security auditing to ensure enterprise-grade reliability.",
        "url": "https://aetherionlabs.qzz.io/#process"
      },
      {
        "@type": "HowToStep",
        "name": "Delivery",
        "text": "Seamless deployment, hand-off documentation, and continuous monitoring for performance optimization.",
        "url": "https://aetherionlabs.qzz.io/#process"
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
