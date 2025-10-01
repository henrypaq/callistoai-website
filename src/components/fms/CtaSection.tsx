
import Link from "next/link";

export default function CtaSection() {

  return (
    <section aria-labelledby="cta-heading" className="relative py-40 bg-[#0A0F1C] mb-16">
      {/* Wave-like gradient extending toward center */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        <div 
          className="w-full h-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse 150% 120% at center 60%, rgba(29,78,216,0.8) 0%, rgba(29,78,216,0.5) 30%, rgba(29,78,216,0.3) 50%, transparent 75%)'
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