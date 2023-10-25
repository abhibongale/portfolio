const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/portfolio/',
  assetPrefix: "./",
};

module.exports = withContentlayer(nextConfig);
