import React from 'react';
import { SEOHead } from '@/components/common/SEOHead';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead title="404 — Page Not Found | Siddhi Raj" />
      <SectionContainer id="not-found" className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <span className="text-6xl font-black text-primary">404</span>
          <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page or route you are looking for does not exist or has been moved.
          </p>
          <div>
            <a href="/">
              <Button size="lg">Return to Home</Button>
            </a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};
