import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void; // Add this line
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={onClick}>{children}</button>
  );
};

export default Button;