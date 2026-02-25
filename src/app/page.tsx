'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SimpleHero from '@/components/SimpleHero';
import PlatformBlueprintExample from '@/components/PlatformBlueprintExample';
import { useEffect, useRef, useState } from 'react';
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

// Bento Grid How It Works Component
function HowItWorksBento() {
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
        'We study your operations, define the ideal workflow, and plan the solution that will empower your business.',
      gradientImage: gradients[5],
    },
    {
      tag: 'Deploy',
      title: 'Deploy and put your custom solution to action',
      description:
        'Get your solution up and running in weeks, not months. We handle the technical complexity so you can focus on results.',
      gradientImage: gradients[0],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Left aligned like See What Callisto Can Do */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <h2 className="section-header text-4xl md:text-5xl font-semibold text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Start Your Collaboration
              </h2>
              <p className="mt-5 text-gray-500 text-lg max-w-lg">
                We turn bold ideas into working systems with unexpected speed. Here&apos;s our proven process.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium text-sm rounded-full hover:bg-gray-800 transition-colors mb-1"
            >
              Tell us about your vision
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInSection>

        {/* Bento Grid - First two side by side, third wider underneath */}
        <FadeInSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First two cards - side by side */}
            {cards.slice(0, 2).map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg aspect-[4/3]"
              >
                <Image
                  src={card.gradientImage}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white mb-3">
                    Step {idx + 1}: {card.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white leading-tight mb-2" style={{ letterSpacing: '-0.01em' }}>
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Third card - full width underneath */}
            <div className="md:col-span-2 group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg aspect-[2/1] md:aspect-[3/1]">
              <Image
                src={cards[2].gradientImage}
                alt={cards[2].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center max-w-2xl">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white mb-4">
                  Step 3: {cards[2].tag}
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight mb-3" style={{ letterSpacing: '-0.01em' }}>
                  {cards[2].title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {cards[2].description}
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Rotating Logos Component - Shows 6 logos at a time with staggered fade-in
type LogoItem = { src: string; alt: string; scale?: number };
function RotatingLogos({ logos }: { logos: LogoItem[] }) {
  const [displayLogos, setDisplayLogos] = useState(logos.slice(0, 6));
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const currentSetRef = useRef(0);
  const logosPerSet = 6;
  const totalSets = Math.ceil(logos.length / logosPerSet);

  useEffect(() => {
    // Initial staggered appearance
    const showLogosOneByOne = () => {
      setVisibleIndices([]);
      for (let i = 0; i < logosPerSet; i++) {
        setTimeout(() => {
          setVisibleIndices(prev => [...prev, i]);
        }, i * 400);
      }
    };

    showLogosOneByOne();

    // Cycle to next set after all logos shown + 5 second wait
    const cycleLogos = () => {
      // Fade out all
      setVisibleIndices([]);
      
      // After fade out, change logos and show one by one
      setTimeout(() => {
        currentSetRef.current = (currentSetRef.current + 1) % totalSets;
        const start = currentSetRef.current * logosPerSet;
        const newLogos = logos.slice(start, start + logosPerSet);
        // Pad with logos from start if needed
        while (newLogos.length < logosPerSet) {
          newLogos.push(logos[newLogos.length % logos.length]);
        }
        setDisplayLogos(newLogos);
        showLogosOneByOne();
      }, 500);
    };

    // Total time: 6 logos * 400ms stagger + 5000ms wait = 7400ms
    const interval = setInterval(cycleLogos, 7400);
    return () => clearInterval(interval);
  }, [logos, totalSets]);

  return (
    <div className="relative min-h-[60px] w-full">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-4 items-center justify-items-center">
        {displayLogos.map((logo, idx) => (
          <div
            key={`${logo.alt}-${idx}`}
            className={cn(
              "flex items-center justify-center h-12 w-full min-w-0 transition-opacity duration-500",
              visibleIndices.includes(idx) ? "opacity-100" : "opacity-0"
            )}
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
                className="max-h-12 max-w-[120px] w-auto h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
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

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "We worked with Callisto to build an all-in-one platform where we could manage our invoicing, payments and customer workflows. The automated system we setup for contract generation makes my life vastly less tedious on a day to day basis.",
      name: 'Henry Koll',
      company: 'SleepVerse',
      avatar: '/henry-koll-headshot.png',
      avatarImage: true,
      award: 'Apple Design Award',
      awardYear: '2024 Winner',
      awardIcon: '🏆'
    },
    {
      quote: "We commissioned Callisto for an internal AI that all of our employees can direct questions to. It's fed with live data so it's always up to date. We avoid countless unnecessary conversations between employees.",
      name: 'Anica Liberstal',
      company: 'Wilminton Busy Cleaning',
      avatar: '/anica-liberstal-headshot.png',
      avatarImage: true,
      award: null,
      awardYear: null,
      awardIcon: null
    },
    {
      quote: "Super happy with the voice agent we setup to respond to customer calls. We use this as a backup when we can't pickup the phone, it's been very useful.",
      name: 'Jim Wilmott',
      company: 'DRC Plumbing',
      avatar: '/logo-callisto-testimonial.png',
      avatarImage: true,
      award: null,
      awardYear: null,
      awardIcon: null
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
  };

  const cardWidth = 820;
  const cardGap = 36;
  const totalCardWidth = cardWidth + cardGap;

  return (
    <section className="relative overflow-hidden bg-gray-100">
      <div className="relative pt-8 pb-28">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-gray-400 text-lg font-medium tracking-wide">
                Loved by innovative teams around the world
              </p>
            </div>
          </FadeInSection>
        </div>
          
        {/* Carousel container - full width */}
        <div className="relative">
          {/* Cards wrapper */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(calc(50vw - ${cardWidth / 2}px - ${currentIndex * totalCardWidth}px))` 
            }}
          >
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex-shrink-0 bg-white rounded-[28px] px-14 py-12 transition-all duration-500",
                    isActive ? "opacity-100" : "opacity-50"
                  )}
                  style={{ 
                    width: `${cardWidth}px`,
                    marginRight: `${cardGap}px`,
                  }}
                >
                  {/* Quote icon and text in a row */}
                  <div className="flex gap-7">
                    {/* Large grey quote icon */}
                    <div className="flex-shrink-0">
                      <svg className="w-11 h-11 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.004z"/>
                      </svg>
                    </div>
                    
                    {/* Quote text and author */}
                    <div className="flex-1">
                      <p className="text-gray-700 text-xl leading-relaxed mb-10">
                        {testimonial.quote}
                      </p>
                      
                      {/* Author row - aligned with quote text */}
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-orange-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {testimonial.avatarImage ? (
                            <Image src={testimonial.avatar} alt={testimonial.name} width={44} height={44} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-xl">{testimonial.avatar}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-base">{testimonial.name}</p>
                          <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation arrows - positioned to the right */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-end items-center gap-3 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={cn(
                  "w-12 h-12 rounded-full bg-gray-300/60 flex items-center justify-center transition-all",
                  currentIndex === 0 
                    ? "opacity-40 cursor-not-allowed" 
                    : "hover:bg-gray-400/60"
                )}
                aria-label="Previous"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= testimonials.length - 1}
                className={cn(
                  "w-12 h-12 rounded-full bg-gray-300/60 flex items-center justify-center transition-all",
                  currentIndex >= testimonials.length - 1 
                    ? "opacity-40 cursor-not-allowed" 
                    : "hover:bg-gray-400/60"
                )}
                aria-label="Next"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Apps Carousel Component
function AppsCarousel() {

  const apps = [
    {
      title: 'Internal Knowledge Base',
      description: 'Instant answers for your team, trained on your documents, SOPs, and company policies.',
      imageSrc: gradients[2],
      tag: null
    },
    {
      title: 'Voice Agent',
      description: 'Answer calls, book appointments, and handle customer questions using natural conversation.',
      imageSrc: '/ai-voice-agent.png',
      tag: 'NEW'
    },
    {
      title: 'Document Analysis Engine',
      description: 'Extracts key data from contracts, invoices, and PDFs and turns them into structured records.',
      imageSrc: gradients[0],
      tag: null
    },
    {
      title: 'Lead Qualification Assistant',
      description: 'Screens new inquiries, asks follow-up questions, and routes only high-quality leads to your team.',
      imageSrc: gradients[1],
      tag: null
    },
    {
      title: 'Missed Call Text-Back System',
      description: 'Automatically texts callers you miss and converts them into booked appointments.',
      imageSrc: gradients[4],
      tag: null
    },
    {
      title: 'Smart Scheduling',
      description: 'Automatically find the best times, send reminders, and reduce no-shows.',
      imageSrc: gradients[5],
      tag: null
    },
    {
      title: 'Contract Generator',
      description: 'Creates customized agreements, proposals, and NDAs based on your templates and deal terms.',
      imageSrc: gradients[3],
      tag: null
    },
    {
      title: 'Customer Support Chatbot',
      description: 'Handles FAQs, quotes, bookings, and payments directly from your website or SMS.',
      imageSrc: gradients[0],
      tag: null
    },
    {
      title: 'Workflow Automator',
      description: 'Chain together apps, triggers, and actions to run your operations end to end.',
      imageSrc: gradients[1],
      tag: null
    },
    {
      title: 'Internal Assistant',
      description: 'Give your team instant answers and task shortcuts with a chatbot that understands your systems.',
      imageSrc: gradients[2],
      tag: null
    },
    {
      title: 'Email Autoresponder',
      description: 'Draft human-like replies that sound on-brand and stay consistent.',
      imageSrc: gradients[4],
      tag: null
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const maxIndex = Math.max(0, apps.length - 2);

  const handlePrev = () => {
    setUserInteracted(true);
    setIsAutoSliding(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setUserInteracted(true);
    setIsAutoSliding(false);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Auto-slide logic
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSliding, maxIndex]);

  // Intersection observer to detect when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
          // Section is mostly visible - start timer if user hasn't interacted
          if (!userInteracted) {
            autoSlideTimerRef.current = setTimeout(() => {
              setIsAutoSliding(true);
            }, 3000);
          }
        } else {
          // Section is out of view - reset interaction state and stop auto-slide
          if (autoSlideTimerRef.current) {
            clearTimeout(autoSlideTimerRef.current);
          }
          setIsAutoSliding(false);
          setUserInteracted(false);
        }
      },
      { threshold: [0.8] }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (autoSlideTimerRef.current) {
        clearTimeout(autoSlideTimerRef.current);
      }
    };
  }, [userInteracted]);

  return (
    <div ref={sectionRef}>
      <FadeInSection delay={100}>
        <div className="relative w-full -mr-6 sm:-mr-8 lg:-mr-12">
          {/* Carousel container - overflow visible on right to show peeking card */}
          <div className="overflow-visible">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out pr-6 sm:pr-8 lg:pr-12"
              style={{ transform: `translateX(calc(-${currentIndex} * (40% + 16px)))` }}
            >
              {apps.map((app, idx) => {
                const isHeaderOnTop = idx % 2 === 0;
                return (
                  <div
                    key={`${app.title}-${idx}`}
                    className="group relative flex-shrink-0 w-[40%] aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
                  >
                    {/* White header section - shown on top for even indices */}
                    {isHeaderOnTop && (
                      <div className="bg-white p-4 lg:p-5 flex-shrink-0">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 leading-tight mb-1.5" style={{ letterSpacing: '-0.01em' }}>
                          {app.title}
                        </h3>
                        <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    )}
                    
                    {/* Background image - fills remaining space */}
                    <div className="relative flex-1">
                      <Image
                        src={app.imageSrc}
                        alt={app.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                      {app.tag && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                          {app.tag}
                        </span>
                      )}
                    </div>
                    
                    {/* White footer section - shown on bottom for odd indices */}
                    {!isHeaderOnTop && (
                      <div className="bg-white p-4 lg:p-5 flex-shrink-0">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 leading-tight mb-1.5" style={{ letterSpacing: '-0.01em' }}>
                          {app.title}
                        </h3>
                        <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation arrows - positioned at bottom right */}
          <div className="flex justify-end items-center gap-3 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={cn(
                "w-12 h-12 rounded-full bg-gray-300/60 flex items-center justify-center transition-all",
                currentIndex === 0 
                  ? "opacity-40 cursor-not-allowed" 
                  : "hover:bg-gray-400/60"
              )}
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={cn(
                "w-12 h-12 rounded-full bg-gray-300/60 flex items-center justify-center transition-all",
                currentIndex >= maxIndex 
                  ? "opacity-40 cursor-not-allowed" 
                  : "hover:bg-gray-400/60"
              )}
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default function Home() {
  const builtOnLogos: { src: string; alt: string; scale?: number }[] = [
    { src: '/built_on/OpenAI_Logo.svg', alt: 'OpenAI' },
    { src: '/built_on/Webflow_logo_2023.svg', alt: 'Webflow', scale: 1.2 },
    { src: '/built_on/Slack_Technologies_Logo.svg', alt: 'Slack' },
    { src: '/built_on/figma-5.svg', alt: 'Figma' },
    { src: '/built_on/Stripe_Logo,_revised_2016.svg.png', alt: 'Stripe', scale: 0.7 },
    { src: '/built_on/Anthropic-Logo.wine.png', alt: 'Anthropic', scale: 2.0 },
    { src: '/built_on/Zapier_logo.svg.png', alt: 'Zapier', scale: 0.85 },
    { src: '/built_on/Intuit_QuickBooks_logo.svg.png', alt: 'QuickBooks' },
    { src: '/built_on/notion-logo-png_seeklogo-425508.png', alt: 'Notion', scale: 2.0 },
    { src: '/built_on/tailwind-css-logo-vector.png', alt: 'Tailwind CSS', scale: 2.0 },
    { src: '/built_on/Vercel_logo_2025.svg.png', alt: 'Vercel', scale: 0.8 },
    { src: '/built_on/images-2.png', alt: 'AWS', scale: 0.6 },
  ];

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
      subtext: 'Connect your data to reveal trends that give you an edge in planning and performance.',
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
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'var(--font-tiktok-sans), system-ui, sans-serif' }}>
      {/* Simple Hero Section */}
      <SimpleHero />

      {/* 3 Pillars Section - Full screen boxes like Cohere */}
      <section className="bg-white pt-8">
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthExperienceCards.map((card, index) => (
              index === 1 ? (
                /* Middle card - #034078 gradient darker at bottom */
                <div
                  key={card.title}
                  className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  style={{ background: 'linear-gradient(to bottom, #034078 0%, #022a52 50%, #011832 100%)' }}
                >
                  <div className="relative h-[520px] flex flex-col">
                    {/* Dashboard UI - extends down to right above title */}
                    <div className="flex-1 pt-10 pb-0 min-h-0 overflow-visible">
                      {/* Dashboard Container - extends down, gradient will obscure bottom */}
                      <div 
                        className="bg-white rounded-2xl shadow-xl p-3 flex flex-col origin-top-left flex-shrink-0"
                        style={{ 
                          marginLeft: '-24px',
                          marginRight: '48px',
                          transform: 'scale(0.9)',
                          width: 'calc(111% - 30px)',
                          minHeight: '380px'
                        }}
                      >
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-3 pl-10">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center">
                              <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <span className="text-sm font-semibold text-gray-800">Analytics Dashboard</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-xs text-gray-400">Live</span>
                          </div>
                        </div>
                        
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2 mb-3 pl-10">
                          <div className="bg-gray-100 rounded-xl p-3">
                            <p className="text-[10px] text-gray-400 mb-0.5">Revenue</p>
                            <p className="text-base font-bold text-gray-800">$48.2K</p>
                            <p className="text-[10px] text-emerald-500 font-medium">+12.5%</p>
                          </div>
                          <div className="bg-gray-100 rounded-xl p-3">
                            <p className="text-[10px] text-gray-400 mb-0.5">Users</p>
                            <p className="text-base font-bold text-gray-800">2,847</p>
                            <p className="text-[10px] text-emerald-500 font-medium">+8.3%</p>
                          </div>
                          <div className="bg-gray-100 rounded-xl p-3">
                            <p className="text-[10px] text-gray-400 mb-0.5">Tasks</p>
                            <p className="text-base font-bold text-gray-800">1,284</p>
                            <p className="text-[10px] text-emerald-500 font-medium">+24%</p>
                          </div>
                        </div>
                        
                        {/* Charts Row - Two charts side by side */}
                        <div className="grid grid-cols-2 gap-2 mb-3 pl-10">
                          {/* Bar Chart */}
                          <div className="bg-gray-100 rounded-xl p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-medium text-gray-600">Performance</span>
                              <span className="text-[9px] text-gray-400">7 days</span>
                            </div>
                            <div className="flex items-end gap-1 h-14">
                              {[35, 52, 45, 70, 58, 82, 68].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-teal-400 rounded-sm" style={{ height: `${h}%` }} />
                              ))}
                            </div>
                          </div>
                          {/* Line Chart */}
                          <div className="bg-gray-100 rounded-xl p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-medium text-gray-600">Growth</span>
                              <span className="text-[9px] text-gray-400">30 days</span>
                            </div>
                            <svg className="w-full h-14" viewBox="0 0 100 40" preserveAspectRatio="none">
                              <path d="M0,35 Q15,30 25,28 T50,20 T75,15 T100,8" fill="none" stroke="#14b8a6" strokeWidth="2" />
                              <path d="M0,35 Q15,30 25,28 T50,20 T75,15 T100,8 L100,40 L0,40 Z" fill="url(#tealGradient)" opacity="0.2" />
                              <defs>
                                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#14b8a6" />
                                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Bottom Row - Donut chart and Activity */}
                        <div className="grid grid-cols-5 gap-2 flex-1 pl-10">
                          {/* Mini Donut Chart */}
                          <div className="col-span-2 bg-gray-100 rounded-xl p-3 flex flex-col">
                            <span className="text-[10px] font-medium text-gray-600 mb-2">Distribution</span>
                            <div className="flex-1 flex items-center justify-center">
                              <svg className="w-16 h-16" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#14b8a6" strokeWidth="4" strokeDasharray="55 45" strokeDashoffset="25" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="80" />
                              </svg>
                            </div>
                            <div className="flex justify-center gap-3 mt-1">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-teal-500" />
                                <span className="text-[8px] text-gray-500">Sales</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                <span className="text-[8px] text-gray-500">Leads</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Activity List */}
                          <div className="col-span-3 bg-gray-100 rounded-xl p-3">
                            <span className="text-[10px] font-medium text-gray-600 mb-2 block">Recent Activity</span>
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span className="text-[10px] text-gray-600 flex-1">New signup detected</span>
                                <span className="text-[9px] text-gray-400">2m</span>
                              </div>
                              <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <span className="text-[10px] text-gray-600 flex-1">Report generated</span>
                                <span className="text-[9px] text-gray-400">5m</span>
                              </div>
                              <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                <span className="text-[10px] text-gray-600 flex-1">Task completed</span>
                                <span className="text-[9px] text-gray-400">12m</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Gradient overlay - blends with card gradient */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-[1]"
                      style={{ background: 'linear-gradient(to top, #011832 0%, rgba(1,24,50,0.95) 45%, rgba(1,24,50,0.7) 60%, rgba(1,24,50,0.3) 90%, transparent 100%)' }}
                    />
                    
                    {/* Text overlay at bottom */}
                    <div className="relative z-10 p-8 pt-12">
                      <h3 className="text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.01em', marginBottom: '0.875rem' }}>
                        {card.title}
                      </h3>
                      {card.subtext && (
                        <p className="text-base text-white/90 font-medium leading-relaxed" style={{ lineHeight: 1.5 }}>
                          {card.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                (() => {
                  const isLeft = index === 0;
                  const gradient = isLeft
                    ? 'linear-gradient(to bottom, #001f54 0%, #001540 50%, #000d28 100%)'
                    : 'linear-gradient(to bottom, #1282a2 0%, #0d6b85 50%, #075469 100%)';
                  const overlayRgb = isLeft ? '0,13,40' : '7,84,105';
                  return (
                <div key={card.title} className="relative">
                  {/* Robot figure - emerging from top of left pillar */}
                  {isLeft && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                      style={{ bottom: '100%', marginBottom: '8px' }}
                    >
                      <Image
                        src="/robot-figure.png"
                        alt=""
                        width={220}
                        height={286}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  )}
                <div
                  className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  style={{ background: gradient }}
                >
                  <div className="relative h-[520px] flex flex-col">
                    {/* Dashboard UI - same structure as middle card */}
                    <div className="flex-1 pt-10 pb-0 min-h-0 overflow-visible">
                      <div 
                        className={cn(
                          "rounded-2xl p-3 flex flex-col origin-top-left flex-shrink-0",
                          index === 2 ? "bg-transparent shadow-none" : "bg-white shadow-xl"
                        )}
                        style={{ marginLeft: '-24px', marginRight: '48px', transform: 'scale(0.9)', width: index === 2 ? 'calc(125% - 30px)' : 'calc(111% - 30px)', minHeight: '380px' }}
                      >
                        {index === 0 ? (
                          /* Workflow Automation Dashboard */
                          <>
                            <div className="flex items-center justify-between mb-3 pl-10">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Workflow Studio</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                <span className="text-xs text-gray-400">Running</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-3 pl-10">
                              <div className="bg-gray-100 rounded-xl p-3">
                                <p className="text-[10px] text-gray-400 mb-0.5">Active</p>
                                <p className="text-base font-bold text-gray-800">12</p>
                                <p className="text-[10px] text-emerald-500 font-medium">+3 today</p>
                              </div>
                              <div className="bg-gray-100 rounded-xl p-3">
                                <p className="text-[10px] text-gray-400 mb-0.5">Completed</p>
                                <p className="text-base font-bold text-gray-800">847</p>
                                <p className="text-[10px] text-emerald-500 font-medium">+24%</p>
                              </div>
                              <div className="bg-gray-100 rounded-xl p-3">
                                <p className="text-[10px] text-gray-400 mb-0.5">Triggers</p>
                                <p className="text-base font-bold text-gray-800">28</p>
                                <p className="text-[10px] text-emerald-500 font-medium">Active</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-3 pl-10">
                              <div className="bg-gray-100 rounded-xl p-3 col-span-2">
                                <span className="text-[10px] font-medium text-gray-600 block mb-2">Recent Runs</span>
                                <div className="space-y-1.5">
                                  {[
                                    { label: 'Invoice processed', time: '2s ago', done: true },
                                    { label: 'Email sent to client', time: '5s ago', done: true },
                                    { label: 'Syncing to CRM...', time: 'Live', done: false },
                                  ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5">
                                      <div className={cn("w-1.5 h-1.5 rounded-full", item.done ? "bg-emerald-400" : "bg-blue-500 animate-pulse")} />
                                      <span className="text-[10px] text-gray-600 flex-1">{item.label}</span>
                                      <span className="text-[9px] text-gray-400">{item.time}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 pl-10">
                              <div className="bg-gray-100 rounded-xl p-3 h-full">
                                <span className="text-[10px] font-medium text-gray-600 block mb-2">Workflow Status</span>
                                <div className="flex gap-2">
                                  {['Invoice Flow', 'CRM Sync', 'Notify'].map((name, i) => (
                                    <div key={i} className="flex-1 bg-white rounded-lg p-2 text-center">
                                      <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1" />
                                      <span className="text-[9px] text-gray-600">{name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          /* Platform Builder - Two platforms, half visible, gutter between */
                          <div className="flex gap-4 w-full overflow-hidden min-h-[400px]">
                            {/* Left platform - white, cut off left */}
                            <div className="flex-1 min-w-[48%] -ml-[25%] overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
                              <div className="p-4 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                  <h4 className="text-xs font-bold text-gray-900">Project Dashboard</h4>
                                  <div className="flex gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span className="text-[9px] text-gray-400">Live</span>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                  <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-[8px] text-gray-400 mb-0.5">Active Users</p>
                                    <p className="text-sm font-bold text-gray-900">2,847</p>
                                  </div>
                                  <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-[8px] text-gray-400 mb-0.5">MRR</p>
                                    <p className="text-sm font-bold text-gray-900">$48.2K</p>
                                  </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-2 mb-3 flex-1">
                                  <span className="text-[8px] font-medium text-gray-600 block mb-2">Activity Feed</span>
                                  <div className="space-y-1.5">
                                    {['Deploy completed', 'New signup', 'Invoice sent'].map((a, i) => (
                                      <div key={i} className="flex items-center gap-2 text-[9px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <span className="text-gray-600 flex-1">{a}</span>
                                        <span className="text-gray-400">{i === 0 ? '2m' : i === 1 ? '5m' : '12m'}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <div className="flex-1 bg-gray-100 rounded-lg p-2 text-center">
                                    <span className="text-[8px] text-gray-500">API</span>
                                    <span className="text-[9px] font-semibold text-emerald-600 block">Online</span>
                                  </div>
                                  <div className="flex-1 bg-gray-100 rounded-lg p-2 text-center">
                                    <span className="text-[8px] text-gray-500">DB</span>
                                    <span className="text-[9px] font-semibold text-emerald-600 block">Synced</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Gutter */}
                            <div className="w-3 flex-shrink-0" />
                            {/* Right platform - grey, with sidebar, cut off right */}
                            <div className="flex-1 min-w-[48%] -mr-[25%] overflow-hidden rounded-2xl shadow-xl bg-gray-100 border border-gray-200 flex">
                              {/* Sidebar */}
                              <div className="w-14 flex-shrink-0 bg-gray-200/80 border-r border-gray-300 py-3">
                                {['⌂', '📊', '📁', '⚙️', '👥'].map((icon, i) => (
                                  <div key={i} className={cn("w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center text-sm", i === 1 ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-300/50")}>
                                    {icon}
                                  </div>
                                ))}
                              </div>
                              {/* Main content */}
                              <div className="flex-1 p-4 min-w-0">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-xs font-bold text-gray-900">Analytics</h4>
                                  <select className="text-[8px] border border-gray-300 rounded px-1.5 py-0.5 text-gray-600 bg-white">
                                    <option>Last 7 days</option>
                                  </select>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-3">
                                  {[
                                    { label: 'Revenue', value: '$12.4K', change: '+8%' },
                                    { label: 'Users', value: '1.2K', change: '+12%' },
                                    { label: 'Tasks', value: '89%', change: '+3%' },
                                  ].map((s, i) => (
                                    <div key={i} className="bg-white rounded-lg p-2 border border-gray-200">
                                      <p className="text-[8px] text-gray-400">{s.label}</p>
                                      <p className="text-xs font-bold text-gray-900">{s.value}</p>
                                      <p className="text-[8px] text-emerald-500 font-medium">{s.change}</p>
                                    </div>
                                  ))}
                                </div>
                                <div className="bg-white rounded-lg p-2 border border-gray-200 mb-2">
                                  <span className="text-[8px] font-medium text-gray-600 block mb-2">Performance</span>
                                  <div className="flex gap-1 h-8 items-end">
                                    {[45, 62, 38, 75, 55, 82, 68].map((h, i) => (
                                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-blue-500 rounded-sm" style={{ height: `${h}%` }} />
                                    ))}
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-2 border border-gray-200">
                                  <span className="text-[8px] font-medium text-gray-600 block mb-2">Recent</span>
                                  <div className="space-y-1">
                                    {['Report generated', 'Export completed'].map((r, i) => (
                                      <div key={i} className="flex items-center gap-2 text-[9px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        <span className="text-gray-600">{r}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Gradient overlay - blends with card gradient */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-[1]"
                      style={{ background: `linear-gradient(to top, rgba(${overlayRgb},1) 0%, rgba(${overlayRgb},0.95) 45%, rgba(${overlayRgb},0.7) 60%, rgba(${overlayRgb},0.3) 90%, transparent 100%)` }}
                    />
                    
                    {/* Text overlay - match middle card */}
                    <div className="relative z-10 p-8 pt-12">
                      <h3 className="text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.01em', marginBottom: '0.875rem' }}>
                        {card.title}
                      </h3>
                      {card.subtext && (
                        <p className="text-base text-white/80 font-medium leading-relaxed" style={{ lineHeight: 1.5 }}>
                          {card.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                </div>
                  );
                })()
              )
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Bar - Leading tools with rotating logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-gray-400 text-lg font-medium">
              Built with leading tools
            </p>
          </div>
          <RotatingLogos logos={builtOnLogos} />
        </div>
      </section>

      {/* Apps for Everything Section - See What Callisto Can Do */}
      <section 
        className="relative pt-24 pb-16"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, #fafafa 65%, #f3f4f6 85%, #f3f4f6 100%)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <div>
                <h2 className="section-header text-4xl md:text-5xl font-semibold text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  See What Callisto<br />Can Do
                </h2>
                <p className="mt-5 text-gray-500 text-lg max-w-lg">
                  AI-powered tools for every part of your business. Automate workflows, enhance productivity, and scale with confidence.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium text-sm rounded-full hover:bg-gray-800 transition-colors mb-1"
              >
                Ask Us What&apos;s Possible
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>
          <AppsCarousel />
        </div>
      </section>

      {/* Testimonials Section - Carousel style with grey gradient */}
      <TestimonialsCarousel />

      {/* Full-height colored section - Cortex */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gradients/Whimsical Washes_004.png"
            alt="Cortex background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-orange-800/60 to-rose-700/40" />
        </div>
        
        <div className="absolute top-20 sm:top-24 lg:top-28 left-8 sm:left-12 lg:left-20 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-transparent border border-white/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-tiktok-sans)' }}>Cortex</span>
          </div>
        </div>
        
        <div className="relative z-10 flex min-h-[90vh]">
          <div className="flex flex-col justify-end px-8 sm:px-12 lg:px-20 pb-16 pt-20 w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-4" style={{ fontFamily: 'var(--font-tiktok-sans)', letterSpacing: '-0.02em' }}>
              The turnkey AI platform that helps your work flow
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-lg mb-7">
              Transform your data into actionable insights. Real-time analytics, predictive models, and intelligent recommendations—all in one place.
            </p>
            <div>
              <Link
                href="/software/cortex"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 text-base font-bold hover:bg-white/90 transition-colors"
              >
                Go to Cortex
              </Link>
            </div>
          </div>
          
          {/* Right side - Trend Forecasting Agent preview */}
          <div className="hidden lg:flex absolute right-0 bottom-0 w-[55%] h-[75%] items-end justify-end">
            <div className="flex gap-4 w-full h-full translate-x-12 translate-y-12">
              <div className="flex flex-col gap-3 py-6">
                {[
                  { icon: '◻', active: false },
                  { icon: '⌂', active: false },
                  { icon: '📊', active: true },
                  { icon: '📈', active: false },
                  { icon: '⚡', active: false },
                  { icon: '⋮⋮', active: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-colors",
                      item.active ? "bg-amber-600 text-white" : "bg-white/10 text-white/60 hover:bg-white/20"
                    )}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-[#1a1a2e]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                <h3 className="text-white font-semibold text-xl mb-4">Trend Forecasting Agent</h3>
                <div className="flex items-start gap-3 mb-6 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center">
                    <span className="text-amber-400">📊</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Analyze historical data and market signals to predict trends and recommend optimal strategies.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Sales forecast', value: '+12.4%', trend: 'up' },
                    { label: 'Inventory risk', value: 'Low', trend: null },
                    { label: 'Demand spike', value: 'Mar 15–22', trend: null },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-[#0d0d1f]/80 rounded-lg">
                      <span className="text-white/70 text-sm">{row.label}</span>
                      <span className={cn(
                        "text-sm font-medium",
                        row.trend === 'up' ? 'text-emerald-400' : 'text-white/90'
                      )}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Bento Grid */}
      <HowItWorksBento />

      {/* Integrations Section */}
      <section className="pt-16 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
              <div>
                <h2 className="section-header text-4xl md:text-5xl font-semibold text-gray-900 text-left" style={{ letterSpacing: '-0.02em' }}>
                  Integrate with all<br />
                  of your favorite tools
                </h2>
                <p className="mt-5 text-gray-500 text-lg max-w-lg">
                  Connect seamlessly with the platforms you already use. No complex setup required.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium text-sm rounded-full hover:bg-gray-800 transition-colors mb-1"
              >
                Ask about an integration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-16 gap-y-10">
              {integrationItems.map((integration, idx) => (
                <div
                  key={`${integration.name}-${idx}`}
                  className="flex items-center gap-4 py-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                      loading={idx > 3 ? 'lazy' : undefined}
                    />
                  </div>
                  <span className="text-base font-medium text-gray-900">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
        <div className="h-16 bg-white" />
      </section>

      {/* Full-height section - Steward (black background) */}
      <section className="relative w-full min-h-[90vh] overflow-hidden bg-black">
        {/* Top left title */}
        <div className="absolute top-20 sm:top-24 lg:top-28 left-8 sm:left-12 lg:left-20 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-transparent border border-white/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-white font-bold text-2xl" style={{ fontFamily: 'var(--font-tiktok-sans)' }}>Steward</span>
          </div>
        </div>
        
        <div className="relative z-10 flex min-h-[90vh] items-center justify-center pt-24 pb-16">
          {/* Right side - Text content (positioned right of iPhone on large screens) */}
          <div className="absolute right-8 sm:right-12 lg:right-20 bottom-16 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-10 text-right lg:max-w-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-4" style={{ fontFamily: 'var(--font-tiktok-sans)', letterSpacing: '-0.02em' }}>
              Scale with confidence
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-lg mb-7 lg:ml-auto">
              Built for teams that need reliability, security, and performance at scale. Your data stays yours, always.
            </p>
            <Link
              href="/software/steward"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 text-base font-bold hover:bg-white/90 transition-colors"
            >
              Go to Steward
            </Link>
          </div>

          {/* White dashboard - 2/3 visible, 1/3 cuts off at left edge */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[70vw] max-w-[850px] -translate-x-[33%] z-0">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
              <div className="flex min-h-[480px]">
                {/* Sidebar */}
                <div className="w-48 flex-shrink-0 bg-gray-50 border-r border-gray-200 py-6">
                  {['Schedule', 'Bookings', 'Team', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium transition-colors",
                        i === 0 ? "bg-violet-50 text-violet-700 border-r-2 border-violet-600" : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main - Weekly calendar */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Weekly Schedule</h3>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium bg-violet-600 text-white rounded-lg">+ Book</button>
                      <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">Week</button>
                      <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">Month</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const date = i >= 4 ? i - 3 : null;
                      const isToday = date === 16;
                      const hasBooking = date && [9, 16, 23].includes(date);
                      return (
                        <div
                          key={i}
                          className={cn(
                            "aspect-square flex items-center justify-center text-xs rounded-lg",
                            isToday ? "bg-violet-600 text-white font-semibold" : hasBooking ? "bg-violet-50 text-violet-700 font-medium" : "text-gray-400 hover:bg-gray-50"
                          )}
                        >
                          {date || ''}
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">Today&apos;s bookings</p>
                    <div className="space-y-2">
                      {['9:00 — Client call', '2:00 — Consultation', '4:30 — Demo'].map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className={cn("w-2 h-2 rounded-full", i === 1 ? "bg-violet-500" : "bg-gray-300")} />
                          <span className={i === 1 ? "font-medium text-gray-900" : "text-gray-600"}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Employee cursors with name labels (collaborative editing style) */}
              <div className="pointer-events-none absolute top-[26%] right-[28%] z-20 flex items-start gap-1">
                <svg className="w-6 h-6 text-pink-500 drop-shadow-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(-20deg)' }}>
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/>
                </svg>
                <div className="px-2.5 py-1 rounded-full bg-pink-500 text-white text-xs font-semibold shadow-lg whitespace-nowrap">Marid Samad</div>
              </div>
              <div className="pointer-events-none absolute top-[48%] right-[35%] z-20 flex items-start gap-1">
                <svg className="w-6 h-6 text-blue-500 drop-shadow-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(-15deg)' }}>
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/>
                </svg>
                <div className="px-2.5 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-lg whitespace-nowrap">Jay Burns</div>
              </div>
              <div className="pointer-events-none absolute top-[62%] right-[18%] z-20 flex items-start gap-1">
                <svg className="w-5 h-5 text-emerald-500 drop-shadow-lg flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(5deg)' }}>
                  <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/>
                </svg>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-semibold shadow-lg whitespace-nowrap">Jordan Lee</div>
              </div>
            </div>
          </div>

          {/* iPhone - centered */}
          <div className="hidden lg:flex relative z-20 items-center justify-center">
            <div className="relative w-[280px] h-[560px] bg-black rounded-[44px] p-2 shadow-2xl ring-4 ring-gray-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-10" />
              <div className="w-full h-full bg-[#0b141a] rounded-[36px] overflow-hidden flex flex-col">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34]">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.87L2 22l5.39-.71C8.57 21.54 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.63-.35-3.76-.96l-.27-.16-2.77.36.29-2.71-.17-.28C4.46 15.36 4 13.75 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">Steward</p>
                    <p className="text-[#8696a0] text-xs">AI Customer Support • online</p>
                  </div>
                  <div className="flex gap-3 text-[#8696a0]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">Hi! I&apos;m Steward, your AI assistant. How can I help you today?</p>
                      <p className="text-[#8696a0] text-[10px] mt-1 text-right">10:32</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#005c4b] rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">Hi! I&apos;d like to book an appointment for next week</p>
                      <p className="text-[#99beb5] text-[10px] mt-1 text-right">10:33</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">I&apos;d be happy to help! What type of appointment do you need?</p>
                      <p className="text-[#8696a0] text-[10px] mt-1 text-right">10:33</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#005c4b] rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">A consultation with your team—maybe Tuesday or Wednesday?</p>
                      <p className="text-[#99beb5] text-[10px] mt-1 text-right">10:34</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">I have openings on both days. Tuesday 2pm or Wednesday 10am—which works better?</p>
                      <p className="text-[#8696a0] text-[10px] mt-1 text-right">10:34</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#005c4b] rounded-lg rounded-tr-none px-3 py-2 shadow-sm">
                      <p className="text-white text-xs leading-relaxed">Tuesday 2pm works!</p>
                      <p className="text-[#99beb5] text-[10px] mt-1 text-right">10:35</p>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-2 bg-[#1f2c34] flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[#8696a0] text-xs">Type a message</div>
                  <button className="w-9 h-9 rounded-full bg-[#005c4b] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean white centered */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="section-header text-4xl sm:text-5xl font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
              Ready to get started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tell us where you lose time and what you wish would be easier in your day to day operations.
            </p>
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white bg-black transition-all duration-300 hover:bg-gray-800"
            >
              Book a Demo
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Sliding Logo Section - Above Footer */}
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
