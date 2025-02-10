import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MapPin, Briefcase } from "lucide-react";
const ProfileCard = () => {
    const profileImage = "/owens-dev-journey/Owens1.png";
    const socialLinks = [
        {
            icon: FaGithub,
            url: "https://github.com/OwensLopez211",
            color: "hover:text-gray-900",
            bgHover: "hover:bg-gray-100",
            label: "GitHub"
        },
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/owens-l%C3%B3pez/",
            color: "hover:text-blue-700",
            bgHover: "hover:bg-blue-50",
            label: "LinkedIn"
        },
        {
            icon: FaTwitter,
            url: "https://twitter.com/tuusuario",
            color: "hover:text-blue-500",
            bgHover: "hover:bg-blue-50",
            label: "Twitter"
        }
    ];
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "w-full rounded-2xl bg-white shadow-lg overflow-hidden", children: [_jsxs("div", { className: "relative h-44 overflow-hidden", children: [_jsx(motion.div, { className: "absolute inset-0 bg-[linear-gradient(110deg,#2563eb,#4f46e5,#7c3aed)]", animate: {
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }, transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear"
                        } }), _jsx("div", { className: "absolute inset-0", style: {
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                            backgroundSize: '20px 20px'
                        } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" })] }), _jsx("div", { className: "relative -mt-20 mb-3 flex justify-center", children: _jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 200 }, children: _jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" }), _jsx("div", { className: "relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white", children: _jsx("img", { src: profileImage, alt: "Perfil", className: "w-full h-full object-cover transition duration-300 group-hover:scale-105" }) })] }) }) }), _jsxs("div", { className: "px-6 py-4", children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "flex items-center justify-center gap-2 mb-4", children: _jsxs("span", { className: "px-3 py-1 rounded-full bg-green-50 border border-green-200 flex items-center gap-2", children: [_jsxs("span", { className: "relative flex h-2 w-2", children: [_jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }), _jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })] }), _jsx("span", { className: "text-green-700 text-sm font-medium", children: "Disponible para proyectos" })] }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "text-center space-y-3", children: [_jsx("h2", { className: "text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: "Owens L\u00F3pez" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 text-gray-600", children: [_jsx(Briefcase, { className: "w-4 h-4 text-indigo-500" }), _jsx("span", { className: "text-sm font-medium", children: "Full Stack Developer" })] }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-gray-600", children: [_jsx(MapPin, { className: "w-4 h-4 text-indigo-500" }), _jsx("span", { className: "text-sm", children: "Santiago, Chile" })] })] })] }), _jsx("div", { className: "my-4 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "flex justify-center gap-3", children: socialLinks.map((social, index) => (_jsxs(motion.a, { href: social.url, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, className: `group flex items-center justify-center w-10 h-10 rounded-xl 
                bg-gray-50 border border-gray-200
                transition-all duration-300 ${social.bgHover}`, children: [_jsx(social.icon, { className: `text-gray-600 text-lg transition-colors duration-300 ${social.color}` }), _jsx("span", { className: "sr-only", children: social.label })] }, index))) })] })] }));
};
export default ProfileCard;
