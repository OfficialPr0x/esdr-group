import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-black tracking-[0.1em] uppercase transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-95";

  const variants = {
    primary: "bg-brand-green text-white hover:bg-brand-blue hover:shadow-[0_15px_30px_rgba(126,141,109,0.3)] focus:ring-brand-green",
    secondary: "bg-brand-blue text-white hover:bg-brand-green focus:ring-brand-blue shadow-xl shadow-brand-blue/20",
    outline: "border-2 border-brand-blue/10 text-brand-blue hover:border-brand-green hover:bg-brand-green/5 focus:ring-brand-blue",
    ghost: "text-brand-blue hover:bg-brand-blue/5 font-black",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};