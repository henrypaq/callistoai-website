"use client";

import React from 'react';
import { X, Check, DollarSign, Tag, Shield, Zap } from 'lucide-react';

interface ProblemSolutionSectionProps {
  headline?: string;
  problemTitle?: string;
  solutionTitle?: string;
  problems?: string[];
  solutions?: string[];
}

const ProblemSolutionSection = ({
  headline = "Forget messy workflows, definitely forget subscriptions",
  problemTitle = "The Problem",
  solutionTitle = "The Solution",
  problems = [
    "Manual file organization takes hours every week",
    "Expensive monthly subscriptions that never end",
    "Complex workflows that slow down your team",
    "No control over your data and branding"
  ],
  solutions = [
    "AI-powered automatic tagging and organization",
    "Simple upfront pricing with no hidden fees",
    "Streamlined workflows that boost productivity",
    "Complete whitelabel control and data ownership"
  ]
}: ProblemSolutionSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-10 border border-red-100 shadow-lg">
              {/* Problem Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mr-4">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">{problemTitle}</h3>
              </div>

              {/* Problem List */}
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <X className="w-3 h-3 text-red-600" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed group-hover:text-red-800 transition-colors">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>

              {/* Problem Stats */}
              <div className="mt-8 p-6 bg-white/60 rounded-2xl border border-red-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">15+ hrs</div>
                    <div className="text-sm text-gray-600">wasted weekly</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">$500+</div>
                    <div className="text-sm text-gray-600">monthly costs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-200 rounded-full opacity-40"></div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-100 shadow-lg">
              {/* Solution Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">{solutionTitle}</h3>
              </div>

              {/* Solution List */}
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed group-hover:text-green-800 transition-colors">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>

              {/* Solution Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white/60 rounded-xl border border-green-200">
                  <Tag className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">AI Tagging</span>
                </div>
                <div className="flex items-center p-3 bg-white/60 rounded-xl border border-green-200">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Upfront Pricing</span>
                </div>
                <div className="flex items-center p-3 bg-white/60 rounded-xl border border-green-200">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Whitelabel</span>
                </div>
                <div className="flex items-center p-3 bg-white/60 rounded-xl border border-green-200">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Fast Setup</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-200 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Zap className="w-5 h-5 mr-2" />
            Ready to transform your workflow?
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemSolutionSection };
