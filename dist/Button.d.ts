import React, { ButtonHTMLAttributes } from "react";
import './Button.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClickMethod: (args: any) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
