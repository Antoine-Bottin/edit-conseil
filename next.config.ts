import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/qui-est-edit', // L'ancienne URL qui traîne sur Google
        destination: '/www.edit-conseil.com', // La nouvelle URL sur ton site Next.js
        permanent: true, // true déclenche une 301 (parfait pour le SEO)
      },
    ];
  },
};

export default nextConfig;
