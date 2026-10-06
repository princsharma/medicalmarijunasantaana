import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Keep one indexable URL shape: no trailing slashes on routes. */
  trailingSlash: false,
};

export default nextConfig;
