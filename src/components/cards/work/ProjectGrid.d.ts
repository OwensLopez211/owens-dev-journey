import React from 'react';
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
}
interface ProjectGridProps {
    projects: Project[];
    filterCategory: string;
}
declare const ProjectGrid: React.FC<ProjectGridProps>;
export default ProjectGrid;
