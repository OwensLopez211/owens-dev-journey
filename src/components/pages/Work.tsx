import { useState } from "react";
import ProjectsGrid from "../cards/work/ProjectsGrid";
import ProjectModal from "../cards/work/ProjectModal";
import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from "../../types/project";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  return (
    <section className="w-full max-w-screen-xl min-h-screen flex flex-col items-center justify-start px-5 md:px-10 relative mx-auto rounded-xl overflow-hidden">
      {/* Background con gradientes */}
      <div 
        style={{
          backgroundColor: `${theme.background.DEFAULT}e6`, // 90% opacidad
        }}
        className="absolute inset-0 backdrop-blur-xl w-full rounded-xl"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${theme.primary.DEFAULT}33, ${theme.background.DEFAULT}1a, ${theme.secondary.DEFAULT}33)` 
            // 20% para primary y secondary, 10% para background
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at bottom left, transparent 0%, ${theme.background.dark}cc 100%)`
            // 80% opacidad para el fondo oscuro
          }}
        />
      </div>

      {/* Líneas de gradiente */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${theme.primary.DEFAULT}4d, transparent)`
          // 30% opacidad
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${theme.secondary.DEFAULT}4d, transparent)`
          // 30% opacidad
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 w-full py-16">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.text.primary}, ${theme.text.secondary})`
            }}
          >
            Mis Proyectos
          </h1>
          <p 
            className="text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: theme.text.muted }}
          >
            Una colección de proyectos que demuestran mi experiencia en desarrollo web, móvil y backend.
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <ProjectsGrid
            projects={projects}
            onProjectSelect={setSelectedProject}
          />
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default WorkPage;