import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, FolderGit2, Lock, Globe } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useTheme } from '../../../contexts/ThemeContext';
import type { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const containerVariants = {
    initial: { opacity: 0, y: 20, scale: 1 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.95 },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.6 }
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        layout
        variants={containerVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          backgroundColor: `${theme.background.dark}cc`, // 80% opacidad
          borderColor: theme.border.DEFAULT,
        }}
        className="group relative w-full md:w-96 rounded-2xl overflow-hidden"
      >
        {/* Glow effect */}
        <motion.div
          variants={glowVariants}
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.primary.DEFAULT}1a, ${theme.primary.DEFAULT}33, ${theme.secondary.DEFAULT}1a)`,
            // 10%, 20%, 10% opacidades
          }}
          className="absolute -inset-1 opacity-0 blur-2xl group-hover:opacity-100 transition duration-500"
        />

        {/* Content container */}
        <div className="relative h-full backdrop-blur-sm">
          {/* Header with icon and links */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${theme.primary.DEFAULT}33, ${theme.primary.DEFAULT}1a)`,
                  color: theme.primary.DEFAULT,
                }}
                className="p-4 rounded-2xl"
              >
                <FolderGit2 size={28} />
              </motion.div>
              
              {/* Project Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  backgroundColor: project.isPrivate 
                    ? `${theme.secondary.DEFAULT}1a`  // 10% opacidad
                    : `${theme.primary.DEFAULT}1a`,   // 10% opacidad
                  borderColor: project.isPrivate 
                    ? `${theme.secondary.DEFAULT}33`  // 20% opacidad
                    : `${theme.primary.DEFAULT}33`,   // 20% opacidad
                  color: project.isPrivate 
                    ? theme.secondary.DEFAULT
                    : theme.primary.DEFAULT,
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium border"
              >
                {project.isPrivate ? (
                  <>
                    <Lock size={14} />
                    <span>Private</span>
                  </>
                ) : (
                  <>
                    <Globe size={14} />
                    <span>Public</span>
                  </>
                )}
              </motion.div>
            </div>
            
            <div className="flex items-center gap-3">
              {project.githubUrl && project.githubUrl !== "N/A" && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text.muted,
                  }}
                  className="hover:text-white transition-all duration-300 hover:bg-slate-800/50 rounded-xl p-3"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={22} />
                </motion.a>
              )}
              {project.liveUrl && project.liveUrl !== "N/A" && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text.muted,
                  }}
                  className="hover:text-white transition-all duration-300 hover:bg-slate-800/50 rounded-xl p-3"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={22} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Main content */}
          <div 
            className="flex flex-col p-6 pt-2 cursor-pointer space-y-6"
            onClick={handleClick}
          >
            <div className="flex-grow space-y-4">
              <motion.h3 
                style={{
                  color: theme.text.primary,
                }}
                className="text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300"
                variants={{
                  hover: {
                    x: 8,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                {project.title}
              </motion.h3>
              <p style={{ color: theme.text.secondary }} className="text-base leading-relaxed min-h-[4.5rem]">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    backgroundColor: `${theme.background.dark}80`, // 50% opacidad
                    borderColor: `${theme.border.DEFAULT}`,
                    color: theme.text.secondary,
                  }}
                  className="px-4 py-1.5 text-sm font-medium rounded-xl border hover:border-cyan-400/30 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Bottom gradient border */}
          <motion.div 
            variants={{
              hover: {
                opacity: 1,
                transition: { duration: 0.3 }
              }
            }}
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${theme.primary.DEFAULT}4d, transparent)`, // 30% opacidad
            }}
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500" 
          />
        </div>
      </motion.div>

      {/* Modal */}
      {!onClick && isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;