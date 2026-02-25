import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const products = [
    {
      title: 'Steward',
      tag: 'Automation',
      description: 'AI-powered workflow automation that handles repetitive tasks and streamlines your operations.',
      href: '/software/steward',
      image: '/gradients/Dreamy Blends_003.png',
    },
    {
      title: 'Cortex',
      tag: 'Intelligence',
      description: 'Analytics platform for actionable insights from your data.',
      href: '/software/cortex',
      image: '/gradients/Dreamy Blends_004.png',
    },
    {
      title: 'File Management System',
      tag: 'Data Management',
      description: 'Centralized storage with powerful search and organization.',
      href: '/software/file-management',
      image: '/gradients/Vintage Blends_001.png',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="section-header text-5xl md:text-6xl font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our suite of AI-powered tools designed to transform how you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{product.tag}</span>
                <h2 className="text-2xl font-semibold text-gray-900 mt-2 group-hover:text-gray-700 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-500 mt-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
