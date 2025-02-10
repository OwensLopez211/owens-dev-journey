import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BarChart3, FileSpreadsheet, Database, Server, Boxes, GitBranch, Terminal, Layout, Container, Shield } from "lucide-react";
const ExtraSkillsCard = () => {
    const extraSkills = {
        "ANÁLISIS DE DATOS": [
            { name: "Power BI", icon: BarChart3, level: "Avanzado" },
            { name: "Excel", icon: FileSpreadsheet, level: "Experto" },
        ],
        "BASES DE DATOS": [
            { name: "SQL (PostgreSQL, MySQL)", icon: Database, level: "Avanzado" },
            { name: "NoSQL (MongoDB)", icon: Shield, level: "Intermedio" },
            { name: "Redis", icon: Server, level: "Intermedio" }
        ],
        "INFRAESTRUCTURA Y SERVIDOR": [
            { name: "Nginx", icon: Layout, level: "Intermedio" },
            { name: "Gunicorn", icon: Server, level: "Intermedio" },
            { name: "Docker", icon: Container, level: "Avanzado" }
        ],
        "HERRAMIENTAS DE CONTROL": [
            { name: "Git", icon: GitBranch, level: "Avanzado" },
            { name: "Linux", icon: Terminal, level: "Intermedio" }
        ]
    };
    return (_jsx("div", { className: "w-full", children: _jsxs("div", { className: "relative rounded-2xl bg-white shadow-xl border border-purple-100 p-8", children: [_jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx("div", { className: "bg-purple-100 p-2.5 rounded-xl", children: _jsx(Boxes, { className: "w-5 h-5 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-purple-600", children: "Herramientas y Tecnolog\u00EDas" }), _jsx("p", { className: "text-sm text-gray-500", children: "Tecnolog\u00EDas y herramientas que uso en mi d\u00EDa a d\u00EDa" })] })] }), _jsx("div", { className: "space-y-8", children: Object.entries(extraSkills).map(([categoria, herramientas]) => (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap", children: categoria }), _jsx("div", { className: "h-px flex-grow bg-gradient-to-r from-purple-100 to-transparent" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3", children: herramientas.map((tech) => (_jsxs(motion.div, { whileHover: { scale: 1.02 }, className: "flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 \r\n                             border border-purple-100 hover:border-purple-200 hover:bg-purple-50/70 \r\n                             transition-all duration-300 shadow-sm", children: [_jsx("div", { className: "bg-white p-2 rounded-lg shadow-sm shrink-0", children: _jsx(tech.icon, { className: "w-5 h-5 text-purple-600" }) }), _jsxs("div", { className: "flex-grow min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-gray-800 break-normal", children: tech.name }), _jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: tech.level })] })] }, tech.name))) })] }, categoria))) }), _jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" })] }) }));
};
export default ExtraSkillsCard;
