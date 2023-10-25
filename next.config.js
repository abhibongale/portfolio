const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/portfolio',
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
