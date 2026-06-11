export interface ServiceSchema {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: ServiceSchema[] = [
  {
    id: 'ai-web-applications',
    title: 'AI Web Applications',
    description: 'We build production-ready web applications integrated with powerful language models and custom AI logic.',
    features: ['Custom LLM integrations', 'RAG pipelines', 'Next.js & React architectures', 'Scalable backends'],
    icon: 'Cpu' // Lucide icon name mapping
  },
  {
    id: 'automation-systems',
    title: 'Automation Systems',
    description: 'Replace repetitive operational tasks with intelligent, reliable automation pipelines.',
    features: ['Workflow automation', 'Data pipeline engineering', 'Document processing systems', 'Third-party API integration'],
    icon: 'Workflow'
  },
  {
    id: 'ai-chatbots-integrations',
    title: 'AI Chatbots & Integrations',
    description: 'Deploy intelligent conversational agents that understand your business data and assist your users.',
    features: ['Semantic search', 'Context-aware responses', 'Multi-platform deployment', 'Analytics and tracking'],
    icon: 'MessageSquare'
  },
  {
    id: 'startup-mvp-development',
    title: 'Startup MVP Development',
    description: 'From idea to launched product in weeks. We help startups find product-market fit fast.',
    features: ['Rapid prototyping', 'Core feature engineering', 'Modern UI/UX design', 'Go-to-market technical strategy'],
    icon: 'Rocket'
  }
];
