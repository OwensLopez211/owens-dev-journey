import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Calendar, MapPin } from "lucide-react";

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  title, 
  institution, 
  period,
  achievements 
}) => {
  return (
    <motion.div
      className="relative pl-6 border-l-2 border-red-200 last:border-l-0"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-red-500" />
      
      <div className="space-y-3 pb-8">
        {/* Título y período */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="font-bold text-lg text-gray-900">{title}</h4>
          <div className="flex items-center gap-2 text-sm text-red-600">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* Institución y ubicación */}
        <div className="flex items-center gap-2 text-gray-700">
          <FaGraduationCap className="h-4 w-4" />
          <span className="font-medium">{institution.split(" - ")[0]}</span>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{institution.split(" - ")[1]}</span>
          </div>
        </div>

        {/* Logros o detalles adicionales */}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-2 text-sm text-gray-600 mt-2">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:bg-red-400 before:rounded-full"
              >
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const EducationCard = () => {
  const educationData = [
    {
      title: "Ingeniero en Informática",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2024",
      achievements: [
        "Especialización en desarrollo de aplicaciones web y móviles",
        "Proyectos destacados utilizando React, Node.js y tecnologías cloud",
        "Participación activa en proyectos de innovación tecnológica"
      ]
    },
    {
      title: "Técnico en Analista Programador",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2023",
      achievements: [
        "Fundamentos sólidos en programación y estructuras de datos",
        "Desarrollo de aplicaciones utilizando diferentes lenguajes y frameworks",
        "Experiencia práctica en metodologías ágiles y trabajo en equipo"
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8">
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaGraduationCap className="w-6 h-6 text-red-500" />
          </motion.div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Educación
          </h3>
        </div>

        {/* Lista de educación */}
        <div className="space-y-2">
          {educationData.map((education, index) => (
            <EducationItem
              key={index}
              {...education}
            />
          ))}
        </div>

        {/* Decoración de fondo moderna */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default EducationCard;