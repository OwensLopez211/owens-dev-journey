import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../generals/Footer";
// Carga Three.js dinámicamente y asigna correctamente a `window`
const loadThree = async () => {
    if (!window.THREE) {
        const THREE = await import("three");
        window.THREE = THREE;
    }
    return window.THREE;
};
// Carga Vanta.js dinámicamente con tipado correcto
const loadVanta = async () => {
    const VANTA = await import("vanta/dist/vanta.dots.min.js");
    return VANTA;
};
const Layout = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    useEffect(() => {
        let mounted = true;
        const initVanta = async () => {
            try {
                await loadThree();
                const VANTA = await loadVanta();
                if (mounted && vantaRef.current) {
                    setVantaEffect(VANTA.default({
                        el: vantaRef.current,
                        THREE: window.THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        backgroundColor: 0xffffff,
                        color: 0x000000,
                        color2: 0x000000,
                        spacing: 35,
                        showLines: false,
                        size: 3,
                    }));
                }
            }
            catch (error) {
                console.error("Error al inicializar Vanta.js:", error);
            }
        };
        initVanta();
        return () => {
            mounted = false;
            if (vantaEffect)
                vantaEffect.destroy();
        };
    }, []);
    return (_jsxs("div", { className: "relative flex flex-col min-h-screen w-full", children: [_jsx("div", { ref: vantaRef, className: "absolute inset-0 w-full h-full -z-10" }), _jsx(motion.div, { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 }, className: "fixed top-0 left-0 w-full z-50", children: _jsx(Header, { setIsHeaderVisible: () => { } }) }), _jsx(motion.main, { className: "flex-1 flex flex-col relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px]", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.2 }, children: _jsx("div", { className: "relative z-10 py-8 w-full overflow-x-hidden", children: _jsx(Outlet, {}) }) }), _jsx(motion.div, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 }, className: "relative z-20", children: _jsx(Footer, {}) })] }));
};
export default Layout;
