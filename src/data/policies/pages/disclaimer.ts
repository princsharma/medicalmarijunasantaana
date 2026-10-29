import type { PolicyPageData } from "@/data/policies/types";
import { siteConfig } from "@/data/site";

export const disclaimerPolicy: PolicyPageData = {
  slug: "disclaimer",
  category: "our-policies",
  title: "Disclaimer and Policies",
  shortTitle: "Disclaimer",
  description:
    "Important limits on medical advice and the role of our Santa Ana medical marijuana platform.",
  summary: "Important limits on medical advice and the role of our platform.",
  updated: "August 5, 2026",
  intro: [
    `At ${siteConfig.name}, we're committed to providing educational resources and connecting patients with licensed healthcare professionals for medical marijuana evaluations. However, please be aware that the information on this website is subject to important disclaimers outlined below. By using this platform, you agree to the following terms:`,
  ],
  sections: [
    {
      heading: "Informational Purpose Only",
      body: [
        `${siteConfig.name} provides content for educational and informational purposes only. It is not intended to be used as a substitute for professional medical advice or healthcare services. The information on this website is designed to help users understand medical marijuana and wellness options, but should always be reviewed with a licensed healthcare provider before making any decisions.`,
      ],
    },
    {
      heading: "Not a Substitute for Medical Care",
      body: [
        `${siteConfig.name} is not a healthcare provider. The platform is designed to connect patients with licensed healthcare professionals for medical marijuana evaluations. Any decisions regarding medical treatment, including medication or therapy, should be made in consultation with a licensed healthcare professional. Medical marijuana recommendations are not prescriptions and should not be viewed as a substitute for conventional medical care.`,
      ],
    },
    {
      heading: "No Diagnosis or Treatment",
      body: [
        `The information provided on this platform does not diagnose, treat, cure, or prevent any medical conditions. ${siteConfig.name} facilitates medical marijuana evaluations through licensed professionals, but it does not provide direct medical treatment or advice. Always seek the guidance of a qualified healthcare provider before making any medical decisions.`,
      ],
    },
    {
      heading: "User Responsibility",
      body: [
        `Your health choices are your responsibility. Any action taken based on information provided by this platform is done at your own risk. ${siteConfig.name} is not responsible for any outcomes resulting from decisions made without the guidance of a licensed healthcare provider. It is always essential to verify and discuss your healthcare decisions with a licensed physician or healthcare professional.`,
      ],
    },
    {
      heading: "Testimonials and User Experiences",
      body: [
        "Any testimonials or user-generated content on this site represent individual experiences. These testimonials should not be considered as medical advice and may not reflect your own experience or outcome. Outcomes may vary, and there is no guarantee that you will experience similar results. Always consult a healthcare provider before making any medical decisions.",
      ],
    },
    {
      heading: "No Endorsement of Products or Services",
      body: [
        `${siteConfig.name} does not endorse, guarantee, or make any claims about the effectiveness or safety of any products, services, or therapies mentioned on the platform. The inclusion of a product, service, or therapy on this site does not imply that we recommend it. Users should independently verify and consult their healthcare provider before using any such products or services.`,
      ],
    },
    {
      heading: "Platform's Role",
      body: [
        `${siteConfig.name} serves as a platform to connect patients with licensed healthcare professionals for medical marijuana evaluations. We do not provide direct medical care, and our services are not intended to replace the doctor-patient relationship. We connect patients to licensed providers who make medical recommendations, but we do not make those recommendations ourselves.`,
      ],
    },
    {
      heading: "Emergencies",
      body: [
        "This platform is not designed for emergency medical situations. If you are experiencing a medical emergency, please contact 911 or your local emergency services immediately. Do not delay seeking professional medical attention while using this site.",
      ],
    },
    {
      heading: "Third Party Websites",
      body: [
        "Our website may include links to third-party websites for convenience. We do not control or verify the content, security, or privacy practices of these third-party websites. Use of these sites is at your own discretion. Please review the privacy practices and terms of use for any third-party websites you visit.",
      ],
    },
    {
      heading: "Special Considerations",
      body: [
        "If you are under 18, have chronic or serious health conditions, or are pregnant or breastfeeding, it is essential to consult with a licensed healthcare provider before making any decisions based on the information available on this platform. Always seek personalized advice from a healthcare professional.",
      ],
    },
    {
      heading: "Emerging and Alternative Therapies",
      body: [
        "Some content on this site may discuss alternative, experimental, or emerging treatments that are not guaranteed to be safe or effective. It is important to consult with a trusted medical professional before pursuing any alternative therapies discussed on this platform.",
      ],
    },
    {
      heading: "Modifications to the Disclaimer",
      body: [
        `${siteConfig.name} reserves the right to update, modify, or remove any content or information provided on this platform at any time, without prior notice. We encourage users to review this page regularly to stay informed of any changes. All changes to the Disclaimer and Policies will be posted on this page.`,
      ],
    },
  ],
  footerDisclaimer: `${siteConfig.name} connects patients with California-licensed physicians for medical cannabis evaluations in accordance with applicable state laws. Website content is for informational purposes only and does not constitute medical advice. Approval is determined solely by the evaluating physician. ${siteConfig.name} does not provide or sell cannabis products.`,
};
