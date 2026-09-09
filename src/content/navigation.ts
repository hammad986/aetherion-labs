export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Build', href: '/#what-we-build' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const footerNavigation = {
  whatWeBuild: [
    { label: 'Business Websites', href: '/services#website-development' },
    { label: 'Custom Web Apps', href: '/services#web-application-development' },
    { label: 'AI Applications', href: '/services#ai-applications' },
    { label: 'AI Chatbots', href: '/services#ai-chatbots' },
    { label: 'Automation & APIs', href: '/services#automation-integrations' },
    { label: 'SaaS & MVPs', href: '/services#saas-mvp-development' },
    { label: 'Student Projects & Prototypes', href: '/services#student-prototypes' },
    { label: 'Custom Software', href: '/services#custom-software' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Selected Work', href: '/projects' },
    { label: 'Pricing & Estimates', href: '/pricing' },
    { label: 'How We Work', href: '/#how-it-works' },
    { label: 'Why Aetherion Labs', href: '/#why-us' },
    { label: 'Contact & Inquiries', href: '/contact' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' }
  ]
};
