/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.annihil.us",
      "raw.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
  env: {
    url: process.env.url,
    public: process.env.public,
    hash: process.env.hash,
  },
};

module.exports = nextConfig;
