import React from "react";
import "../../styles/Button.css"; // Importamos los estilos

interface ButtonProps {
  text: string;
  id?: string; // Nueva prop opcional para personalizar el ID del botón
}

const Button: React.FC<ButtonProps> = ({ text, id }) => {
  return (
    <button data-content={text} data-id={id} className="custom-button">
      <span className="button_top">{text}</span>
    </button>
  );
};

export default Button;
