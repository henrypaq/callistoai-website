import Link from 'next/link';

export default function SimpleHero() {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        {/* Headline - two lines, extremely tight spacing */}
        <h1
          className="text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-dm-serif-display), Georgia, serif', letterSpacing: '-0.02em' }}
        >
          <span className="block whitespace-nowrap" style={{ lineHeight: '1' }}>Your next breakthrough,</span>
          <span className="block" style={{ lineHeight: '1', marginTop: '-0.15em' }}>powered by AI.</span>
        </h1>

        {/* Subtext - tighter spacing, body font */}
        <p
          className="max-w-2xl text-lg leading-snug text-gray-600 sm:text-xl"
          style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
        >
          Power your business with Callisto&apos;s suite of tools, or build a custom platform to supercharge your day to day operations.
        </p>

        {/* CTAs - primary solid black button + secondary underlined link, centered */}
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Request a Demo
          </Link>
          <Link
            href="/products"
            className="text-base font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}
