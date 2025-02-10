import { jsx as _jsx } from "react/jsx-runtime";
const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (_jsx("div", { className: "mb-8 flex flex-wrap gap-4", children: categories.map((category) => (_jsx("button", { onClick: () => onCategoryChange(category), className: `rounded-full px-4 py-2 transition-colors ${activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: category }, category))) }));
};
export default ProjectFilter;
