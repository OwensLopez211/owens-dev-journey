import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { gsap } from "gsap";
const FlowingMenu = ({ items = [] }) => {
    return (_jsx("div", { className: "w-full h-full overflow-hidden", children: _jsx("nav", { className: "flex flex-col h-full m-0 p-0", children: items.map((item, idx) => (_jsx(MenuItem, { ...item }, idx))) }) }));
};
const MenuItem = ({ link, text, image }) => {
    const itemRef = React.useRef(null);
    const marqueeRef = React.useRef(null);
    const marqueeInnerRef = React.useRef(null);
    const animationDefaults = { duration: 0.6, ease: "expo" };
    const findClosestEdge = (mouseX, mouseY, width, height) => {
        const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
        const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
        return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
    };
    const handleMouseEnter = (ev) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
            return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
        const tl = gsap.timeline({ defaults: animationDefaults });
        tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
            .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
            .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
    };
    const handleMouseLeave = (ev) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
            return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
        const tl = gsap.timeline({ defaults: animationDefaults });
        tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
    };
    const repeatedMarqueeContent = React.useMemo(() => {
        return Array.from({ length: 4 }).map((_, idx) => (_jsxs(React.Fragment, { children: [_jsx("span", { className: "text-[#060606] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]", children: text }), _jsx("div", { className: "w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center", style: { backgroundImage: `url(${image})` } })] }, idx)));
    }, [text, image]);
    return (_jsxs("div", { className: "flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]", ref: itemRef, children: [_jsx("a", { className: "flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060606] focus:text-white focus-visible:text-[#060606]", href: link, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: text }), _jsx("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]", ref: marqueeRef, children: _jsx("div", { className: "h-full w-[200%] flex", ref: marqueeInnerRef, children: _jsx("div", { className: "flex items-center relative h-full w-[200%] will-change-transform animate-marquee", children: repeatedMarqueeContent }) }) })] }));
};
export default FlowingMenu;
