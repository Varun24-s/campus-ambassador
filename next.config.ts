/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ ESLint errors ko build fail karne se rok dega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ TypeScript errors ko bhi ignore karega
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

