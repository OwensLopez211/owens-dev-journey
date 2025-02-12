// src/components/pages/Home.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import Hero from "../sections/Hero";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Home = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="relative w-full overflow-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Fondo con gradiente */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom right, 
              ${theme.background.dark}, 
              ${theme.background.light}40, 
              ${theme.background.dark}
            )`,
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-10">
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
          >
            <Hero />
          </motion.div>

          {/* Ejemplo de cómo agregar más secciones */}
          {/* <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mt-20"
          >
            <ProjectsSection />
          </motion.div> */}
        </div>

        {/* Overlay decorativo */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(
              circle at 50% 50%,
              ${theme.primary.light}10,
              transparent 70%
            )`,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;