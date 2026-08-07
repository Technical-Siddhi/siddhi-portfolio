import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Layers,
  Zap,
  ShieldCheck,
  FileDown,
  Briefcase,
  Award,
  CheckCircle,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RESUME_URL } from '@/constants/navigation';
import { PORTFOLIO_EXPERIENCE } from '@/data/experience';
import { fadeIn, staggerContainer } from '@/lib/motion';
import portraitImg from '@/assets/images/developer_portrait.png';

const STATS = [
  { label: 'Years Experience', value: 4, suffix: '+', icon: Briefcase },
  { label: 'Projects Delivered', value: 25, suffix: '+', icon: Code },
  { label: 'Tech Stack Mastery', value: 15, suffix: '+', icon: Layers },
  { label: 'Lighthouse Score Avg', value: 99, suffix: '%', icon: Award },
];

const CORE_STRENGTHS = [
  {
    title: 'Clean Architecture',
    description: 'Enforcing modular folder organization, dependency injection, and scalable state isolation.',
    icon: ShieldCheck,
  },
  {
    title: 'Full-Stack MERN Mastery',
    description: 'Deep specialization in React 18, Node.js, Express, MongoDB, and TypeScript ecosystem.',
    icon: Code,
  },
  {
    title: 'Performance & Optimization',
    description: 'Achieving sub-second load times, 95+ Lighthouse scores, and zero unnecessary re-renders.',
    icon: Zap,
  },
  {
    title: 'UI/UX Craftsmanship',
    description: 'Transforming complex specs into modern, responsive glassmorphic interfaces with micro-interactions.',
    icon: Layers,
  },
];

export const AboutSection: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <AnimatedSection id="about" className="relative bg-background/50">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          About Me
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Architecting <span className="gradient-text">Modern Web Applications</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          A passionate Senior Full Stack Engineer dedicated to building high-impact digital products.
        </p>
      </div>

      {/* Main Grid: Left Portrait & Bio, Right Strengths & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Left Column: Portrait & Highlights */}
        <motion.div
          variants={fadeIn('right', 0.1)}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative group w-full max-w-sm">
            {/* Halo Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500" />

            {/* Photo Card Frame */}
            <Card glass className="relative p-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={portraitImg}
                alt="Siddhi Raj Professional Portrait"
                className="w-full h-80 sm:h-96 object-cover object-top rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 rounded-xl border border-white/20 shadow-lg backdrop-blur-md">
                  <div className="flex items-center space-x-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Siddhi Raj</p>
                      <p className="text-[11px] text-muted-foreground">Full Stack MERN Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Strengths */}
        <motion.div variants={fadeIn('left', 0.2)} className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Passionate about scalable code, performance & elegant user experiences.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 4 years of hands-on experience in full-stack engineering, I specialize in building robust enterprise solutions using the MERN stack, TypeScript, and modern web architectures. My engineering philosophy revolves around writing clean, self-documenting code, enforcing strict type safety, and optimizing for real-world user metrics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether architecting complex micro-frontend routing or optimizing database indexing, I bridge the gap between high-level architectural design and pixel-perfect UI execution.
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {CORE_STRENGTHS.map((strength) => {
              const Icon = strength.icon;
              return (
                <Card key={strength.title} glass className="p-4 rounded-xl hover:border-primary/40 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-foreground">
                        {strength.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-normal">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Resume Download */}
          <div className="pt-4 flex items-center space-x-4">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="glow" leftIcon={<FileDown className="h-4 w-4" />}>
                Download Full Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Statistics Banner */}
      <div ref={statsRef} className="my-16">
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} glass className="p-6 text-center rounded-2xl hover:border-primary/40 transition-all">
                <CardContent className="p-0 space-y-2">
                  <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
                    {statsInView ? (
                      <CountUp start={0} end={stat.value} duration={2.5} />
                    ) : (
                      0
                    )}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>

      {/* Career Timeline Preview */}
      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="text-xs px-3">
            Career Timeline Preview
          </Badge>
          <h3 className="text-2xl font-heading font-bold">Key Milestones</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_EXPERIENCE.map((exp) => (
            <Card key={exp.id} glass className="p-6 rounded-2xl border border-border/80 space-y-4">
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div>
                  <h4 className="text-base font-bold font-heading text-foreground">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-primary font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="text-xs font-mono">
                  {exp.period}
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-1.5 pt-1">
                {exp.achievements.slice(0, 2).map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-foreground/90">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
