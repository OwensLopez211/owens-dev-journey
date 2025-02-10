import React from 'react';
interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image: string;
        technologies: string[];
        liveUrl?: string;
        githubUrl?: string;
    };
}
declare const ProjectCard: React.FC<ProjectCardProps>;
export default ProjectCard;
