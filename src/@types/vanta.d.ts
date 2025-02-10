declare module "vanta/dist/vanta.dots.min.js" {
    import { VantaEffect } from "vanta";
    const vantaDots: (options: any) => VantaEffect;
    export default vantaDots;
  }
  
  declare module "vanta" {
    export interface VantaEffect {
      destroy: () => void;
    }
  }
  