import { ExperienceItem } from '@/types';

export const PORTFOLIO_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full Stack Developer',
    company: 'Enterprise Tech Solutions',
    location: 'Remote',
    period: '2023 — Present',
    type: 'Full-time',
    description: 'Architecting scalable web applications, micro-frontends, and enterprise backend APIs.',
    achievements: [
      'Led the migration of legacy client applications to React 18 & TypeScript with zero downtime.',
      'Reduced initial page load latency by 45% using code splitting and modern asset pipeline optimizations.',
      'Mentored a team of 6 engineers on clean architecture, component design patterns, and automated testing.',
    ],
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Docker', 'GraphQL'],
  },
  {
    id: 'exp-2',
    role: 'Full Stack Engineer',
    company: 'Innovation Labs',
    location: 'Hybrid',
    period: '2021 — 2023',
    type: 'Full-time',
    description: 'Developed SaaS dashboards, automated telemetry tracking systems, and responsive user portals.',
    achievements: [
      'Designed and released RBAC authorization modules serving over 50,000 active monthly users.',
      'Integrated payment and webhook processors with robust retry queues and audit logging.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Redis', 'AWS'],
  },
];
