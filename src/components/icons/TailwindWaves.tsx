import { motion } from "framer-motion";
import TailwindLogoSVG from "../../assets/Tailwind_CSS_Logo.svg"; // Ruta del SVG de Tailwind

const TailwindWaves: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-[80px] md:min-h-[100px] gap-1 md:gap-2">
      {/* Contenedor del logo */}
      <motion.div
        className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Movimiento de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.img
          src={TailwindLogoSVG}
          alt="Tailwind CSS Logo"
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.05, 1] }} // Efecto de latido
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Texto "tailwindcss" estilizado debajo del logo */}
      <motion.p
        className="w-full text-center text-[#0F172A] font-bold text-sm md:text-xl tracking-tight mt-2 lowercase"
        animate={{ opacity: [0.7, 1, 0.7] }} // Efecto de respiración en el texto
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        tailwindcss
      </motion.p>
    </div>
  );
};

export default TailwindWaves;
