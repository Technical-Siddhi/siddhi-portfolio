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
      {/* Architectural Ambient Gradient Spheres */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-transparent blur-[140px] opacity-60 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-700/12 via-indigo-600/10 to-cyan-500/08 blur-[140px] opacity-50 animate-float"
        aria-hidden="true"
      />

      {/* Interactive Mouse Spotlight Overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${springX.get()}px ${springY.get()}px, rgba(99, 102, 241, 0.06), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Architectural Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-obsidian-grid opacity-40 pointer-events-none" />

      {/* Main Children Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};
