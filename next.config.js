/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the correct workspace root to avoid lockfile warnings
  outputFileTracingRoot: __dirname,
  // Optimize for development stability
  webpack: (config, { dev }) => {
    if (dev) {
      // Optimize for faster compilation
      config.watchOptions = {
        poll: false, // Disable polling for better performance
        aggregateTimeout: 200,
      };
    }
    return config;
  },
  // Disable source maps in development to reduce file operations
  productionBrowserSourceMaps: false,
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
