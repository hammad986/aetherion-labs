export interface ServiceSchema {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
}

export const services: ServiceSchema[] = [
  {
    id: 'ai-web-applications',
    title: 'AI Web Applications',
    description: 'Production-ready web applications integrated with powerful language models and custom AI logic.',
    longDescription: 'We build production-ready web applications integrated with powerful language models and custom AI logic. Our AI web apps go beyond simple chatbot wrappers — we architect systems where intelligence is embedded at every layer. From Retrieval-Augmented Generation (RAG) pipelines that give your application deep domain knowledge, to multi-agent systems that autonomously handle complex workflows, we engineer AI-native products that deliver real business value. Every application is built with Next.js, TypeScript, and modern cloud infrastructure for maximum performance and scalability.',
    features: ['Custom LLM integrations (GPT-4, Claude, Gemini)', 'RAG pipelines with vector search', 'Next.js & React architectures', 'Scalable serverless backends', 'Multi-agent AI orchestration', 'Real-time streaming responses'],
    icon: 'Cpu'
  },
  {
    id: 'automation-systems',
    title: 'Automation Systems',
    description: 'Replace repetitive operational tasks with intelligent, reliable automation pipelines.',
    longDescription: 'Replace repetitive operational tasks with intelligent, reliable automation pipelines. We design and build end-to-end automation systems that handle your most time-consuming business processes — from document ingestion and data extraction to workflow orchestration and third-party API integrations. Our systems use event-driven architectures, Redis queues, and serverless functions to process thousands of tasks reliably and at scale. Whether you need to automate invoice processing, customer onboarding, or internal reporting, we build pipelines that run autonomously and alert you only when human intervention is needed.',
    features: ['Workflow automation & orchestration', 'Document processing pipelines', 'Data extraction with LLMs', 'Third-party API integration', 'Event-driven serverless architecture', 'Monitoring and alerting dashboards'],
    icon: 'Workflow'
  },
  {
    id: 'ai-chatbots-integrations',
    title: 'AI Chatbots & Integrations',
    description: 'Deploy intelligent conversational agents that understand your business data and assist your users.',
    longDescription: 'Deploy intelligent conversational agents that understand your business data and assist your users. We build chatbots that go far beyond scripted responses — our conversational AI systems use semantic search, context-aware reasoning, and retrieval-augmented generation to provide accurate, helpful answers grounded in your actual business data. Whether you need a customer support copilot, an internal knowledge base assistant, or a sales qualification bot, we engineer conversational experiences that feel natural and deliver measurable results.',
    features: ['Semantic search over business data', 'Context-aware conversational AI', 'Multi-platform deployment (web, Slack, Discord)', 'Analytics and conversation tracking', 'Custom knowledge base integration', 'Human-in-the-loop escalation'],
    icon: 'MessageSquare'
  },
  {
    id: 'startup-mvp-development',
    title: 'Startup MVP Development',
    description: 'From idea to launched product in weeks. We help startups find product-market fit fast.',
    longDescription: 'From idea to launched product in weeks. We help startups find product-market fit fast. Our MVP development process is designed for speed without sacrificing quality. We work closely with founders to identify the core features that matter most, architect a scalable foundation, and ship a polished product that real users can interact with. Using rapid prototyping, iterative development, and modern deployment pipelines, we compress months of development into weeks. Every MVP is built with production-grade code — not throwaway prototypes — so you can scale confidently from day one.',
    features: ['Rapid prototyping and iteration', 'Core feature prioritization', 'Modern UI/UX design', 'Go-to-market technical strategy', 'Scalable cloud deployment', 'Analytics and user feedback integration'],
    icon: 'Rocket'
  }
];
