import { useState } from "react";
import ProjectsGrid from "../cards/work/ProjectsGrid";
import ProjectModal from "../cards/work/ProjectModal";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "Portafolio Personal",
    description: "Portfolio profesional con React, TypeScript y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    libraries: ["React Router", "Framer Motion"],
    details: "Este portafolio personal incluye animaciones fluidas, diseño responsive y un sistema de rutas dinámicas.",
    liveUrl: "https://owenslopez211.github.io/owens-dev-journey/",
    githubUrl: "https://github.com/OwensLopez211/owens-dev-journey"
  },
  {
    "id": "2",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  
  {
    id: "3",
    title: "E-Commerce Full Stack",
    description: "Plataforma de comercio electrónico con autenticación y pagos.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    libraries: ["Zustand", "NextAuth", "Tailwind"],
    details: "Este proyecto implementa un sistema de pagos con Stripe y una base de datos escalable con Prisma y PostgreSQL.",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/tuuser/ecommerce-project"
  },

  {
    "id": "4",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  {
    "id": "5",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  {
    "id": "6",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  {
    "id": "7",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  {
    "id": "8",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  {
    "id": "9",
    "title": "Proyecto tesis: Monitoreo Inteligente de Combustible",
    "description": "Plataforma de monitoreo de combustible en tiempo real con autenticación segura y sistema de alertas inteligentes.",
    "technologies": ["Node.js", "Express", "MongoDB", "Jest"],
    "libraries": ["Mongoose", "JWT", "Swagger"],
    "details": "GasAlert es una plataforma innovadora diseñada para la monitorización en tiempo real de niveles de combustible en estaciones de servicio y depósitos. Su objetivo es optimizar la gestión del suministro de combustible, prevenir desabastecimientos y detectar posibles fugas o irregularidades mediante un sistema de alertas inteligentes.\n\nLa plataforma está estructurada con un sistema de autenticación seguro y una jerarquía de usuarios que incluye Operadores, Técnicos y Administradores, permitiendo una gestión eficiente de los tanques y estaciones.\n\nCaracterísticas principales:\n✅ Monitoreo en tiempo real de los niveles de combustible en los tanques.\n✅ Alertas y notificaciones automáticas ante niveles críticos o anomalías.\n✅ Gestión de usuarios y permisos para un acceso seguro y controlado.\n✅ Dashboard intuitivo, diseñado para facilitar la supervisión y toma de decisiones.\n✅ Accesibilidad remota, permitiendo la consulta de datos desde cualquier dispositivo.",
    "liveUrl": "https://gasalert.vercel.app/",
    "githubUrl": "https://github.com/tuuser/tasks-api"
  },
  
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-full max-w-screen-xl min-h-screen flex flex-col items-center justify-start px-5 md:px-10 relative mx-auto rounded-xl overflow-hidden">
      {/* Background con gradientes */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl w-full rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-900/10 to-emerald-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,rgba(17,24,39,0.8)_100%)]" />
      </div>

      {/* Líneas de gradiente */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full py-16">
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            Mis Proyectos
          </h1>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
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
            onProjectClick={setSelectedProject}
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
