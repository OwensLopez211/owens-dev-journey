import { motion } from "framer-motion";
import { Code2, Briefcase, Layout } from "lucide-react";

const filterButtons = [
  { id: "all", label: "Todos", icon: Layout },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "fullstack", label: "Full Stack", icon: Briefcase }
];

const ProjectFilters = ({ filter, setFilter }) => {
  return (
    <motion.div className="flex flex-wrap justify-center gap-4">
      {filterButtons.map(({ id, label, icon: Icon }) => (
        <motion.button
          key={id}
          onClick={() => setFilter(id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
            ${filter === id 
              ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-white'
              : 'bg-slate-800/50 border border-slate-700/30 text-slate-400 hover:text-white hover:border-cyan-500/30'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={16} />
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilters;
