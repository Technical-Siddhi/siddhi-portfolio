import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const SpotlightBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(mousePosition.x, { stiffness: 150, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
  }, [mousePosition, springX, springY]);

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Aurora Ambient Gradient Blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-cyan-400/10 blur-[120px] opacity-70 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-500/15 to-primary/25 blur-[120px] opacity-60 animate-float"
        aria-hidden="true"
      />

      {/* Interactive Mouse Spotlight Overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Children Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};
