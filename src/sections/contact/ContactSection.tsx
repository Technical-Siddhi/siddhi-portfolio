import React from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted-foreground">Contact section placeholder module.</p>
      </div>
    </SectionContainer>
  );
};
