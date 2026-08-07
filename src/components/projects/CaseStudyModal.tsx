import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-6 md:inset-10 lg:inset-x-20 lg:inset-y-12 z-50 overflow-y-auto max-w-5xl mx-auto rounded-2xl glass-panel border border-white/20 dark:border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} Case Study`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-border/60 pb-5">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="glow" className="text-xs">
                      <Sparkles className="h-3 w-3 mr-1" /> Case Study
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-sm text-primary font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close Case Study"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Metrics Banner */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <Card key={metric.label} glass className="p-4 text-center rounded-xl">
                      <p className="text-2xl font-heading font-extrabold text-primary">
                        {metric.value}
                      </p>
                      <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </p>
                    </Card>
                  ))}
                </div>
              )}

              {/* Image Preview */}
              <div className="relative rounded-xl overflow-hidden border border-border/60 max-h-72">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card glass className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                  <div className="flex items-center space-x-2 text-red-500 font-heading font-bold mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.problemStatement}
                  </p>
                </Card>

                <Card glass className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <div className="flex items-center space-x-2 text-emerald-500 font-heading font-bold mb-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Architectural Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </Card>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-base font-heading font-bold text-foreground flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" /> Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-xs sm:text-sm text-foreground/90 p-2.5 rounded-lg bg-card border border-border/40"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & Lessons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider flex items-center">
                    <AlertCircle className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
                    Technical Challenges
                  </h4>
                  {project.challenges.map((c, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground leading-relaxed p-2.5 rounded-lg bg-secondary/50">
                      • {c}
                    </p>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider flex items-center">
                    <Lightbulb className="h-3.5 w-3.5 mr-1.5 text-primary" />
                    Lessons Learned
                  </h4>
                  {project.lessonsLearned.map((l, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground leading-relaxed p-2.5 rounded-lg bg-secondary/50">
                      • {l}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-2 flex flex-wrap gap-2 border-t border-border/40">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="glass" className="text-xs py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-end space-x-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" leftIcon={<Github className="h-4 w-4" />}>
                    GitHub Code
                  </Button>
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="glow" size="sm" rightIcon={<ExternalLink className="h-4 w-4" />}>
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
