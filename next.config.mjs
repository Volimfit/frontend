/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pb.volimfit.ru',
      },
      {
        protocol: 'https',
        hostname: 'volimfit.ru',
      },
    ],
  },
};

export default nextConfig;
