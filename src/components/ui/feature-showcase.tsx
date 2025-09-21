"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  backgroundColor?: string;
}

export const FeatureShowcase = React.forwardRef<HTMLDivElement, FeatureShowcaseProps>(
  ({ 
    className, 
    title,
    description,
    features,
    imageUrl,
    imageAlt,
    reverse = false,
    backgroundColor = "bg-white",
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("py-16", backgroundColor, className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {description}
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                        <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FeatureShowcase.displayName = "FeatureShowcase";
