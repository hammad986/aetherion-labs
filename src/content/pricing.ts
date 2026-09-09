export interface PricingCategory {
  id: string;
  category: string;
  startingPrice: string;
  priceType: 'starting-from' | 'custom-quote';
  description: string;
  typicalTimeline: string;
  idealFor: string;
  deliverables: string[];
  ctaText: string;
  badge?: string;
  highlighted?: boolean;
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'websites',
    category: 'Websites & Landing Pages',
    startingPrice: 'Starting from $1,200',
    priceType: 'starting-from',
    description: 'High-converting business websites, service sites, landing pages, and portfolios designed to build credibility and drive leads.',
    typicalTimeline: '1 - 3 weeks',
    idealFor: 'Small businesses, service providers, creators, and local businesses needing a fast, professional online presence.',
    deliverables: [
      'Custom design (no bloated page builder templates)',
      'Fully responsive & mobile optimized',
      'Fast page load speeds & SEO metadata setup',
      'Contact forms, booking integration, or lead capture',
      'Content management & easy editing setup'
    ],
    ctaText: 'Get a Website Estimate',
    badge: 'Popular for Businesses'
  },
  {
    id: 'web-apps',
    category: 'Custom Web Applications',
    startingPrice: 'Starting from $3,000',
    priceType: 'starting-from',
    description: 'Dynamic, database-driven web applications, user portals, booking engines, and internal management systems.',
    typicalTimeline: '3 - 6 weeks',
    idealFor: 'Startups and businesses looking for custom software tools, customer portals, or operations dashboards.',
    deliverables: [
      'Secure authentication & role-based permissions',
      'Relational database architecture (PostgreSQL/Supabase)',
      'Custom UI components with React & Next.js',
      'REST or GraphQL API integrations',
      'Production deployment & staging environment'
    ],
    ctaText: 'Get a Web App Estimate',
    highlighted: true,
    badge: 'High Value'
  },
  {
    id: 'ai-applications',
    category: 'AI Applications & Chatbots',
    startingPrice: 'Starting from $3,500',
    priceType: 'starting-from',
    description: 'Smart AI assistants, conversational chatbots, RAG systems (chat with your documents), and custom LLM workflows.',
    typicalTimeline: '3 - 6 weeks',
    idealFor: 'Companies wanting to leverage AI for customer support, document analysis, knowledge management, or smart features.',
    deliverables: [
      'Custom LLM integrations (OpenAI, Claude, Gemini)',
      'RAG pipeline with semantic vector search',
      'Custom AI chatbot interface with streaming answers',
      'Grounding on your private business data or documents',
      'Admin analytics & conversation history'
    ],
    ctaText: 'Get an AI Project Estimate'
  },
  {
    id: 'automation',
    category: 'Automation & Integrations',
    startingPrice: 'Starting from $1,500',
    priceType: 'starting-from',
    description: 'Eliminate repetitive manual tasks with automated workflows, data pipelines, scraping, and multi-app API connections.',
    typicalTimeline: '1 - 3 weeks',
    idealFor: 'Businesses spending hours on repetitive data entry, multi-tool updates, report generation, or invoicing.',
    deliverables: [
      'Custom API integrations across business tools',
      'Event-driven webhooks & queue processing',
      'Document parsing & automated data extraction',
      'Automated error notifications & logging',
      'Reliable serverless cloud execution'
    ],
    ctaText: 'Get an Automation Estimate'
  },
  {
    id: 'student-prototypes',
    category: 'Student Projects & Prototypes',
    startingPrice: 'Starting from $350',
    priceType: 'starting-from',
    description: 'Technical development support to turn concept ideas, capstone ideas, or innovative prototypes into fully working software demos.',
    typicalTimeline: '1 - 2 weeks',
    idealFor: 'Students, researchers, and indie developers who need hands-on technical implementation support for prototypes and demos.',
    deliverables: [
      'Functional working software prototype or demo',
      'Modern tech stack (Next.js, Python, or React)',
      'Clear, clean, well-commented source code',
      'Architecture overview & execution instructions',
      'Walkthrough of how the application operates'
    ],
    ctaText: 'Discuss Your Prototype',
    badge: 'Accessible & Practical'
  },
  {
    id: 'saas-mvp',
    category: 'SaaS Products & MVPs',
    startingPrice: 'Custom quote',
    priceType: 'custom-quote',
    description: 'End-to-end minimum viable product engineering designed to get your startup into market and acquire early paying customers.',
    typicalTimeline: '4 - 8 weeks',
    idealFor: 'Early-stage founders validating market demand with a production-grade initial product.',
    deliverables: [
      'Full-stack multi-tenant or SaaS architecture',
      'Stripe subscription & billing integration',
      'Onboarding, auth, dashboards & core product features',
      'Scalable cloud infrastructure & analytics setup',
      'Founder-to-founder strategic technical guidance'
    ],
    ctaText: 'Request MVP Quote'
  },
  {
    id: 'custom-software',
    category: 'Complex Custom Software',
    startingPrice: 'Custom quote',
    priceType: 'custom-quote',
    description: 'Bespoke enterprise-grade systems, multi-platform software, legacy modernization, and deep custom integrations.',
    typicalTimeline: 'Flexible / Phased',
    idealFor: 'Established businesses with specialized operational models that off-the-shelf software cannot satisfy.',
    deliverables: [
      'Deep architectural discovery & requirements specification',
      'Tailored internal portals, ERPs, or workflow systems',
      'Strict security, data encryption, and compliance readiness',
      'Comprehensive documentation & team training',
      'Ongoing dedicated engineering partnership'
    ],
    ctaText: 'Discuss Custom Software'
  }
];

export const pricingNotice = {
  headline: "Transparent, flexible pricing tailored to your actual scope.",
  note: "Every project is different. Final pricing depends on scope, features, integrations, design requirements, and timeline.",
  commitments: [
    "No hidden agency fees or bloated retainers",
    "Detailed written estimate before any work starts",
    "Flexible milestones & phased delivery",
    "NDA available upon request"
  ]
};
