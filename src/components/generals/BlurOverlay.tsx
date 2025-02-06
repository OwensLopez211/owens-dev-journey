
import { useState, useEffect, useCallback } from "react";

interface BlurOverlayProps {
  isHeaderVisible: boolean;
}

const BlurOverlay: React.FC<BlurOverlayProps> = ({ isHeaderVisible }) => {
  const [blurOpacity, setBlurOpacity] = useState(0);

  const handleScroll = useCallback(() => {
    const endBlur = window.innerHeight * 0.4;
    const scrollY = window.scrollY;
    const opacity = Math.min(Math.max(scrollY / endBlur, 0), 1);
    setBlurOpacity(opacity);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full 
        transition-all duration-300 
        z-40 pointer-events-none
        ${isHeaderVisible ? "h-[30vh]" : "h-[60vh]"}
      `}
      style={{
        background: `rgba(255, 255, 255, ${blurOpacity * 0.8})`,
        backdropFilter: `blur(${Math.round(blurOpacity * 12)}px)`,
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0))",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0))"
      }}
    />
  );
};


export default BlurOverlay;
