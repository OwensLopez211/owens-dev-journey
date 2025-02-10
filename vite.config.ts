import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/owens-dev-journey/',
  publicDir: "public", // Asegura que Vite sirva archivos de public/
});
