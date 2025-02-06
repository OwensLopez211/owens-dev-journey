import { motion } from "framer-motion";
import { useRef } from "react";
import AtomAnimation from "../../icons/AtomAnimation";
import SnakeAnimation from "../../icons/PythonLogo";
import TailwindWaves from "../../icons/TailwindWaves";
import GitHubLogo from "../../icons/GithubLogo";
import PostgreSQLLogo from "../../icons/PostgreSQLLogo";
import NginxLogo from "../../icons/NginxLogo";
import Button from "../../buttons/Button";

const HeroMobile: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="w-full min-h-[60vh] flex flex-col items-center justify-center px-5 mt-28"
    >
      {/* Título y subtítulo */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Desarrollador Full Stack
          <span className="inline-block ml-1 animate-bounce">🚀</span>
        </h1>
        
        <h2 className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          Construyendo experiencias digitales que transforman ideas en realidad
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block ml-0.5"
          >
            ...
          </motion.span>
        </h2>
      </motion.div>

      {/* Grid de tecnologías */}
      <motion.div 
        className="relative w-full max-w-[600px] mt-12 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl" />
        
        {/* Grid de iconos */}
        <div className="relative grid grid-cols-3 gap-6 p-6 rounded-2xl">
          {[
            AtomAnimation,
            SnakeAnimation,
            TailwindWaves,
            NginxLogo,
            PostgreSQLLogo,
            GitHubLogo
          ].map((Icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center aspect-square p-4 rounded-xl 
                        bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] 
                        hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] 
                        transition-shadow duration-300"
            >
              <Icon className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
            </motion.div>
          ))}
        </div>

        {/* Líneas decorativas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute left-1/3 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <div className="absolute right-1/3 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        </div>
      </motion.div>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button 
          text="Ver tecnologías"
          className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black
                     text-white font-medium px-6 py-2.5 rounded-full 
                     shadow-lg hover:shadow-xl
                     transition-all duration-300 transform hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default HeroMobile;