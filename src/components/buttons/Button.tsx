import React from "react";
import "../../styles/Button.css"; // Importamos los estilos

interface ButtonProps {
  text: string;
  id?: string; // Nueva prop opcional para personalizar el ID del botón
  className?: string; // Nueva prop opcional para estilos personalizados
}

const Button: React.FC<ButtonProps> = ({ text, id, className }) => {
  return (
    <button 
      data-content={text} 
      data-id={id} 
      className={`custom-button ${className}`} // Se añade `className` aquí
    >
      <span className="button_top">{text}</span>
    </button>
  );
};

export default Button;
