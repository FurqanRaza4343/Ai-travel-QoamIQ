import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; frame-src 'self' https://opal.google https://*.google.com; font-src 'self' https://*.vercel-storage.com https://*.vercel.com vercel.live data:; ",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
