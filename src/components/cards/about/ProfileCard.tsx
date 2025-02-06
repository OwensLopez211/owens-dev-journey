import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MapPin, Briefcase } from "lucide-react";

const ProfileCard = () => {
  const profileImage = "/OwensL.png";

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/OwensLopez211", 
      color: "hover:text-gray-900",
      bgHover: "hover:bg-gray-100" 
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/owens-l%C3%B3pez/", 
      color: "hover:text-blue-700",
      bgHover: "hover:bg-blue-50" 
    },
    { 
      icon: FaTwitter, 
      url: "https://twitter.com/tuusuario", 
      color: "hover:text-blue-500",
      bgHover: "hover:bg-blue-50" 
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
      <div className="relative h-40 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Contenedor para la imagen de perfil */}
      <div className="relative -mt-16 mb-3 flex justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-white/50">
            <img 
              src={profileImage} 
              alt="Perfil" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="px-4 py-3">
        {/* Estado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm font-medium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-green-600 text-sm">Disponible para proyectos</span>
        </motion.div>

        {/* Información personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-center space-y-1.5"
        >
          <h2 className="text-xl font-bold text-gray-800">Owens López</h2>
          
          <div className="flex items-center justify-center gap-1.5 text-gray-600">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">Full Stack Developer</span>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Santiago, Chile</span>
          </div>
        </motion.div>

        {/* Separador */}
        <div className="my-4 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3 pb-2"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-9 h-9 rounded-full 
                transition-all duration-300 ${social.bgHover}`}
            >
              <social.icon className={`text-gray-600 text-lg transition-colors duration-300 ${social.color}`} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;