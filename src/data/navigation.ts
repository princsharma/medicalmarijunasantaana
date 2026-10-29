export const mainNav = [
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Authors", href: "/our-authors" },
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
} as const;
