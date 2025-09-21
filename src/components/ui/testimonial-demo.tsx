"use client";

import { Testimonial } from "@/components/ui/testimonial";

export function TestimonialDemo() {
  return (
    <Testimonial
      companyLogo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=60&fit=crop&crop=center"
      quote="Callisto's File Management System delivers powerful insights that turn complex data into actionable decisions"
      highlightedText="Callisto's File Management System"
      authorName="Sarah Johnson"
      authorPosition="CTO, TechCorp"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    />
  );
}
