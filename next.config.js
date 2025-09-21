/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for development stability
  webpack: (config, { dev }) => {
    if (dev) {
      // Add better error handling for development
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
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
