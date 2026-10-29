import Link from "next/link";
import type { PolicyPageData } from "@/data/policies/types";
import { siteConfig } from "@/data/site";

const policyLinkClass = "font-medium text-brand-700 underline hover:text-brand-800";

export const editorialPolicy: PolicyPageData = {
  slug: "editorial-policy",
  category: "our-policies",
  title: "Editorial Policy",
  shortTitle: "Editorial Policy",
  description:
    "How we research, review, and keep medical marijuana content accurate for Santa Ana patients.",
  summary: "How we research, review, and keep medical marijuana content accurate.",
  updated: "August 5, 2026",
  intro: [
    `At ${siteConfig.name}, we're committed to delivering accurate, reliable, and practical information about medical marijuana, cannabis wellness, and the legal and health topics that surround them. Our editorial team holds every piece of content to a high standard of credibility, clarity, and real-world usefulness for the patients and caregivers who rely on us.`,
  ],
  sections: [
    {
      heading: "Our Core Principles",
      subsections: [
        {
          heading: "Vision",
          body: [
            "To make safe, legal, and effective medical marijuana information accessible to every Santa Ana patient and caregiver.",
          ],
        },
        {
          heading: "Mission",
          body: [
            "To provide clear, honest guidance on MMJ usage, California cannabis regulations, and wellness applications, delivered in an accurate and approachable way.",
          ],
        },
        {
          heading: "Promise",
          body: [
            "We follow California's medical marijuana laws and protocols closely, and we back our content with input from licensed medical professionals and credible research.",
          ],
        },
      ],
    },
    {
      heading: "Editorial Commitment",
      subsections: [
        {
          heading: "Expertly written content",
          body: [
            "Every article is created and reviewed by an in-house team with real experience writing about cannabis. We aim for content that's informative, actionable, and factually sound, not filler.",
          ],
        },
        {
          heading: "Accuracy and credibility",
          body: [
            "We fact-check thoroughly, drawing on peer-reviewed studies, California state regulations, and official medical sources to keep our content reliable.",
          ],
        },
        {
          heading: "Debunking myths",
          body: [
            "Cannabis is one of the most misunderstood topics in healthcare. We work to clear up misinformation and correct common misconceptions about cannabis use, effects, and California law.",
          ],
        },
        {
          heading: "Reliable sources",
          body: [
            "We cite only current, trustworthy, and relevant references, so readers can trust that the insights they find here are grounded in evidence, not speculation.",
          ],
        },
      ],
    },
    {
      heading: "Ethical Approach",
      subsections: [
        {
          heading: "Kindness and empathy",
          body: [
            "We don't publish content that criticizes individual patients, dispensaries, or practitioners. Our goal is to educate, not to judge. Every topic is handled with respect for different perspectives.",
          ],
        },
        {
          heading: "Objectivity on sensitive topics",
          body: [
            "Medical, legal, and wellness subjects deserve a level, objective treatment. We always prioritize patient safety, legal compliance, and sound ethical standards over sensationalism.",
          ],
        },
      ],
    },
    {
      heading: "Why Trust Us",
      subsections: [
        {
          heading: "Industry experts",
          body: [
            "Our team brings real experience in cannabis medicine, wellness, and regulatory compliance to every article, so the guidance we offer is genuinely informed.",
          ],
        },
        {
          heading: "Advocates for health and wellness",
          body: [
            "We're invested in patient advocacy, responsible cannabis use, and safe wellness practices, not just page views.",
          ],
        },
        {
          heading: "Licensed professionals",
          body: [
            "Any medical or legal guidance on our site comes from licensed professionals in their respective fields, so you can trust it's legitimate and current.",
          ],
        },
        {
          heading: "Thorough research",
          body: [
            "Every article goes through deep research, weighing scientific studies, real patient experiences, and legal analysis to give readers a well-rounded picture.",
          ],
        },
      ],
    },
    {
      heading: "Comprehensive Review Process",
      subsections: [
        {
          heading: "Meticulous editing",
          body: [
            "Nothing goes live without a rigorous review for clarity, accuracy, and adherence to our editorial standards.",
          ],
        },
        {
          heading: "Quality control",
          body: [
            "We continually refine how we research, write, and review content, so accuracy improves and errors get caught before they reach you.",
          ],
        },
      ],
    },
    {
      heading: "Open to Suggestions",
      body: [
        <>
          No system is perfect, and we know it. If you spot an error or have a suggestion
          for how we can do better, reach out through our{" "}
          <Link href="/contact-us" className={policyLinkClass}>
            Contact Us
          </Link>{" "}
          page. We take every piece of feedback seriously, and we update our content
          whenever it improves accuracy or usefulness.
        </>,
      ],
    },
    {
      heading: "Our Promise to You",
      body: [
        "Our goal is simple: give patients, caregivers, and cannabis enthusiasts across Santa Ana clear, actionable, and trustworthy information. Through our commitment to accuracy, ethics, and patient advocacy, we aim to be a reliable resource for medical marijuana knowledge in the area.",
      ],
    },
  ],
  footerDisclaimer: `${siteConfig.name} connects patients with California-licensed physicians for medical cannabis evaluations in accordance with applicable state laws. Website content is for informational purposes only and does not constitute medical advice. Approval is determined solely by the evaluating physician. ${siteConfig.name} does not provide or sell cannabis products.`,
};
