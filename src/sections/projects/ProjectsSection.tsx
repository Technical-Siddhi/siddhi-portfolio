import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  Sparkles,
  Award,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaseStudyModal } from '@/components/projects/CaseStudyModal';
import { PORTFOLIO_PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const ProjectsSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const primaryProject = PORTFOLIO_PROJECTS.find((p) => p.isPrimaryFlagship) || PORTFOLIO_PROJECTS[0];
  const secondaryProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== primaryProject.id);

  return (
    <AnimatedSection id="projects" className="relative bg-background">
      {/* Background glow halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-primary/10 blur-[180px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          Featured Work
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Enterprise <span className="gradient-text-accent">Projects & Applications</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Production-grade applications built with scalable architectures and zero compromises.
        </p>
      </div>

      {/* PRIMARY FLAGSHIP SHOWCASE CARD: AttendX HRMS */}
      {primaryProject && (
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card
            glass
            className="relative p-6 sm:p-8 md:p-10 rounded-3xl border border-primary/30 shadow-2xl overflow-hidden group hover:border-primary/60 transition-all duration-500"
          >
            {/* Top Flagship Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center space-x-2">
                <Badge variant="glow" className="text-xs px-3 py-1">
                  <Sparkles className="h-3.5 w-3.5 mr-1" /> Flagship Showcase
                </Badge>
                <Badge variant="secondary" className="text-xs font-mono">
                  {primaryProject.category}
                </Badge>
              </div>
              {primaryProject.metrics && (
                <div className="flex items-center space-x-4 text-xs font-mono">
                  {primaryProject.metrics.map((m) => (
                    <span key={m.label} className="text-muted-foreground">
                      <strong className="text-primary font-bold">{m.value}</strong> {m.label}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Split Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image Preview */}
              <div className="lg:col-span-6 relative group/img rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={primaryProject.thumbnail}
                  alt={primaryProject.title}
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Right Column: Information & Key Deliverables */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    {primaryProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {primaryProject.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {primaryProject.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2">
                  <p className="text-xs font-bold font-heading uppercase text-foreground tracking-wider">
                    Core Architectural Features:
                  </p>
                  {primaryProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {primaryProject.tags.map((tag) => (
                    <Badge key={tag} variant="glass" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Button
                    variant="glow"
                    size="default"
                    onClick={() => setSelectedCaseStudy(primaryProject)}
                    leftIcon={<BookOpen className="h-4 w-4" />}
                  >
                    View Case Study
                  </Button>

                  {primaryProject.demoUrl && (
                    <a href={primaryProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="default" rightIcon={<ArrowUpRight className="h-4 w-4" />}>
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {primaryProject.githubUrl && (
                    <a href={primaryProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" aria-label="GitHub Repository">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* SECONDARY PROJECTS GRID */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-heading font-bold">More Key Projects</h3>
        </div>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {secondaryProjects.map((project) => (
            <Card
              key={project.id}
              glass
              className="p-0 rounded-2xl border border-border/80 hover:border-primary/40 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              {/* Image Preview Header */}
              <div className="relative overflow-hidden h-56 border-b border-border/60">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="glow" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-primary font-medium">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[11px] py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Footer Buttons Trio */}
                <CardFooter className="p-0 pt-4 border-t border-border/50 flex items-center justify-between">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setSelectedCaseStudy(project)}
                    leftIcon={<BookOpen className="h-3.5 w-3.5" />}
                  >
                    Case Study
                  </Button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" aria-label="GitHub Repository">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" rightIcon={<ExternalLink className="h-3.5 w-3.5" />}>
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </AnimatedSection>
  );
};
