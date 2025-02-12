// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import "./index.css";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;