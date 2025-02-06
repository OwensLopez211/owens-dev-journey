import { motion } from "framer-motion";
import NginxLogoSVG from "../../assets/nginx-svgrepo-com.svg"; // Asegurar que la ruta es correcta

const NginxLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-[80px] md:min-h-[100px] gap-1 md:gap-2">
      {/* Contenedor del logo */}
      <motion.div
        className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Movimiento de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.img
          src={NginxLogoSVG}
          alt="Nginx Logo"
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.05, 1] }} // Efecto de latido
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Texto "NGINX" alineado correctamente */}
      <motion.p
        className="text-[#009639] font-bold text-sm md:text-xl text-center"
        animate={{ opacity: [0.7, 1, 0.7] }} // Efecto de respiración en el texto
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        NGINX
      </motion.p>
    </div>
  );
};

export default NginxLogo;
