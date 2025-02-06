import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Calendar } from "lucide-react";

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, institution, period }) => {
  return (
    <motion.div 
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
      whileHover={{ x: 8 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-red-100 animate-pulse" />
        <FaGraduationCap className="relative text-red-500 text-3xl" />
      </div>
      
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <p>{period}</p>
        </div>
        <p className="text-sm text-gray-600">{institution}</p>
      </div>
    </motion.div>
  );
};

const EducationCard = () => {
  const educationData = [
    {
      title: "Ingeniero en Informática",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2024"
    },
    {
      title: "Técnico en Analista Programador",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2023"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/90 shadow-lg border border-gray-100">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50" />
        
        {/* Contenido */}
        <div className="relative p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaGraduationCap className="text-2xl text-red-500" />
            </motion.div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              Educación
            </h3>
          </div>

          <div className="space-y-2">
            {educationData.map((education, index) => (
              <EducationItem
                key={index}
                title={education.title}
                institution={education.institution}
                period={education.period}
              />
            ))}
          </div>
        </div>

        {/* Decoración de borde */}
        <div className="absolute inset-px bg-gradient-to-r from-red-200/20 via-orange-200/20 to-yellow-200/20 blur opacity-50 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default EducationCard;