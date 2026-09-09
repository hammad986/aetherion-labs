export interface ProcessStep {
  number: number;
  title: string;
  shortDesc: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Tell Us What You Need",
    shortDesc: "Share your idea, challenges, and goals.",
    description: "Submit our short inquiry form or send us an email. Share what you want to build, any existing references, target timelines, or notes — even if you only have a rough concept."
  },
  {
    number: 2,
    title: "We Review the Idea",
    shortDesc: "Technical evaluation and feasibility check.",
    description: "We review your requirements, determine the best technical architecture, and follow up with clarifying questions or hop on a quick discovery chat."
  },
  {
    number: 3,
    title: "Scope & Estimate",
    shortDesc: "Transparent quote and milestones.",
    description: "You receive a clear breakdown of project scope, deliverables, realistic timeline, and fixed or phased pricing before any commitments are made. NDA signed upon request."
  },
  {
    number: 4,
    title: "Development",
    shortDesc: "Agile, custom build with live updates.",
    description: "We build your software with modern, reliable technologies. You receive regular progress updates and staging previews to test features as they are built."
  },
  {
    number: 5,
    title: "Review & Revisions",
    shortDesc: "Hands-on testing and feedback iterations.",
    description: "You test the working application thoroughly. We implement your feedback, address edge cases, optimize performance, and ensure every requirement is met."
  },
  {
    number: 6,
    title: "Launch & Handoff",
    shortDesc: "Deployment, source code, and handover.",
    description: "We deploy your project to production, hand over all source code and documentation, configure domain and hosting, and provide post-launch support."
  }
];
