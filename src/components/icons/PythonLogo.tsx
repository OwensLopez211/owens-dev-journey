import { motion } from "framer-motion";

const PythonLogo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-[80px] md:min-h-[100px] gap-1 md:gap-2">
      {/* Contenedor del logo */}
      <motion.div
        className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center"
        animate={{ y: [0, -5, 0] }} // Movimiento de flotación
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 64 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Cobra superior (Azul) */}
          <path
            d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16z"
            fill="url(#a)"
          />
          {/* Ojo de la cobra superior (parpadeo) */}
          <motion.circle
            cx="27.61"
            cy="19.85"
            r="1.5"
            fill="white"
            animate={{ scale: [1, 1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.4, 0.5, 1] }}
          />

          {/* Cobra inferior (Amarilla) */}
          <path
            d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247z"
            fill="url(#b)"
          />
          {/* Ojo de la cobra inferior (parpadeo) */}
          <motion.circle
            cx="36.39"
            cy="44.15"
            r="1.5"
            fill="white"
            animate={{ scale: [1, 1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, delay: 2, times: [0, 0.4, 0.5, 1] }}
          />

          <defs>
            <linearGradient id="a" x1="19.075" y1="18.782" x2="34.898" y2="34.658" gradientUnits="userSpaceOnUse">
              <stop stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="b" x1="28.809" y1="28.882" x2="45.803" y2="45.163" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE052" />
              <stop offset="1" stopColor="#FFC331" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Texto "Django" alineado correctamente */}
      <motion.p
        className="text-[#092E20] font-bold text-sm md:text-xl text-center tracking-wide"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Django
      </motion.p>
    </div>
  );
};

export default PythonLogo;
