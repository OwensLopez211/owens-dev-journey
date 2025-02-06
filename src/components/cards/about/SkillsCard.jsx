import { Star } from "lucide-react";

const SkillsCard = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Django", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Python", level: 85 },
    { name: "TailwindCSS", level: 90 }
  ];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white/90 shadow-lg border border-gray-100 p-6">
        {/* Encabezado */}
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-5 h-5 text-yellow-500" />
          <h3 className="text-xl font-bold text-gray-800">Habilidades</h3>
        </div>

        {/* Lista de habilidades */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="space-y-2"
            >
              {/* Nombre y porcentaje */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              
              {/* Barra de progreso */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sutil decoración de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default SkillsCard;