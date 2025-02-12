import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

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
  if (!project) return null; // Previene errores si project es null

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-slate-900 text-white rounded-lg shadow-lg max-w-5xl w-full p-8 border border-slate-800"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          <X size={28} />
        </button>

        {/* Contenido principal */}
        <div className="flex flex-col gap-6">
          {/* Título del proyecto */}
          <h2 className="text-4xl font-bold">{project.title || "Sin título"}</h2>

          {/* Descripción */}
          <p className="text-lg text-slate-300">{project.description || "Descripción no disponible"}</p>

          {/* Tecnologías y Librerías */}
          <div className="grid grid-cols-2 gap-4">
            {/* Tecnologías */}
            <div>
              <h4 className="text-xl font-semibold text-cyan-400">Tecnologías</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-700 text-white">
                    {tech}
                  </span>
                )) || <span className="text-slate-400">No especificado</span>}
              </div>
            </div>

            {/* Librerías */}
            <div>
              <h4 className="text-xl font-semibold text-purple-400">Librerías</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.libraries?.map((lib, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-700 text-white">
                    {lib}
                  </span>
                )) || <span className="text-slate-400">No especificado</span>}
              </div>
            </div>
          </div>

          {/* Información Detallada */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-emerald-400">Información Detallada</h4>
            <p className="text-slate-400">
                {project.details.split("\n").map((line, index) => (
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
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Github size={24} /> Código Fuente
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
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
