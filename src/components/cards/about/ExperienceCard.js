import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Briefcase, MapPin, Calendar } from 'lucide-react';
const ExperienceCard = () => {
    const experiences = [
        {
            role: "DESARROLLADOR WEB",
            company: "Flowco Studio",
            location: "Santiago, Chile",
            period: "Nov 2024 - Feb 2025",
            achievements: [
                "Diseño y prototipado de la interfaz web en Figma, asegurando una experiencia visual atractiva y funcional.",
                "Desarrollo y personalización del sitio web en WordPress con Elementor.",
                "Implementación de CSS y JavaScript personalizados para optimizar la interacción y usabilidad."
            ]
        },
        {
            role: "DESARROLLADOR FRONT-END",
            company: "Newland Propiedades",
            location: "Santiago, Chile",
            period: "Jul 2024 - Nov 2024",
            achievements: [
                "Diseño y prototipado de la interfaz en Figma, enfocándose en accesibilidad y experiencia de usuario.",
                "Desarrollo del frontend con React, aplicando Context API para la gestión del estado y autenticación.",
                "Creación de layouts dinámicos y componentes reutilizables para mejorar la escalabilidad del proyecto.",
                "Estilización con Tailwind CSS, asegurando un diseño moderno y responsivo.",
                "Optimización de rendimiento mediante técnicas como lazy loading y memoization en componentes clave."
            ]
        }
    ];
    return (_jsx("div", { className: "w-full", children: _jsxs("div", { className: "relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-8", children: [_jsx(Briefcase, { className: "w-6 h-6 text-[color]-500" }), _jsx("h3", { className: "text-2xl font-bold ...", children: "T\u00EDtulo" })] }), _jsx("div", { className: "space-y-8", children: experiences.map((exp, index) => (_jsxs("div", { className: "relative pl-6 border-l-2 border-indigo-200 last:border-l-0", children: [_jsx("div", { className: "absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-indigo-500" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [_jsx("h4", { className: "font-bold text-lg text-indigo-900", children: exp.role }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-indigo-600", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsx("span", { children: exp.period })] })] }), _jsxs("div", { className: "flex items-center gap-2 text-indigo-700", children: [_jsx("span", { className: "font-semibold", children: exp.company }), _jsx("span", { className: "text-indigo-300", children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-1 text-sm", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: exp.location })] })] }), _jsx("ul", { className: "space-y-2 text-sm text-gray-600", children: exp.achievements.map((achievement, achievementIndex) => (_jsx("li", { className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:bg-indigo-400 before:rounded-full", children: achievement }, achievementIndex))) })] })] }, index))) }), _jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" })] }) }));
};
export default ExperienceCard;
