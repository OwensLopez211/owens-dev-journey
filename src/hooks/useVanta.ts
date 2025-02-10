import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any; // Forzar a TypeScript a reconocer VANTA
  }
}

export const useVanta = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.pointerEvents = "none";
    iframe.style.zIndex = "-1";
    iframe.style.background = "transparent";
    iframe.style.overflow = "hidden";
    iframeRef.current = iframe;

    if (vantaRef.current) {
      vantaRef.current.appendChild(iframe);
      iframe.onload = () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc || !iframe.contentWindow) return;

        iframeDoc.body.style.background = "transparent";
        iframeDoc.body.style.overflow = "hidden";
        iframeDoc.body.style.margin = "0";
        iframeDoc.body.style.padding = "0";

        // Cargar Three.js desde el CDN
        const threeScript = document.createElement("script");
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
        threeScript.onload = () => {
          if (iframe.contentWindow) {
            // @ts-ignore - Forzar a TypeScript a reconocer THREE en window
            iframe.contentWindow.THREE = iframe.contentWindow.THREE || {};
          }

          // Cargar Vanta.js desde el CDN
          const vantaScript = document.createElement("script");
          vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js";
          vantaScript.onload = () => {
            if (iframe.contentWindow) {
              // @ts-ignore - Forzar a TypeScript a reconocer VANTA en window
              iframe.contentWindow.VANTA = iframe.contentWindow.VANTA || {};

              iframe.contentWindow.VANTA.DOTS({
                el: iframeDoc.body,
                // @ts-ignore
                THREE: iframe.contentWindow.THREE,
                color: 0xff0000,
                backgroundColor: 0x000000,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
              });
            }
          };
          iframeDoc.body.appendChild(vantaScript);
        };
        iframeDoc.body.appendChild(threeScript);
      };
    }

    return () => {
      if (iframeRef.current && vantaRef.current) {
        vantaRef.current.removeChild(iframeRef.current);
      }
    };
  }, []);

  return vantaRef;
};
