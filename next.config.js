const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio',
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
