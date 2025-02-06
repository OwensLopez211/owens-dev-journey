import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-200 mb-3">{project.description}</p>
          
          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-white/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-200 transition-colors"
              >
                Visitar proyecto <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-200 transition-colors"
              >
                Repositorio <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;