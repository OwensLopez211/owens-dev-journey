import { motion } from "framer-motion";
import GradientText from "../../animations/GradientText";
import RotatingText from "../../animations/RotatingText";
import CodeAnimation from "../../animations/CodeAnimation";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Hero = () => {
  return (
    <section className="w-full max-w-screen-xl md:min-h-[80vh] flex flex-col items-center justify-start md:justify-center px-5 md:px-10 relative mx-auto rounded-xl overflow-hidden">
      {/* Background con gradientes */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl w-full rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-900/10 to-emerald-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,rgba(17,24,39,0.8)_100%)]" />
      </div>

      {/* Líneas de gradiente */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-10 pt-10 md:py-16 px-4 md:px-10">
        {/* Lado izquierdo - Texto */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full md:w-1/2"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 md:py-1 border border-slate-700 text-sm md:text-sm"
          >
            <span className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-slate-300">Disponible para proyectos</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            Desarrollador
          </h1>

          <motion.div
            className="px-4 md:px-5 bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-900 font-bold text-4xl md:text-5xl lg:text-6xl overflow-hidden py-2 md:py-3 justify-center rounded-lg flex items-center shadow-lg shadow-cyan-500/20"
            animate={{ width: "auto" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <RotatingText
              texts={["Back-End", "Front-End", "Full-Stack"]}
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

          <motion.div className="w-full md:w-full" variants={fadeInUp}>
            <h2 className="text-base md:text-lg leading-relaxed max-w-[540px] mx-auto md:mx-0">
              <GradientText
                colors={[
                  "#68e5ff",
                  "#34d399",
                  "#68e5ff",
                  "#34d399",
                  "#68e5ff",
                ]}
                animationSpeed={8}
                showBorder={false}
                className="custom-class pb-0"
              >
                Soy Owens, desarrollador full stack apasionado por convertir
                ideas en soluciones digitales eficientes. Me especializo en
                crear aplicaciones web robustas y escalables, combinando
                tecnologías modernas tanto en el frontend como en el backend.
              </GradientText>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="w-full sm:w-auto px-8 py-4 md:px-6 md:py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
              Ver Proyectos
            </button>
            <button className="w-full sm:w-auto px-8 py-4 md:px-6 md:py-3 bg-slate-800/50 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300">
              Contactar
            </button>
          </motion.div>
          {/* Botones de redes sociales */}
          <motion.div 
            className="flex gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/owens-l%C3%B3pez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/OwensLopez211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/owenslpz2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Lado derecho - Animación de código */}
        <div className="w-full md:w-1/2 flex justify-center pb-8 md:pb-0">
          <CodeAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;