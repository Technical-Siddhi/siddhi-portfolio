import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Bot,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_SKILLS } from '@/data/skills';
import { SkillItem } from '@/types';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cloud,
  'ai-tools': Bot,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    ...PORTFOLIO_SKILLS.map((cat) => ({
      id: cat.id,
      name: cat.name,
      icon: CATEGORY_ICONS[cat.id] || Code2,
    })),
  ];

  const displayedSkills =
    selectedCategory === 'all'
      ? PORTFOLIO_SKILLS.flatMap((cat) =>
          cat.skills.map((s) => ({ ...s, categoryName: cat.name }))
        )
      : PORTFOLIO_SKILLS.filter((cat) => cat.id === selectedCategory).flatMap((cat) =>
          cat.skills.map((s) => ({ ...s, categoryName: cat.name }))
        );

  return (
    <AnimatedSection id="skills" className="relative bg-background/50">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-10 h-80 w-80 bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          Technical Arsenal
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Skills & <span className="gradient-text-accent">Technology Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Mastered frameworks, languages, databases, and DevOps automation tools.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <Button
              key={cat.id}
              variant={isSelected ? 'default' : 'glass'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'rounded-full px-4 text-xs font-semibold transition-all',
                isSelected ? 'shadow-md shadow-primary/20' : 'text-muted-foreground hover:text-foreground'
              )}
              leftIcon={<Icon className="h-3.5 w-3.5" />}
            >
              {cat.name}
            </Button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayedSkills.map((skill: SkillItem & { categoryName?: string }, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <Card
                glass
                className="p-5 rounded-2xl border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      {skill.categoryName && (
                        <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">
                          {skill.categoryName}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Level Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="h-2 w-full rounded-full bg-secondary/80 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-medium pt-0.5">
                    <span className="flex items-center text-emerald-500">
                      <CheckCircle className="h-3 w-3 mr-1" /> Production Ready
                    </span>
                    <span>Proficiency</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
};
