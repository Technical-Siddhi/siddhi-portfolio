import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SpotlightBackground } from '@/components/common/SpotlightBackground';
import { HeroVisualCard } from '@/components/hero/HeroVisualCard';
import { RESUME_URL } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/socials';
import { fadeIn, staggerContainer } from '@/lib/motion';

const HERO_TECH_BADGES = [
  'React 18',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Next.js',
  'Express.js',
  'Tailwind CSS',
];

export const HeroSection: React.FC = () => {
  return (
    <SpotlightBackground>
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] pt-12 pb-20 lg:py-24 flex flex-col justify-between overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
          <motion.div
            variants={staggerContainer(0.15, 0)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Status Badge */}
              <motion.div variants={fadeIn('up', 0)} className="inline-block">
                <div className="glass-panel inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for Full-Time Roles & Projects</span>
                  <Sparkles className="h-3.5 w-3.5 ml-1" />
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeIn('up', 0.1)} className="space-y-3">
                <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1]">
                  Hi, I&apos;m{' '}
                  <span className="gradient-text-accent">Siddhi Raj</span>
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-muted-foreground h-12 flex items-center">
                  <TypeAnimation
                    sequence={[
                      'Full Stack MERN Developer',
                      2000,
                      'React & TypeScript Specialist',
                      2000,
                      'Enterprise Software Architect',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-foreground"
                  />
                </div>
              </motion.div>

              {/* Sub-tagline */}
              <motion.p
                variants={fadeIn('up', 0.2)}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Engineered with precision. I build ultra-fast, scalable web applications
                and cloud architecture using React 18, TypeScript, Node.js, and modern SaaS design patterns.
              </motion.p>

              {/* Tech Stack Badges */}
              <motion.div variants={fadeIn('up', 0.25)} className="flex flex-wrap gap-2 pt-1">
                {HERO_TECH_BADGES.map((badge) => (
                  <Badge key={badge} variant="glass" className="text-xs py-1 px-3">
                    {badge}
                  </Badge>
                ))}
              </motion.div>

              {/* CTA Buttons Group */}
              <motion.div
                variants={fadeIn('up', 0.3)}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a href="#projects">
                  <Button variant="glow" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    View Projects
                  </Button>
                </a>

                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    leftIcon={<Download className="h-4 w-4" />}
                  >
                    Resume
                  </Button>
                </a>

                <a href="#contact">
                  <Button
                    variant="glass"
                    size="lg"
                    leftIcon={<Mail className="h-4 w-4" />}
                  >
                    Contact Me
                  </Button>
                </a>
              </motion.div>

              {/* Quick Social Links */}
              <motion.div
                variants={fadeIn('up', 0.35)}
                className="flex items-center space-x-6 pt-4 text-muted-foreground border-t border-border/40"
              >
                <span className="text-xs font-medium uppercase tracking-wider">Connect:</span>
                <div className="flex items-center space-x-4">
                  {SOCIAL_LINKS.map((social) => {
                    const IconComp =
                      social.id === 'github'
                        ? Github
                        : social.id === 'linkedin'
                        ? Linkedin
                        : Mail;
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                      >
                        <IconComp className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Column */}
            <motion.div
              variants={fadeIn('left', 0.25)}
              className="lg:col-span-5 flex justify-center"
            >
              <HeroVisualCard />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto pt-10 text-center"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll down to About section"
          >
            <span className="mb-2 tracking-widest uppercase text-[10px]">Scroll Down</span>
            <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1 group-hover:border-primary transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
            </div>
            <ChevronDown className="h-4 w-4 mt-1 animate-bounce text-muted-foreground group-hover:text-primary" />
          </a>
        </motion.div>
      </section>
    </SpotlightBackground>
  );
};
