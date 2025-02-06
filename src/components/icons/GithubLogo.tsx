import { motion } from "framer-motion";
import GitHubLogoSVG from "../../assets/GitHub-Logo.wine.svg"; // Ruta correcta

const GitHubLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      {/* Contenedor del logo, ajustándose al espacio disponible */}
      <motion.div
        className="w-full h-[80%] flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Animación de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.img
          src={GitHubLogoSVG}
          alt="GitHub Logo"
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.05, 1] }} // Latido
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Texto alineado correctamente */}
      <motion.p
        className="w-full text-center text-black font-bold text-sm md:text-xl mt-1 md:mt-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        GitHub
      </motion.p>
    </div>
  );
};

export default GitHubLogo;
