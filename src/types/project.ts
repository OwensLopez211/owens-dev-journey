// types/project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    libraries: string[];
    details: string;
    liveUrl?: string;
    githubUrl?: string;
    isPrivate?: boolean;
  }