import { siteConfig } from "./site";

export const contactPageContent = {
  title: "Contact Us",
  subtitle:
    "Have questions about getting your medical marijuana card in Santa Ana? Our care team is here to help — reach out by phone, email, or the form below.",
  methods: [
    {
      title: "Phone",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      description: "Speak with our team Mon–Sat, 8 AM – 8 PM PST",
    },
    {
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      description: "We respond within one business day",
    },
    {
      title: "Office",
      value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
      )}`,
      description: siteConfig.businessHours,
    },
  ],
  map: {
    eyebrow: "Visit Us",
    title: "Find Our Office",
    description:
      "Stop by our Santa Ana office, or reach our team by phone or email above.",
  },
};
