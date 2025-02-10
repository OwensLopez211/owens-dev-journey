import React from 'react';
import { motion } from 'framer-motion';
// Importamos los SVG de cada tecnología
import ReactLogo from '../../../assets/tech/reactjs.svg';
import NextLogo from '../../../assets/tech/nextjs.svg';
import NodeLogo from '../../../assets/tech/nodejs.svg';
import PostgreSQLLogo from '..//../../assets/tech/postgresql.svg';
import DockerLogo from '../../../assets/tech/docker.svg';
import AWSLogo from '../../../assets/tech/aws.svg';
import TypeScriptLogo from '../../../assets/tech/typescript.svg';
import TailwindLogo from '../../../assets/tech/tailwind.svg';

const TechGrid = () => {
  const technologies = [
    { 
      name: "React", 
      icon: <img src={ReactLogo} alt="React" className="w-12 h-12" />, 
      description: "Biblioteca JavaScript para interfaces de usuario" 
    },
    { 
      name: "Next.js", 
      icon: <img src={NextLogo} alt="Next.js" className="w-12 h-12" />, 
      description: "Framework React para producción" 
    },
    { 
      name: "Node.js", 
      icon: <img src={NodeLogo} alt="Node.js" className="w-12 h-12" />, 
      description: "Runtime de JavaScript" 
    },
    { 
      name: "PostgreSQL", 
      icon: <img src={PostgreSQLLogo} alt="PostgreSQL" className="w-12 h-12" />, 
      description: "Sistema de base de datos relacional" 
    },
    { 
      name: "Docker", 
      icon: <img src={DockerLogo} alt="Docker" className="w-12 h-12" />, 
      description: "Plataforma de contenedores" 
    },
    { 
      name: "AWS", 
      icon: <img src={AWSLogo} alt="AWS" className="w-12 h-12" />, 
      description: "Servicios en la nube" 
    },
    { 
      name: "TypeScript", 
      icon: <img src={TypeScriptLogo} alt="TypeScript" className="w-12 h-12" />, 
      description: "JavaScript con tipos" 
    },
    { 
      name: "TailwindCSS", 
      icon: <img src={TailwindLogo} alt="TailwindCSS" className="w-12 h-12" />, 
      description: "Framework CSS utilitario" 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={item}
            className="group relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-700/50 rounded-lg group-hover:scale-110 transition-all duration-300">
                {tech.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechGrid;