import { motion } from "framer-motion";

interface AtomAnimationProps {
  className?: string;
}

const AtomAnimation: React.FC<AtomAnimationProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col justify-between items-center w-full min-h-[80px] md:min-h-[100px] gap-1 md:gap-2 ${className}`}>
      {/* Contenedor del logo */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Movimiento de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Círculo central */}
          <circle cx="100" cy="100" r="10" fill="#61DAFB" />

          {/* Órbita 1 */}
          <motion.ellipse
            cx="100"
            cy="100"
            rx="60"
            ry="30"
            stroke="#61DAFB"
            strokeWidth="4"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          
          {/* Órbita 2 */}
          <motion.ellipse
            cx="100"
            cy="100"
            rx="30"
            ry="60"
            stroke="#61DAFB"
            strokeWidth="4"
            fill="none"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Órbita 3 (Diagonal) */}
          <motion.ellipse
            cx="100"
            cy="100"
            rx="45"
            ry="45"
            stroke="#61DAFB"
            strokeWidth="4"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Electrón 1 */}
          <motion.circle
            cx="160"
            cy="100"
            r="5"
            fill="#61DAFB"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Electrón 2 */}
          <motion.circle
            cx="100"
            cy="40"
            r="5"
            fill="#61DAFB"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Electrón 3 */}
          <motion.circle
            cx="140"
            cy="140"
            r="5"
            fill="#61DAFB"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
        </motion.svg>
      </motion.div>

      {/* Texto "React" alineado correctamente */}
      <motion.p
        className="text-[#61DAFB] font-bold text-sm md:text-xl text-center"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        React
      </motion.p>
    </div>
  );
};

export default AtomAnimation;
