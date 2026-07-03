import React from 'react';
import logoImg from '../assets/logo.jpg';

interface LogoMarkProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  className = "w-full h-full",
  size,
  showGlow = false,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full ${className}`} style={style}>
      {showGlow && (
        <div className="absolute inset-0 bg-[#E2BE6A]/30 rounded-full blur-md pointer-events-none" />
      )}
      <img
        src={logoImg}
        alt="Lunar Gold Art Logo"
        className="w-full h-full object-cover rounded-full relative z-10"
      />
    </div>
  );
};


