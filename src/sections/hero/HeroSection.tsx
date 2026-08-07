import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const HeroSection: React.FC = () => {
  return (
    <SectionContainer id="hero" className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Full Stack Architecture
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Siddhi Raj Portfolio 2026
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Project Architecture Initialized. Modern React 18, TypeScript, Lenis Smooth Scroll, Zustand, and Tailwind CSS.
        </p>
      </div>
    </SectionContainer>
  );
};
