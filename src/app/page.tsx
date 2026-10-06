import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { faqItems, processSteps } from "@/data/homepage";
import { buildMetadata } from "@/lib/seo";

const PAGE_TITLE = "How to Get a Medical Marijuana Card in Santa Ana, California";
const PAGE_DESCRIPTION =
  "Apply for your medical marijuana card in Santa Ana online from licensed doctors. Same-day telehealth evaluation, plans from $55, money-back guarantee.";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

const ProcessSection = dynamic(() =>
  import("@/components/sections/ProcessSection").then((m) => m.ProcessSection)
);
const TelehealthSection = dynamic(() =>
  import("@/components/sections/TelehealthSection").then((m) => m.TelehealthSection)
);
const BenefitsSection = dynamic(() =>
  import("@/components/sections/BenefitsSection").then((m) => m.BenefitsSection)
);
const ConditionsSection = dynamic(() =>
  import("@/components/sections/ConditionsSection").then((m) => m.ConditionsSection)
);
const PricingSection = dynamic(() =>
  import("@/components/sections/PricingSection").then((m) => m.PricingSection)
);
const TrustSection = dynamic(() =>
  import("@/components/sections/TrustSection").then((m) => m.TrustSection)
);
// const ServiceAreasSection = dynamic(() =>
//   import("@/components/sections/ServiceAreasSection").then((m) => m.ServiceAreasSection)
// );
const ReviewsSection = dynamic(() =>
  import("@/components/sections/ReviewsSection").then((m) => m.ReviewsSection)
);
const FaqSection = dynamic(() =>
  import("@/components/sections/FaqSection").then((m) => m.FaqSection)
);
const CtaSection = dynamic(() =>
  import("@/components/sections/CtaSection").then((m) => m.CtaSection)
);

// Mirrors the exact `faqItems` data FaqSection renders, so the schema
// can never drift from what's actually visible on the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Mirrors the exact `processSteps` data ProcessSection renders, same
// drift-proofing principle as the FAQ schema above.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Medical Marijuana Card in Santa Ana",
  step: processSteps.map((step) => ({
    "@type": "HowToStep",
    position: step.step,
    name: step.title,
    text: step.description,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      {/* <TrustMarquee /> */}
      <ProcessSection />
      {/* <TelehealthSection /> */}
      <BenefitsSection />
      <ConditionsSection />
      <PricingSection />
      <TrustSection />
      {/* <ServiceAreasSection /> */}
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
