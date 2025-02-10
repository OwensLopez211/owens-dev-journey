import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../sections/Hero";
import BlurOverlay from "../generals/BlurOverlay";
const FadeInSection = ({ children, delay = 0, className = "" }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y: 30 }, animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, transition: {
            duration: 0.8,
            delay,
            ease: "easeOut"
        }, className: className, children: children }));
};
const Home = () => {
    return (_jsx(AnimatePresence, { children: _jsxs("div", { className: "relative w-full overflow-hidden", children: [_jsx("div", { className: "fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" }), _jsxs(motion.div, { className: "relative z-10", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: [_jsx(BlurOverlay, { isHeaderVisible: true }), _jsx(FadeInSection, { className: "relative", children: _jsx(Hero, {}) })] }), _jsx("div", { className: "fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" })] }) }));
};
export default Home;
