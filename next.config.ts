import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.my-vibecheck.com" }],
        destination: "https://my-vibecheck.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
