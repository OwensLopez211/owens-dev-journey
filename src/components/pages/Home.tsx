import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../sections/Hero";

import BlurOverlay from "../generals/BlurOverlay";
import ProjectCarousel from "../cards/home/ProjectCarousel";



interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 975);
  }, []);

  useEffect(() => {
    handleResize();

    const debouncedResize = () => {
      requestAnimationFrame(handleResize);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });
    return () => window.removeEventListener("resize", debouncedResize);
  }, [handleResize]);

  return (
    <AnimatePresence>
      <div className="relative w-full overflow-hidden">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" />
        
        {/* Main content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlurOverlay isHeaderVisible={true} />
          
          <FadeInSection className="relative">
            <Hero />
          </FadeInSection>

        </motion.div>

        {/* Background pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      </div>
    </AnimatePresence>
  );
};

export default Home;