import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-4 bg-slate-900/85 backdrop-blur-md"
    >
      {/* Línea de gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Fondo con gradiente similar al header */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Copyright con gradiente */}
        <motion.div
          className="font-mono text-sm tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-medium flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Owens López
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartIcon className="w-4 h-4 text-red-500" />
          </motion.div>
        </motion.div>

        {/* Mensaje adicional con estilo coherente */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-sm tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium"
        >
          Hecho con pasión y tecnologías modernas
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
