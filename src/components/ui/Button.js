import React from 'react';

export default function Button({ children, onClick, className = "", variant = "primary", disabled = false }) {
  const baseStyles = "font-black italic uppercase text-sm px-6 py-3 transition-all duration-300 flex items-center justify-center disabled:opacity-50";
  
  const variants = {
    primary: "bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-black hover:shadow-[0_0_20px_rgba(255,95,31,0.3)]",
    outline: "border border-white/10 hover:border-[#FF5F1F] text-white hover:bg-[#FF5F1F]/10",
    ghost: "text-white/40 hover:text-white"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
