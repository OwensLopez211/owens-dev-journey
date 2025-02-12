import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  setIsHeaderVisible: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsHeaderVisible }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const location = useLocation();

  // Scroll handler
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

  // Clock
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

  // Scroll to top on route change
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
      {/* Background with themed gradients */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{ 
          backgroundColor: `${theme.background.dark}d9`,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, 
              ${theme.primary.light}1a, 
              transparent, 
              ${theme.secondary.light}1a
            )`
          }}
        />
      </div>
      
      {/* Gradient line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: `linear-gradient(to right, 
            transparent, 
            ${theme.primary.light}33, 
            transparent
          )`
        }}
      />

      {/* Content */}
      <div className="relative h-[50px] sm:h-[60px] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div 
            className="font-mono text-sm tracking-tight font-medium"
            style={{
              background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Owens/Chile
          </motion.div>

          {/* Navigation */}
          <nav className="flex items-center">
            <div 
              className="flex gap-1 p-1.5 rounded-full backdrop-blur-sm border"
              style={{
                backgroundColor: `${theme.background.dark}80`,
                borderColor: `${theme.border.light}`
              }}
            >
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
                  style={{
                    color: location.pathname === to ? theme.primary.light : theme.text.secondary,
                    backgroundColor: location.pathname === to ? `${theme.primary.light}1a` : 'transparent'
                  }}
                  className={`
                    relative group flex items-center gap-2 px-3 py-1.5 rounded-full
                    transition-all duration-300 hover:bg-slate-700/30
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

          {/* Clock */}
          <motion.div 
            className="font-mono text-sm tabular-nums font-medium"
            style={{
              background: `linear-gradient(to right, ${theme.secondary.light}, ${theme.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
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