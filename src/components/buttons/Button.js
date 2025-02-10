import { jsx as _jsx } from "react/jsx-runtime";
import "../../styles/Button.css"; // Importamos los estilos
const Button = ({ text, id, className }) => {
    return (_jsx("button", { "data-content": text, "data-id": id, className: `custom-button ${className}`, children: _jsx("span", { className: "button_top", children: text }) }));
};
export default Button;
