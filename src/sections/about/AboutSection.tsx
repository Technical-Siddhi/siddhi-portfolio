import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <p className="text-muted-foreground">About section placeholder module.</p>
      </div>
    </SectionContainer>
  );
};
