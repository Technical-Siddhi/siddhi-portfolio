export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  featured: boolean;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Open Source';
  tags: string[];
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  icon?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
}
