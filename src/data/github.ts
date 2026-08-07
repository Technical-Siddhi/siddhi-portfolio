export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

export interface GithubTelemetry {
  username: string;
  profileUrl: string;
  totalContributions: number;
  currentStreakDays: number;
  longestStreakDays: number;
  totalStars: number;
  totalPRs: number;
  totalIssuesClosed: number;
  topLanguages: LanguageStat[];
  recentRepos: GithubRepo[];
}

export const GITHUB_TELEMETRY: GithubTelemetry = {
  username: 'Technical-Siddhi',
  profileUrl: 'https://github.com/Technical-Siddhi',
  totalContributions: 1420,
  currentStreakDays: 42,
  longestStreakDays: 185,
  totalStars: 450,
  totalPRs: 180,
  totalIssuesClosed: 125,
  topLanguages: [
    { name: 'TypeScript', percentage: 48, color: 'bg-blue-500' },
    { name: 'JavaScript / React', percentage: 32, color: 'bg-yellow-400' },
    { name: 'Node.js & Express', percentage: 12, color: 'bg-emerald-500' },
    { name: 'CSS & HTML', percentage: 8, color: 'bg-purple-500' },
  ],
  recentRepos: [
    {
      id: 'repo-1',
      name: 'attendx-hrms',
      description: 'Enterprise HRMS & Role-Based Employee Management Platform built with React 18, Node.js, and MongoDB.',
      language: 'TypeScript',
      languageColor: 'bg-blue-500',
      stars: 128,
      forks: 34,
      url: 'https://github.com/Technical-Siddhi/attendx-hrms',
      updatedAt: '2 days ago',
    },
    {
      id: 'repo-2',
      name: 'siddhi-portfolio',
      description: 'Ultra-high-performance SaaS Developer Portfolio featuring React 18, Vite, Framer Motion, and Tailwind CSS.',
      language: 'TypeScript',
      languageColor: 'bg-blue-500',
      stars: 94,
      forks: 18,
      url: 'https://github.com/Technical-Siddhi/siddhi-portfolio',
      updatedAt: 'Updated today',
    },
    {
      id: 'repo-3',
      name: 'star-wars-explorer',
      description: 'Interactive Star Wars character and planet database built with React 18, Framer Motion, and SWAPI API.',
      language: 'TypeScript',
      languageColor: 'bg-blue-500',
      stars: 76,
      forks: 12,
      url: 'https://github.com/Technical-Siddhi/star-wars-explorer',
      updatedAt: '1 week ago',
    },
    {
      id: 'repo-4',
      name: 'express-rbac-middleware',
      description: 'Lightweight Enterprise Role-Based Access Control middleware for Express.js and Node microservices.',
      language: 'JavaScript',
      languageColor: 'bg-yellow-400',
      stars: 52,
      forks: 9,
      url: 'https://github.com/Technical-Siddhi/express-rbac-middleware',
      updatedAt: '2 weeks ago',
    },
  ],
};
