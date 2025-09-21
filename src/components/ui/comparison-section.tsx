"use client";

import React from 'react';
import { Check, X, Zap, Cloud, Shield, Users, BarChart3, Globe, Lock, Settings, FileText, Database } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  callisto: boolean;
  air: boolean;
}

interface ComparisonSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: ComparisonFeature[];
}

const ComparisonSection = ({
  title = "Callisto's AI blows away the competition",
  subtitle = "Callisto vs air.inc",
  description = "Although air.inc typically meets the needs of small teams, customers find that it lacks the depth, breadth, and configurability for scaling businesses.",
  features = [
    {
      name: "Basic file management (e.g. upload, organize, share, etc.)",
      callisto: true,
      air: true
    },
    {
      name: "AI-powered organization suite (e.g. smart tagging, auto-categorization, ML search)",
      callisto: true,
      air: false
    },
    {
      name: "Advanced permissions & security",
      callisto: true,
      air: false
    },
    {
      name: "Automatic localization (e.g. multi-language, currency, timezone)",
      callisto: true,
      air: false
    },
    {
      name: "Real-time collaboration tools",
      callisto: true,
      air: false
    },
    {
      name: "Advanced analytics & reporting",
      callisto: true,
      air: false
    },
    {
      name: "Enterprise integration hub",
      callisto: true,
      air: false
    },
    {
      name: "Custom branding & whitelabel",
      callisto: true,
      air: false
    },
    {
      name: "Your data does not feed the AI model & get enterprise-level security",
      callisto: true,
      air: false
    },
    {
      name: "99% uptime, history backlog, & recovery",
      callisto: true,
      air: false
    }
  ]
}: ComparisonSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>Callisto vs air.inc</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-0">
            {/* Features Column Header */}
            <div className="bg-gray-50 p-8 border-r border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">FEATURES</h3>
            </div>
            
            {/* Callisto Column Header */}
            <div className="bg-green-50 p-8 border-r border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CALLISTO</h3>
              </div>
              <p className="text-lg font-semibold text-green-600">$49/mo</p>
            </div>
            
            {/* air.inc Column Header */}
            <div className="bg-pink-50 p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">air.inc</h3>
              </div>
              <p className="text-lg font-semibold text-pink-600">Free</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 gap-0 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                {/* Feature Name */}
                <div className="p-8 border-r border-gray-200">
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {feature.name}
                  </p>
                </div>

                {/* Callisto Support */}
                <div className="p-8 border-r border-gray-200 flex items-center justify-center">
                  {feature.callisto ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <X className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* air.inc Support */}
                <div className="p-8 flex items-center justify-center">
                  {feature.air ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <X className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to upgrade from air.inc?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the power of AI-driven file management with enterprise-grade features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ComparisonSection };
