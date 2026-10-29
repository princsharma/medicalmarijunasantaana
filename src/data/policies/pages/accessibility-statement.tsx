import Link from "next/link";
import type { PolicyPageData } from "@/data/policies/types";
import { getPolicyHref } from "@/data/policies/paths";
import { siteConfig } from "@/data/site";

const policyLinkClass = "font-medium text-brand-700 underline hover:text-brand-800";

export const accessibilityStatement: PolicyPageData = {
  slug: "accessibility-statement",
  category: "legal",
  title: "Accessibility Statement",
  shortTitle: "Accessibility Statement",
  description:
    "Our commitment to WCAG 2.1 and an inclusive telehealth experience for Santa Ana patients.",
  summary: "Our commitment to WCAG standards so every patient can use this site.",
  updated: "August 5, 2026",
  intro: [
    `At ${siteConfig.name}, we are committed to ensuring that our website and telehealth services are accessible to all users, including individuals with disabilities. We strive to provide an inclusive digital experience that allows patients to access information, review eligibility requirements, and schedule online consultations with ease. Accessibility is an ongoing priority as we continue to improve our platform.`,
  ],
  sections: [
    {
      heading: "Commitment to Accessibility",
      body: [
        "We are dedicated to making our website usable and accessible for individuals with diverse abilities and assistive technology needs. Our goal is to ensure that all users can navigate our site efficiently and access important information about our online medical marijuana evaluation services.",
        "As a telehealth provider, we recognize the importance of offering accessible digital healthcare services so patients can conveniently connect with licensed physicians online. We continuously review and update our website to improve usability and accessibility for all visitors.",
        "Accessibility is an ongoing effort, and we remain committed to enhancing the digital experience for our patients.",
      ],
    },
    {
      heading: "Accessibility Standards",
      body: [
        "Our website is designed with accessibility best practices in mind and aligns with the Web Content Accessibility Guidelines (WCAG) 2.1, developed by the World Wide Web Consortium.",
        "These guidelines are internationally recognized standards intended to improve accessibility for individuals with visual, auditory, motor, and cognitive disabilities, and to support compatibility with assistive technologies.",
      ],
    },
    {
      heading: "Website Accessibility Features",
      lists: [
        {
          intro: "To support accessibility, our website may include the following features:",
          items: [
            "Clear and consistent page structure",
            "Logical heading hierarchy",
            "Screen reader compatibility",
            "Alternative text for images",
            "Responsive design for mobile and desktop devices",
            "Readable font sizes and scalable text options",
            "Sufficient color contrast for improved readability",
          ],
        },
      ],
      body: [
        "These features help ensure users can access information about our telehealth services effectively.",
      ],
    },
    {
      heading: "Telehealth Accessibility",
      body: [
        "Our platform is designed to reduce barriers to healthcare by enabling patients to complete medical marijuana evaluations online. We strive to ensure that individuals using assistive technologies can access information related to scheduling, eligibility requirements, and patient support services.",
        "We are committed to making our digital healthcare experience as accessible as possible.",
      ],
    },
    {
      heading: "Ongoing Improvements",
      body: [
        "We regularly review our website to identify opportunities for improvement and to enhance accessibility and usability. As technology and standards evolve, we continue implementing updates to support a more inclusive experience for all users.",
      ],
    },
    {
      heading: "Third Party Services",
      body: [
        "Some website features may rely on third party tools, such as scheduling systems or payment processors. While we strive to maintain accessibility throughout our platform, we cannot guarantee the accessibility of external services outside our direct control.",
        "If you encounter any issues with third party tools, please contact us for assistance.",
      ],
    },
    {
      heading: "Accessibility Assistance",
      body: [
        "If you experience difficulty accessing any part of our website or need assistance with our content or services, please contact us. We will make reasonable efforts to provide the information or support you need in an accessible format.",
        `Email: ${siteConfig.email}`,
        `Phone: ${siteConfig.phoneDisplay}`,
      ],
    },
    {
      heading: "Related Policies",
      lead: [
        "Accessibility is part of our broader commitment to protecting patient rights, maintaining transparency, and providing secure telehealth services. To learn more about how we protect your information and govern the use of our platform, please review the following pages:",
      ],
      lists: [
        {
          items: [
            "Privacy Policy",
            "Terms of Use",
            "HIPAA Compliance",
          ],
        },
      ],
      body: [
        <>
          These policies outline how we handle patient data, maintain secure communications,
          and ensure responsible use of our telehealth services. See our{" "}
          <Link href={getPolicyHref("privacy-policy")} className={policyLinkClass}>
            Privacy Policy
          </Link>
          ,{" "}
          <Link href={getPolicyHref("terms-of-use")} className={policyLinkClass}>
            Terms of Use
          </Link>
          , and{" "}
          <Link href={getPolicyHref("hipaa-compliance")} className={policyLinkClass}>
            HIPAA Compliance
          </Link>{" "}
          pages.
        </>,
      ],
    },
    {
      heading: "Feedback",
      body: [
        "We welcome feedback regarding the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know. Your input helps us continue improving the accessibility and usability of our platform.",
      ],
    },
  ],
  footerDisclaimer: `${siteConfig.name} connects patients with California licensed physicians for medical cannabis evaluations in accordance with applicable state laws. Website content is for informational purposes only and does not constitute medical advice. Approval is determined solely by the evaluating physician. ${siteConfig.name} does not provide or sell cannabis products.`,
};
