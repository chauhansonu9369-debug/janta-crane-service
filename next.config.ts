import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "/data/**",
        "/data/data/**",
        "/",
      ],
      poll: 1000,
    };
    return config;
  },
};

export default nextConfig;
