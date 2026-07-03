import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

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
  fallbackSrc = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
  className = 'w-full h-full object-cover',
  containerClassName = 'w-full h-full',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setIsLoading(false);
      }
    }
  }, [imageSrc]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0A0A0A] ${containerClassName}`}>
      {/* Skeleton Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#222222] to-[#141414] animate-pulse z-10 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#E2BE6A] border-t-transparent rounded-full animate-spin opacity-50" />
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          {...props}
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? 'opacity-30' : 'opacity-100'
          }`}
        />
      ) : (
        /* Fine Art Aesthetic Fallback Container */
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0D0D0D] to-[#050505] border border-[#E2BE6A]/20 flex flex-col items-center justify-center p-6 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#E2BE6A]/40 flex items-center justify-center text-[#E2BE6A] shadow-inner">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#E2BE6A] font-heading tracking-wider uppercase">
              {alt || 'Lunar Gold Masterwork'}
            </div>
            <div className="text-[10px] text-[#9A9A9A] font-body">
              Curated Fine Art Showcase
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

