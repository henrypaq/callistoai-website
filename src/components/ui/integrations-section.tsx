"use client";

import React from 'react';
import { ArrowRight, Zap, Shield, Database, Cloud, FileText, Users, BarChart3 } from 'lucide-react';

interface Integration {
  name: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface IntegrationsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  integrations?: Integration[];
}

const IntegrationsSection = ({
  title = "Integrations",
  subtitle = "Centralize every touch point",
  description = "Integrate Callisto with your team's stack and create a single source of truth for every piece of customer feedback and business data.",
  ctaText = "Explore integrations",
  integrations = [
    {
      name: "Google Drive",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      description: "File storage and collaboration"
    },
    {
      name: "Slack",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600",
      description: "Team communication"
    },
    {
      name: "Microsoft Teams",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      description: "Video conferencing"
    },
    {
      name: "Notion",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-gray-50 text-gray-600",
      description: "Documentation and notes"
    },
    {
      name: "Jira",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      description: "Project management"
    },
    {
      name: "Power BI",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-yellow-50 text-yellow-600",
      description: "Business intelligence"
    },
    {
      name: "Trello",
      icon: <Database className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      description: "Task management"
    },
    {
      name: "Confluence",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      description: "Knowledge base"
    },
    {
      name: "Asana",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600",
      description: "Work management"
    },
    {
      name: "Airtable",
      icon: <Database className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600",
      description: "Database and spreadsheets"
    },
    {
      name: "Stripe",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600",
      description: "Payment processing"
    },
    {
      name: "GitHub",
      icon: <Database className="w-8 h-8" />,
      color: "bg-gray-50 text-gray-600",
      description: "Code repository"
    }
  ]
}: IntegrationsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Integration Grid */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`
                    aspect-square rounded-2xl p-4 lg:p-6 
                    bg-white/80 backdrop-blur-sm
                    border border-gray-200/50
                    shadow-lg shadow-gray-900/5
                    hover:shadow-xl hover:shadow-gray-900/10
                    hover:scale-105 hover:-translate-y-1
                    transition-all duration-300 ease-out
                    flex flex-col items-center justify-center
                    group-hover:bg-white
                    ${integration.color}
                  `}>
                    {integration.icon}
                    <span className="sr-only">{integration.name}</span>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      {integration.name}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
              
              {/* Empty placeholder slots for visual balance */}
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="aspect-square rounded-2xl bg-white/30 border border-gray-200/30 shadow-sm"
                />
              ))}
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-100/20 rounded-full blur-xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {title}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {subtitle}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-semibold text-lg
                rounded-full
                shadow-lg shadow-blue-600/25
                hover:shadow-xl hover:shadow-blue-600/30
                hover:scale-105
                transform transition-all duration-300 ease-out
                group
              ">
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Integrations Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent h-px"></div>
          <div className="flex justify-center">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200/50">
              <span className="text-sm text-gray-600 font-medium">Trusted by 10,000+ companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntegrationsSection };
