import type { PolicyPageData } from "@/data/policies/types";
import { siteConfig } from "@/data/site";

export const shippingPolicy: PolicyPageData = {
  slug: "shipping-policy",
  category: "our-policies",
  title: "Shipping Policy",
  shortTitle: "Shipping Policy",
  description:
    "How physical medical marijuana identification cards are shipped to Santa Ana patients after physician approval.",
  summary: "Card delivery timelines, tracking, packaging, and how to reach our team.",
  updated: "August 5, 2026",
  intro: [
    `At ${siteConfig.name}, delivering your medical marijuana card safely and on time is our top priority. We understand how important your card is, and we take every step to ensure it arrives securely and without delays.`,
  ],
  sections: [
    {
      heading: "Processing and Delivery Time",
      body: [
        "After your application is approved, we prepare and ship your card within 10 to 12 business days. Our team works efficiently to get your card to you quickly, so you can access your medical cannabis benefits legally and without unnecessary delays.",
      ],
    },
    {
      heading: "Shipping and Tracking",
      body: [
        "We use trusted carriers to ensure your card arrives safely. Each shipment includes a tracking number, so you can monitor its progress from our office to your doorstep.",
      ],
    },
    {
      heading: "Delivery Concerns",
      body: [
        "If your card does not arrive within the expected timeframe, or if it is lost, damaged, or stolen, contact our support team right away. We respond within 24 hours and, if needed, will provide a replacement so your coverage is never interrupted.",
      ],
    },
    {
      heading: "Secure Packaging",
      body: [
        "Your card is mailed in a securely sealed envelope to prevent tampering and protect it during transit.",
      ],
    },
    {
      heading: "Customer Responsibility",
      body: [
        "Once a package is delivered and signed for, if a signature is required, it is considered received. Please make sure someone is available at the delivery address to accept your card safely.",
      ],
    },
    {
      heading: "Potential Delays",
      body: [
        "Occasionally, delivery may be delayed due to holidays, carrier issues, weather, or other unforeseen circumstances. We appreciate your patience and understanding in these rare cases.",
      ],
    },
    {
      heading: "Support and Contact",
      body: [
        "Our team is available to assist with any shipping questions or concerns:",
        `Email: ${siteConfig.email}`,
        `Phone: ${siteConfig.phone}`,
        `At ${siteConfig.name}, we make sure your medical cannabis card reaches you securely and on time, so you can focus on your health without worry.`,
      ],
    },
  ],
};
