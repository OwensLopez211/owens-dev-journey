import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Calendar, MapPin } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

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
  achievements,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="relative pl-6 last:border-l-0"
      style={{ borderLeft: `2px solid ${theme.primary.light}4d` }} // 30% opacity
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute -left-[5px] top-0 h-3 w-3 rounded-full"
        style={{ backgroundColor: theme.primary.light }}
      />

      <div className="space-y-3 pb-8">
        {/* Título y período */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="font-bold text-lg" style={{ color: theme.text.primary }}>
            {title}
          </h4>
          <div className="flex items-center gap-2 text-sm" style={{ color: theme.primary.light }}>
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* Institución y ubicación */}
        <div className="flex items-center gap-2" style={{ color: theme.text.secondary }}>
          <FaGraduationCap className="h-4 w-4" />
          <span className="font-medium">{institution.split(" - ")[0]}</span>
          <span style={{ color: theme.text.muted }}>•</span>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{institution.split(" - ")[1]}</span>
          </div>
        </div>

        {/* Logros o detalles adicionales */}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-2 text-sm mt-2" style={{ color: theme.text.secondary }}>
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full"
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
  const { theme } = useTheme();

  const educationData = [
    {
      title: "Ingeniero en Informática",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2024",
      achievements: [
        "Especialización en desarrollo de aplicaciones web y móviles",
        "Proyectos destacados utilizando React, Node.js y tecnologías cloud",
        "Participación activa en proyectos de innovación tecnológica",
      ],
    },
    {
      title: "Técnico en Analista Programador",
      institution: "INACAP - Santiago, Chile",
      period: "2021 - 2023",
      achievements: [
        "Fundamentos sólidos en programación y estructuras de datos",
        "Desarrollo de aplicaciones utilizando diferentes lenguajes y frameworks",
        "Experiencia práctica en metodologías ágiles y trabajo en equipo",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative rounded-2xl backdrop-blur-xl shadow-xl border p-8"
        style={{
          backgroundColor: `${theme.background.dark}e6`, // 90% opacity
          borderColor: theme.border.dark,
        }}
      >
        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="absolute -inset-2 rounded-full opacity-20 blur-sm"
              style={{
                background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            />
            <FaGraduationCap className="w-6 h-6 relative" style={{ color: theme.primary.light }} />
          </motion.div>
          <h3
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
            }}
          >
            Educación
          </h3>
        </div>

        {/* Lista de educación */}
        <div className="space-y-2">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>

        {/* Decoración de fondo */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(to bottom right, ${theme.primary.light}1a, ${theme.secondary.light}1a)`, // 10% opacity
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(to top right, ${theme.secondary.light}1a, ${theme.primary.light}1a)`,
          }}
        />
      </div>
    </div>
  );
};

export default EducationCard;
