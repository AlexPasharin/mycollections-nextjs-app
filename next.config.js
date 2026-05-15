/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Prisma 7 client output uses `.js` import specifiers on `.ts` files; map them for webpack.
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    return config;
  },
};

module.exports = nextConfig;
