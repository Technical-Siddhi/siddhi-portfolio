import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileDown } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'glass-panel border-b border-border/80 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-lg font-heading font-extrabold tracking-tight hover:opacity-85 transition-opacity"
        >
          Siddhi Raj<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-1 glass-card rounded-full px-4 py-1.5 border border-border/50 shadow-xs"
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
                  'relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/30 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                leftIcon={<FileDown className="h-3.5 w-3.5" />}
              >
                Resume
              </Button>
            </a>
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden"
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
