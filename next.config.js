const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/portfolio',
  assetPrefix: "/portfolio",
};

module.exports = withContentlayer(nextConfig);
