import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  GitPullRequest,
  Star,
  GitFork,
  Flame,
  Code2,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ContributionGraph } from '@/components/github/ContributionGraph';
import { GITHUB_TELEMETRY } from '@/data/github';
import { staggerContainer } from '@/lib/motion';

export const GithubSection: React.FC = () => {
  return (
    <AnimatedSection id="github" className="relative bg-background/50">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 h-96 w-96 bg-primary/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <Badge variant="glow" className="px-3.5 py-1 text-xs">
          Open Source Telemetry
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          GitHub Activity & <span className="gradient-text">Open Source Stats</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Live open-source contribution metrics, top programming languages, and recent repositories.
        </p>
      </div>

      {/* Contribution Streak & Quick Telemetry Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card glass className="p-5 rounded-2xl flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
            <Flame className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <p className="text-2xl font-heading font-extrabold text-foreground">
              {GITHUB_TELEMETRY.currentStreakDays}{' '}
              <span className="text-xs font-normal text-muted-foreground">Days</span>
            </p>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Current Streak
            </p>
          </div>
        </Card>

        <Card glass className="p-5 rounded-2xl flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-heading font-extrabold text-foreground">
              {GITHUB_TELEMETRY.longestStreakDays}{' '}
              <span className="text-xs font-normal text-muted-foreground">Days</span>
            </p>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Longest Streak
            </p>
          </div>
        </Card>

        <Card glass className="p-5 rounded-2xl flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
            <GitPullRequest className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-heading font-extrabold text-foreground">
              {GITHUB_TELEMETRY.totalPRs}+
            </p>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Pull Requests
            </p>
          </div>
        </Card>

        <Card glass className="p-5 rounded-2xl flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
            <Star className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-heading font-extrabold text-foreground">
              {GITHUB_TELEMETRY.totalStars}+
            </p>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Stars Earned
            </p>
          </div>
        </Card>
      </div>

      {/* Main Contribution Graph Component */}
      <div className="mb-12">
        <ContributionGraph />
      </div>

      {/* Grid: Top Languages (Left) & Recent Repositories (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Top Languages Column */}
        <div className="lg:col-span-4 space-y-4">
          <Card glass className="p-6 rounded-2xl space-y-5 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 border-b border-border/60 pb-3 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-heading font-bold">Top Languages</h3>
              </div>

              <div className="space-y-4">
                {GITHUB_TELEMETRY.topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-medium">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="font-mono text-primary font-bold">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full ${lang.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-4 border-t border-border/40">
              <a
                href={GITHUB_TELEMETRY.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="glow" className="w-full" leftIcon={<Github className="h-4 w-4" />}>
                  View Full GitHub Profile
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Recent Repositories Column */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-2">
            <h3 className="text-xl font-heading font-bold flex items-center">
              <Github className="h-5 w-5 mr-2 text-primary" /> Featured Repositories
            </h3>
            <a
              href={`${GITHUB_TELEMETRY.profileUrl}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline flex items-center"
            >
              See all repos <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {GITHUB_TELEMETRY.recentRepos.map((repo) => (
              <Card
                key={repo.id}
                glass
                className="p-5 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors flex items-center"
                    >
                      {repo.name}
                      <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${repo.languageColor}`} />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="flex items-center hover:text-amber-400 transition-colors">
                      <Star className="h-3.5 w-3.5 mr-1" /> {repo.stars}
                    </span>
                    <span className="flex items-center hover:text-primary transition-colors">
                      <GitFork className="h-3.5 w-3.5 mr-1" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
