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

const SkillsCard = () => {
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
      <div className="relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8">
        {/* Encabezado mejorado */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-sm" />
            <Star className="w-6 h-6 text-indigo-500 relative" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experiencia Técnica
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Tecnologías y frameworks que domino
            </p>
          </div>
        </div>

        {/* Categorías de Habilidades */}
        <div className="space-y-8">
          {Object.entries(habilidades).map(([categoria, listaHabilidades]) => (
            <div key={categoria} className="space-y-4">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-wider whitespace-nowrap">
                  {categoria}
                </h4>
                <div className="h-px flex-grow bg-gradient-to-r from-indigo-100 to-transparent" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {listaHabilidades.map((habilidad) => (
                  <div
                    key={habilidad.name}
                    className="group flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 
                             rounded-lg border border-indigo-100 hover:border-indigo-300 
                             hover:from-indigo-100/50 hover:to-purple-100/50 
                             transition-all duration-300 shadow-sm"
                  >
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                      <habilidad.icon className="w-5 h-5 text-indigo-500 relative" />
                    </div>
                    <span className="text-sm font-medium text-indigo-700 break-normal">
                      {habilidad.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decoración de fondo moderna */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default SkillsCard;