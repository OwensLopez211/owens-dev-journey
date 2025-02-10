import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HeartIcon } from "lucide-react";
const SocialLink = ({ href, icon: Icon, hoverColor }) => (_jsx(motion.a, { href: href, target: "_blank", rel: "noopener noreferrer", className: `text-gray-600 hover:${hoverColor} transition-colors duration-300`, whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: _jsx(Icon, { className: "text-2xl" }) }));
const Footer = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/tuusuario",
            hoverColor: "text-gray-900"
        },
        {
            icon: FaLinkedin,
            href: "https://linkedin.com/in/tuusuario",
            hoverColor: "text-blue-700"
        },
        {
            icon: FaTwitter,
            href: "https://twitter.com/tuusuario",
            hoverColor: "text-blue-500"
        }
    ];
    return (_jsxs(motion.footer, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "relative w-full py-8", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm" }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center", children: [_jsxs(motion.div, { className: "flex items-center gap-2", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: [_jsxs("p", { className: "text-gray-600 text-sm", children: ["\u00A9 ", new Date().getFullYear(), " Owens L\u00F3pez"] }), _jsx(motion.div, { animate: { scale: [1, 1.2, 1] }, transition: { duration: 2, repeat: Infinity }, children: _jsx(HeartIcon, { className: "w-4 h-4 text-red-500" }) })] }), _jsx(motion.div, { className: "flex gap-8 mt-4", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, children: socialLinks.map((social, index) => (_jsx(SocialLink, { href: social.href, icon: social.icon, hoverColor: social.hoverColor }, index))) }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "text-gray-500 text-xs mt-4", children: "Hecho con pasi\u00F3n y tecnolog\u00EDas modernas" })] })] }));
};
export default Footer;
