// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'dev-to-uploads.s3.amazonaws.com'],
  },
};

export default nextConfig;
