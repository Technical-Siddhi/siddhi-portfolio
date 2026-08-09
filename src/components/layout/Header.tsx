import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileDown, MessageSquare } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import { MobileNav } from './MobileNav';
import { NAV_ITEMS, RESUME_URL } from '@/constants/navigation';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const isScrolled = useScroll(20);
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none',
        isScrolled ? 'py-3' : 'py-5'
      )}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
        {/* Brand Logo: Siddhi.Dev */}
        <a
          href="#hero"
          className="group flex items-center text-base sm:text-lg font-display font-extrabold tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="text-foreground">Siddhi</span>
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold">.Dev</span>
        </a>

        {/* Minimal Desktop Navigation Dock */}
        <nav
          className={cn(
            'hidden lg:flex items-center space-x-0.5 rounded-full px-3 py-1.5 transition-all duration-300',
            isScrolled
              ? 'glass-panel bg-obsidian-surface/90 border border-white/10 shadow-obsidian shadow-lg backdrop-blur-xl'
              : 'glass-card bg-obsidian-surface/50 border border-white/5 shadow-xs backdrop-blur-md'
          )}
          role="navigation"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-xs font-sans transition-colors',
                  isActive
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-2.5">
          <div className="hidden sm:flex items-center space-x-2">
            <a href="#contact">
              <Button
                variant="glow"
                size="sm"
                className="rounded-full text-xs font-heading font-semibold px-4"
                leftIcon={<MessageSquare className="h-3.5 w-3.5" />}
              >
                Let&apos;s Talk
              </Button>
            </a>

            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-white/10 text-xs font-sans hover:bg-card"
                leftIcon={<FileDown className="h-3.5 w-3.5" />}
              >
                Resume
              </Button>
            </a>
          </div>

          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden rounded-full border border-white/10"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
};
