'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AutoSlider } from '@/components/AutoSlider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Gradient - Extends behind header */}
      <section className="relative min-h-[400px] flex flex-col pt-20 pb-20 -mt-16">
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
          {/* Headline - moved down and to the right */}
          <div className="max-w-3xl mt-32 lg:mt-36 ml-8 lg:ml-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact us
            </h1>
          </div>
          
          {/* Bottom Right Subtext */}
          <div className="max-w-3xl ml-auto text-right mt-auto">
            <p className="text-lg md:text-xl text-white/90 max-w-2xl ml-auto">
              Let's talk about your website or project. Send us a message and we will be in touch within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area with Protruding Form Card */}
      <section className="bg-white -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
            {/* Sidebar - Left Column - shifted rightward, closer to top */}
            <div className="lg:col-span-1 pt-12 pl-8 lg:pl-16">
              <div className="space-y-8">
                {/* Direct Contact */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Direct Contact</h3>
                  <a 
                    href="mailto:henry@aicallisto.com" 
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>henry@aicallisto.com</span>
                  </a>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Follow Us</h3>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61573404442488" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/callistoai/?viewAsMember=true" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/aicallisto/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Column - Protruding Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[12px] shadow-xl border border-gray-200 p-8 md:p-10 -mt-44 ml-auto relative z-30 max-w-2xl">
                <div className="flex items-center gap-2 mb-8">
                  <ArrowLeft className="h-5 w-5 text-gray-400" />
                  <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="Full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="name@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Privacy Text */}
                  <div className="space-y-3 text-sm text-gray-500">
                    <p>
                      By submitting this form: You agree to the processing of the submitted personal data in accordance with{' '}
                      <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                        Callisto's Privacy Policy
                      </Link>
                      , including the transfer of data to the United States.
                    </p>
                    <p>
                      By submitting this form, you agree to receive information from Callisto related to our services, events, and promotions. 
                      You may unsubscribe at any time by following the instructions in those communications.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-dm-serif)', letterSpacing: '-0.02em' }}>
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us where you lose time and what you wish would be easier in your day to day operations.
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white bg-black transition-all duration-300 hover:bg-gray-800"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Sliding Logo Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 overflow-hidden">
          <AutoSlider speed={0.3}>
            <div className="flex items-center gap-12 sm:gap-16">
              {[
                { src: '/built_on/OpenAI_Logo.svg', alt: 'OpenAI', scale: 1 },
                { src: '/built_on/Webflow_logo_2023.svg', alt: 'Webflow', scale: 1.2 },
                { src: '/built_on/Slack_Technologies_Logo.svg', alt: 'Slack', scale: 1 },
                { src: '/built_on/figma-5.svg', alt: 'Figma', scale: 1 },
                { src: '/built_on/Stripe_Logo,_revised_2016.svg.png', alt: 'Stripe', scale: 0.7 },
                { src: '/built_on/Anthropic-Logo.wine.png', alt: 'Anthropic', scale: 2.0 },
                { src: '/built_on/Zapier_logo.svg.png', alt: 'Zapier', scale: 0.85 },
                { src: '/built_on/Intuit_QuickBooks_logo.svg.png', alt: 'QuickBooks', scale: 1 },
                { src: '/built_on/notion-logo-png_seeklogo-425508.png', alt: 'Notion', scale: 2.0 },
                { src: '/built_on/tailwind-css-logo-vector.png', alt: 'Tailwind CSS', scale: 2.0 },
                { src: '/built_on/Vercel_logo_2025.svg.png', alt: 'Vercel', scale: 0.8 },
                { src: '/built_on/images-1.png', alt: 'Linear', scale: 1 },
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-12 w-[120px] flex items-center justify-center min-w-0"
                >
                  <div
                    className="flex items-center justify-center"
                    style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={48}
                      className="max-h-12 max-w-[120px] w-auto h-auto object-contain grayscale opacity-40"
                    />
                  </div>
                </div>
              ))}
            </div>
          </AutoSlider>
        </div>
      </section>
    </div>
  );
}
