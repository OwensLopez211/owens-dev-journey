import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/owens-dev-journey/", // Configura correctamente el subdirectorio en GitHub Pages
  publicDir: "public", // Asegura que Vite sirva archivos estáticos

  build: {
    minify: "esbuild", // Minifica el código para mejorar la velocidad de carga
    chunkSizeWarningLimit: 500, // Reduce advertencias en archivos grandes
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Extrae dependencias a un archivo separado
          }
        },
      },
    },
  },

  server: {
    open: true, // Abre automáticamente en el navegador
    port: 3000, // Usa el puerto 3000 por defecto
    cors: true, // Habilita CORS en desarrollo
  },
});
