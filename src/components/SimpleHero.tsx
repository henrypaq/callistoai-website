import Image from 'next/image';

export default function SimpleHero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-start overflow-hidden px-6 text-left bg-white">
      {/* Gradient Image in Top Right Corner - Only visible in hero section */}
      <div className="absolute top-0 right-0 w-[72%] md:w-[67%] lg:w-[62%] h-full min-h-[85vh] z-0 pointer-events-none overflow-hidden" style={{ right: '-8px' }}>
        <Image
          src="/1DCA5D15-5922-4A2F-BC40-8609DCC1505C.jpeg"
          alt=""
          fill
          className="object-contain"
          style={{ objectPosition: 'right top' }}
          priority
        />
      </div>
      
      {/* New Image in Bottom Left Corner - Aligned with bottom of hero section */}
      <div className="absolute bottom-0 left-0 w-[65%] md:w-[60%] lg:w-[55%] h-[65vh] md:h-[70vh] lg:h-[75vh] z-0 pointer-events-none overflow-hidden" style={{ left: '-8px' }}>
        <Image
          src="/E8FB475A-3BA3-4E13-AF29-28FF7ECC75AC.jpeg"
          alt=""
          fill
          className="object-contain"
          style={{ objectPosition: 'left bottom' }}
          priority
        />
      </div>
      
      <div className="relative z-10 flex max-w-3xl flex-col items-start gap-5 text-gray-900 ml-16 sm:ml-20 md:ml-24 lg:ml-28 xl:ml-32" style={{ paddingTop: '13rem' }}>
        {/* Five Yellow Stars with circular border */}
        <div className="flex gap-1 mb-0 -mt-6 items-center justify-center w-fit px-3 py-2 rounded-full border border-gray-300">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-left uppercase -mt-4" style={{ fontFamily: 'var(--font-red-hat-display)', fontWeight: 900, lineHeight: 1, letterSpacing: '0.02em' }}>
          <span className="block" style={{ fontWeight: 900 }}>AI INFRASTRUCTURE.</span>
          <span className="block -mt-5" style={{ fontWeight: 900 }}>REAL BUSINESS IMPACT.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl text-left mt-2">
          Power your business with Callisto's suite of tools, or build a custom platform for your artificial intelligence needs.
        </p>
      </div>
      
      {/* CTA Buttons - Right aligned and lower */}
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row items-end justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 mt-10 sm:mt-14 md:mt-16 ml-auto mr-24 sm:mr-32 md:mr-40 lg:mr-48 xl:mr-56">
        <a
          href="/book-consultation"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gray-900 transition-colors duration-300 hover:bg-gray-700"
        >
          Book a Consultation
        </a>
        <a
          href="/book-demo"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-gray-900 bg-white border-2 border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg"
        >
          See a Demo
        </a>
      </div>
    </section>
  );
}


