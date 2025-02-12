// src/components/layout/Layout.tsx
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../generals/Footer";
import Squares from "./Squares";
import { useTheme } from "../../contexts/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const pageTransitionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full" style={{ background: theme.background.dark }}>
      {/* Squares Background */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0">
          <Squares 
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor={theme.border.light}
            hoverFillColor={theme.hover.dark}
          />
        </div>
      </div>

      {/* Header (Sin `AnimatePresence`) */}
      <Header />

      {/* Main Content with Page Transitions */}
      <motion.main 
        className="relative flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] z-10"
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={location.pathname}
      >
        <div className="py-8 w-full overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} variants={pageTransitionVariants} initial="initial" animate="animate" exit="exit">
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.main>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
