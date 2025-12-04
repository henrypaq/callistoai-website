'use client';

import Image from 'next/image';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function BookDemo() {
  const calendlyUrl = 'https://calendly.com/callistoai/30min';

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Gradient - Similar to contact page */}
      <section className="relative min-h-[400px] flex flex-col pt-20 pb-40 -mt-16">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <Image
            src="/360_F_231119940_P6c6oC6yhnT7FGOfuzudyk9wnp1N1UdH.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col">
          <div className="max-w-3xl mt-20 lg:mt-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See Your Demo
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-4">
              Schedule a personalized demo and discover how Callisto can transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white -mt-32 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
            {/* Sidebar - Left Column with Benefits */}
            <div className="lg:col-span-1 pt-24">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-8 uppercase tracking-wide">
                    What to Expect
                  </h3>
                  <div className="space-y-6 mt-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Personalized Demo</h4>
                        <p className="text-sm text-gray-600">
                          See Callisto tailored to your specific business needs and use cases.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">30-Minute Session</h4>
                        <p className="text-sm text-gray-600">
                          Quick and focused discussion about your requirements and our solutions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
                        <p className="text-sm text-gray-600">
                          Get answers from our team about implementation and best practices.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">No Commitment</h4>
                        <p className="text-sm text-gray-600">
                          Explore our platform risk-free with no obligation to purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Embed - Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[12px] shadow-xl border border-gray-200 p-8 md:p-10 mt-8 ml-auto relative z-30 max-w-4xl">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Time</h2>
                  <p className="text-gray-600">
                    Choose a time that works best for you. We'll send you a confirmation email with meeting details.
                  </p>
                </div>
                
                {/* Calendly Embed - Using iframe for reliable loading */}
                <div className="w-full rounded-lg overflow-hidden" style={{ minHeight: '700px' }}>
                  <iframe
                    src={calendlyUrl}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule a consultation"
                    className="w-full"
                    style={{ border: 'none', minHeight: '700px' }}
                    allow="camera; microphone; geolocation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
