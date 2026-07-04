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

  // Handle cached or quickly loaded images
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete && imgRef.current.naturalWidth > 0) {
        setIsLoading(false);
      }
    }
  }, [imageSrc]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imageSrc !== fallbackSrc) {
      // First try switching to fallbackSrc without declaring fatal error immediately
      setImageSrc(fallbackSrc);
      setIsLoading(true);
    } else {
      // Both primary and fallback image failed
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
          src={imageSrc}
          alt={alt}
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
        </div>
      )}
    </div>
  );
};
