import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => {
  return (
    <button className={cn(`text-primary ${className}`)} {...props}>
      {children}
    </button>
  );
};

export default Button;
