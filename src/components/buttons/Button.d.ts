import React from "react";
import "../../styles/Button.css";
interface ButtonProps {
    text: string;
    id?: string;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
