
import Link from "next/link";

export default function CtaSection() {

  return (
    <section aria-labelledby="cta-heading" className="relative py-40 bg-[#0A0F1C]">
      {/* Subtle glow gradient that stops at footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div 
          className="w-full h-full opacity-15 blur-[80px]"
          style={{
            background: 'radial-gradient(ellipse 120% 100% at center 80%, rgba(6,182,212,0.3) 0%, rgba(29,78,216,0.2) 40%, rgba(34,211,238,0.1) 70%, transparent 90%)'
          }}
        />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-8 text-center z-10">
        <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-14">
          <span className="text-white">Own your workflow.</span>
          <br className="hidden md:block" />
          <span className="text-white">Keep every file at your fingertips</span>
        </h2>
        <div className="mt-2 inline-block">
          <Link href="/book-demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-lg font-semibold text-white transition-colors shadow-lg">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}