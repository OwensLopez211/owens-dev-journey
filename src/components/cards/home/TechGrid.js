import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};
// 📌 Modificar `TechGrid` para que acepte `technologies` como prop
const TechGrid = ({ technologies }) => {
    return (_jsx("section", { className: "w-full max-w-screen-xl mx-auto px-4 py-16", children: _jsx(motion.div, { variants: container, initial: "hidden", animate: "show", className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: technologies.map((tech) => (_jsxs(motion.div, { variants: item, className: "group relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" }), _jsxs("div", { className: "relative z-10 flex flex-col items-center space-y-4", children: [_jsx("div", { className: "w-16 h-16 flex items-center justify-center bg-gray-700/50 rounded-lg group-hover:scale-110 transition-all duration-300", children: _jsx("img", { src: tech.icon, alt: tech.name, className: "w-12 h-12" }) }), _jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors", children: tech.name }), _jsx("p", { className: "mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors", children: tech.description })] })] })] }, tech.name))) }) }));
};
export default TechGrid;
