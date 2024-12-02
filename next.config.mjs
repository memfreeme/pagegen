/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagegen.ai",
      },
    ],
  },
};

export default nextConfig;
