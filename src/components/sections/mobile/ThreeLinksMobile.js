import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Book, Mail } from "lucide-react";
import ContactModal from "../../cards/home/ContactModal";
const ThreeColumnsMobile = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuItems = [
        {
            id: "proyectos",
            label: "Proyectos",
            icon: Briefcase,
            onClick: () => console.log("Proyectos clicked")
        },
        {
            id: "story",
            label: "Short story",
            icon: Book,
            onClick: () => console.log("Story clicked")
        },
        {
            id: "contacto",
            label: "Contacto",
            icon: Mail,
            onClick: () => setIsModalOpen(true)
        }
    ];
    return (_jsxs(motion.section, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "w-full flex flex-col items-center justify-center px-5 mt-10", children: [_jsx("div", { className: "w-full max-w-[400px] p-2 rounded-2xl bg-white/50 backdrop-blur-sm", children: _jsx("div", { className: "flex justify-between items-center", children: menuItems.map(({ id, label, icon: Icon, onClick }) => (_jsx(motion.div, { className: "relative group", onMouseEnter: () => setHoveredItem(id), onMouseLeave: () => setHoveredItem(null), onClick: onClick, children: _jsxs(motion.div, { className: `
                  flex flex-col items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
                  transition-all duration-300 ease-out
                  ${hoveredItem === id ? 'bg-gray-50' : 'hover:bg-gray-50/50'}
                `, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(Icon, { className: `w-5 h-5 transition-colors duration-300
                    ${hoveredItem === id ? 'text-blue-500' : 'text-gray-600'}
                  ` }), _jsx("span", { className: `text-sm font-medium transition-colors duration-300
                    ${hoveredItem === id ? 'text-blue-500' : 'text-gray-800'}
                  `, children: label }), _jsx(motion.div, { className: "absolute -bottom-1 left-1/2 h-0.5 bg-blue-500 rounded-full", initial: { width: 0 }, animate: {
                                        width: hoveredItem === id ? '80%' : 0,
                                        x: '-50%'
                                    }, transition: { duration: 0.3 } })] }) }, id))) }) }), isModalOpen && (_jsx(ContactModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) }))] }));
};
export default ThreeColumnsMobile;
