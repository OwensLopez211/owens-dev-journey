import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: `${theme.background.dark}d9`, // 85% opacidad
      }}
      className="relative w-full py-4 backdrop-blur-md"
    >
      {/* Línea de gradiente superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${theme.primary.DEFAULT}33, transparent)` // 20% opacidad
        }}
      />

      {/* Fondo con gradiente */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.primary.DEFAULT}1a, transparent, ${theme.secondary.DEFAULT}1a)` // 10% opacidad
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Copyright con gradiente */}
        <motion.div
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          className="font-mono text-sm tracking-tight text-transparent font-medium flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Owens López
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartIcon className="w-4 h-4" style={{ color: theme.primary.DEFAULT }} />
          </motion.div>
        </motion.div>

        {/* Mensaje adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.secondary.light}, ${theme.primary.light})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          className="font-mono text-sm tracking-tight text-transparent font-medium"
        >
          Hecho con pasión y tecnologías modernas
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;