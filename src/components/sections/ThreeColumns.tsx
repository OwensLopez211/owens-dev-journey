import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "../cards/home/ContactModal";

const NavItem = ({ 
  text, 
  isHovered, 
  onHover, 
  onLeave, 
  onClick, 
  hoverColor = "text-blue-500",
  showLine = false 
}) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className={`
        text-2xl font-extrabold cursor-pointer
        tracking-wide leading-relaxed
        transition-all duration-300
        ${isHovered ? hoverColor : 'text-gray-800'}
        hover:scale-105
        relative
      `}>
        {text}
        
        {/* Línea inferior animada */}
        <motion.div
          className="absolute -bottom-2 left-0 w-full h-0.5 bg-current transform origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Línea lateral animada */}
        {showLine && isHovered && (
          <div className="absolute left-[-25px] top-1/2 -translate-y-1/2">

          </div>
        )}
      </div>
    </motion.div>
  );
};

const ThreeColumns = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section 
      className="w-full flex flex-col items-center justify-center px-10 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-[1200px] flex justify-between items-center">
        <NavItem
          text="Proyectos"
          isHovered={hoveredItem === "proyectos"}
          onHover={() => setHoveredItem("proyectos" as any)}
          onLeave={() => setHoveredItem(null)}
          onClick={() => {
            console.log("Proyectos clicked");
          }}
        />

        <NavItem
          text="Short story"
          isHovered={hoveredItem === "story"}
          onHover={() => setHoveredItem("story" as any)}
          onLeave={() => setHoveredItem(null)}
          onClick={() => {
            console.log("Short story clicked");
          }}
        />
        <NavItem
          text="Contacto"
          isHovered={hoveredItem === "contacto"}
          onHover={() => setHoveredItem("contacto")}
          onLeave={() => setHoveredItem(null)}
          onClick={() => setIsModalOpen(true)}
          hoverColor="text-green-500"
        />
      </div>


      {isModalOpen && (
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </motion.section>
  );
};

export default ThreeColumns;