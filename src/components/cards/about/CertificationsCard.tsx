import { motion } from "framer-motion";
import { Award, Calendar, Building2, ExternalLink, ScrollText } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const CertificationsCard = () => {
  const { theme } = useTheme();

  const certifications = [
    {
      title: "Certificación C1 en Inglés",
      organization: "EF Standard English Test (EF SET)",
      date: "2024",
      description: "Nivel avanzado de competencia en inglés, equivalente a C1 en el Marco Común Europeo de Referencia (MCER).",
      icon: ScrollText
    },
    {
      title: "Certificación en Power BI",
      organization: "Udemy",
      date: "2024",
      description: "Especialización en análisis de datos y creación de dashboards interactivos con Microsoft Power BI.",
      icon: ExternalLink
    },
    {
      title: "Certificación Full Stack Developer",
      organization: "INACAP",
      date: "2022",
      description: "Desarrollo web integral abarcando tecnologías frontend y backend, con énfasis en aplicaciones web modernas.",
      icon: Building2
    }
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
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute -inset-2 rounded-full opacity-20 blur-sm"
                style={{
                  background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
                }}
              />
              <Award className="w-6 h-6 relative" style={{ color: theme.primary.light }} />
            </motion.div>
          </div>
          <div>
            <h3
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            >
              Certificaciones
            </h3>
            <p className="text-sm mt-1" style={{ color: theme.text.secondary }}>
              Mis logros y acreditaciones profesionales
            </p>
          </div>
        </div>

        {/* Lista de certificaciones */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                  borderColor: theme.border.dark,
                }}
              >
                <div
                  className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, transparent, ${theme.primary.light}, transparent)`,
                  }}
                />

                <div className="space-y-4">
                  {/* Título y fecha */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${theme.background.light}80` }} // 50% opacity
                      >
                        <cert.icon style={{ color: theme.primary.light }} />
                      </div>
                      <h4 className="font-bold text-lg" style={{ color: theme.text.primary }}>
                        {cert.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: theme.text.secondary }}>
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Organización */}
                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{
                        backgroundColor: `${theme.background.light}80`,
                        borderColor: theme.border.dark,
                        color: theme.text.primary,
                      }}
                    >
                      {cert.organization}
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                    {cert.description}
                  </p>
                </div>

                {/* Barra lateral decorativa */}
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(to bottom, ${theme.primary.light}, ${theme.secondary.light})`,
                  }}
                />
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

export default CertificationsCard;
