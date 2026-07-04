import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import { BRAND } from '../data/content';

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
  // Candidate image sources to try sequentially on error
  const sources = [
    logoImg,
    '/logo.jpg',
    '/logoo.jpg',
    BRAND.logoUrl,
  ];

  const [sourceIndex, setSourceIndex] = useState<number>(0);
  const style = size ? { width: size, height: size } : undefined;

  const handleImageError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      // Move beyond sources array to signal using inline SVG fallback
      setSourceIndex(sources.length);
    }
  };

  const isSvgFallback = sourceIndex >= sources.length;

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-[#050505] ${className}`} style={style}>
      {showGlow && (
        <div className="absolute inset-0 bg-[#E2BE6A]/30 rounded-full blur-md pointer-events-none" />
      )}
      {!isSvgFallback ? (
        <img
          src={sources[sourceIndex]}
          alt="Lunar Gold Art Logo"
          onError={handleImageError}
          className="w-full h-full object-cover rounded-full relative z-10"
        />
      ) : (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain relative z-10 p-0.5"
        >
          <defs>
            <linearGradient id="lunarGoldGrad" x1="50" y1="50" x2="450" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF2C6" />
              <stop offset="50%" stopColor="#E2BE6A" />
              <stop offset="100%" stopColor="#8A641A" />
            </linearGradient>
          </defs>
          <path
            d="M 300,72 C 180,65 95,120 90,210 C 85,300 160,375 285,372 C 345,370 385,345 405,310 C 418,285 410,255 385,240 C 350,220 290,225 240,250 C 180,280 135,320 120,335"
            stroke="url(#lunarGoldGrad)"
            strokeWidth="3"
          />
          <path
            d="M 285,210 C 325,160 380,120 420,135 C 445,145 450,175 425,205 C 390,245 315,300 240,340 C 215,353 190,360 172,352 C 158,345 155,330 168,320 C 185,308 215,310 245,322 C 290,340 350,365 410,380 C 435,386 455,382 460,370 C 465,358 448,350 430,352 C 370,360 310,335 265,315 C 320,278 385,225 415,188 C 430,170 430,152 415,145 C 385,132 338,168 298,215 Z"
            fill="url(#lunarGoldGrad)"
          />
        </svg>
      )}
    </div>
  );
};



