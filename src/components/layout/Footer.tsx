import React from 'react';
import { SOCIAL_LINKS } from '@/constants/socials';
import { SITE_METADATA } from '@/constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p>© {currentYear} {SITE_METADATA.author}. Built with React 18, TypeScript & Tailwind CSS.</p>
        </div>

        <div className="flex items-center space-x-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
