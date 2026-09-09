export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  whatItIs: string;
  whoItIsFor: string;
  whatCanBeBuilt: string[];
  exampleUseCases: string[];
  keyFeatures: string[];
  ctaText: string;
  ctaHref: string;
  icon: string;
}

export const services: ServiceDetail[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, high-converting business websites, landing pages, and portfolios designed to establish credibility and capture customers.',
    whatItIs: 'We design and engineer bespoke websites tailored to your brand identity and business objectives. Unlike template-based agencies using slow drag-and-drop page builders, we handcraft performant, accessible, and SEO-optimized websites with Next.js, React, and modern CSS that load instantly and convert visitors into clients.',
    whoItIsFor: 'Small businesses, service providers, local shops, creators, consultancies, and independent professionals looking for a credible online presence.',
    whatCanBeBuilt: [
      'Business & corporate websites',
      'Service & consultancy websites',
      'High-converting marketing landing pages',
      'Booking & appointment websites',
      'Restaurant, café & local storefront websites',
      'Creator & agency portfolio websites',
      'Modern ecommerce storefronts'
    ],
    exampleUseCases: [
      'A local service business needing an online booking system and client review showcase.',
      'A boutique law or consulting firm wanting a sleek, trustworthy digital presence.',
      'A SaaS startup needing a high-converting marketing landing page to capture waitlist leads.'
    ],
    keyFeatures: [
      'Sub-second page load speeds & clean semantic code',
      'Mobile-first responsive design across all devices',
      'On-page SEO optimization & metadata schema',
      'Contact forms with automated email alerts',
      'Interactive elements with subtle modern transitions'
    ],
    ctaText: 'Get a Website Estimate',
    ctaHref: '/contact?type=website',
    icon: 'Globe'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Scalable, database-driven web apps, client portals, dashboards, and internal management tools.',
    whatItIs: 'Full-stack web application engineering from database architecture to intuitive frontend UI. We build software that allows users to sign up, manage workflows, visualize complex data, process payments, and collaborate securely in the cloud.',
    whoItIsFor: 'Startups, growing businesses, and organizations needing custom software to streamline internal operations or launch client-facing services.',
    whatCanBeBuilt: [
      'Interactive analytics dashboards & reporting suites',
      'Secure client portals & member areas',
      'Admin panels & content management backends',
      'Booking, scheduling, and reservation systems',
      'Order tracking & operational management systems',
      'Database-driven web applications'
    ],
    exampleUseCases: [
      'A logistics company replacing paper logs with a real-time web portal for drivers and dispatchers.',
      'A fitness studio needing a custom member portal with class scheduling and membership management.',
      'A financial consultancy wanting an interactive client dashboard to display personalized portfolio metrics.'
    ],
    keyFeatures: [
      'Type-safe architectures with Next.js, React, and TypeScript',
      'Relational databases (PostgreSQL, Supabase) with row-level security',
      'Robust authentication, passwordless login, and RBAC permissions',
      'REST & GraphQL API connectivity',
      'Real-time data synchronization and live telemetry'
    ],
    ctaText: 'Discuss Your Web App',
    ctaHref: '/contact?type=web-app',
    icon: 'LayoutDashboard'
  },
  {
    id: 'ai-applications',
    title: 'AI Application Development',
    shortDescription: 'Intelligent software powered by Large Language Models, document intelligence, computer vision, and custom AI logic.',
    whatItIs: 'We embed state-of-the-art AI directly into practical software solutions. Moving far beyond trivial prompt wrappers, we architect systems where intelligence is woven into your product workflow — from Retrieval-Augmented Generation (RAG) pipelines that understand private documents to multi-model analysis systems.',
    whoItIsFor: 'Founders building AI-first products, enterprises looking to modernize operations, and businesses with proprietary documents or datasets.',
    whatCanBeBuilt: [
      'RAG applications that query private documents, manuals, and PDFs',
      'Automated document extraction and financial invoice parsers',
      'Domain-specific AI copilots and analytical assistants',
      'Computer vision inspection and desktop image analytics tools',
      'AI content generation, summarizing, and data categorization platforms'
    ],
    exampleUseCases: [
      'A real estate firm that allows agents to ask questions and instantly retrieve clauses from 500-page lease agreements.',
      'An accounting office that automatically parses incoming receipts into structured accounting data with human-in-the-loop verification.',
      'A research team that needs computer vision software to detect objects in live video feeds.'
    ],
    keyFeatures: [
      'Integrations with OpenAI (GPT-4o), Anthropic (Claude 3.5), and Google Gemini',
      'Vector databases (pgvector, FAISS) for instant semantic search',
      'Deterministic output parsing using strict Zod schemas',
      'Background asynchronous processing queues for heavy AI tasks',
      'Privacy-first architecture ensuring zero unconsented data sharing'
    ],
    ctaText: 'Explore AI Development',
    ctaHref: '/contact?type=ai-app',
    icon: 'Cpu'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Conversational Agents',
    shortDescription: 'Intelligent, context-aware conversational bots trained on your data to handle customer inquiries 24/7.',
    whatItIs: 'We engineer intelligent chatbots that understand context, synthesize answers from your knowledge base, and escalate to human operators when needed. These agents deliver accurate, polite, and brand-aligned interactions across web widgets, messaging platforms, and internal workspaces.',
    whoItIsFor: 'E-commerce brands, SaaS companies, service providers, and teams overwhelmed by repetitive support tickets and customer questions.',
    whatCanBeBuilt: [
      'Website customer support copilots with custom knowledge retrieval',
      'Lead qualification and intake chatbots that capture prospect details',
      'Internal employee knowledge base assistants (HR, IT, standard operating procedures)',
      'Multi-channel bots deployed to Web, Slack, Discord, or WhatsApp',
      'Conversational sales assistants that recommend products or services'
    ],
    exampleUseCases: [
      'An online store deploying a 24/7 shopping assistant that answers shipping, refund, and product questions accurately.',
      'A software company whose internal chatbot answers employee questions about company policies, API docs, and codebases.',
      'A dental clinic capturing after-hours patient appointment requests conversationally.'
    ],
    keyFeatures: [
      'Grounded strictly on your FAQs, product catalogs, and documentation',
      'Natural conversational flow with real-time text streaming',
      'Lead capture forms and contact synchronization',
      'Smart guardrails to prevent hallucinations or off-brand responses',
      'Complete transcript analytics and conversation logs'
    ],
    ctaText: 'Build Your AI Chatbot',
    ctaHref: '/contact?type=ai-chatbot',
    icon: 'MessageSquare'
  },
  {
    id: 'automation-integrations',
    title: 'Automation & Integrations',
    shortDescription: 'Eliminate repetitive manual tasks by connecting disparate tools and engineering automated backend pipelines.',
    whatItIs: 'We design end-to-end automation systems that free your team from tedious busywork. By connecting your CRM, email, accounting software, spreadsheets, and databases through reliable APIs, webhooks, and background workers, we turn multi-step manual processes into frictionless, hands-off automation.',
    whoItIsFor: 'Businesses losing hours every week to manual data entry, fragmented software tools, invoice generation, or lead routing.',
    whatCanBeBuilt: [
      'Multi-tool API integrations and webhooks',
      'Automated client onboarding and welcome sequences',
      'Invoice, receipt, and billing automation pipelines',
      'Automated data syncing between spreadsheets, CRMs, and databases',
      'Custom scrapers and scheduled data extraction jobs',
      'Automated reporting and executive summary alerts'
    ],
    exampleUseCases: [
      'A marketing agency that automatically generates and emails monthly client performance reports from multiple analytics platforms.',
      'An e-commerce business that automatically updates inventory levels across Shopify, Amazon, and their internal warehouse database.',
      'A sales team where incoming leads are enriched with company data and routed to the right representative within seconds.'
    ],
    keyFeatures: [
      'Event-driven serverless architecture for instant execution',
      'Redis queues and automated retries for bulletproof reliability',
      'Third-party API connectors (Stripe, HubSpot, Notion, Google Workspace, Slack)',
      'Automated error alerts sent straight to your team',
      'Security-first secret management and encrypted API credentials'
    ],
    ctaText: 'Automate Your Workflows',
    ctaHref: '/contact?type=automation',
    icon: 'Workflow'
  },
  {
    id: 'saas-mvp-development',
    title: 'SaaS & MVP Development',
    shortDescription: 'Turn your software idea into a launched, revenue-ready product with speed and engineering discipline.',
    whatItIs: 'Our MVP development process is built for speed without accumulating fatal technical debt. We partner directly with founders to distill their vision into a core feature set, build a rock-solid production foundation, and launch a polished product in weeks rather than quarters.',
    whoItIsFor: 'Early-stage startup founders, domain experts building niche software, and creators launching their first software product.',
    whatCanBeBuilt: [
      'Multi-tenant SaaS platforms with user workspaces',
      'Subscription-based software with Stripe billing & tiers',
      'Product-market fit prototypes with analytics tracking',
      'B2B web software with enterprise-grade auth and dashboards',
      'Marketplaces and two-sided transactional platforms'
    ],
    exampleUseCases: [
      'A real estate broker turning their unique valuation method into a subscription SaaS for other agents.',
      'A creator building a paid micro-tool with Stripe checkout for their audience.',
      'A founder needing a working prototype to demo to investors and onboard beta users.'
    ],
    keyFeatures: [
      'Rapid zero-to-one development within 4 to 8 weeks',
      'Production-ready authentication, team invites, and security',
      'Stripe subscription checkout, webhooks, and customer portal',
      'Scalable Next.js + PostgreSQL stack ready to handle thousands of users',
      'Clean, documented codebase that you own 100%'
    ],
    ctaText: 'Launch Your MVP',
    ctaHref: '/contact?type=saas-mvp',
    icon: 'Rocket'
  },
  {
    id: 'student-prototypes',
    title: 'Student Projects & Prototypes',
    shortDescription: 'Technical development support to turn project ideas, research concepts, and prototypes into working software.',
    whatItIs: 'We provide hands-on engineering and technical development support to students, researchers, indie hackers, and aspiring developers who have an idea for a project and need assistance building a functional working prototype, demonstration, or technical proof-of-concept.',
    whoItIsFor: 'Students, researchers, self-taught developers, and makers with a concept who want development support, architecture guidance, and working software.',
    whatCanBeBuilt: [
      'Interactive prototype web applications and dashboards',
      'AI and machine learning demonstration systems',
      'Full-stack prototype implementations with modern UI',
      'API integrations and database-backed proof-of-concepts',
      'Desktop utilities and computer vision demo tools',
      'Working software prototypes for presentations and demonstrations'
    ],
    exampleUseCases: [
      'A computer science student wanting a functional web app prototype for their project demonstration.',
      'A graduate researcher needing a clean web dashboard to visualize experimental data.',
      'An aspiring software builder needing guidance on connecting their frontend UI to a Python backend.'
    ],
    keyFeatures: [
      'Clean, well-documented, readable code with thorough comments',
      'Comprehensive setup instructions and README guides',
      'Code walkthrough sessions explaining how the application functions',
      'Modern, industry-standard tech stack (Next.js, Python, PostgreSQL)',
      '100% ethical technical assistance and prototype development'
    ],
    ctaText: 'Discuss Your Project',
    ctaHref: '/contact?type=student-prototype',
    icon: 'GraduationCap'
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Internal Tools',
    shortDescription: 'Tailored software systems, management portals, and specialized applications engineered to solve unique business challenges.',
    whatItIs: 'When commercial off-the-shelf software is either too restrictive, too expensive, or fails to match your proprietary operational workflow, we build bespoke software. From customized ERP components and inventory trackers to specialized desktop applications, we engineer systems tailored precisely to your operational needs.',
    whoItIsFor: 'Established businesses, growing operations, and teams with specialized workflows that require custom technical solutions.',
    whatCanBeBuilt: [
      'Custom inventory and warehouse management systems',
      'Proprietary workflow management and job ticketing portals',
      'Legacy software modernization and database migration',
      'Specialized cross-platform desktop utilities (Python, PyQt)',
      'Enterprise API middleware and data transformation bridges',
      'Secure internal tools with custom role-based access'
    ],
    exampleUseCases: [
      'A manufacturing business replacing disjointed spreadsheets with a central order-tracking and parts-inventory system.',
      'A healthcare staffing agency needing a customized scheduling system with compliance verification.',
      'A media agency needing a custom desktop application for batch media processing and watermarking.'
    ],
    keyFeatures: [
      'Engineered specifically to mirror your real-world business logic',
      'Zero unnecessary recurring subscription seats or per-user penalties',
      'Complete ownership of intellectual property and source code',
      'Scalable architecture designed for high availability and data integrity',
      'Comprehensive deployment, handover, and ongoing support options'
    ],
    ctaText: 'Discuss Custom Software',
    ctaHref: '/contact?type=custom-software',
    icon: 'Layers'
  }
];
