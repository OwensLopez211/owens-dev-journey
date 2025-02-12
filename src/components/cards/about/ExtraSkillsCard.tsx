import { motion } from "framer-motion";
import { 
  BarChart3, 
  FileSpreadsheet,
  Database,
  Server,
  Boxes,
  GitBranch,
  Terminal,
  Layout,
  Container,
  Shield
} from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

const ExtraSkillsCard = () => {
  const { theme } = useTheme();

  const extraSkills = {
    "ANÁLISIS DE DATOS": [
      { name: "Power BI", icon: BarChart3, level: "Avanzado" },
      { name: "Excel", icon: FileSpreadsheet, level: "Experto" },
    ],
    "BASES DE DATOS": [
      { name: "SQL (PostgreSQL, MySQL)", icon: Database, level: "Avanzado" },
      { name: "NoSQL (MongoDB)", icon: Shield, level: "Intermedio" },
      { name: "Redis", icon: Server, level: "Intermedio" }
    ],
    "INFRAESTRUCTURA Y SERVIDOR": [
      { name: "Nginx", icon: Layout, level: "Intermedio" },
      { name: "Gunicorn", icon: Server, level: "Intermedio" },
      { name: "Docker", icon: Container, level: "Avanzado" }
    ],
    "HERRAMIENTAS DE CONTROL": [
      { name: "Git", icon: GitBranch, level: "Avanzado" },
      { name: "Linux", icon: Terminal, level: "Intermedio" }
    ]
  };

  return (
    <div className="w-full">
      <div
        className="relative rounded-2xl backdrop-blur-xl shadow-xl border p-8"
        style={{
          backgroundColor: `${theme.background.dark}e6`, // 90% opacity
          borderColor: theme.border.dark,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
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
            <div
              className="p-2.5 rounded-xl relative"
              style={{ backgroundColor: `${theme.background.DEFAULT}80` }} // 50% opacity
            >
              <Boxes className="w-5 h-5" style={{ color: theme.primary.light }} />
            </div>
          </motion.div>
          <div>
            <h3
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            >
              Herramientas y Tecnologías
            </h3>
            <p className="text-sm" style={{ color: theme.text.secondary }}>
              Tecnologías y herramientas que uso en mi día a día
            </p>
          </div>
        </div>

        {/* Secciones */}
        <div className="space-y-8">
          {Object.entries(extraSkills).map(([categoria, herramientas]) => (
            <div key={categoria}>
              <div className="flex items-center gap-2 mb-4">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
                  style={{ color: theme.text.primary }}
                >
                  {categoria}
                </h4>
                <div
                  className="h-px flex-grow"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary.light}33, transparent)`, // 20% opacity
                  }}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {herramientas.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                      borderColor: theme.border.dark,
                    }}
                  >
                    <div
                      className="p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: `${theme.background.light}80` }} // 50% opacity
                    >
                      <tech.icon style={{ color: theme.primary.light }} className="w-5 h-5" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium" style={{ color: theme.text.primary }}>
                        {tech.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: theme.text.secondary }}>
                        {tech.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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

export default ExtraSkillsCard;
