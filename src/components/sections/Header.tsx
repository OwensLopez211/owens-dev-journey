import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";

interface HeaderProps {
  setIsHeaderVisible: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsHeaderVisible }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const location = useLocation();

  // Manejador de scroll optimizado
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const isAtTop = currentScrollY < 10;
      
      setIsVisible(isAtTop || isScrollingUp);
      setLastScrollY(currentScrollY);
      setIsHeaderVisible(isAtTop || isScrollingUp);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, setIsHeaderVisible]);

  // Reloj
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Scroll to top en cambio de ruta
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Fondo mejorado con gradientes */}
      <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />
      </div>
      
      {/* Línea de gradiente mejorada */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Contenido */}
      <div className="relative h-[50px] sm:h-[60px] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Logo/Brand con gradiente */}
          <motion.div 
            className="font-mono text-sm tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-medium"
            whileHover={{ scale: 1.02 }}
          >
            Owens/Chile
          </motion.div>

          {/* Navegación mejorada */}
          <nav className="flex items-center">
            <div className="flex gap-1 p-1.5 rounded-full bg-slate-800/50 backdrop-blur-sm border border-cyan-500/10">
              {[
                { to: "/", icon: Home, label: "Inicio" },
                { to: "/work", icon: Briefcase, label: "Proyectos" },
                { to: "/about", icon: User, label: "Acerca" }
              ].map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={(e) => {
                    if (to === "/" && location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`
                    relative group flex items-center gap-2 px-3 py-1.5 rounded-full
                    transition-all duration-300
                    ${location.pathname === to 
                      ? 'text-cyan-300 bg-cyan-500/10' 
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-700/30'}
                  `}
                >
                  <Icon 
                    size={16} 
                    className="transition-transform group-hover:scale-110 group-hover:rotate-3" 
                  />
                  <span className="hidden sm:block text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Reloj con estilo mejorado */}
          <motion.div 
            className="font-mono text-sm tabular-nums bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium"
            whileHover={{ scale: 1.02 }}
          >
            {currentTime}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;