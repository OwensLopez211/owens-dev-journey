import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { useTheme } from '../../../contexts/ThemeContext';

interface Project {
  id: string;
  title?: string;
  description?: string;
  technologies?: string[];
  libraries?: string[];
  details?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const { theme } = useTheme();
  
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50"
      style={{
        backgroundColor: `${theme.background.dark}b3`, // 70% opacidad
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          backgroundColor: theme.background.DEFAULT,
          borderColor: theme.border.DEFAULT,
          color: theme.text.primary,
        }}
        className="relative rounded-lg shadow-lg max-w-5xl w-full p-8 border"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          style={{
            color: theme.text.muted,
          }}
          className="absolute top-4 right-4 hover:text-white transition"
        >
          <X size={28} />
        </button>

        {/* Contenido principal */}
        <div className="flex flex-col gap-6">
          {/* Título del proyecto */}
          <h2 className="text-4xl font-bold" style={{ color: theme.text.primary }}>
            {project.title || "Sin título"}
          </h2>

          {/* Descripción */}
          <p className="text-lg" style={{ color: theme.text.secondary }}>
            {project.description || "Descripción no disponible"}
          </p>

          {/* Tecnologías y Librerías */}
          <div className="grid grid-cols-2 gap-4">
            {/* Tecnologías */}
            <div>
              <h4 className="text-xl font-semibold" style={{ color: theme.primary.light }}>
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-semibold rounded-lg"
                    style={{
                      backgroundColor: `${theme.primary.DEFAULT}1a`, // 10% opacidad
                      color: theme.text.primary,
                      border: `1px solid ${theme.primary.DEFAULT}33`, // 20% opacidad
                    }}
                  >
                    {tech}
                  </span>
                )) || <span style={{ color: theme.text.muted }}>No especificado</span>}
              </div>
            </div>

            {/* Librerías */}
            <div>
              <h4 className="text-xl font-semibold" style={{ color: theme.secondary.light }}>
                Librerías
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.libraries?.map((lib, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-semibold rounded-lg"
                    style={{
                      backgroundColor: `${theme.secondary.DEFAULT}1a`, // 10% opacidad
                      color: theme.text.primary,
                      border: `1px solid ${theme.secondary.DEFAULT}33`, // 20% opacidad
                    }}
                  >
                    {lib}
                  </span>
                )) || <span style={{ color: theme.text.muted }}>No especificado</span>}
              </div>
            </div>
          </div>

          {/* Información Detallada */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold" style={{ color: theme.primary.light }}>
              Información Detallada
            </h4>
            <p style={{ color: theme.text.muted }}>
              {project.details?.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex gap-4 mt-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: theme.text.muted }}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Github size={24} /> Código Fuente
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: theme.text.muted }}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <ExternalLink size={24} /> Ver Proyecto
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;