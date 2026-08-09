import React from 'react';
import { motion } from 'framer-motion';
import userHeroVisual from '@/assets/user_hero_tech_visual.png';

export const Abstract3DTechVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center select-none pointer-events-none">
      {/* Volumetric Purple & Electric Cyan Glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 w-80 sm:w-96 rounded-full bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-cyan-400/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 h-48 w-48 rounded-full bg-cyan-400/12 blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full max-w-[480px] max-h-[480px] flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Subtle Ambient Lighting Ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/15 via-transparent to-cyan-400/15 blur-xl opacity-70 pointer-events-none" />

          {/* User's 3D Software Engineering System Visual */}
          <img
            src={userHeroVisual}
            alt="Software Engineering System Visual"
            className="w-full h-full object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)] border border-white/10 p-1.5 bg-obsidian-surface/60 backdrop-blur-md"
          />

          {/* Ambient Particles */}
          <motion.div
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 right-10 h-2.5 w-2.5 rounded-full bg-cyan-400 blur-[1px] shadow-sm shadow-cyan-400"
          />
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 left-8 h-3 w-3 rounded-full bg-violet-400 blur-[1px] shadow-sm shadow-violet-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
