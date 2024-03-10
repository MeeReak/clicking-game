import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`bg-white text-gray-800 rounded-xl px-12 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
