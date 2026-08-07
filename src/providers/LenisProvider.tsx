import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const isTest =
    (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') ||
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'test');

  if (isTest) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
};
