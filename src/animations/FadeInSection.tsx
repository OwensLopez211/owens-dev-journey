// src/components/animations/FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const fadeInVariants = {
  hidden: (direction: "up" | "down" | "left" | "right") => ({
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  }),
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0,
  className = "",
  direction = "up"
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeInVariants}
      custom={direction}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: { delay, duration: 0.6 }
      }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;