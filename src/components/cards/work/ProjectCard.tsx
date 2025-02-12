import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  libraries: string[];
  details: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group flex flex-col h-full bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
      >
        {/* Header con icono y enlaces */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
          <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/20">
            <FolderGit2 size={24} />
          </div>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div 
          className="flex flex-col flex-grow p-6 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed min-h-[4rem]">
              {project.description}
            </p>
          </div>

          {/* Tecnologías */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-6"
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
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
                className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Separador con gradiente */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;