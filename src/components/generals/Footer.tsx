import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HeartIcon } from "lucide-react";

const SocialLink = ({ href, icon: Icon, hoverColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-600 hover:${hoverColor} transition-colors duration-300`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-2xl" />
  </motion.a>
);

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/tuusuario",
      hoverColor: "text-gray-900"
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/in/tuusuario",
      hoverColor: "text-blue-700"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/tuusuario",
      hoverColor: "text-blue-500"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Copyright */}
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Owens López
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartIcon className="w-4 h-4 text-red-500" />
          </motion.div>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div 
          className="flex gap-8 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <SocialLink
              key={index}
              href={social.href}
              icon={social.icon}
              hoverColor={social.hoverColor}
            />
          ))}
        </motion.div>

        {/* Texto adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-xs mt-4"
        >
          Hecho con pasión y tecnologías modernas
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;