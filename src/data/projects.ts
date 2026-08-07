import { Project } from '@/types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'attendx-hrms',
    title: 'AttendX Enterprise HRMS Platform',
    slug: 'attendx-hrms',
    tagline: 'Enterprise-grade Human Resource & Attendance Management Platform with multi-role RBAC.',
    description: 'Full-stack enterprise SaaS for attendance tracking, leave management, automated payroll calculations, and real-time employee profile telemetry.',
    featured: true,
    category: 'Full Stack',
    tags: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    thumbnail: '/assets/images/projects/attendx.jpg',
    githubUrl: 'https://github.com/SiddhiRaj/attendx',
    demoUrl: 'https://attendx.dev',
    keyFeatures: [
      'Multi-role access control (Admin, Manager, Employee)',
      'Real-time biometric & geofenced check-in',
      'Automated payroll and attendance matrix generation',
      'Glassmorphic telemetry dashboards with micro-interactions',
    ],
  },
  {
    id: 'starwars-explorer',
    title: 'Star Wars Galactic Explorer',
    slug: 'starwars-explorer',
    tagline: 'Interactive Star Wars universe browser powered by SWAPI & Framer Motion.',
    description: 'High-performance interactive portal featuring rich character statistics, planet telemetry, film timelines, dynamic search, and glassmorphic UI cards.',
    featured: true,
    category: 'Frontend',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'SWAPI'],
    thumbnail: '/assets/images/projects/starwars.jpg',
    githubUrl: 'https://github.com/SiddhiRaj/starwars-explorer',
    demoUrl: 'https://starwars-explorer.dev',
    keyFeatures: [
      'Infinite search & multi-attribute filter pipeline',
      'Framer Motion smooth card transitions & modal overlays',
      'Lighthouse 98+ accessibility & performance optimization',
    ],
  },
];
