export default function SocialProof() {
  const brands = [
    { name: "GitHub", src: "/icons/brands/github.svg" },
    { name: "Spotify", src: "/icons/brands/spotify.svg" },
    { name: "Google", src: "/icons/brands/google.svg" },
    { name: "NVIDIA", src: "/icons/brands/nvidia.svg" },
    { name: "Cherry", src: "/icons/brands/cherry.svg" },
    { name: "Zalando", src: "/icons/brands/zalando.svg" },
    { name: "Pinterest", src: "/icons/brands/pinterest.svg" },
    { name: "EQT", src: "/icons/brands/eqt.svg" },
  ];

  return (
    <section aria-labelledby="social-proof-heading" className="relative bg-[#0A0F1C] -mt-6 pt-28 pb-24 overflow-hidden">
      {/* Blend with hero: carry over soft gradient and add top fade */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Carry-over radial from hero, centered near top */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-25 blur-[100px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(29,78,216,0.45) 0%, rgba(6,182,212,0.35) 35%, rgba(34,211,238,0.2) 55%, transparent 75%)'
          }}
        />
        {/* Subtle side glows to avoid hard edges */}
        <div className="absolute -top-10 left-0 w-1/3 h-64 bg-gradient-to-br from-pink-500/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-72 bg-gradient-to-tl from-indigo-600/20 to-transparent blur-3xl" />
        {/* Top fade so hero → section transition is seamless */}
        <div className="absolute -top-1 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#0A0F1C]/60 to-[#0A0F1C]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-12 items-center justify-items-center">
          {brands.map((b, idx) => (
            <div key={idx} className="h-10 flex items-center">
              <img src={b.src} alt={b.name} className="h-10 w-auto opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}