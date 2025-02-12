// CodeAnimation.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { codeContent } from "../components/content/CodeContent";

const CodeAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeContent.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="flex flex-col bg-slate-900/50 rounded-lg backdrop-blur-sm p-4 sm:p-6 border border-slate-800 w-full max-w-[360px] sm:max-w-[460px] md:max-w-[500px] lg:w-[550px] text-[11px] sm:text-sm md:text-base"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Botones de ventana estilo Mac */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-4 h-4 rounded-full bg-red-500" />
        <div className="w-4 h-4 rounded-full bg-yellow-500" />
        <div className="w-4 h-4 rounded-full bg-green-500" />
      </div>

      {/* Código animado */}
      <div className="font-mono leading-relaxed">
        {codeContent.map((line, index) => (
          <motion.div
            key={index}
            className={`transition-colors duration-300 rounded px-2 -mx-2 ${
              currentLine === index ? "bg-slate-800/50" : ""
            }`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="opacity-50 mr-4 inline-block w-6 text-right select-none">
              {index + 1}
            </span>
            <span>
              {"    ".repeat(line.indent)}
              {line.content.map((part, pIndex) => (
                <span key={pIndex} className={part.color}>
                  {part.text}
                </span>
              ))}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeAnimation;