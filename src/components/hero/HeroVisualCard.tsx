import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const FLOATING_TECH = [
  { name: 'React 18', color: 'from-cyan-500 to-blue-600', position: '-top-6 -left-6', delay: 0 },
  { name: 'TypeScript', color: 'from-blue-600 to-indigo-600', position: 'top-1/4 -right-8', delay: 0.2 },
  { name: 'Node.js & MERN', color: 'from-emerald-500 to-teal-600', position: '-bottom-6 -left-4', delay: 0.4 },
  { name: 'Tailwind CSS', color: 'from-sky-400 to-cyan-500', position: 'bottom-1/3 -right-6', delay: 0.6 },
];

export const HeroVisualCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 opacity-30 blur-xl animate-pulse-glow" />

      {/* Main SaaS IDE Glass Window */}
      <Card glass className="relative p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10 dark:border-white/10">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center">
              <Terminal className="h-3.5 w-3.5 mr-1" />
              architect.config.ts
            </span>
          </div>
          <Badge variant="glow" className="text-[10px] px-2 py-0.5">
            <Sparkles className="h-3 w-3 mr-1" /> Enterprise Ready
          </Badge>
        </div>

        {/* Code Visual Output */}
        <div className="space-y-4 font-mono text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-primary font-bold">const</span>
            <span className="text-foreground">engineer</span>
            <span>=</span>
            <span className="text-emerald-500 dark:text-emerald-400">&apos;Siddhi Raj&apos;</span>;
          </div>

          <div className="pl-4 border-l-2 border-primary/30 space-y-2 text-muted-foreground">
            <p>
              <span className="text-indigo-400">role:</span>{' '}
              <span className="text-amber-400">&apos;Full Stack MERN Developer&apos;</span>,
            </p>
            <p>
              <span className="text-indigo-400">expertise:</span> [
              <span className="text-cyan-400">&apos;React 18&apos;</span>,{' '}
              <span className="text-cyan-400">&apos;TypeScript&apos;</span>,{' '}
              <span className="text-cyan-400">&apos;Node.js&apos;</span>],
            </p>
            <p>
              <span className="text-indigo-400">performanceScore:</span>{' '}
              <span className="text-emerald-400">99</span>,
            </p>
            <p>
              <span className="text-indigo-400">status:</span>{' '}
              <span className="text-emerald-400">&apos;Open to Opportunities&apos;</span>
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs border-t border-border/40">
            <span className="flex items-center text-emerald-500 font-sans font-medium">
              <CheckCircle2 className="h-4 w-4 mr-1.5" />
              System Architecture Verified
            </span>
            <span className="flex items-center text-muted-foreground">
              <Cpu className="h-3.5 w-3.5 mr-1 text-primary" /> 60 FPS Smooth
            </span>
          </div>
        </div>
      </Card>

      {/* Floating Badges Surrounding the Card */}
      {FLOATING_TECH.map((tech) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tech.delay, duration: 0.5 }}
          className={`absolute ${tech.position} hidden sm:block z-30`}
        >
          <div className="glass-card flex items-center space-x-2 px-3.5 py-2 rounded-xl border border-white/20 shadow-xl backdrop-blur-xl animate-float">
            <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
            <Code2 className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold font-heading text-foreground">
              {tech.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
