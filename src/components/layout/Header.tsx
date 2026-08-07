import React from 'react';
import { useScroll } from '@/hooks/useScroll';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { NAV_ITEMS } from '@/constants/navigation';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const isScrolled = useScroll(20);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Siddhi Raj<span className="text-primary">.dev</span>
        </a>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
