import React from 'react';

// --- Component Interfaces ---
export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: 'featured' | 'default' }[];
  stats: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string; }[];
  avatarGradient: string;
}

export interface SingleTestimonialProps {
  testimonial: Testimonial;
}

// --- The Component ---
export const SingleTestimonial = ({ testimonial }: SingleTestimonialProps) => {
  return (
    <div className="text-center">
      {/* Quote */}
      <blockquote className="text-white leading-relaxed text-2xl md:text-3xl font-medium mb-8 max-w-4xl mx-auto">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author info centered underneath */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg" style={{ background: testimonial.avatarGradient }}>
            {testimonial.initials}
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-gray-300 text-base">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
