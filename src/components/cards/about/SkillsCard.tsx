import { motion } from "framer-motion";
import { 
  Star, 
  Code2, 
  Database, 
  Wrench,
  Layout,
  Braces,
  Wind,
  Layers,
  KeyRound,
  Server,
  Terminal,
  GitBranch,
  PackageSearch,
  Cpu
} from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

const SkillsCard = () => {
  const { theme } = useTheme();

  const habilidades = {
    "Desarrollo Frontend": [
      { name: "React.js", icon: Code2 },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "TailwindCSS", icon: Wind },
      { name: "Diseño Responsivo", icon: Layout },
      { name: "Manejo de Estado", icon: Layers }
    ],
    "Desarrollo Backend": [
      { name: "Django", icon: Server },
      { name: "Python", icon: Cpu },
      { name: "APIs RESTful", icon: Database },
      { name: "Diseño de Bases de Datos", icon: Database },
      { name: "Autenticación y Autorización", icon: KeyRound }
    ],
    "Herramientas de Desarrollo": [
      { name: "Git y Control de Versiones", icon: GitBranch },
      { name: "Vite", icon: Wind },
      { name: "Gestores de Paquetes (npm/pip)", icon: PackageSearch },
      { name: "Línea de Comandos", icon: Terminal },
      { name: "Herramientas de Testing", icon: Wrench }
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
        {/* Encabezado mejorado */}
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
            <Star className="w-6 h-6 relative" style={{ color: theme.primary.light }} />
          </motion.div>
          <div>
            <h3
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            >
              Experiencia Técnica
            </h3>
            <p className="text-sm mt-1" style={{ color: theme.text.secondary }}>
              Tecnologías y frameworks que domino
            </p>
          </div>
        </div>

        {/* Categorías de Habilidades */}
        <div className="space-y-8">
          {Object.entries(habilidades).map(([categoria, listaHabilidades]) => (
            <div key={categoria} className="space-y-4">
              <div className="flex items-center gap-2">
                <h4
                  className="text-sm font-bold uppercase tracking-wider whitespace-nowrap"
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
                {listaHabilidades.map((habilidad) => (
                  <motion.div
                    key={habilidad.name}
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                      borderColor: theme.border.dark,
                    }}
                  >
                    <div className="relative shrink-0">
                      <div
                        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                        style={{
                          background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
                        }}
                      />
                      <habilidad.icon className="w-5 h-5 relative" style={{ color: theme.primary.light }} />
                    </div>
                    <span
                      className="text-sm font-medium break-normal transition-colors"
                      style={{
                        color: theme.text.primary,
                      }}
                    >
                      {habilidad.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decoración de fondo moderna */}
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

export default SkillsCard;
