import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: any;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` text-gray-800 rounded-[5px] px-12 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
