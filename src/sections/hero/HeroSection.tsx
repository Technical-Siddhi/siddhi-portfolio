import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Abstract3DTechVisual } from '@/components/hero/Abstract3DTechVisual';
import { SpotlightBackground } from '@/components/common/SpotlightBackground';
import { fadeIn, staggerContainer } from '@/lib/motion';

const HERO_TECH_PILLS = [
  'React 18',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Next.js',
];

export const HeroSection: React.FC = () => {
  return (
    <SpotlightBackground>
      <section
        id="hero"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-8 flex flex-col justify-center overflow-hidden bg-obsidian text-foreground"
      >
        {/* Ambient Radial Lighting & Subtle Grid Background */}
        <div className="absolute top-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />
        <div className="absolute top-16 right-10 h-72 w-72 rounded-full bg-cyan-500/08 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-obsidian-grid opacity-25 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10 py-4">
          {/* Two-Column Desktop Hero Layout (Left Information / Right User Provided 3D Tech Visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Headline in One Line, Role, Description, Pills & CTAs */}
            <motion.div
              variants={staggerContainer(0.06, 0.03)}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left"
            >
              {/* Technical Eyebrow */}
              <motion.div variants={fadeIn('up', 0)}>
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  FULL STACK ENGINEER · MERN
                </span>
              </motion.div>

              {/* Main Headline on One Line */}
              <motion.div variants={fadeIn('up', 0.05)}>
                <h1 className="font-display font-extrabold tracking-tight leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-foreground">Hi, I&apos;m </span>
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Siddhi Raj
                  </span>
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.div variants={fadeIn('up', 0.08)}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground/90">
                  Full Stack MERN Developer
                </h2>
              </motion.div>

              {/* Concise Professional Description */}
              <motion.p
                variants={fadeIn('up', 0.12)}
                className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans"
              >
                I build scalable, production-ready web applications and modern digital experiences using React, TypeScript, Node.js and MongoDB.
              </motion.p>

              {/* Compact Technology Pills */}
              <motion.div variants={fadeIn('up', 0.16)} className="flex flex-wrap gap-2 pt-0.5">
                {HERO_TECH_PILLS.map((tech) => (
                  <Badge
                    key={tech}
                    variant="glass"
                    className="text-[11px] font-mono py-0.5 px-3 border-white/10 hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div
                variants={fadeIn('up', 0.2)}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <a href="#projects">
                  <Button
                    variant="glow"
                    size="default"
                    className="group rounded-full font-heading font-semibold text-xs sm:text-sm px-6 py-2.5"
                    rightIcon={
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    }
                  >
                    View Projects
                  </Button>
                </a>

                <a href="#contact">
                  <Button
                    variant="glass"
                    size="default"
                    className="rounded-full font-heading font-semibold text-xs sm:text-sm px-6 py-2.5 border-white/10 hover:border-primary/40"
                    leftIcon={<Mail className="h-4 w-4" />}
                  >
                    Let&apos;s Talk
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: User Provided 3D Technology Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Abstract3DTechVisual />
            </div>
          </div>
        </div>
      </section>
    </SpotlightBackground>
  );
};
