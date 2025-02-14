// ProjectsGrid.tsx
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../../types/project";

interface Props {
  projects: Project[];
  onProjectSelect?: (project: Project) => void;
}

const ProjectsGrid: React.FC<Props> = memo(({ projects, onProjectSelect }) => {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div key={project.id} layout>
            <ProjectCard 
              project={project} 
              onClick={() => onProjectSelect?.(project)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

ProjectsGrid.displayName = 'ProjectsGrid';

export default ProjectsGrid;