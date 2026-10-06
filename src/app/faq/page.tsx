import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqInteractivePanel } from "@/components/sections/FaqInteractivePanel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { faqItems } from "@/data/homepage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about getting a medical marijuana card in Santa Ana — pricing, timing, privacy, and eligibility.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <PageHero
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        description="Clear answers about medical marijuana evaluations, recommendations, cards, and patient rights in Santa Ana."
      />

      <section className="relative overflow-hidden pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full bg-accent-200/15 blur-3xl" />

        <Container className="relative">
          <div className="rounded-[2rem] border border-neutral-200/60 bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-8 md:p-10">
            <FaqInteractivePanel />
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-neutral-500">
            Medical Disclaimer: {siteConfig.name} connects patients with California
            licensed physicians for medical cannabis evaluations in accordance with
            applicable state laws. Website content is for informational purposes only
            and does not constitute medical or legal advice. Approval is determined
            solely by the evaluating physician. {siteConfig.name} does not provide or
            sell cannabis products.
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
