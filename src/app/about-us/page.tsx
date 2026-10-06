import type { Metadata } from "next";
import { Check, CircleCheck, CircleX, MapPin, X } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  aboutContent,
  aboutIncluded,
  aboutNotIncluded,
  aboutProcessSteps,
} from "@/data/about";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how Medical Marijuana Card Santa Ana connects Orange County patients with licensed California physicians for telehealth medical marijuana evaluations.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <Container className="-mt-10 relative pb-8 md:pb-12">
        <Card className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <MapPin className="size-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                {aboutContent.whyHeading}
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-600">{aboutContent.whyText}</p>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="py-16 md:py-24">
        <SectionHeader
          title={aboutContent.processHeading}
          description="Four simple steps from intake to certification."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutProcessSteps.map(({ step, icon: Icon, title, text }) => (
            <Card key={step} hover={false} className="relative pt-10 text-center">
              <span className="absolute -top-4 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white shadow-lg">
                {step}
              </span>
              <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-200/60 bg-brand-50/50 px-5 py-4 text-sm text-neutral-600">
          {aboutContent.disclaimer}
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card hover={false} className="border-brand-200/60">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-700 text-white">
                <CircleCheck className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-neutral-900">
                {aboutContent.includedHeading}
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {aboutIncluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-brand-50 px-4 py-3 text-sm text-neutral-700"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card hover={false} className="border-neutral-200">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                <CircleX className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold text-neutral-900">
                {aboutContent.notIncludedHeading}
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {aboutNotIncluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-neutral-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
