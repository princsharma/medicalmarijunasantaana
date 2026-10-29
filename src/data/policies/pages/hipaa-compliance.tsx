import Link from "next/link";
import type { PolicyPageData } from "@/data/policies/types";
import { getPolicyHref } from "@/data/policies/paths";
import { siteConfig } from "@/data/site";

const policyLinkClass = "font-medium text-brand-700 underline hover:text-brand-800";

export const hipaaCompliance: PolicyPageData = {
  slug: "hipaa-compliance",
  category: "legal",
  title: "HIPAA Compliance and Patient Health Information Privacy",
  shortTitle: "HIPAA Compliance",
  description:
    "Our standards for safeguarding patient health information in telehealth care for Santa Ana patients.",
  summary: "Our standards for safeguarding patient health information in telehealth care.",
  updated: "August 12, 2026",
  intro: [
    `${siteConfig.name} is committed to protecting the privacy and security of patient health information. As a telehealth platform that connects patients with licensed physicians for medical marijuana evaluations, we take the confidentiality of personal and medical information seriously.`,
    "We follow healthcare privacy standards designed to protect patient data, including the requirements established under the Health Insurance Portability and Accountability Act (HIPAA). Our policies, technologies, and operational procedures are designed to safeguard sensitive medical information and support secure telehealth consultations.",
    "This page explains what HIPAA is, how we protect patient information, and how we maintain privacy and security standards when providing medical marijuana evaluations through telehealth.",
  ],
  sections: [
    {
      heading: "What Is HIPAA?",
      lead: [
        "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a United States federal law that establishes national standards for the protection of sensitive patient health information.",
        "HIPAA requires healthcare providers and organizations that handle medical data to implement safeguards that protect Protected Health Information (PHI) from unauthorized access, disclosure, or misuse.",
      ],
      lists: [
        {
          intro: "HIPAA regulations primarily focus on:",
          items: [
            "Protecting the confidentiality of patient health information",
            "Ensuring the security of electronic health records and communications",
            "Giving patients rights regarding access to and control over their medical data",
          ],
        },
      ],
      body: [
        "Organizations that handle health information must comply with HIPAA privacy and security rules to ensure data is handled responsibly and securely.",
      ],
    },
    {
      heading: "Our Commitment to HIPAA Compliance",
      lead: [
        `${siteConfig.name} implements administrative, technical, and physical safeguards designed to support HIPAA privacy and security standards.`,
      ],
      lists: [
        {
          intro:
            "Our privacy and security practices are intended to ensure that patient health information is:",
          items: [
            "Collected only when necessary to provide medical services",
            "Stored using secure systems and access controls",
            "Protected against unauthorized disclosure or misuse",
            "Accessed only by authorized healthcare professionals and necessary personnel",
          ],
        },
      ],
      body: [
        "We continuously review our privacy policies, security systems, and operational procedures to help maintain compliance with healthcare privacy regulations.",
      ],
    },
    {
      heading: "What Is Protected Health Information (PHI)?",
      lead: [
        "Protected Health Information (PHI) refers to identifiable information related to a person's health condition, medical treatment, or healthcare services.",
      ],
      lists: [
        {
          intro: "Examples of PHI may include:",
          items: [
            "Medical history or health conditions",
            "Physician consultation records",
            "Telehealth consultation information",
            "Medical marijuana evaluation details",
            "Personal identifiers connected to healthcare records",
          ],
        },
      ],
      body: [
        "Under HIPAA, this information must be protected using appropriate privacy and security safeguards.",
      ],
    },
    {
      heading: "How We Protect Patient Information",
      lead: ["We use several layers of safeguards to help protect patient health information."],
      subsections: [
        {
          heading: "Administrative Safeguards",
          body: [
            "Administrative safeguards include policies and procedures that limit access to health information to authorized individuals who require it to perform their duties.",
          ],
        },
        {
          heading: "Technical Safeguards",
          body: [
            "Technical safeguards include secure systems for storing and transmitting sensitive data. These systems help protect patient information through encrypted communications, access controls, and secure technologies.",
          ],
        },
        {
          heading: "Physical Safeguards",
          body: [
            "Physical safeguards protect the infrastructure used to store health information, including servers, networks, and systems that support telehealth services.",
            "Together, these safeguards help maintain the confidentiality and integrity of patient information.",
          ],
        },
      ],
    },
    {
      heading: "Telehealth Privacy and Security Standards",
      lead: [
        "We provide telehealth services that allow patients to consult with licensed physicians remotely for medical marijuana evaluations.",
      ],
      lists: [
        {
          intro: "Telehealth consultations may involve:",
          items: [
            "Secure video consultations",
            "Protected electronic messaging",
            "Secure transmission of medical documentation",
          ],
        },
      ],
      body: [
        "These technologies are designed to help protect patient privacy and maintain confidentiality during remote medical evaluations.",
      ],
    },
    {
      heading: "Use and Disclosure of Health Information",
      lead: [
        "Patient health information may be used or disclosed only as permitted under applicable healthcare privacy laws.",
      ],
      lists: [
        {
          intro: "This may include uses such as:",
          items: [
            "Facilitating medical evaluations conducted by licensed physicians",
            "Supporting telehealth consultations",
            "Maintaining necessary administrative and medical records",
            "Complying with legal or regulatory obligations when required by law",
          ],
        },
      ],
      body: [`${siteConfig.name} does not sell patient medical information.`],
    },
    {
      heading: "Patient Privacy Rights",
      lists: [
        {
          intro:
            "Patients may have certain rights regarding their protected health information, including the ability to:",
          items: [
            "Request access to their personal health information",
            "Request corrections to inaccurate records",
            "Request restrictions on certain uses or disclosures of information",
            "Request confidential communication when appropriate",
          ],
        },
      ],
      body: [
        "Requests for personal health information may be submitted using the contact information below.",
        `Email: ${siteConfig.email}`,
      ],
    },
    {
      heading: "Data Security Practices",
      body: [
        "We use security practices designed to protect patient data from unauthorized access, disclosure, alteration, or destruction.",
        "Sensitive information transmitted through the platform may be protected using secure communication technologies and controlled access systems.",
        "While no electronic system can guarantee absolute security, we implement reasonable safeguards designed to help protect patient information.",
        <>
          Note: This HIPAA Compliance Notice should be read together with our{" "}
          <Link href={getPolicyHref("privacy-policy")} className={policyLinkClass}>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={getPolicyHref("terms-of-use")} className={policyLinkClass}>
            Terms of Use
          </Link>
          , which provide additional information regarding how personal data is collected, used,
          and protected.
        </>,
      ],
    },
    {
      heading: "Frequently Asked Questions",
      subsections: [
        {
          heading: `Is ${siteConfig.name} HIPAA compliant?`,
          body: [
            "Yes. We follow privacy and security practices designed to comply with HIPAA standards for protecting patient health information during telehealth consultations and medical marijuana evaluations.",
          ],
        },
        {
          heading: `How does ${siteConfig.name} protect patient information?`,
          body: [
            "We rely on administrative, technical, and physical safeguards, including access controls, encrypted communications, and secure storage systems, to help protect patient health information.",
          ],
        },
        {
          heading: "Are telehealth consultations secure?",
          body: [
            "Yes. Telehealth consultations use secure video, messaging, and document transmission technologies designed to protect patient privacy during remote evaluations.",
          ],
        },
        {
          heading: "Is my medical marijuana evaluation confidential?",
          body: [
            "Yes. Evaluation details are treated as Protected Health Information and are handled in accordance with HIPAA privacy and security standards.",
          ],
        },
        {
          heading: "Who can access my health information?",
          body: [
            "Access to health information is limited to authorized healthcare professionals and personnel who require it to perform their duties, consistent with HIPAA requirements.",
          ],
        },
      ],
    },
  ],
  footerDisclaimer: `${siteConfig.name} connects patients with California state-licensed physicians for medical cannabis evaluations in accordance with applicable state law. Content on this site is for informational purposes only and does not constitute medical advice. Approval is determined solely by the evaluating physician. ${siteConfig.name} does not provide or sell cannabis products.`,
};
