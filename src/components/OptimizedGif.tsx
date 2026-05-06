'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OptimizedGifProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function OptimizedGif({ src, alt, width, height, className = "" }: OptimizedGifProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-slate-100 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-slate-400 text-sm">Image unavailable</div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-slate-100 rounded-lg flex items-center justify-center ${className}`}
        >
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
