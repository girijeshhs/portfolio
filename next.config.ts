/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fvyyqiunnitoqnhqhfdq.supabase.co"], // Add your Supabase storage domain
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
