import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Calendar, MapPin } from "lucide-react";
const EducationItem = ({ title, institution, period, achievements }) => {
    return (_jsxs(motion.div, { className: "relative pl-6 border-l-2 border-red-200 last:border-l-0", whileHover: { x: 4 }, transition: { duration: 0.2 }, children: [_jsx("div", { className: "absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-red-500" }), _jsxs("div", { className: "space-y-3 pb-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [_jsx("h4", { className: "font-bold text-lg text-gray-900", children: title }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-red-600", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: period })] })] }), _jsxs("div", { className: "flex items-center gap-2 text-gray-700", children: [_jsx(FaGraduationCap, { className: "h-4 w-4" }), _jsx("span", { className: "font-medium", children: institution.split(" - ")[0] }), _jsx("span", { className: "text-gray-300", children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-1 text-sm", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: institution.split(" - ")[1] })] })] }), achievements && achievements.length > 0 && (_jsx("ul", { className: "space-y-2 text-sm text-gray-600 mt-2", children: achievements.map((achievement, index) => (_jsx("li", { className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:bg-red-400 before:rounded-full", children: achievement }, index))) }))] })] }));
};
const EducationCard = () => {
    const educationData = [
        {
            title: "Ingeniero en Informática",
            institution: "INACAP - Santiago, Chile",
            period: "2021 - 2024",
            achievements: [
                "Especialización en desarrollo de aplicaciones web y móviles",
                "Proyectos destacados utilizando React, Node.js y tecnologías cloud",
                "Participación activa en proyectos de innovación tecnológica"
            ]
        },
        {
            title: "Técnico en Analista Programador",
            institution: "INACAP - Santiago, Chile",
            period: "2021 - 2023",
            achievements: [
                "Fundamentos sólidos en programación y estructuras de datos",
                "Desarrollo de aplicaciones utilizando diferentes lenguajes y frameworks",
                "Experiencia práctica en metodologías ágiles y trabajo en equipo"
            ]
        }
    ];
    return (_jsx("div", { className: "w-full", children: _jsxs("div", { className: "relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-8", children: [_jsx(motion.div, { animate: {
                                rotate: [0, 10, 0],
                                scale: [1, 1.1, 1]
                            }, transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }, children: _jsx(FaGraduationCap, { className: "w-6 h-6 text-red-500" }) }), _jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent", children: "Educaci\u00F3n" })] }), _jsx("div", { className: "space-y-2", children: educationData.map((education, index) => (_jsx(EducationItem, { ...education }, index))) }), _jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-red-500/10 rounded-full blur-3xl" })] }) }));
};
export default EducationCard;
