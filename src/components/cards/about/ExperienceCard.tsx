import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

const ExperienceCard = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      role: "DESARROLLADOR WEB",
      company: "Flowco Studio",
      location: "Santiago, Chile",
      period: "Nov 2024 - Feb 2025",
      achievements: [
        "Diseño y prototipado de la interfaz web en Figma, asegurando una experiencia visual atractiva y funcional.",
        "Desarrollo y personalización del sitio web en WordPress con Elementor.",
        "Implementación de CSS y JavaScript personalizados para optimizar la interacción y usabilidad.",
      ],
    },
    {
      role: "DESARROLLADOR FRONT-END",
      company: "Newland Propiedades",
      location: "Santiago, Chile",
      period: "Jul 2024 - Nov 2024",
      achievements: [
        "Diseño y prototipado de la interfaz en Figma, enfocándose en accesibilidad y experiencia de usuario.",
        "Desarrollo del frontend con React, aplicando Context API para la gestión del estado y autenticación.",
        "Creación de layouts dinámicos y componentes reutilizables para mejorar la escalabilidad del proyecto.",
        "Estilización con Tailwind CSS, asegurando un diseño moderno y responsivo.",
        "Optimización de rendimiento mediante técnicas como lazy loading y memoization en componentes clave.",
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
            <Briefcase className="w-6 h-6 relative" style={{ color: theme.primary.light }} />
          </motion.div>
          <div>
            <h3
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            >
              Experiencia
            </h3>
            <p className="text-sm mt-1" style={{ color: theme.text.secondary }}>
              Mi trayectoria profesional
            </p>
          </div>
        </div>

        {/* Lista de experiencias */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6 last:border-l-0"
              style={{ borderLeft: `2px solid ${theme.primary.light}4d` }} // 30% opacity
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="absolute -left-[5px] top-0 h-3 w-3 rounded-full"
                style={{ backgroundColor: theme.primary.light }}
              />

              <div className="space-y-3">
                {/* Título y período */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-bold text-lg" style={{ color: theme.text.primary }}>
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-sm" style={{ color: theme.primary.light }}>
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Empresa y ubicación */}
                <div className="flex items-center gap-2" style={{ color: theme.text.secondary }}>
                  <span className="font-semibold">{exp.company}</span>
                  <span style={{ color: theme.text.muted }}>•</span>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Logros */}
                <ul className="space-y-2 text-sm" style={{ color: theme.text.secondary }}>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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

export default ExperienceCard;
