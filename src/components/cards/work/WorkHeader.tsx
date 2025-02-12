import ProjectsGrid from "./ProjectsGrid";

const projects = [
  {
    id: "1",
    title: "Portafolio Personal",
    description: "Portfolio profesional con React, TypeScript y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://owenslopez211.github.io/owens-dev-journey/",
    githubUrl: "https://github.com/OwensLopez211/owens-dev-journey",
  },
  {
    id: "2",
    title: "API REST Gestión de Tareas",
    description: "API RESTful para gestión de tareas con autenticación JWT.",
    technologies: ["Node.js", "Express", "MongoDB", "Jest"],
    githubUrl: "https://github.com/tuuser/tasks-api",
  },
];

const WorkPage = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
          Mis Proyectos
        </h1>
        <p className="text-lg text-slate-400 mt-4">
          Una colección de proyectos que demuestran mi experiencia en desarrollo web, móvil y backend.
        </p>
      </div>

      <ProjectsGrid projects={projects} />
    </section>
  );
};

export default WorkPage;
