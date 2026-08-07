import { ExperienceItem, EducationItem } from '@/types';

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
      'Reduced initial page load latency by 45% using code splitting, Vite optimizations, and CDN caching.',
      'Mentored a team of 6 engineers on clean architecture, component design patterns, and automated testing with Vitest.',
    ],
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Docker', 'GraphQL', 'Vitest'],
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
      'Integrated payment gateway webhooks with robust retry queues and automated audit logging.',
      'Constructed glassmorphic design systems resulting in a 30% increase in user engagement metrics.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Redis', 'AWS', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Nexus Software',
    location: 'On-site',
    period: '2020 — 2021',
    type: 'Full-time',
    description: 'Built interactive customer-facing web applications and reusable UI component libraries.',
    achievements: [
      'Engineered cross-browser responsive interfaces with 100% WCAG accessibility compliance.',
      'Collaborated closely with product designers to implement pixel-perfect micro-animations.',
    ],
    technologies: ['React', 'JavaScript', 'HTML5/CSS3', 'REST APIs', 'Redux Toolkit'],
  },
];

export const PORTFOLIO_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'University Institute of Engineering & Technology',
    location: 'India',
    period: '2016 — 2020',
    grade: 'First Class with Distinction (8.8/10 CGPA)',
    highlights: [
      'Graduated Top 5% of class with specialization in Software Engineering & Data Structures.',
      'Led the University Web Development Club and organized national level hackathons.',
      'Published research paper on Distributed Systems & Microservice Performance Optimization.',
    ],
    courses: ['Data Structures & Algorithms', 'Database Systems', 'Object Oriented Programming', 'Cloud Computing', 'Web Engineering'],
  },
  {
    id: 'edu-2',
    degree: 'Full Stack Web Architecture Certification',
    institution: 'Enterprise Tech Academy',
    location: 'Online',
    period: '2021',
    grade: 'Certified Architect',
    highlights: [
      'Mastered advanced React patterns, custom state managers, and CI/CD deployment pipelines.',
      'Completed capstone enterprise SaaS project with 99% Lighthouse audit score.',
    ],
    courses: ['Advanced React Patterns', 'Node.js Security', 'Microservices', 'GraphQL Systems'],
  },
];
