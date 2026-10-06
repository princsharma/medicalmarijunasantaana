export const mainNav = [
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const footerNav = {
  resources: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Reviews", href: "/reviews" },
    // { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Shipment Policy", href: "/shipment-policy-and-disclaimer" },
  ],
} as const;
