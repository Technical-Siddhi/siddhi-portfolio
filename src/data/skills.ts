import { SkillCategory } from '@/types';

export const PORTFOLIO_SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    skills: [
      { name: 'React 18 / 19', level: 95, featured: true },
      { name: 'TypeScript', level: 92, featured: true },
      { name: 'Next.js', level: 88, featured: true },
      { name: 'Tailwind CSS', level: 95, featured: true },
      { name: 'Framer Motion', level: 85, featured: true },
      { name: 'Redux Toolkit / Zustand', level: 90, featured: false },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    skills: [
      { name: 'Node.js / Express', level: 90, featured: true },
      { name: 'REST APIs & GraphQL', level: 88, featured: true },
      { name: 'MongoDB / PostgreSQL', level: 85, featured: true },
      { name: 'Docker / CI/CD', level: 80, featured: false },
    ],
  },
  {
    id: 'tooling',
    name: 'Tooling & Architecture',
    skills: [
      { name: 'Vite / Webpack', level: 90, featured: true },
      { name: 'Git & GitHub Workflows', level: 92, featured: true },
      { name: 'Jest / Playwright', level: 82, featured: false },
      { name: 'Lighthouse & Accessibility (a11y)', level: 90, featured: true },
    ],
  },
];
