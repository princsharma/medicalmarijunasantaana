import type { Metadata } from "next";
import { Star } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { reviews } from "@/data/homepage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Patient Reviews",
  description:
    "Read what Santa Ana and Orange County patients say about their medical marijuana card evaluation experience.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Reviews" }]} />
      <PageHero
        eyebrow="Patient Stories"
        title="What Our Patients Are Saying"
        description="Real feedback from patients who completed their telehealth medical marijuana evaluation with us."
      />

      <Container className="pb-16 md:pb-24">
        <Card className="mx-auto mb-12 max-w-xl text-center" hover={false}>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-accent-400 text-accent-400" />
            ))}
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-neutral-900">Excellent</p>
          <p className="mt-1 text-neutral-600">Based on 450+ patient reviews</p>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <Card key={review.name} hover={false}>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="leading-relaxed text-neutral-700">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="not-italic font-semibold text-neutral-900">{review.name}</cite>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </footer>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-neutral-900">Have Questions?</h2>
          <p className="mt-2 text-neutral-600">
            Our Santa Ana care team is ready to help with your evaluation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact-us" variant="primary">
              Contact Us
            </Button>
            <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="outline">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
