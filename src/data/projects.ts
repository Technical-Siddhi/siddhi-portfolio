import { Project } from '@/types';
import attendxImg from '@/assets/images/attendx_preview.png';
import starwarsImg from '@/assets/images/starwars_preview.png';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'attendx-hrms',
    title: 'AttendX Enterprise HRMS & Employee Portal',
    slug: 'attendx-hrms',
    tagline: 'Enterprise-grade Human Resource & Role-Based Employee Management Platform',
    description:
      'A full-stack enterprise MERN application engineered for automated employee attendance, shift tracking, role-based access control (RBAC), and salary management.',
    fullDescription:
      'AttendX is an enterprise SaaS platform built with React 18, Node.js, Express, MongoDB, and Tailwind CSS. It features dynamic multi-role authorization (Admin, HR, Employee), real-time attendance logging, interactive visual dashboards, and automated payroll report generation.',
    featured: true,
    isPrimaryFlagship: true,
    category: 'Full Stack',
    tags: ['React 18', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT RBAC'],
    thumbnail: attendxImg,
    demoUrl: 'https://attendx-demo.vercel.app',
    githubUrl: 'https://github.com/Technical-Siddhi/attendx-hrms',
    metrics: [
      { label: 'Active Monthly Users', value: '50,000+' },
      { label: 'System Uptime SLA', value: '99.9%' },
      { label: 'API Response Time', value: '< 45ms' },
    ],
    keyFeatures: [
      'Multi-Role RBAC authorization matrix (Admin, Manager, Employee)',
      'Real-time attendance & geo-location check-in logging',
      'Glassmorphic analytics dashboard with interactive charts',
      'Automated payroll calculation & PDF paystub generation',
      'Global Ctrl+K Search Palette with instant employee lookup',
    ],
    problemStatement:
      'Legacy HR platforms suffered from sluggish server-side rendering, fragmented employee records, insecure role management, and lack of real-time attendance telemetry.',
    solution:
      'Architected a high-throughput MERN stack application featuring JWT authentication, indexed MongoDB collections, stateful React Query data fetching, and an enterprise glassmorphic UI layout.',
    challenges: [
      'Handling high-concurrency check-in spikes during morning shift start windows without database connection pool exhaustion.',
      'Securing sensitive salary and compensation endpoints against unauthorized access.',
    ],
    lessonsLearned: [
      'Implemented MongoDB connection pooling & Redis query caching for high throughput.',
      'Designed reusable RBAC middleware guards at both API route and UI component layers.',
    ],
  },
  {
    id: 'star-wars-explorer',
    title: 'Star Wars Galactic Character Explorer',
    slug: 'star-wars-explorer',
    tagline: 'High-Performance Sci-Fi Character & Planet Database Application',
    description:
      'An interactive web application providing search, filtering, and detailed modal analytics for SWAPI Star Wars universe data.',
    fullDescription:
      'Engineered with React 18, Vite, TypeScript, and Framer Motion. Features debounced full-text search, species/planet filter chips, paginated infinite scroll, and a glassmorphic character detail modal.',
    featured: true,
    category: 'Frontend',
    tags: ['React 18', 'TypeScript', 'Framer Motion', 'SWAPI REST API', 'Tailwind CSS'],
    thumbnail: starwarsImg,
    demoUrl: 'https://starwars-explorer.vercel.app',
    githubUrl: 'https://github.com/Technical-Siddhi/star-wars-explorer',
    metrics: [
      { label: 'Lighthouse Score', value: '99 / 100' },
      { label: 'Search Latency', value: '< 20ms' },
    ],
    keyFeatures: [
      'Debounced instant search with highlighted query matches',
      'Category filter pills (Planets, Species, Homeworlds)',
      'Glassmorphic character breakdown modal with vehicle statistics',
      'Framer Motion layout transitions & layoutId animations',
    ],
    problemStatement:
      'External SWAPI REST API requests exhibited slow response times and unformatted payload structures, creating poor user experience during character navigation.',
    solution:
      'Created an in-memory client caching layer with TanStack React Query to cache character records and prefetch film details seamlessly.',
    challenges: [
      'Preventing API rate limiting while maintaining instant search response behavior.',
    ],
    lessonsLearned: [
      'Leveraged request debouncing and React Query queryCache to achieve 60 FPS UI responsiveness.',
    ],
  },
];
