'use client';

import { useRef, useEffect } from 'react';

export function AutoSlider({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const contentWidthRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        contentWidthRef.current = contentRef.current.scrollWidth;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const animate = () => {
      if (containerRef.current && contentRef.current) {
        updateDimensions();
        offsetRef.current -= speed;
        const halfWidth = contentWidthRef.current / 2;
        if (Math.abs(offsetRef.current) >= halfWidth) {
          offsetRef.current = 0;
        }
        contentRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <div ref={contentRef} className="flex gap-6" style={{ willChange: 'transform' }}>
        {children}
        {children}
      </div>
    </div>
  );
}
