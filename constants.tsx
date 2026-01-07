
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Shweta Sahu",
  email: "shwetasahu1710@gmail.com",
  phone: "+91 7091693590",
  location: "India",
  links: {
    linkedIn: "https://www.linkedin.com/in/shweta-sahu-b239a3307",
    leetCode: "https://leetcode.com/u/Shweta_Sahu10/",
    gfg: "https://www.geeksforgeeks.org/profile/shwetasan7ie",
    github: "https://github.com/SahuShweta"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Learning Platform',
    description: 'A comprehensive full-stack platform with course management, real-time quizzes, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    category: 'Web',
    githubUrl: 'https://github.com/SahuShweta',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'AI Sentiment Analyzer',
    description: 'Natural Language Processing tool that analyzes customer reviews in real-time using Transformers.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/SahuShweta',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'HealthTrack Mobile App',
    description: 'Fitness tracking application with personalized workout plans and health metric visualization.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile',
    githubUrl: 'https://github.com/SahuShweta'
  },
  {
    id: '4',
    title: 'Cloud DevOps Pipeline',
    description: 'Automated CI/CD infrastructure focusing on containerized microservices orchestration.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    category: 'Cloud',
    githubUrl: 'https://github.com/SahuShweta'
  }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: 'Terminal', level: 90, category: 'AI/ML' },
  { name: 'C++', icon: 'Code', level: 85, category: 'Tools' },
  { name: 'JavaScript', icon: 'Layout', level: 80, category: 'Frontend' },
  { name: 'TypeScript', icon: 'Code', level: 85, category: 'Frontend' },
  
  // Web Development
  { name: 'React/Next.js', icon: 'Layout', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', level: 95, category: 'Frontend' },
  { name: 'Node.js', icon: 'Server', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', icon: 'Database', level: 75, category: 'Backend' },

  // Tools & Others
  { name: 'Git/GitHub', icon: 'Github', level: 90, category: 'Tools' },
  { name: 'Docker', icon: 'Box', level: 70, category: 'Tools' },
];

export const JOURNEY: Experience[] = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Full Stack Intern',
    duration: 'June 2023 - Aug 2023',
    description: [
      'Developed responsive UI components using React and Tailwind.',
      'Optimized database queries, reducing response time by 20%.',
      'Collaborated in an agile team of 5 developers.'
    ],
    type: 'Work'
  },
  {
    company: 'VIT University',
    role: 'B.Tech in Computer Science Engineering',
    duration: '2020 - 2024',
    description: [
      'CGPA: 9.2/10.0',
      'Specializing in Artificial Intelligence and Data Science.',
      'Active member of the Coding Club.'
    ],
    type: 'Education'
  }
];

export const CODING_STATS = {
  leetCode: {
    totalSolved: "500+",
    rank: "Top 10%",
    streak: "90+ Days",
    categories: [
      { name: 'Arrays & Strings', value: 95 },
      { name: 'DP', value: 75 },
      { name: 'Trees & Graphs', value: 80 },
      { name: 'Greedy', value: 85 }
    ]
  },
  gfg: {
    problemsSolved: "300+",
    score: "1200+",
    articles: "Active Contributor"
  }
};
