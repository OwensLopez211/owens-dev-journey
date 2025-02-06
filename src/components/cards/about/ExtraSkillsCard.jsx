import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const ExtraSkillsCard = () => {
  const extraSkills = [
    { name: "Git", level: "Avanzado", icon: "🔄" },
    { name: "Docker", level: "Intermedio", icon: "🐳" },
    { name: "Linux", level: "Avanzado", icon: "🐧" },
    { name: "SQL", level: "Avanzado", icon: "📊" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-2xl bg-white shadow-lg p-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-5 h-5 text-violet-500" />
        <h3 className="text-lg font-bold text-gray-800">Herramientas</h3>
      </div>

      <div className="space-y-3">
        {extraSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg">{skill.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-xs text-gray-500">{skill.level}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level === "Avanzado" ? "90%" : "75%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`h-full rounded-full ${
                    skill.level === "Avanzado" 
                      ? "bg-violet-500" 
                      : "bg-violet-400"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExtraSkillsCard;