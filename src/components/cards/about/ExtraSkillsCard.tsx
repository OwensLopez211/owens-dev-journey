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

const ExtraSkillsCard = () => {
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
      <div className="relative rounded-2xl bg-white shadow-xl border border-purple-100 p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-purple-100 p-2.5 rounded-xl">
            <Boxes className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-600">
              Herramientas y Tecnologías
            </h3>
            <p className="text-sm text-gray-500">
              Tecnologías y herramientas que uso en mi día a día
            </p>
          </div>
        </div>

        {/* Secciones */}
        <div className="space-y-8">
          {Object.entries(extraSkills).map(([categoria, herramientas]) => (
            <div key={categoria}>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  {categoria}
                </h4>
                <div className="h-px flex-grow bg-gradient-to-r from-purple-100 to-transparent" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {herramientas.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 
                             border border-purple-100 hover:border-purple-200 hover:bg-purple-50/70 
                             transition-all duration-300 shadow-sm"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm shrink-0">
                      <tech.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-gray-800 break-normal">
                        {tech.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
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
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ExtraSkillsCard;