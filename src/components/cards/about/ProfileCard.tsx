import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MapPin, Briefcase } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

const ProfileCard = () => {
  const { theme } = useTheme();
  const profileImage = "/owens-dev-journey/Owens1.png";

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/OwensLopez211", 
      label: "GitHub"
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/owens-l%C3%B3pez/", 
      label: "LinkedIn"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-2xl backdrop-blur-xl shadow-xl border overflow-hidden"
      style={{
        backgroundColor: `${theme.background.dark}e6`, // 90% opacity
        borderColor: theme.border.dark,
      }}
    >
      {/* Header con gradiente animado */}
      <div className="relative h-44 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(110deg, ${theme.primary.light}, ${theme.secondary.light}, ${theme.primary.light})`
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Patrón de puntos decorativo */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.text.muted}33 1px, transparent 0)`, // 20% opacity
            backgroundSize: '20px 20px'
          }}
        />
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Contenedor para la imagen de perfil */}
      <div className="relative -mt-20 mb-3 flex justify-center ">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="relative group">
            <div
              className="absolute -inset-0.5 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"
              style={{
                background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            />
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden border-4"
              style={{
                borderColor: theme.background.dark,
                backgroundColor: theme.background.dark,
              }}
            >
              <img 
                src={profileImage} 
                alt="Perfil de Owens López" 
                loading="lazy"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="px-6 py-4">
        {/* Estado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span
            className="px-3 py-1 rounded-full flex items-center gap-2 border"
            style={{
              backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
              borderColor: theme.primary.light + "33", // 20% opacity
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: theme.primary.light }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: theme.primary.DEFAULT }}
              />
            </span>
            <span className="text-sm font-medium" style={{ color: theme.primary.light }}>
              Disponible para proyectos
            </span>
          </span>
        </motion.div>

        {/* Información personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-3"
        >
          <h2
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
            }}
          >
            Owens López
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2" style={{ color: theme.text.primary }}>
              <Briefcase className="w-4 h-4" style={{ color: theme.primary.light }} />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
            
            <div className="flex items-center justify-center gap-2" style={{ color: theme.text.primary }}>
              <MapPin className="w-4 h-4" style={{ color: theme.primary.light }} />
              <span className="text-sm">Santiago, Chile</span>
            </div>
          </div>
        </motion.div>

        {/* Separador */}
        <div 
          className="my-4 w-full h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${theme.primary.light}33, transparent)`, // 20% opacity
          }}
        />

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300"
              style={{
                backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                borderColor: theme.border.dark,
              }}
            >
              <social.icon
                className="text-lg transition-colors duration-300"
                style={{ color: theme.text.primary }}
              />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
