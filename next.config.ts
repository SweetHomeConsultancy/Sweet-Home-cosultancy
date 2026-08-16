import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // Disables the Static/Dynamic route indicator
    buildActivity: false, // Disables the build activity indicator
  },
};

export default nextConfig;
