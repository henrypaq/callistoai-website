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
}

module.exports = nextConfig
