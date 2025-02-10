/// <reference types="vite/client" />

declare namespace Intl {
    class Segmenter {
      constructor(locale: string, options?: { granularity: "grapheme" | "word" | "sentence" });
      segment(text: string): Iterable<{ segment: string }>;
    }
  }
  
  export {};

declare global {
  interface Window {
    THREE: typeof import("three");
  }
}

declare module "vanta/dist/vanta.dots.min.js" {
    import { VantaEffect } from "vanta";
  
    const vantaDots: VantaEffect;
    export default vantaDots;
  }
  