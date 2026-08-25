'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import './ComingSoon.css';

const MAIL = 'gaspar@aicallisto.com';

export default function ComingSoon() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="site-pause relative h-dvh w-full overflow-hidden">
      <div className="site-pause-center">
        <div className="site-pause-moon" aria-hidden="true">
          <Image
            src="/logo-removebg-preview.png"
            alt=""
            width={168}
            height={168}
            className="site-pause-moon-img"
            priority
          />
        </div>
        <h1>
          A new Callisto
          <br />
          is on the way.
        </h1>
        <p>Reach us anytime.</p>
        <ShimmerButton
          className="site-pause-mail"
          href={`mailto:${MAIL}`}
          aria-label={`Email ${MAIL}`}
          background="#f5f5f7"
          shimmerColor="#ffffff"
          borderRadius="100px"
        >
          <span className="relative z-10 flex items-center gap-2 text-[#1d1d1f]">
            {MAIL}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
