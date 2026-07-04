import React, { useState } from 'react';
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
  const [src, setSrc] = useState<string>(logoImg);
  const style = size ? { width: size, height: size } : undefined;

  const handleImageError = () => {
    if (src !== '/logoo.jpg') {
      setSrc('/logoo.jpg');
    } else if (src !== '/logo.jpg') {
      setSrc('/logo.jpg');
    }
  };

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-[#050505] ${className}`} style={style}>
      {showGlow && (
        <div className="absolute inset-0 bg-[#E2BE6A]/30 rounded-full blur-md pointer-events-none" />
      )}
      <img
        src={src}
        alt="Lunar Gold Art Logo"
        onError={handleImageError}
        className="w-full h-full object-contain rounded-full relative z-10"
      />
    </div>
  );
};


