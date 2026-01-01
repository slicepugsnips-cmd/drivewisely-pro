import React from 'react';

export default function Logo({ size = "default" }) {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-4xl md:text-5xl"
  };

  return (
    <div className={`font-black italic uppercase tracking-tight ${sizeClasses[size]}`}>
      <span className="text-white">DRIVE</span>
      <span className="text-[#FF5F1F]">WISELY</span>
      <span className="text-white/60 font-medium text-[0.6em] ml-1">PRO</span>
    </div>
  );
}
