import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star, Code2, Database, Wrench, Layout, Braces, Wind, Layers, KeyRound, Server, Terminal, GitBranch, PackageSearch, Cpu } from "lucide-react";
const SkillsCard = () => {
    const habilidades = {
        "Desarrollo Frontend": [
            { name: "React.js", icon: Code2 },
            { name: "JavaScript (ES6+)", icon: Braces },
            { name: "TailwindCSS", icon: Wind },
            { name: "Diseño Responsivo", icon: Layout },
            { name: "Manejo de Estado", icon: Layers }
        ],
        "Desarrollo Backend": [
            { name: "Django", icon: Server },
            { name: "Python", icon: Cpu },
            { name: "APIs RESTful", icon: Database },
            { name: "Diseño de Bases de Datos", icon: Database },
            { name: "Autenticación y Autorización", icon: KeyRound }
        ],
        "Herramientas de Desarrollo": [
            { name: "Git y Control de Versiones", icon: GitBranch },
            { name: "Vite", icon: Wind },
            { name: "Gestores de Paquetes (npm/pip)", icon: PackageSearch },
            { name: "Línea de Comandos", icon: Terminal },
            { name: "Herramientas de Testing", icon: Wrench }
        ]
    };
    return (_jsx("div", { className: "w-full", children: _jsxs("div", { className: "relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-8", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-sm" }), _jsx(Star, { className: "w-6 h-6 text-indigo-500 relative" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Experiencia T\u00E9cnica" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Tecnolog\u00EDas y frameworks que domino" })] })] }), _jsx("div", { className: "space-y-8", children: Object.entries(habilidades).map(([categoria, listaHabilidades]) => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h4", { className: "text-sm font-bold text-indigo-950 uppercase tracking-wider whitespace-nowrap", children: categoria }), _jsx("div", { className: "h-px flex-grow bg-gradient-to-r from-indigo-100 to-transparent" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3", children: listaHabilidades.map((habilidad) => (_jsxs("div", { className: "group flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 \r\n                             rounded-lg border border-indigo-100 hover:border-indigo-300 \r\n                             hover:from-indigo-100/50 hover:to-purple-100/50 \r\n                             transition-all duration-300 shadow-sm", children: [_jsxs("div", { className: "relative shrink-0", children: [_jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" }), _jsx(habilidad.icon, { className: "w-5 h-5 text-indigo-500 relative" })] }), _jsx("span", { className: "text-sm font-medium text-indigo-700 break-normal", children: habilidad.name })] }, habilidad.name))) })] }, categoria))) }), _jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" })] }) }));
};
export default SkillsCard;
