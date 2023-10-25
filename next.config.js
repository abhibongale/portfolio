const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  }
};

module.exports = withContentlayer(nextConfig);
