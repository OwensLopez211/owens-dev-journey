import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MapPin, Briefcase } from "lucide-react";

const ProfileCard = () => {
  const profileImage = "/owens-dev-journey/Owens1.png";

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/OwensLopez211", 
      color: "hover:text-gray-900",
      bgHover: "hover:bg-gray-100",
      label: "GitHub"
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/owens-l%C3%B3pez/", 
      color: "hover:text-blue-700",
      bgHover: "hover:bg-blue-50",
      label: "LinkedIn"
    },
    { 
      icon: FaTwitter, 
      url: "https://twitter.com/tuusuario", 
      color: "hover:text-blue-500",
      bgHover: "hover:bg-blue-50",
      label: "Twitter"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-2xl bg-white shadow-lg overflow-hidden"
    >
      {/* Header con gradiente animado */}
      <div className="relative h-44 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(110deg,#2563eb,#4f46e5,#7c3aed)]"
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
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* Contenedor para la imagen de perfil */}
      <div className="relative -mt-20 mb-3 flex justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
              <img 
                src={profileImage} 
                alt="Perfil" 
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
          <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-green-700 text-sm font-medium">Disponible para proyectos</span>
          </span>
        </motion.div>

        {/* Información personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-3"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Owens López
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span className="text-sm">Santiago, Chile</span>
            </div>
          </div>
        </motion.div>

        {/* Separador */}
        <div className="my-4 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

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
              className={`group flex items-center justify-center w-10 h-10 rounded-xl 
                bg-gray-50 border border-gray-200
                transition-all duration-300 ${social.bgHover}`}
            >
              <social.icon className={`text-gray-600 text-lg transition-colors duration-300 ${social.color}`} />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;