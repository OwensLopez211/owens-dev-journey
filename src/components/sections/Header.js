import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";
const Header = ({ setIsHeaderVisible }) => {
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
            setCurrentTime(now.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }));
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
    return (_jsxs(motion.header, { className: "fixed top-0 left-0 w-full z-50", animate: { y: isVisible ? 0 : "-100%" }, transition: { duration: 0.3, ease: "easeInOut" }, children: [_jsx("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-md" }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" }), _jsx("div", { className: "relative h-[50px] sm:h-[60px] px-4 sm:px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto h-full flex items-center justify-between", children: [_jsx(motion.div, { className: "text-white/90 font-mono text-sm tracking-tight", whileHover: { opacity: 1 }, children: "Owens/Chile" }), _jsx("nav", { className: "flex items-center", children: _jsx("div", { className: "flex gap-1 p-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10", children: [
                                    { to: "/", icon: Home, label: "Inicio" },
                                    { to: "/work", icon: Briefcase, label: "Proyectos" },
                                    { to: "/about", icon: User, label: "Acerca" }
                                ].map(({ to, icon: Icon, label }) => (_jsxs(Link, { to: to, onClick: (e) => {
                                        if (to === "/" && location.pathname === "/") {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                    }, className: `
                    relative group flex items-center gap-2 px-3 py-1.5 rounded-full
                    transition-all duration-300
                    ${location.pathname === to ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'}
                  `, children: [_jsx(Icon, { size: 16, className: "transition-transform group-hover:scale-110" }), _jsx("span", { className: "hidden sm:block text-sm", children: label })] }, to))) }) }), _jsx(motion.div, { className: "text-white/90 font-mono text-sm tabular-nums", whileHover: { opacity: 1 }, children: currentTime })] }) })] }));
};
export default Header;
