import { jsx as _jsx } from "react/jsx-runtime";
const ProjectSearch = ({ onSearch }) => {
    return (_jsx("div", { className: "mb-8", children: _jsx("input", { type: "text", placeholder: "Buscar proyectos...", onChange: (e) => onSearch(e.target.value), className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none" }) }));
};
export default ProjectSearch;
