'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/content/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-gray-200/80 shadow-xs group-hover:scale-105 transition-transform bg-gray-900">
            <Image
              src="/assets/aetherion_brand_logo.png"
              alt="Aetherion Labs Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-950">
            Aetherion<span className="text-primary font-normal">Labs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary font-semibold' : 'text-gray-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={buttonVariants({
              size: "sm",
              className: "rounded-full px-5 shadow-xs font-semibold hover:shadow-sm",
            })}
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
            >
              <nav className="flex flex-col gap-5 text-center my-auto">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-semibold tracking-tight transition-colors ${
                      pathname === item.href ? 'text-primary' : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 mt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full rounded-full shadow-md text-base font-semibold",
                    })}
                  >
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
