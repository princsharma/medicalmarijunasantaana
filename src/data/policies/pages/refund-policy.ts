import type { PolicyPageData } from "@/data/policies/types";
import { siteConfig } from "@/data/site";

export const refundPolicy: PolicyPageData = {
  slug: "refund-policy",
  category: "our-policies",
  title: "Refund Policy",
  shortTitle: "Refund Policy",
  description:
    "When you qualify for a refund and how to request one after a Santa Ana medical marijuana evaluation.",
  summary: "When you qualify for a refund and how to request one after an evaluation.",
  updated: "August 5, 2026",
  intro: [
    `${siteConfig.name} is committed to providing clear and fair service. We offer a 100% money-back guarantee under specific conditions.`,
  ],
  sections: [
    {
      heading: "Who Can Request a Refund",
      lists: [
        {
          intro: "Refunds are available to patients who:",
          items: [
            "Did not complete their consultation due to technical issues or provider absence.",
            "Cancel their appointment at least 24 hours in advance.",
            "Were found ineligible for a medical cannabis recommendation.",
            "Were charged twice for the same service.",
          ],
        },
      ],
      body: ["All refund requests must be submitted within 30 days of the original transaction."],
    },
    {
      heading: "When Refunds Are Not Available",
      lists: [
        {
          intro: "Refunds cannot be provided if:",
          items: [
            "Your consultation or recommendation has already been completed.",
            "You missed your appointment or canceled it less than 24 hours before.",
            "You paid state or third-party fees (e.g., MMIC processing, background checks).",
            "You simply changed your mind after booking.",
          ],
        },
      ],
    },
    {
      heading: "How to Submit a Refund Request",
      subsections: [
        {
          heading: "1. Gather Your Information",
          lists: [
            {
              items: [
                "Full name used for booking",
                "Email linked to your account",
                "Transaction ID or receipt",
                "Appointment date",
                "Reason for refund",
                "Any supporting documents",
              ],
            },
          ],
        },
        {
          heading: "2. Submit Your Request",
          body: [
            `Email: ${siteConfig.email}`,
            `Phone: ${siteConfig.phoneDisplay} | ${siteConfig.businessHours}`,
          ],
        },
        {
          heading: "3. Processing",
          body: [
            "Refunds are reviewed within 24 to 48 hours.",
            "Approved refunds are issued within 5 to 7 business days.",
          ],
        },
      ],
    },
    {
      heading: "Partial Refunds",
      lists: [
        {
          intro: "Partial refunds may be considered if:",
          items: [
            "Your consultation has started but it cannot be completed due to technical issues.",
            "Platform interruptions prevent full service delivery.",
          ],
        },
      ],
      body: ["Partial refund amounts depend on how much of the consultation was completed."],
    },
    {
      heading: "Refund Method & Security",
      body: [
        "Refunds are issued to the original payment method.",
        "All payments are handled securely through encrypted systems.",
        "If your payment method is inactive, our support team will arrange an alternative.",
      ],
    },
    {
      heading: "Additional Notes",
      body: [
        "Always review fees, services, and policies before booking.",
        "Contact our support team with any questions regarding refunds.",
        "Refunds are designed to be fair, transparent, and timely.",
        "HIPAA Compliant · CA Licensed Physicians · Secure Telehealth",
      ],
    },
  ],
};
