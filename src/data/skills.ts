import { SkillCategory } from '@/types';

export const PORTFOLIO_SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React 18 / 19', level: 95, icon: 'SiReact', featured: true },
      { name: 'TypeScript', level: 92, icon: 'SiTypescript', featured: true },
      { name: 'Next.js', level: 88, icon: 'SiNextdotjs', featured: true },
      { name: 'Tailwind CSS', level: 95, icon: 'SiTailwindcss', featured: true },
      { name: 'Framer Motion', level: 88, icon: 'SiFramer', featured: true },
      { name: 'Zustand & Redux', level: 90, icon: 'SiRedux', featured: false },
      { name: 'HTML5 & CSS3', level: 96, icon: 'SiHtml5', featured: false },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 92, icon: 'SiNodedotjs', featured: true },
      { name: 'Express.js', level: 90, icon: 'SiExpress', featured: true },
      { name: 'RESTful APIs', level: 95, icon: 'SiPostman', featured: true },
      { name: 'GraphQL', level: 85, icon: 'SiGraphql', featured: true },
      { name: 'Microservices Architecture', level: 82, icon: 'SiServerless', featured: false },
      { name: 'WebSockets (Socket.io)', level: 86, icon: 'SiSocketdotio', featured: false },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 90, icon: 'SiMongodb', featured: true },
      { name: 'PostgreSQL', level: 85, icon: 'SiPostgresql', featured: true },
      { name: 'Redis Caching', level: 82, icon: 'SiRedis', featured: true },
      { name: 'Mongoose ODM', level: 92, icon: 'SiMongodb', featured: false },
      { name: 'Prisma ORM', level: 84, icon: 'SiPrisma', featured: false },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    skills: [
      { name: 'Docker', level: 85, icon: 'SiDocker', featured: true },
      { name: 'Git & GitHub Actions', level: 92, icon: 'SiGithubactions', featured: true },
      { name: 'Vercel & Netlify Deployments', level: 95, icon: 'SiVercel', featured: true },
      { name: 'AWS Services (S3/EC2)', level: 78, icon: 'SiAmazonwebservices', featured: false },
      { name: 'CI/CD Automation', level: 86, icon: 'SiGitlab', featured: false },
    ],
  },
  {
    id: 'ai-tools',
    name: 'AI & Tools',
    skills: [
      { name: 'OpenAI & Gemini API', level: 88, icon: 'SiOpenai', featured: true },
      { name: 'Vite', level: 94, icon: 'SiVite', featured: true },
      { name: 'Vitest & React Testing Library', level: 88, icon: 'SiVitest', featured: true },
      { name: 'Postman & Swagger', level: 90, icon: 'SiPostman', featured: false },
      { name: 'Lighthouse Performance Optimization', level: 95, icon: 'SiGooglechrome', featured: true },
    ],
  },
];
