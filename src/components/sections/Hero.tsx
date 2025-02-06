import { motion } from "framer-motion";
import Button from "../buttons/Button";
import AtomAnimation from "../icons/AtomAnimation";
import SnakeAnimation from "../icons/PythonLogo";
import TailwindWaves from "../icons/TailwindWaves";
import GitHubLogo from "../icons/GithubLogo";
import PostgreSQLLogo from "../icons/PostgreSQLLogo";
import NginxLogo from "../icons/NginxLogo";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface TechIconProps {
  children: React.ReactNode;
}

const TechIcon: React.FC<TechIconProps> = ({ children }) => (
  <motion.div 
    className="w-20 h-24 md:w-28 md:h-32 flex items-center justify-center hover:scale-110 transition-transform duration-300"
    whileHover={{ y: -5 }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-5 md:px-10 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="flex flex-col items-start text-center md:text-left space-y-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-black bg-gradient-to-r from-primary to-primary/70">
              Desarrollador Full Stack 🚀
            </h1>
            <h2 className="text-lg md:text-2xl text-black leading-relaxed">
              Soy Owens, desarrollador full stack en Innovacore, donde convierto ideas en soluciones digitales eficientes. 
              <span className="text-primary"> Después del trabajo, construyo mis propios proyectos y exploro nuevas tecnologías
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block"
                >
                  .
                </motion.span>
              </span>
            </h2>
          </div>
          
          <Button 
            text="Ver todas las tecnologías" 
            id="ver-tecnologias"
          />
        </motion.div>

        <motion.div 
          className="flex flex-col gap-10 md:gap-20 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="w-20 h-20 md:w-28 md:h-28 bg-transparent"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          >
            <AtomAnimation />
          </motion.div>
          <motion.div 
            className="w-20 h-20 md:w-28 md:h-28 bg-transparent"
            whileHover={{ scale: 1.1 }}
          >
            <SnakeAnimation />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-[1200px] w-full flex flex-wrap md:flex-row justify-center md:justify-end gap-6 md:gap-12 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <TechIcon><NginxLogo /></TechIcon>
        <TechIcon><PostgreSQLLogo /></TechIcon>
        <TechIcon><GitHubLogo /></TechIcon>
        <TechIcon><TailwindWaves /></TechIcon>
      </motion.div>
    </section>
  );
};

export default Hero;