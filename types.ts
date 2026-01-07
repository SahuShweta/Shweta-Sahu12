
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Web' | 'Mobile' | 'AI/ML' | 'Cloud';
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI/ML';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  type: 'Work' | 'Education';
}
