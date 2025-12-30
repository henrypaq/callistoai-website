import Image from "next/image";
import Link from "next/link";
import GlassPanel from "@/components/GlassPanel";
import TestimonialSection from "./TestimonialSection";

export default function FmsHero() {
  return (
    <>
    <header className="relative min-h-screen flex flex-col justify-center pb-16" style={{ overflow: 'visible' }}>
      {/* Dark navy background */}
      <div className="absolute inset-0 bg-[#0A0F1C]" />
      
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow - bottom center */}
        <div 
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-35 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, #1D4ED8 30%, #22D3EE 60%, transparent 100%)'
          }}
        />
        
        {/* Secondary glow - top center */}
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1D4ED8 0%, #06B6D4 40%, transparent 80%)'
          }}
        />
        
        {/* Small accent glow - left side */}
        <div 
          className="absolute top-1/3 left-16 w-[300px] h-[300px] opacity-30 blur-2xl"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, #06B6D4 50%, transparent 70%)'
          }}
        />
        
        {/* Small accent glow - right side */}
        <div 
          className="absolute top-1/2 right-20 w-[350px] h-[350px] opacity-25 blur-2xl"
          style={{
            background: 'radial-gradient(circle, #1D4ED8 0%, #06B6D4 60%, transparent 75%)'
          }}
        />
        
        {/* Small accent glow - bottom left */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] opacity-28 blur-xl"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, #22D3EE 50%, transparent 65%)'
          }}
        />
        
        {/* Small accent glow - bottom right */}
        <div 
          className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] opacity-22 blur-xl"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, #1D4ED8 40%, transparent 70%)'
          }}
        />
        
        {/* Very faint ambient glow - center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1000px] opacity-10 blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse at center, #06B6D4 0%, #1D4ED8 20%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pt-32">
        {/* Feature Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
            NEW
          </span>
          <span className="text-sm text-white">
            Introducing AI Auto Tagging in Callisto
          </span>
        </div>
        
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                  Modern File Management,<br />
                  Without Monthly Fees
                </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Centralize files, permissions, and workflows in one place. Simple setup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/book-demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-lg font-semibold text-white transition-colors shadow-lg">
            Book a demo
          </Link>
          <Link href="#demo" className="inline-flex items-center justify-center rounded-lg border border-gray-600 hover:border-gray-500 px-8 py-4 text-lg font-semibold text-white transition-colors">
            View demo
          </Link>
        </div>
      </div>

      {/* Demo positioned to show full content */}
      <div id="demo" className="relative z-10 w-full max-w-6xl mx-auto px-8 -mt-8">
        <GlassPanel>
          <div className="rounded-xl overflow-hidden border border-gray-600 bg-gray-800">
            <Image
              src="/demo-ui-placeholder.png"
              alt="FMS product demo"
              width={1400}
              height={800}
              priority
              loading="eager"
              className="w-full h-auto"
            />
          </div>
        </GlassPanel>
      </div>
      
      {/* Bottom fade to blend into next section - extended for smoother transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0A0F1C]/30 to-[#0A0F1C]" />
    </header>
    
    {/* Testimonial Section */}
    <TestimonialSection />
    </>
  );
}


