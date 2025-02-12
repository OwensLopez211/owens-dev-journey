
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../sections/Hero";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <AnimatePresence>
      <div className="relative w-full overflow-hidden">
        {/* Fondo con gradiente mejorado */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" />

        {/* Contenido principal con animación */}
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          <FadeInSection className="relative" delay={0.2}>
            <Hero />
          </FadeInSection>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
