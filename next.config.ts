import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // styled-components dipakai oleh Sanity Studio
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
