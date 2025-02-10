import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
const ProjectCarousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const duration = 5000;
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(nextSlide, duration);
            return () => clearInterval(interval);
        }
    }, [isPaused, nextSlide, duration]);
    if (!projects || projects.length === 0) {
        return _jsx("p", { className: "text-center text-gray-500", children: "No hay proyectos disponibles." });
    }
    return (_jsxs("div", { className: "w-full max-w-4xl mx-auto relative", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800", children: "Proyectos Destacados" }), _jsx("button", { onClick: () => setIsPaused(!isPaused), className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors", children: isPaused ? (_jsxs(_Fragment, { children: [_jsx(Play, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm text-black", children: "Reanudar" })] })) : (_jsxs(_Fragment, { children: [_jsx(Pause, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm text-black", children: "Pausar" })] })) })] }), _jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100", children: [_jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { className: "relative aspect-video", initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 }, transition: { duration: 0.5 }, children: [_jsx("img", { src: projects[currentIndex].imageSrc, alt: projects[currentIndex].title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: [_jsx("h3", { className: "text-2xl font-bold mb-2", children: projects[currentIndex].title }), _jsx("p", { className: "text-sm text-gray-200 mb-2", children: projects[currentIndex].dateRange }), _jsx("p", { className: "text-sm text-gray-200 mb-3", children: projects[currentIndex].description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: projects[currentIndex].tags.map((tag, index) => (_jsx("span", { className: "px-2 py-1 text-xs font-medium bg-white/20 rounded-full", children: tag }, index))) }), _jsxs("a", { href: `https://${projects[currentIndex].website}`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-200 transition-colors", children: ["Visitar proyecto ", _jsx(ExternalLink, { className: "w-4 h-4" })] })] })] }, currentIndex) }), isHovered && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: prevSlide, className: "absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition", children: _jsx(ChevronLeft, { className: "w-6 h-6" }) }), _jsx("button", { onClick: nextSlide, className: "absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition", children: _jsx(ChevronRight, { className: "w-6 h-6" }) })] })), _jsx("div", { className: "absolute bottom-2 left-0 right-0 flex justify-center gap-2 pb-2", children: projects.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}` }, index))) }), !isPaused && (_jsx(motion.div, { className: "absolute bottom-0 left-0 h-1 bg-white", initial: { width: "0%" }, animate: { width: "100%" }, transition: { duration: duration / 1000, ease: "linear" } }, `progress-${currentIndex}`))] })] }));
};
export default ProjectCarousel;
