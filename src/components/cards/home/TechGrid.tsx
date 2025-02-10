import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  description: string;
}

// 📌 Agregar `TechGridProps` para que acepte `technologies`
interface TechGridProps {
  technologies: Technology[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// 📌 Modificar `TechGrid` para que acepte `technologies` como prop
const TechGrid: React.FC<TechGridProps> = ({ technologies }) => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            className="group relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
            
            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-700/50 rounded-lg group-hover:scale-110 transition-all duration-300">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechGrid;
