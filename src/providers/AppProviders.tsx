import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ThemeProvider } from './ThemeProvider';
import { QueryProvider } from './QueryProvider';
import { LenisProvider } from './LenisProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <QueryProvider>
        <ThemeProvider>
          <LenisProvider>
            {children}
            <Toaster position="bottom-right" richColors />
          </LenisProvider>
        </ThemeProvider>
      </QueryProvider>
    </HelmetProvider>
  );
};
