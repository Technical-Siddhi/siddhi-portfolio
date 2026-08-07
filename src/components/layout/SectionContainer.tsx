import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ id, children, className, fullWidth = false, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn('py-16 md:py-24 lg:py-32 relative overflow-hidden', className)}
        {...props}
      >
        <div
          className={cn(
            'mx-auto px-4 sm:px-6 lg:px-8',
            fullWidth ? 'w-full' : 'max-w-7xl'
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);
SectionContainer.displayName = 'SectionContainer';
