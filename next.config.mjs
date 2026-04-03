/** @type {import('next').NextConfig} */
const nextConfig = {
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
