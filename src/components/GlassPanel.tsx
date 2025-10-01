import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'cyan' | 'purple' | 'default';
}

const paddingVariants = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const colorVariants = {
  blue: 'bg-blue-500/10 border-t-blue-400/30',
  cyan: 'bg-cyan-500/10 border-t-cyan-400/30',
  purple: 'bg-purple-500/10 border-t-purple-400/30',
  default: 'bg-white/10 border-t-white/30',
};

export default function GlassPanel({ 
  children, 
  className, 
  padding = 'lg',
  color = 'default'
}: GlassPanelProps) {
  return (
    <div 
      className={cn(
        // Base glassmorphism styles
        'rounded-3xl',
        'backdrop-blur-md',
        'shadow-lg shadow-black/20',
        // Color variant
        colorVariants[color],
        // Padding variant
        paddingVariants[padding],
        // Custom className override
        className
      )}
    >
      {children}
    </div>
  );
}
