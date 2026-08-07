import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  BookOpen,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_EXPERIENCE, PORTFOLIO_EDUCATION } from '@/data/experience';
import { cn } from '@/lib/utils';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <AnimatedSection id="experience" className="relative bg-background">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 h-96 w-96 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          Career Milestone
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Professional <span className="gradient-text">Experience & Education</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          My engineering journey, enterprise contributions, and academic background.
        </p>
      </div>

      {/* Tab Controls */}
      <div className="flex justify-center mb-16">
        <div className="glass-card inline-flex p-1.5 rounded-full border border-border/60 shadow-sm">
          <Button
            variant={activeTab === 'work' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('work')}
            className={cn(
              'rounded-full px-6 text-xs font-semibold transition-all',
              activeTab === 'work' ? 'shadow-md' : 'text-muted-foreground hover:text-foreground'
            )}
            leftIcon={<Briefcase className="h-4 w-4" />}
          >
            Work Experience
          </Button>

          <Button
            variant={activeTab === 'education' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('education')}
            className={cn(
              'rounded-full px-6 text-xs font-semibold transition-all',
              activeTab === 'education' ? 'shadow-md' : 'text-muted-foreground hover:text-foreground'
            )}
            leftIcon={<GraduationCap className="h-4 w-4" />}
          >
            Education & Degrees
          </Button>
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
        {/* Animated Connecting Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-indigo-500 to-transparent origin-top transform sm:-translate-x-1/2"
        />

        {/* Tab Content Switching */}
        <AnimatePresence mode="wait">
          {activeTab === 'work' ? (
            <motion.div
              key="work-timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {PORTFOLIO_EXPERIENCE.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={exp.id}
                    className={cn(
                      'relative flex flex-col sm:flex-row items-center',
                      isEven ? 'sm:flex-row-reverse' : ''
                    )}
                  >
                    {/* Timeline Node Icon Circle */}
                    <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary shadow-md shadow-primary/30">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </span>
                    </div>

                    {/* Timeline Card Content */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 sm:group-even:pl-8 sm:group-even:pr-0">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <Card glass className="p-6 rounded-2xl hover:border-primary/40 transition-all shadow-md group">
                          {/* Period & Type Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <Badge variant="glow" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {exp.period}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
                              {exp.location} • {exp.type}
                            </span>
                          </div>

                          {/* Role & Company */}
                          <div className="mb-3">
                            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-primary/90 flex items-center mt-0.5">
                              <Building2 className="h-4 w-4 mr-1.5" />
                              {exp.company}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Key Achievements */}
                          <div className="space-y-2 mb-5">
                            <p className="text-xs font-bold font-heading text-foreground uppercase tracking-wider">
                              Key Deliverables:
                            </p>
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-xs text-foreground/90">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-[11px] py-0.5">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="education-timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {PORTFOLIO_EDUCATION.map((edu, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={edu.id}
                    className={cn(
                      'relative flex flex-col sm:flex-row items-center',
                      isEven ? 'sm:flex-row-reverse' : ''
                    )}
                  >
                    {/* Node Circle */}
                    <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-indigo-500 shadow-md shadow-indigo-500/30">
                        <GraduationCap className="h-4 w-4 text-indigo-400" />
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 sm:group-even:pl-8 sm:group-even:pr-0">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        <Card glass className="p-6 rounded-2xl hover:border-indigo-500/40 transition-all shadow-md group">
                          {/* Period */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <Badge variant="accent" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {edu.period}
                            </Badge>
                            {edu.grade && (
                              <span className="text-xs font-semibold text-emerald-500">
                                {edu.grade}
                              </span>
                            )}
                          </div>

                          {/* Degree & Institution */}
                          <div className="mb-3">
                            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-sm font-semibold text-indigo-400 flex items-center mt-0.5">
                              <BookOpen className="h-4 w-4 mr-1.5" />
                              {edu.institution} • {edu.location}
                            </p>
                          </div>

                          {/* Academic Highlights */}
                          <div className="space-y-2 mb-5">
                            <p className="text-xs font-bold font-heading text-foreground uppercase tracking-wider">
                              Highlights & Honors:
                            </p>
                            {edu.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-xs text-foreground/90">
                                <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Key Coursework */}
                          <div className="pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                            {edu.courses.map((course) => (
                              <Badge key={course} variant="outline" className="text-[11px] py-0.5">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};
