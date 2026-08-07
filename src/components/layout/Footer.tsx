import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/socials';
import { SITE_METADATA, NAV_ITEMS } from '@/constants/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur-md pt-16 pb-12 text-sm text-muted-foreground overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-heading font-extrabold text-foreground tracking-tight">
                Siddhi <span className="gradient-text">Raj</span>
              </span>
              <Badge variant="glow" className="text-[10px] py-0.5 px-2">
                2026 Edition
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Senior Full Stack MERN & Web Architect specializing in high-performance SaaS interfaces, design systems, and microservices.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold font-heading uppercase text-foreground tracking-wider">
              Navigation Links
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top CTA */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <p className="text-xs font-bold font-heading uppercase text-foreground tracking-wider">
              Return to Top
            </p>
            <Button
              variant="glow"
              size="sm"
              onClick={scrollToTop}
              leftIcon={<ArrowUp className="h-4 w-4" />}
              className="rounded-full px-5 shadow-lg"
            >
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/60" />

        {/* Bottom Copyright & Built With Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span>© {currentYear} {SITE_METADATA.author}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center text-foreground font-medium">
              Crafted with <Heart className="h-3.5 w-3.5 text-red-500 mx-1 fill-red-500/20" /> using React 18 & TypeScript
            </span>
          </div>

          {/* Social Icon Row */}
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon =
                link.id === 'github'
                  ? Github
                  : link.id === 'linkedin'
                  ? Linkedin
                  : Mail;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-card border border-border/60 hover:border-primary/40 hover:text-primary transition-all shadow-sm"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
