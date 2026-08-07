import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { PageTransition } from '@/components/animations/PageTransition';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pt-16">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};
