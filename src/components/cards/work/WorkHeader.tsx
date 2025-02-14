import { useState } from "react";
import ProjectsGrid from "./ProjectsGrid";
import type { Project } from "../../../types/project";
import { useTheme } from '../../../contexts/ThemeContext';
import ProjectModal from "./ProjectModal";

const projects: Project[] = [
  {
    id: "1",
    title: "Portafolio Personal",
    description: "Portfolio profesional con React, TypeScript y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    libraries: ["React Router", "Framer Motion", "Tailwind CSS"],
    details: "Portfolio personal desarrollado con las últimas tecnologías web, incluyendo animaciones fluidas y diseño responsivo.",
    liveUrl: "https://owenslopez211.github.io/owens-dev-journey/",
    githubUrl: "https://github.com/OwensLopez211/owens-dev-journey",
    isPrivate: false
  },
  {
    id: "2",
    title: "API REST Gestión de Tareas",
    description: "API RESTful para gestión de tareas con autenticación JWT.",
    technologies: ["Node.js", "Express", "MongoDB", "Jest"],
    libraries: ["Express.js", "Mongoose", "JWT", "Jest"],
    details: "API RESTful completa con autenticación JWT, testing automatizado y documentación Swagger.",
    githubUrl: "https://github.com/tuuser/tasks-api",
    isPrivate: false
  }
];

const WorkHeader = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.text.primary}, ${theme.text.secondary})`
          }}
        >
          Mis Proyectos
        </h1>
        <p 
          className="text-lg mt-4"
          style={{ color: theme.text.muted }}
        >
          Una colección de proyectos que demuestran mi experiencia en desarrollo web, móvil y backend.
        </p>
      </div>

      <ProjectsGrid 
        projects={projects}
        onProjectSelect={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default WorkHeader;