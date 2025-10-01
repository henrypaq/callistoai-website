"use client";

import { useState } from "react";

export default function ToggleOptions() {
  const [active, setActive] = useState("Nordic");
  
  const options = [
    { id: "Nordic", label: "Nordic" },
    { id: "Obsidian", label: "Obsidian" },
    { id: "Solar", label: "Solar" },
    { id: "Aurora", label: "Aurora" },
    { id: "Sands", label: "Sands" },
  ];

  return (
    <section aria-labelledby="toggle-options-heading" className="py-28 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <header className="mb-12 text-center">
          <h2 id="toggle-options-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Ditch generic platforms. Match the aesthetics of your brand
          </h2>
        </header>

        {/* Toggle buttons */}
        <div 
          role="tablist" 
          aria-label="UI theme options" 
          className="relative flex flex-wrap justify-center gap-3 mb-12 rounded-full p-2 max-w-fit mx-auto"
        >
          {/* Glassmorphism background */}
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20" />
          
          {/* Subtle glow gradient behind toggle box */}
          <div 
            className={`absolute -inset-4 blur-xl rounded-full transition-all duration-500 ${
              active === "Nordic" ? "bg-cyan-500/15" :
              active === "Obsidian" ? "bg-gray-500/15" :
              active === "Solar" ? "bg-amber-500/15" :
              active === "Aurora" ? "bg-emerald-500/15" :
              "bg-orange-500/15"
            }`}
            aria-hidden="true"
          />
          
          {/* Toggle buttons */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            {options.map((option) => (
              <button
                key={option.id}
                role="tab"
                aria-selected={active === option.id}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  active === option.id
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setActive(option.id)}
              >
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content area - demo image */}
        <div className="relative mt-8">
          {/* Background gradient glow */}
          <div 
            className={`absolute -inset-6 blur-3xl rounded-3xl transition-all duration-500 ${
              active === "Nordic" ? "bg-cyan-500/15" :
              active === "Obsidian" ? "bg-gray-500/15" :
              active === "Solar" ? "bg-amber-500/15" :
              active === "Aurora" ? "bg-emerald-500/15" :
              "bg-orange-500/15"
            }`}
            aria-hidden="true"
          />
          
          <article 
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto" 
            aria-live="polite"
          >
            {/* Glassmorphism border like hero page - more visible */}
            <div className="absolute inset-0 rounded-3xl bg-white/15 backdrop-blur-lg border-t border-white/40 shadow-lg shadow-black/20 z-10" />
            
            {/* Demo content */}
            <div className="relative h-[500px] overflow-hidden z-20">
              <img 
                src="/demo-ui-placeholder.png" 
                alt={`${active} theme demo interface`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient overlay - matching toggle glow colors */}
            <div 
              className={`absolute inset-0 transition-all duration-500 z-30 ${
                active === "Nordic" ? "bg-gradient-to-br from-cyan-500/5 to-cyan-600/5" :
                active === "Obsidian" ? "bg-gradient-to-br from-gray-500/5 to-gray-600/5" :
                active === "Solar" ? "bg-gradient-to-br from-amber-500/5 to-amber-600/5" :
                active === "Aurora" ? "bg-gradient-to-br from-emerald-500/5 to-emerald-600/5" :
                "bg-gradient-to-br from-orange-500/5 to-orange-600/5"
              }`}
              aria-hidden="true"
            />
          </article>
        </div>
      </div>
    </section>
  );
}