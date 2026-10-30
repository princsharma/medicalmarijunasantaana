import type { Metadata } from "next";
import { Check, CircleCheck, CircleX, MapPin, Sparkles, Video, X } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { HubPageHero, HubSectionIntro } from "@/components/ui/HubPageHero";
import {
  aboutContent,
  aboutIncluded,
  aboutNotIncluded,
  aboutProcessSteps,
} from "@/data/about";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export const metadata: Metadata = buildHubMetadata({
  title: "About Us",
  description:
    "Learn how Medical Marijuana Card Santa Ana connects Orange County patients with licensed California physicians for telehealth medical marijuana evaluations.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <HubPageHero
        eyebrow={aboutContent.eyebrow}
        badgeIcon={Sparkles}
        title={aboutContent.title}
        description={aboutContent.description}
        stats={[
          { icon: MapPin, label: "Santa Ana & Orange County" },
          { icon: Video, label: "100% telehealth" },
          { icon: CircleCheck, label: "Licensed CA physicians" },
        ]}
      />

      <Container className="-mt-6 relative pb-4 md:-mt-8 md:pb-8">
        <Card className="mx-auto max-w-4xl border-[#dce6dd] bg-gradient-to-br from-white to-[#f8faf6] p-7 shadow-md sm:p-9">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 ring-1 ring-brand-200">
              <MapPin className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-[#123c31] sm:text-2xl">
                {aboutContent.whyHeading}
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-600">{aboutContent.whyText}</p>
            </div>
          </div>
        </Card>
      </Container>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <HubSectionIntro
            eyebrow="Your path to certification"
            title={aboutContent.processHeading}
            description="Four simple steps from intake to certification."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutProcessSteps.map(({ step, icon: Icon, title, text }) => (
              <Card
                key={step}
                hover={false}
                className="relative border-[#dce6dd] pt-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="absolute -top-4 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#123c31] text-sm font-bold text-white shadow-lg">
                  {step}
                </span>
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#eaf1e9] text-[#15503f]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display font-bold text-[#123c31]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-200/60 bg-brand-50/50 px-5 py-4 text-sm leading-relaxed text-neutral-600">
            {aboutContent.disclaimer}
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Card hover={false} className="border-brand-200/60 bg-gradient-to-b from-white to-brand-50/30">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#123c31] text-white">
                  <CircleCheck className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-xl font-bold text-[#123c31]">
                  {aboutContent.includedHeading}
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {aboutIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-brand-100/80 bg-white px-4 py-3 text-sm text-neutral-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="border-neutral-200 bg-gradient-to-b from-white to-neutral-50/80">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                  <CircleX className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-xl font-bold text-neutral-900">
                  {aboutContent.notIncludedHeading}
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {aboutNotIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-3 text-sm text-neutral-700"
                  >
                    <X className="mt-0.5 size-4 shrink-0 text-neutral-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
