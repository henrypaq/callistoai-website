'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, TrendingUp, Sparkles, Link2, Phone } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: React.ElementType;
  headline: string;
  subheading: string;
  highlights: string[];
  link: string;
  imageSrc: string;
  imageAlt: string;
  toggleTitle: string;
  toggleDescription: string;
}

const gradients = [
  '/gradients/Dreamy Blends_003.png',
  '/gradients/Dreamy Blends_004.png',
  '/gradients/Vintage Blends_001.png',
  '/gradients/Vintage Blends_003.png'
];

const platforms: Platform[] = [
  {
    id: 'atlas',
    name: 'Atlas',
    icon: Sparkles,
    headline: 'Run your operations on autopilot',
    subheading: 'Design drag-and-drop workflows that adapt to your policies, handoffs, and SLAs—no code required.',
    highlights: [
      'Launch prebuilt playbooks for sales, CS, and ops',
      'Branch logic with AI-powered decision steps',
      'Monitor bottlenecks with real-time run histories'
    ],
    link: '/software/automation',
    imageSrc: gradients[0],
    imageAlt: 'Atlas automation workflow preview',
    toggleTitle: 'Run your operations on autopilot',
    toggleDescription: 'Atlas choreographs every handoff with intelligent workflows your teams can trust.'
  },
  {
    id: 'orion',
    name: 'Orion',
    icon: TrendingUp,
    headline: 'Add powerful helpers to your teams',
    subheading: 'Stay ahead of every KPI with dashboards that predict trends and share the story behind the numbers.',
    highlights: [
      'AI-generated insights in plain language',
      'Live views of revenue, pipeline, and retention',
      'Alerts when metrics shift beyond thresholds'
    ],
    link: '/software/analytics',
    imageSrc: gradients[1],
    imageAlt: 'Orion analytics dashboard preview',
    toggleTitle: 'Add powerful helpers to your teams',
    toggleDescription: 'Track revenue, retention, and customer health with predictive analytics from Orion.'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    icon: FileText,
    headline: "Neptune: Callisto's File Management System",
    subheading: 'Bring every file, version, and review together with smart organization that feels effortless.',
    highlights: [
      'Auto-tag and route assets the moment they arrive',
      'Surface the right doc for every teammate instantly',
      'Keep approvals, comments, and history in one timeline'
    ],
    link: '/software/file-management',
    imageSrc: gradients[2],
    imageAlt: 'Neptune document management interface preview',
    toggleTitle: 'Store your files in an intelligent workspace',
    toggleDescription: "Centralize files, approvals, and knowledge with Neptune's adaptive document AI."
  },
  {
    id: 'atlas-receptionist',
    name: 'Atlas',
    icon: Phone,
    headline: "Atlas: Callisto's AI Receptionist Platform",
    subheading: 'Answer calls, book appointments, and handle customer questions using natural conversation.',
    highlights: [
      'Handle inquiries and qualify leads automatically',
      'Sync data to your CRM in real time',
      'Book appointments and manage schedules seamlessly'
    ],
    link: '/software/ai-platform',
    imageSrc: gradients[3],
    imageAlt: 'Atlas AI receptionist platform preview',
    toggleTitle: 'Turn conversations into booked jobs',
    toggleDescription: 'Atlas transforms customer conversations into completed bookings with intelligent automation.'
  }
];

export default function CallistoSuite() {
  const [activePlatformId, setActivePlatformId] = useState(platforms[0].id);
  const activePlatform = platforms.find((platform) => platform.id === activePlatformId) ?? platforms[0];
  const ActiveIcon = activePlatform.icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between gap-6">
          <h2 className="section-header text-4xl md:text-5xl font-semibold text-gray-900">
            The Callisto Suite
          </h2>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-gray-900 bg-white border-2 border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Book Demo
          </Link>
        </div>

        <div className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {platforms.map((platform) => {
              const isActive = platform.id === activePlatformId;
              return (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatformId(platform.id)}
                  className="group text-left"
                >
                  <div
                    className={
                      `border-t-2 pt-6 min-h-[150px] transition-all duration-300 ${
                        isActive
                          ? 'border-gray-900 text-gray-900'
                          : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700'
                      }`
                    }
                  >
                    <h3 className={`text-2xl font-semibold tracking-tight transition-colors ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                      {platform.toggleTitle}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full rounded-[18px] border border-gray-100 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.4)] flex flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-900/10 text-gray-900 flex items-center justify-center">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {activePlatform.name}
                </span>
              </div>
              <h3 className="text-3xl md:text-[2.65rem] font-semibold leading-tight text-gray-900">
                {activePlatform.headline}
              </h3>
              <ul className="space-y-3">
                {activePlatform.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-gray-900/40" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={activePlatform.link}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base md:text-lg transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-[420px]">
              <Image
                src={activePlatform.imageSrc}
                alt={activePlatform.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

