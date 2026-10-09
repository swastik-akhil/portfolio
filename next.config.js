/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Ignore ESLint errors during production builds — quick workaround
    ignoreDuringBuilds: true,
  },
  // Next 14's dev server cannot serve metadata routes such as sitemap.ts when
  // static export is forced. Production builds still export the `out` folder.
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true, // disable image optimization for static export
  },
}

module.exports = nextConfig
