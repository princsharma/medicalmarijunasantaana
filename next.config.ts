import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Keep one indexable URL shape: no trailing slashes on routes. */
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/shipment-policy-and-disclaimer",
        destination: "/our-policies/shipping-policy",
        permanent: true,
      },
      {
        source: "/policy",
        destination: "/our-policies",
        permanent: true,
      },
      {
        source: "/policy/:slug",
        destination: "/our-policies/:slug",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/our-policies/refund-policy",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/our-policies/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "/our-policies/terms-of-use",
        permanent: true,
      },
      {
        source: "/our-authors/carrie-gessler",
        destination: "/our-authors/octavia-wyche",
        permanent: true,
      },
      {
        source: "/our-authors/rick-rieser",
        destination: "/doctors/rick-rieser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
