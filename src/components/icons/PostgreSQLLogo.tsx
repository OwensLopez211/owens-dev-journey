import { motion } from "framer-motion";
import PostgreSQLLogoSVG from "../../assets/PostgreSQL-Logo.wine.svg"; // Asegurar que la ruta es correcta

const PostgreSQLLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-[80px] md:min-h-[100px] gap-1 md:gap-2">
      {/* Contenedor del logo */}
      <motion.div
        className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Movimiento de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.img
          src={PostgreSQLLogoSVG}
          alt="PostgreSQL Logo"
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.05, 1] }} // Efecto de latido
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Texto "PostgreSQL" alineado correctamente */}
      <motion.p
        className="text-black font-semibold text-sm md:text-xl text-center"
        animate={{ opacity: [0.7, 1, 0.7] }} // Efecto de respiración en el texto
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Postgre
        <span className="text-[#336791] font-bold">SQL</span>
      </motion.p>
    </div>
  );
};

export default PostgreSQLLogo;
