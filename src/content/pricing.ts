export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  idealCustomer: string;
  deliverables: string[];
  timeline: string;
  highlighted?: boolean;
}

export const pricing: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceRange: '$3k - $8k',
    description: 'Perfect for validating an idea or launching a high-quality MVP.',
    idealCustomer: 'Early-stage founders, creators, and solopreneurs needing a solid foundation.',
    deliverables: [
      'Core web application development',
      'Basic AI/LLM integration',
      'Modern, responsive UI/UX',
      'Standard deployment setup'
    ],
    timeline: '3-6 weeks'
  },
  {
    id: 'growth',
    name: 'Growth',
    priceRange: '$8k - $20k',
    description: 'Comprehensive solutions for scaling startups requiring robust architecture.',
    idealCustomer: 'Funded startups and established businesses needing advanced systems.',
    deliverables: [
      'Complex multi-user SaaS platforms',
      'Advanced RAG pipelines & agents',
      'Custom automation workflows',
      'Scalable database & cloud architecture'
    ],
    timeline: '6-12 weeks',
    highlighted: true
  },
  {
    id: 'custom',
    name: 'Custom',
    priceRange: '$20k+',
    description: 'Enterprise-grade development for highly specific, complex operational needs.',
    idealCustomer: 'Scale-ups requiring dedicated ongoing development or deeply integrated AI.',
    deliverables: [
      'Enterprise security & compliance',
      'Proprietary AI model fine-tuning',
      'High-availability infrastructure',
      'Ongoing technical partnership'
    ],
    timeline: '3+ months'
  }
];
