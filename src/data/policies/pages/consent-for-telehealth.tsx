import Link from "next/link";
import type { PolicyPageData } from "@/data/policies/types";
import { getPolicyHref } from "@/data/policies/paths";
import { siteConfig } from "@/data/site";

const policyLinkClass = "font-medium text-brand-700 underline hover:text-brand-800";

export const consentForTelehealth: PolicyPageData = {
  slug: "consent-for-telehealth",
  category: "legal",
  title: "Consent to Telehealth",
  shortTitle: "Consent for Telehealth",
  description:
    "What to know before joining a remote evaluation with a licensed physician in Santa Ana.",
  summary: "What to know before joining a remote evaluation with a licensed physician.",
  updated: "August 5, 2026",
  intro: [
    `This Consent to Telehealth explains how telehealth services work when you use ${siteConfig.name}. Telehealth allows patients to connect with licensed healthcare professionals remotely through secure electronic communication technologies.`,
    `By using telehealth services through ${siteConfig.name}, you acknowledge that you have read and understood this consent and agree to receive healthcare services through telehealth technologies where permitted by California law.`,
  ],
  sections: [
    {
      heading: "Telehealth Services",
      lead: [
        "Telehealth uses electronic communication to allow healthcare providers to evaluate, discuss, and provide medical guidance remotely.",
      ],
      lists: [
        {
          intro: "A telehealth consultation may involve:",
          items: [
            "Live video appointments",
            "Audio or phone-based communication",
            "Secure electronic messaging",
            "Digital transmission of medical information and records",
          ],
        },
      ],
      body: [
        <>
          {siteConfig.name} operates a platform that connects patients with independent,
          California-licensed physicians for medical marijuana evaluations, in accordance
          with state law. Additional details about our platform and services are available
          in our{" "}
          <Link href={getPolicyHref("terms-of-use")} className={policyLinkClass}>
            Terms of Use
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Nature of Telehealth Consultations",
      body: [
        "Telehealth visits are different from traditional in-person appointments. Because the consultation happens remotely, your physician relies largely on the information you provide to assess your condition.",
        "Some medical conditions or circumstances may call for an in-person exam, and a physician may determine that telehealth is not appropriate for your situation.",
      ],
    },
    {
      heading: "Potential Benefits of Telehealth",
      lists: [
        {
          intro: "Telehealth may offer a number of advantages, including:",
          items: [
            "Easier access to care, especially for patients with mobility or transportation limitations",
            "Convenience and less time spent traveling",
            "Quicker communication with a licensed physician",
          ],
        },
      ],
    },
    {
      heading: "Potential Risks and Limitations",
      lists: [
        {
          intro: "As with any medical service, telehealth carries certain limitations, such as:",
          items: [
            "Technical issues or delays during your session",
            "Reduced ability to perform a hands-on physical exam",
            "Possible delays in evaluation due to incomplete or inaccurate information",
          ],
        },
      ],
      body: ["You acknowledge that these limitations may affect the outcome of your evaluation."],
    },
    {
      heading: "Not for Emergency Medical Situations",
      body: [
        `Telehealth services offered through ${siteConfig.name} are not intended for emergency medical or psychiatric situations.`,
        "If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.",
      ],
    },
    {
      heading: "Provider-Patient Relationship",
      body: [
        "A provider-patient relationship begins only once a licensed physician agrees to evaluate you and starts the medical assessment during your telehealth consultation.",
        "Simply submitting your information or booking an appointment does not, by itself, create a provider-patient relationship.",
      ],
    },
    {
      heading: "Accuracy of Information",
      body: [
        "Your physician relies on the information you submit during registration and your consultation. You agree to provide accurate, complete, and truthful information about your health history, symptoms, and medical conditions.",
        "Incomplete or inaccurate information may affect the quality and safety of the care you receive.",
      ],
    },
    {
      heading: "Communication Through Electronic Systems",
      body: [
        "Telehealth services may involve electronic communication through messaging platforms, video tools, and other digital technologies.",
        <>
          While we use reasonable safeguards to protect your information, electronic
          communication carries inherent risks, including possible technical failures or
          unauthorized access. Details on how your personal data is handled are available
          in our{" "}
          <Link href={getPolicyHref("privacy-policy")} className={policyLinkClass}>
            Privacy Policy
          </Link>
          .
        </>,
      ],
    },
    {
      heading: "Privacy and Compliance",
      body: [
        `${siteConfig.name} is committed to protecting the privacy and security of your health information. Telehealth consultations and related medical communications are handled in accordance with healthcare privacy standards, including the Health Insurance Portability and Accountability Act (HIPAA).`,
        <>
          For more on how we protect patient health information and maintain HIPAA
          compliance, please review our{" "}
          <Link href={getPolicyHref("hipaa-compliance")} className={policyLinkClass}>
            HIPAA Compliance and Health Information Privacy
          </Link>{" "}
          page.
        </>,
      ],
    },
    {
      heading: "Voluntary Consent",
      lists: [
        {
          intro: `By using telehealth services through ${siteConfig.name}, you acknowledge and agree that:`,
          items: [
            "You understand the nature of telehealth services",
            "You understand the potential benefits and limitations of a telehealth consultation",
            "You voluntarily consent to receive healthcare services through telehealth technology",
            "You have had the opportunity to review related policies, including our Terms of Use and Privacy Policy",
          ],
        },
      ],
      body: [
        "Note: If you do not agree with this Consent to Telehealth, you should not proceed with telehealth services through our platform.",
      ],
    },
    {
      heading: "Questions",
      body: [
        <>
          If you have any questions about this Consent to Telehealth or the telehealth
          services offered through {siteConfig.name}, please contact us through the
          information listed on our{" "}
          <Link href="/contact-us" className={policyLinkClass}>
            Contact Us
          </Link>{" "}
          page.
        </>,
      ],
    },
  ],
  footerDisclaimer: `${siteConfig.name} connects patients with California-licensed physicians for medical cannabis evaluations in accordance with state law. Website content is for informational purposes only and does not constitute medical advice. Approval is determined solely by the evaluating physician. ${siteConfig.name} does not provide or sell cannabis products.`,
};
