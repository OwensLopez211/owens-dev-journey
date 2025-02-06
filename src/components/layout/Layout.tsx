import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../generals/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background overflow-x-hidden">
      {/* Header con efecto de aparición suave */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header setIsHeaderVisible={() => {}} />
      </motion.div>

      {/* Contenido principal con transición suave */}
      <motion.main 
        className="flex-1 flex flex-col relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Backdrop blur para elementos que puedan sobresalir */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10" />
        
        {/* Grid decorativo de fondo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-20" />
        
        {/* Contenido de la ruta actual */}
        <div className="relative z-10 py-8">
          <Outlet />
        </div>
      </motion.main>

      {/* Footer con efecto de aparición */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>

      {/* Gradiente decorativo en el fondo */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-background via-background to-background/90 pointer-events-none" />
    </div>
  );
};

export default Layout;