import React from "react";

interface IButtonProps {
  label: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
    label,
    onClick,
    type = 'button',
    className = ''
}:IButtonProps) {
  
const baseStyle = 'px-4 py-2 rounded border-green-950/25 border-2 bg-transparent hover:bg-green-500 hover:text-white transition duration-300'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {label}
    </button>
  );
}
