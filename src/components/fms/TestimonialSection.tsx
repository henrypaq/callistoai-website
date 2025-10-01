"use client";

import React from 'react';
import { Users, Calendar, ThumbsUp, ShieldCheck, Clock, Share, Rocket, Zap, Gem } from 'lucide-react';  
import { SingleTestimonial, Testimonial } from "@/components/ui/single-testimonial";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: 'SM',
    name: 'Sarah Mitchell',
    role: 'VP of Engineering at TechFlow',
    quote: "Callisto has completely transformed how our team manages files. The AI-powered auto-tagging saves us hours every week, and the one-time pricing model is exactly what we needed. Best investment we've made this year.",
    tags: [{ text: 'FEATURED', type: 'featured' }, { text: 'Enterprise', type: 'default' }],
    stats: [{ icon: Users, text: '200+ team' }, { icon: Calendar, text: '2 years customer' }],
    avatarGradient: 'linear-gradient(135deg, #5e6ad2, #8b5cf6)',
  },
  {
    id: 2,
    initials: 'MC',
    name: 'Marcus Chen',
    role: 'Product Manager at DataSync',
    quote: "The file organization features are game-changing. Our remote team feels more connected than ever, and the platform's reliability is outstanding. The mobile experience is seamless across all devices.",
    tags: [{ text: 'Startup', type: 'default' }, { text: 'Mobile', type: 'default' }],
    stats: [{ icon: ThumbsUp, text: 'Helpful' }, { icon: ShieldCheck, text: 'Verified' }],
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 3,
    initials: 'AR',
    name: 'Alex Rodriguez',
    role: 'CTO at StartupFlow',
    quote: "Incredible performance boost and the file management is flawless. Support team is responsive and the feature roadmap aligns perfectly with our needs. The customization options are endless.",
    tags: [{ text: 'Enterprise', type: 'default' }, { text: 'API User', type: 'default' }],
    stats: [{ icon: Clock, text: '6 months ago' }, { icon: Share, text: 'Shared 8 times' }],
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    id: 4,
    initials: 'EJ',
    name: 'Emily Johnson',
    role: 'Founder of Innovate Inc.',
    quote: "As a new company, speed is everything. Callisto allowed us to scale our file operations twice as fast without doubling our headcount. A must-have for any ambitious startup.",
    tags: [{ text: 'New', type: 'default' }, { text: 'Growth', type: 'featured' }],
    stats: [{ icon: Rocket, text: 'Scaled 2x' }, { icon: Zap, text: 'Fast Setup' }],
    avatarGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
  },
  {
    id: 5,
    initials: 'DW',
    name: 'David Wong',
    role: 'Lead Designer at Creative Co.',
    quote: "The user interface is not just beautiful, it's intuitive. Our design team was able to adopt it instantly, streamlining our entire file workflow and improving creative output.",
    tags: [{ text: 'Design', type: 'default' }],
    stats: [{ icon: Gem, text: 'Top UI/UX' }],
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
  }
];

export default function TestimonialSection() {
  return (
    <div className="relative w-full py-16 pb-24">
      {/* Background gradient to blend with hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/80 to-[#0A0F1C]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <SingleTestimonial testimonial={testimonialsData[0]} />
        </div>
      </div>
    </div>
  );
}
