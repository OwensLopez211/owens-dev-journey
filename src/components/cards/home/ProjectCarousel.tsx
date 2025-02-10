import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  dateRange: string;
  website: string;
  imageSrc: string;
  description: string;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const duration = 5000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, duration);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide, duration]);

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">No hay proyectos disponibles.</p>;
  }

  return (
    <div 
      className="w-full max-w-4xl mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Proyectos Destacados</h2>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isPaused ? (
            <>
              <Play className="w-4 h-4" />
              <span className="text-sm text-black">Reanudar</span>
            </>
          ) : (
            <>
              <Pause className="w-4 h-4" />
              <span className="text-sm text-black">Pausar</span>
            </>
          )}
        </button>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative aspect-video"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={projects[currentIndex].imageSrc}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Overlay de información */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
              <p className="text-sm text-gray-200 mb-2">{projects[currentIndex].dateRange}</p>
              <p className="text-sm text-gray-200 mb-3">{projects[currentIndex].description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {projects[currentIndex].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-white/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`https://${projects[currentIndex].website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-200 transition-colors"
              >
                Visitar proyecto <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles de navegación (muestran solo cuando `isHovered` es `true`) */}
        {isHovered && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicadores de posición */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 pb-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Barra de progreso */}
        {!isPaused && (
          <motion.div
            key={`progress-${currentIndex}`}
            className="absolute bottom-0 left-0 h-1 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;
