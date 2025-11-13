export default function Retail() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This page is currently under development. Check back soon!
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

