import Image from 'next/image';

const gradientImages = [
  '/gradients/Dreamy Blends_003.png',
  '/gradients/Dreamy Blends_004.png',
  '/gradients/Vintage Blends_001.png',
  '/gradients/Whimsical Washes_004.png',
];

const blogs = [
  {
    title: 'Mobile-First Design: Why It’s More Important Than Ever!',
    category: 'UI/UX Design',
    image: gradientImages[0],
  },
  {
    title: 'UX Writing: The Power of Words in Crafting Seamless Experiences',
    category: 'UI/UX Design',
    image: gradientImages[1],
  },
  {
    title: 'Mobile-First Strategy: What Every Product Team Needs to Know',
    category: 'Product Strategy',
    image: gradientImages[2],
  },
  {
    title: 'Building Delightful Interfaces with AI-Assisted Design',
    category: 'Product Design',
    image: gradientImages[3],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-12">Blog</h1>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">⌕</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="group relative rounded-[28px] border border-gray-200 bg-white shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <p className="text-white text-lg font-semibold">Blogs coming soon</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
                  {blog.category}
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
                  {blog.title}
                </h2>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">More coming soon</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
              disabled
              aria-label="Previous page"
            >
              ‹
            </button>
            <span className="text-sm font-medium text-gray-700">Page 1 of 1</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
              disabled
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
