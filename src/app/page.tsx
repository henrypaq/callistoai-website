'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Zap, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Target,
  Sparkles,
  Building2,
  Calculator,
  Stethoscope,
  FileText,
  Link2,
  Brain,
  Rocket,
  CheckCircle2,
  Settings,
  Palette,
  Sun,
  Lightbulb,
  Share2,
  Users,
  Plus,
  Receipt,
  Calendar,
  Package,
  Workflow,
  Phone,
  Bot,
  Headphones,
  Mail,
  BarChart3,
  Database,
  CreditCard,
  ClipboardList,
  Send,
  Folder
} from 'lucide-react';
import SimpleHero from '@/components/SimpleHero';
import CallistoSuite from '@/components/CallistoSuite';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

// Animation component for scroll-in effects
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Gradient images array
const gradients = [
  '/gradients/Dreamy Blends_003.png',
  '/gradients/Dreamy Blends_004.png',
  '/gradients/Vintage Blends_001.png',
  '/gradients/Vintage Blends_003.png',
  '/gradients/Whimsical Washes_004.png',
  '/gradients/Whimsical Washes_006.png'
];

// Stacked Scroll Cards Component
function StackedScrollCards() {
  const cards = [
    {
      tag: 'Discover',
      title: 'Discover where AI can make the biggest impact',
      description:
        'We start by understanding your business, pinpointing inefficiencies, and uncovering opportunities where automation and intelligence can drive real growth.',
      gradientImage: gradients[4],
    },
    {
      tag: 'Design',
      title: 'Design the system that brings your vision to life',
      description:
        'We study your operations, define the ideal workflow, and plan the solution that will empower your business. We take our time to align things perfectly with your needs.',
      gradientImage: gradients[5],
    },
    {
      tag: 'Deploy',
      title: 'Deploy and put your custom solution to action',
      description:
        'Setup with automations from the Callisto suite, or build a custom built platform for your exact needs. Get your solution up and running in weeks, not months.',
      gradientImage: gradients[0],
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#151234,_#3727a2,_#b836d5_70%,_#ff7a5c_100%)] opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        {/* Header */}
        <div className="mb-16">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-white">
                <span className="text-white">How it works? </span>
                <span className="text-white/70">We turn bold ideas into working systems with unexpected speed.</span>
              </h2>
            </div>
          </FadeInSection>
        </div>

        {/* Cards - Simple vertical layout with close spacing */}
        <div className="flex flex-col gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="flex flex-col md:flex-row items-stretch rounded-[12px] bg-white/95 backdrop-blur-xl shadow-[0_40px_100px_-40px_rgba(15,23,42,0.45)] overflow-hidden min-h-[520px]"
            >
              <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-gray-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Step {idx + 1}: {card.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
                  {card.description}
                </p>
              </div>
              <div className="relative w-full md:w-1/2">
                <div className="relative h-full w-full min-h-[520px]">
                  <Image
                    src={card.gradientImage}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// AutoSlider Component - Smooth continuous scrolling using requestAnimationFrame
function AutoSlider({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const contentWidthRef = useRef(0);
  const containerWidthRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        containerWidthRef.current = containerRef.current.clientWidth;
        contentWidthRef.current = contentRef.current.scrollWidth;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const animate = () => {
      if (containerRef.current && contentRef.current) {
        // Update dimensions periodically to handle dynamic content
        updateDimensions();
        
        offsetRef.current -= speed;

        // Reset when we've scrolled past half the content width (since we duplicate children)
        const halfWidth = contentWidthRef.current / 2;
        if (Math.abs(offsetRef.current) >= halfWidth) {
          offsetRef.current = 0;
        }

        contentRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <div
        ref={contentRef}
        className="flex gap-6"
        style={{ willChange: 'transform' }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// Apps Carousel Component
function AppsCarousel() {

  const apps = [
    {
      title: 'Automate Invoicing',
      description: 'Send invoices instantly, track payments, and sync with accounting software without lifting a finger.',
      icon: Receipt,
      accentGradient: 'from-blue-100 to-indigo-100',
      iconColor: 'text-blue-500',
      imageSrc: gradients[0]
    },
    {
      title: 'Smart Scheduling',
      description: 'Coordinate bookings, reschedules, and confirmations automatically based on real-time availability.',
      icon: Calendar,
      accentGradient: 'from-purple-100 to-pink-100',
      iconColor: 'text-purple-500',
      imageSrc: gradients[1]
    },
    {
      title: 'Supply Restock Alerts',
      description: 'Let AI track your inventory and trigger restock orders before you run out.',
      icon: Package,
      accentGradient: 'from-orange-100 to-amber-100',
      iconColor: 'text-orange-500',
      imageSrc: gradients[2]
    },
    {
      title: 'Workflow Automator',
      description: 'Chain together apps, triggers, and actions to run your operations end to end.',
      icon: Workflow,
      accentGradient: 'from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-500',
      imageSrc: gradients[3]
    },
    {
      title: 'AI Voice Agent',
      description: 'Answer calls, book appointments, and handle customer questions using natural conversation.',
      icon: Phone,
      accentGradient: 'from-cyan-100 to-blue-100',
      iconColor: 'text-cyan-500',
      imageSrc: gradients[4]
    },
    {
      title: 'Internal AI Assistant',
      description: 'Give your team instant answers and task shortcuts with an AI chatbot that understands your systems.',
      icon: Bot,
      accentGradient: 'from-violet-100 to-purple-100',
      iconColor: 'text-violet-500',
      imageSrc: gradients[5]
    },
    {
      title: 'AI Receptionist',
      description: 'Handle inquiries, qualify leads, and sync data to your CRM in real time.',
      icon: Headphones,
      accentGradient: 'from-rose-100 to-pink-100',
      iconColor: 'text-rose-500',
      imageSrc: gradients[0]
    },
    {
      title: 'Email Autoresponder',
      description: 'Draft human-like replies that sound on-brand and stay consistent.',
      icon: Mail,
      accentGradient: 'from-sky-100 to-cyan-100',
      iconColor: 'text-sky-500',
      imageSrc: gradients[1]
    },
    {
      title: 'Performance Dashboard',
      description: 'Visualize KPIs and predict outcomes from your connected tools and platforms.',
      icon: BarChart3,
      accentGradient: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-500',
      imageSrc: gradients[2]
    },
    {
      title: 'AI Reporting Assistant',
      description: 'Generate weekly summaries, performance reports, and insights from your data instantly.',
      icon: FileText,
      accentGradient: 'from-indigo-100 to-blue-100',
      iconColor: 'text-indigo-500',
      imageSrc: gradients[3]
    },
    {
      title: 'Custom CRM System',
      description: 'Build a CRM designed around your business logic, not the other way around.',
      icon: Database,
      accentGradient: 'from-amber-100 to-orange-100',
      iconColor: 'text-amber-500',
      imageSrc: gradients[4]
    },
    {
      title: 'Data Integrations',
      description: 'Connect fragmented systems and automate data flow between them.',
      icon: Link2,
      accentGradient: 'from-teal-100 to-cyan-100',
      iconColor: 'text-teal-500',
      imageSrc: gradients[5]
    },
    {
      title: 'Team Communication Hub',
      description: 'Unify your comms with team members and customers into one intelligent dashboard.',
      icon: MessageSquare,
      accentGradient: 'from-pink-100 to-rose-100',
      iconColor: 'text-pink-500',
      imageSrc: gradients[0]
    },
    {
      title: 'Streamline Payments',
      description: 'Send invoices, collect payments, and reconcile accounts automatically across platforms.',
      icon: CreditCard,
      accentGradient: 'from-blue-100 to-indigo-100',
      iconColor: 'text-blue-500',
      imageSrc: gradients[1]
    },
    {
      title: 'AI Job Summaries',
      description: 'Automatically log and summarize every client call or completed task.',
      icon: ClipboardList,
      accentGradient: 'from-purple-100 to-violet-100',
      iconColor: 'text-purple-500',
      imageSrc: gradients[2]
    },
    {
      title: 'Customer Follow-Up Bot',
      description: 'Send reminders, confirmations, and feedback requests automatically after each job.',
      icon: Send,
      accentGradient: 'from-emerald-100 to-green-100',
      iconColor: 'text-emerald-500',
      imageSrc: gradients[3]
    },
    {
      title: 'Centralize Product Assets',
      description: 'Store, tag, and retrieve creative files for every SKU in seconds.',
      icon: Folder,
      accentGradient: 'from-orange-100 to-amber-100',
      iconColor: 'text-orange-500',
      imageSrc: gradients[4]
    }
  ];

  // Animation speed constant (pixels per frame)
  const SCROLL_SPEED = 0.5;

  return (
    <FadeInSection delay={100}>
      <div className="relative w-full pb-4">
        <AutoSlider speed={SCROLL_SPEED}>
          {apps.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={idx}
                className="app-card flex-shrink-0 w-[340px] sm:w-[360px] min-h-[450px] md:min-h-[470px] bg-white border border-gray-200 rounded-[12px] hover:-translate-y-1 transition-transform duration-300 p-6 flex flex-col"
              >
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${app.accentGradient} flex items-center justify-center shadow-sm`}>
                      <Icon className={`h-7 w-7 ${app.iconColor}`} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[2.35rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <div className="relative w-full h-52 overflow-hidden rounded-[12px] border border-gray-200">
                    <Image
                      src={app.imageSrc}
                      alt={app.title}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </AutoSlider>
      </div>
    </FadeInSection>
  );
}

export default function Home() {
  const builtOnLogos = [
    { src: '/built_on/OpenAI_Logo.svg', alt: 'OpenAI' },
    { src: '/built_on/Webflow_logo_2023.svg', alt: 'Webflow' },
    { src: '/built_on/Slack_Technologies_Logo.svg', alt: 'Slack' },
    { src: '/built_on/figma-5.svg', alt: 'Figma' },
    { src: '/built_on/Stripe_Logo,_revised_2016.svg.png', alt: 'Stripe' },
    { src: '/built_on/Anthropic-Logo.wine.png', alt: 'Anthropic' },
    { src: '/built_on/Zapier_logo.svg.png', alt: 'Zapier' },
    { src: '/built_on/Intuit_QuickBooks_logo.svg.png', alt: 'QuickBooks' },
    { src: '/built_on/notion-logo-png_seeklogo-425508.png', alt: 'Notion' },
    { src: '/built_on/tailwind-css-logo-vector.png', alt: 'Tailwind CSS' },
    { src: '/built_on/Vercel_logo_2025.svg.png', alt: 'Vercel' },
    { src: '/built_on/images-1.png', alt: 'Linear' },
    { src: '/built_on/images-2.png', alt: 'Intercom' },
    { src: '/built_on/9trrmnj2sj8-logo-logo.svg', alt: 'Segment' }
  ];

  const marqueeStyle = {
    '--duration': '42s',
    '--gap': '4rem'
  } as CSSProperties;

  const duplicatedLogos = [...builtOnLogos, ...builtOnLogos];

  const growthExperienceCards = [
    {
      tag: 'Design',
      title: 'Automate whatever slows you down',
      subtext: 'Let intelligent workflows handle the repetitive tasks so your people can focus on growth.',
      description:
        "Build workflows once, then let Callisto's automation layer handle fulfillment, follow-ups, and hand-offs without the busywork.",
      gradientImage: gradients[0],
    },
    {
      tag: 'Operations',
      title: 'Gain actionable insights from your data',
      subtext: 'Connect your systems\' data to reveal trends that give you an edge in planning and performance.',
      description:
        'Connect your data sources and surface the signal faster—so you can move from dashboards to decisions in a single click.',
      gradientImage: gradients[1],
    },
    {
      tag: 'Growth',
      title: 'Transform ideas into tailored platforms',
      subtext: 'Go from concept to a powerful platform built around your workflows, shipped with speed.',
      description:
        'Prototype, validate, and ship new experiences with a modular AI stack that molds to the way your teams operate.',
      gradientImage: gradients[2],
    },
  ];

  const integrationItems = [
    { name: 'QuickBooks', logo: '/integrations/quickbooks-2.svg' },
    { name: 'Gmail', logo: '/integrations/Gmail_icon_(2020)-1.svg.png' },
    { name: 'HubSpot', logo: '/integrations/hubspot-1.svg' },
    { name: 'Zapier', logo: '/integrations/zapier-icon.svg' },
    { name: 'FreshBooks', logo: '/integrations/freshbooks-logo-png_seeklogo-431917.png' },
    { name: 'Slack', logo: '/integrations/Slack_icon_2019.svg.png' },
    { name: 'WhatsApp', logo: '/integrations/WhatsApp.svg.png' },
    { name: 'Salesforce', logo: '/integrations/Salesforce.com_logo.svg.png' },
    { name: 'Microsoft', logo: '/integrations/images-3.png' },
    { name: 'Xero', logo: '/integrations/images-4.png' },
    { name: 'WooCommerce', logo: '/integrations/images-5.png' },
    { name: 'Shopify', logo: '/integrations/images.jpeg' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Simple Hero Section */}
      <SimpleHero />

      {/* Social Proof Bar - Centered section below hero */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Left: Built on text */}
            <div className="text-gray-400 text-lg font-medium whitespace-nowrap">
              Built on leading tools
            </div>

            {/* Right: Animated logo marquee */}
            <div className="relative w-full md:flex-1 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
              <div className="overflow-hidden py-4">
                <div
                  className="animate-marquee flex items-center gap-16"
                  style={marqueeStyle}
                >
                  {duplicatedLogos.map((logo, idx) => (
                    <div
                      key={`${logo.alt}-${idx}`}
                      className="flex-shrink-0 transition-opacity"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={44}
                        priority={idx < 3}
                        loading={idx >= 3 ? 'lazy' : undefined}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣ Introducing Callisto - Unified Growth Stack */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-gray-900">
                Turn your vision into an AI-powered operation.
            </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {growthExperienceCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative min-h-[520px] rounded-[12px] overflow-hidden shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={card.gradientImage}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/85 transition-opacity duration-500 group-hover:from-black/10 group-hover:via-black/40 group-hover:to-black/90" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="p-6 sm:p-8 pb-8 sm:pb-10">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight transition-transform duration-500 group-hover:-translate-y-2">
                            {card.title}
                          </h3>
                        </div>
                        <button
                          aria-label={`Learn more about ${card.title}`}
                          className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
                        >
                          <Plus className="h-6 w-6" />
                        </button>
                      </div>
                      {card.subtext && (
                        <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
                          {card.subtext}
                        </p>
                      )}
          </div>
            </div>
            </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Apps for Everything Section - See What Callisto Can Do */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-gray-900">
                See What Callisto Can Do
            </h2>
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
              >
                Explore all use cases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
        {/* Carousel extends to edges */}
        <div className="-mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12">
          <AppsCarousel />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-100 max-w-6xl mx-auto"></div>

      {/* 6.1️⃣ Stacked Scroll Cards */}
      <StackedScrollCards />

      {/* Divider */}
      <div className="h-px bg-gray-100 max-w-6xl mx-auto"></div>

      {/* 2️⃣ The Callisto Suite - Superhuman-inspired */}
      <CallistoSuite />

      {/* Integrations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-gray-900 text-left">
                Integrate with all<br />
                of your favorite tools
            </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base md:text-lg transition-colors"
              >
                Ask about an integration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {integrationItems.map((integration, idx) => (
                <div
                  key={`${integration.name}-${idx}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain"
                      loading={idx > 3 ? 'lazy' : undefined}
                    />
            </div>
                  <span className="text-sm font-medium text-gray-900">
                    {integration.name}
                  </span>
            </div>
              ))}
          </div>
          </FadeInSection>
        </div>
      </section>

      {/* 8️⃣ CTA Image Section */}
      <section className="pb-0 pt-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            {/* Separate CTA Container */}
            <div className="rounded-xl overflow-hidden relative" style={{ minHeight: '600px' }}>
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/ken-cheung-KonWFWUaAuk-unsplash.jpg"
                  alt="Callisto CTA Background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[600px] px-6 text-center">
                <h2 className="section-header text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                  Wave your magic wand
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
                  Tell us where you lose time and what you wish would be easier in your day to day operations
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-transparent border-2 border-white/80 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105 hover:shadow-lg"
                  >
                    Request a demo
                  </a>
                  <a
                    href="/book-consultation"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-gray-900 bg-white border-2 border-white transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg"
                  >
                    Book a consultation
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
