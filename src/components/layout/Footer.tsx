import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation } from '@/content/navigation';
import { companyInfo } from '@/content/company';
import { Globe2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/assets/aetherion_logo.png"
                alt="Aetherion Labs"
                width={32}
                height={32}
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                Aetherion Labs
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {companyInfo.positioning}
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 border border-gray-800 px-3.5 py-1.5 text-xs text-gray-300">
              <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>{companyInfo.trustStatement}</span>
            </div>

            <div className="flex items-center gap-4 pt-2 text-gray-400">
              <a
                href={companyInfo.social.linkedin}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={companyInfo.social.github}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.36 0-1.4-.5-2.55-1.33-3.4.13-.33.6-1.6-.13-3.36 0 0-1.08-.34-3.5 1.3-1-.28-2.1-.42-3.2-.42s-2.2.14-3.2.42c-2.42-1.64-3.5-1.3-3.5-1.3-.73 1.76-.26 3.03-.13 3.36-.83.85-1.33 2-1.33 3.4 0 4.83 3 6.02 6 6.36-.9.2-1.6.9-1.9 2.1-.8.36-2.7.46-4-1.2-1.1-1.3-2-1.3-2-1.3-1.1-.1-.1.9-.1.9 1.1.4 1.7 1.7 1.7 1.7 1.1 2.3 3.2 2.1 4 1.8v2.7"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={companyInfo.social.portfolio}
                className="text-gray-400 hover:text-white transition-colors text-xs font-semibold px-2 py-1 rounded bg-gray-900 border border-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
              >
                Portfolio
              </a>
              <a
                href={companyInfo.social.instagram}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* What We Build Nav */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              What We Build
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {footerNavigation.whatWeBuild.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Studio
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Legal & Trust
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-900 text-xs text-gray-500">
              NDA signed prior to project discussions upon request.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p>
            Serving clients across the US, Canada, and worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
