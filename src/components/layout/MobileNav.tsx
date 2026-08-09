import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { NAV_ITEMS, RESUME_URL } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/socials';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  // Lock scroll and handle escape key
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Glass Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-white/10 bg-obsidian-surface/95 glass-panel p-6 shadow-obsidian flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <span className="font-display font-extrabold text-lg text-foreground flex items-center">
                  <span>Siddhi</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold">.Dev</span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full border border-white/10"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5" role="navigation">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-sans transition-all',
                        isActive
                          ? 'bg-primary/15 text-foreground font-semibold border border-primary/30'
                          : 'text-muted-foreground hover:bg-card hover:text-foreground border border-transparent'
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Footer Actions */}
            <div className="space-y-4 pt-6 border-t border-border/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">THEME</span>
                <ThemeToggle />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a href="#contact" onClick={onClose} className="w-full">
                  <Button variant="glow" size="sm" className="w-full text-xs" leftIcon={<MessageSquare className="h-3.5 w-3.5" />}>
                    Contact
                  </Button>
                </a>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="sm" className="w-full text-xs border-white/10" leftIcon={<Download className="h-3.5 w-3.5" />}>
                    Resume
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-2 text-muted-foreground">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-xs font-mono"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
