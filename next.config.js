/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack to prevent ENOENT errors
  // Use stable webpack compiler instead
  experimental: {
    turbo: {
      // Disable Turbopack for development
      enabled: false,
    },
  },
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
  // Optimize build performance
  swcMinify: true,
}

module.exports = nextConfig
