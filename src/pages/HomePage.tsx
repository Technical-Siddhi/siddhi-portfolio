import React from 'react';
import { SEOHead } from '@/components/common/SEOHead';
import { HeroSection } from '@/sections/hero/HeroSection';
import { AboutSection } from '@/sections/about/AboutSection';
import { ExperienceSection } from '@/sections/experience/ExperienceSection';
import { SkillsSection } from '@/sections/skills/SkillsSection';
import { ProjectsSection } from '@/sections/projects/ProjectsSection';
import { GithubSection } from '@/sections/github/GithubSection';
import { AchievementsSection } from '@/sections/achievements/AchievementsSection';
import { ContactSection } from '@/sections/contact/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
};
