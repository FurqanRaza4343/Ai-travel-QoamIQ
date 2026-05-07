import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://opal.google https://*.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
