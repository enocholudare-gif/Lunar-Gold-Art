import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import fineArtPaintingStudio from '../assets/images/fine_art_painting_studio_1783113458918.jpg';
import heroArtworkGold from '../assets/images/hero_artwork_gold_1783113004311.jpg';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className = 'w-full h-full object-cover',
  containerClassName = 'w-full h-full',
  ...props
}) => {
  const [attemptIndex, setAttemptIndex] = useState<number>(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  // Fallback chain: primary src -> custom fallbackSrc -> local bundled artwork -> backup bundled artwork
  const sources = React.useMemo(() => {
    const list: string[] = [];
    if (src) list.push(src);
    if (fallbackSrc && fallbackSrc !== src) list.push(fallbackSrc);
    if (!list.includes(fineArtPaintingStudio)) list.push(fineArtPaintingStudio);
    if (!list.includes(heroArtworkGold)) list.push(heroArtworkGold);
    return list;
  }, [src, fallbackSrc]);

  const currentSrc = sources[attemptIndex] || sources[0];

  useEffect(() => {
    setAttemptIndex(0);
    setHasError(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  // Handle cached or quickly loaded images
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete && imgRef.current.naturalWidth > 0) {
        setIsLoading(false);
      }
    }
  }, [currentSrc]);

  const handleError = () => {
    if (attemptIndex < sources.length - 1) {
      setAttemptIndex((prev) => prev + 1);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden bg-[#EFECE6] ${containerClassName}`}>
      {/* Skeleton Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-[#E5E0D8] animate-pulse z-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-[#C59B27] border-t-transparent rounded-full animate-spin opacity-60" />
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          {...props}
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} relative z-1 transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : (
        /* Fine Art Ambient Background Fallback Container */
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-[#FAF8F5] to-[#E5E0D8] border border-[#C59B27]/30 flex flex-col items-center justify-center p-6 text-center space-y-2 z-1">
          <div className="w-10 h-10 rounded-full bg-white border border-[#C59B27]/40 flex items-center justify-center text-[#A88118] shadow-sm">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-xs font-semibold text-[#8A641A] max-w-[80%] line-clamp-2">{alt}</span>
        </div>
      )}
    </div>
  );
};

