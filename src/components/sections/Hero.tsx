import { motion } from "framer-motion";
import GradientText from "../../animations/GradientText";
import RotatingText from "../../animations/RotatingText";
import TechGrid from "../cards/home/TechGrid";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const TechIcon = ({ name, icon = "⚛️" }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-gray-800/50 rounded-xl text-white font-semibold text-sm md:text-base transition-all duration-300 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-cyan-500/10 group"
  >
    <span className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">{icon}</span>
    <span className="group-hover:text-cyan-400 transition-colors">{name}</span>
  </motion.div>
);

const Hero = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "📦" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "TypeScript", icon: "TS" },
    { name: "TailwindCSS", icon: "🎨" }
  ];

  return (
    <section className="w-full max-w-screen-xl min-h-[40vh] flex flex-col items-center justify-center px-5 md:px-10 relative mx-auto rounded-xl overflow-hidden">
      {/* Blur background with gradient overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl w-full rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      </div>

      {/* Gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-5 md:px-10">
        <motion.div
          className="flex flex-col items-start text-center md:text-left space-y-6 w-full"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="space-y-2 flex items-center flex-wrap justify-center md:justify-start w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Desarrollador
            </h1>
            <motion.div 
              className="px-4 sm:px-4 md:px-5 bg-cyan-300 text-black font-bold text-4xl md:text-5xl lg:text-6xl overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg ml-2 flex items-center shadow-lg shadow-cyan-500/20"
              animate={{ width: "auto" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <RotatingText
                texts={["Front-End", "Back-End", "FullStack"]}
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>
          </div>

          <motion.div 
            className="w-full"
            variants={fadeInUp}
          >
            <h2 className="text-lg md:text-2xl text-gray-300 leading-relaxed">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={10}
                showBorder={false}
                className="custom-class "
              >
                Soy Owens, desarrollador full stack apasionado por convertir ideas en soluciones digitales eficientes. Me especializo en crear aplicaciones web robustas y escalables, combinando tecnologías modernas tanto en el frontend como en el backend.
              </GradientText>
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Technologies container */}
      <TechGrid technologies={technologies} />
    </section>
  );
};

export default Hero;