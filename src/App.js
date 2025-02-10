import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import "./index.css";
function App() {
    const location = useLocation(); // Detectar la ruta actual
    return (_jsx(AnimatePresence, { mode: "wait", children: _jsx(Routes, { location: location, children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "work", element: _jsx(Work, {}) })] }) }, location.pathname) }));
}
export default App;
