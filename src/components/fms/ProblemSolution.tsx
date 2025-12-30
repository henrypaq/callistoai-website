"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassPanel from "@/components/GlassPanel";

export default function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Staged cards: keep previous cards visible underneath (no fade out)
  const card1Opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card1Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card1Filter = 'none';

  // Card 2: slower slide-in and crisp at the moment it lands
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.45, 1], [1, 1, 1]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.48], ["120vh", "0vh"]);
  const card2Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card2Filter = 'none';

  // Card 3: slower slide-in and crisp at the moment it lands
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.82, 1], [1, 1, 1]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.85], ["120vh", "0vh"]);
  const card3Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card3Filter = 'none';

  const scenarios = [
    {
      problem: {
        title: "Monthly subscription fatigue",
        description: "Constantly paying monthly fees adds up over time, draining your budget without building equity."
      },
      solution: {
        title: "One-time purchase, lifetime ownership",
        description: "Pay once and own Callisto forever. No recurring fees, no surprises—just permanent access."
      }
    },
    {
      problem: {
        title: "Feature locks and paywalls",
        description: "Premium features hidden behind expensive tiers force you to upgrade constantly."
      },
      solution: {
        title: "All features included from day one",
        description: "Get complete access to every feature with your purchase. No upsells, no hidden costs."
      }
    },
    {
      problem: {
        title: "Unpredictable price increases",
        description: "Subscription prices rise without warning, forcing you to pay more or lose your data."
      },
      solution: {
        title: "Locked-in pricing, guaranteed",
        description: "Your one-time price never changes. No surprises, no price hikes—just stability."
      }
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0A0F1C] pb-24" style={{ height: "250vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10 -mt-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8 w-full">
          {/* Headline - stays visible */}
          <header className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gray-300">Stop regretting your subscription spend.</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Buy Callisto once and own it forever</span>
            </h2>
          </header>

          {/* Cards container - staged comparisons stack here */}
          <div className="relative h-[600px] max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              className="absolute inset-0 flex items-center z-[1]"
              style={{ 
                opacity: card1Opacity, 
                scale: card1Scale,
                filter: card1Filter
              }}
              transition={{ type: "spring", stiffness: 40, damping: 22 }}
            >
              <div className="w-full z-[1] relative grid gap-6 md:grid-cols-2">
                {/* Left Panel - Air Inc */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-0 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">12 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-red-400 text-lg font-semibold mb-2">Air Inc</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1">$350 × 12 = <span className="text-red-400">$4,200</span></h3>
                      <p className="text-gray-400 text-sm">Year 1 subscription cost</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/airinc-ui.png" 
                        alt="Air Inc UI" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Panel - Callisto */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-0 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">12 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-blue-400 text-lg font-semibold mb-2">Callisto</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1"><span className="text-green-400">$4,000</span> one‑time</h3>
                      <p className="text-gray-400 text-sm">Own it forever</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/demo-ui-placeholder.png" 
                        alt="Callisto UI Demo" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="absolute inset-0 flex items-center z-[2]"
              style={{ 
                opacity: card2Opacity, 
                y: card2Y, 
                scale: card2Scale,
                filter: card2Filter
              }}
              transition={{ type: "spring", stiffness: 40, damping: 22 }}
            >
              <div className="w-full z-[2] relative grid gap-6 md:grid-cols-2">
                {/* Left Panel - Air Inc */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-36 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">24 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-red-400 text-lg font-semibold mb-2">Air Inc</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1">$350 × 24 = <span className="text-red-400">$8,400</span></h3>
                      <p className="text-gray-400 text-sm">Two‑year subscription cost</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/airinc-ui.png" 
                        alt="Air Inc UI" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Panel - Callisto */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-36 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">24 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-blue-400 text-lg font-semibold mb-2">Callisto</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1"><span className="text-green-400">$4,000</span> one‑time</h3>
                      <p className="text-gray-400 text-sm">Still the same</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/demo-ui-placeholder.png" 
                        alt="Callisto UI Demo" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="absolute inset-0 flex items-center z-[3]"
              style={{ 
                opacity: card3Opacity, 
                y: card3Y,
                scale: card3Scale,
                filter: card3Filter
              }}
              transition={{ type: "spring", stiffness: 40, damping: 22 }}
            >
              <div className="w-full z-[3] relative grid gap-6 md:grid-cols-2">
                {/* Left Panel - Air Inc */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-72 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">36 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-red-400 text-lg font-semibold mb-2">Air Inc</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1">$350 × 36 = <span className="text-red-400">$12,600</span></h3>
                      <p className="text-gray-400 text-sm">Three‑year subscription cost</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/airinc-ui.png" 
                        alt="Air Inc UI" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Panel - Callisto */}
                <div className="relative">
                  {/* Integrated tag */}
                  <div className="absolute -top-8 left-72 z-[50]">
                    <span className="px-6 py-3 bg-white/5 backdrop-blur-xl border-t border-white/20 text-white text-lg font-bold rounded-t-lg">36 months</span>
                  </div>
                  {/* Panel with glassmorphism effect */}
                  <div className="bg-white/5 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-black/20 p-6 py-8 rounded-3xl min-h-[600px]">
                    {/* Pricing content */}
                    <div className="text-center mb-8">
                      <div className="text-blue-400 text-lg font-semibold mb-2">Callisto</div>
                      <h3 className="text-5xl md:text-6xl font-bold text-white mb-1"><span className="text-green-400">$4,000</span> one‑time</h3>
                      <p className="text-gray-400 text-sm">Pay once, own forever</p>
                    </div>
                    {/* UI screenshot */}
                    <div className="rounded-xl bg-gray-800/40 p-4 shadow-lg h-80 overflow-hidden">
                      <img 
                        src="/demo-ui-placeholder.png" 
                        alt="Callisto UI Demo" 
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
    </div>
  );
}