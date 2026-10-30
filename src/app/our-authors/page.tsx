import type { Metadata } from "next";
import { FileCheck2, PenLine, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { ContributorCard } from "@/components/authors/ContributorCard";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HubPageHero, HubSectionIntro } from "@/components/ui/HubPageHero";
import { blogPosts } from "@/data/blog";
import { contributors, contributorsHubContent } from "@/data/contributors";
import { doctors } from "@/data/doctors";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export const metadata: Metadata = buildHubMetadata({
  title: "Our Authors",
  description:
    "Meet the writers and California-licensed medical reviewers behind patient education for Medical Marijuana Card Santa Ana.",
  path: "/our-authors",
});

export default function OurAuthorsPage() {
  const { eyebrow, title, description, standardsTitle, standards } = contributorsHubContent;

  return (
    <>
      <Breadcrumbs items={[{ label: "Our Authors" }]} />

      <HubPageHero
        eyebrow={eyebrow}
        badgeIcon={PenLine}
        title={title}
        description={description}
        stats={[
          { icon: Users, label: `${contributors.length} authors` },
          { icon: Stethoscope, label: `${doctors.length} physician reviewers` },
          { icon: FileCheck2, label: `${blogPosts.length} published guides` },
          { icon: ShieldCheck, label: "Physician-reviewed" },
        ]}
      />

      <section className="relative bg-white py-16 sm:py-20">
        <Container>
          <HubSectionIntro
            eyebrow="Medical writers"
            title="Our authors"
            description="Patient education for Santa Ana and Orange County, written in plain language and grounded in California medical marijuana rules."
          />
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.slug} contributor={contributor} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#dce6dd] bg-[#f5f6f0] py-16 sm:py-20">
        <Container>
          <HubSectionIntro
            eyebrow="Medical reviewers"
            title="Physician review before we publish"
            description="Clinical articles are reviewed by California-licensed physicians. Editorial review is separate from any individual patient evaluation."
          />
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/doctors" variant="outline" className="rounded-full border-brand-200">
              Meet all physicians
            </Button>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#123c31] py-16 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(45,212,191,0.14),_transparent_55%)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-200">
                {standardsTitle}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold sm:text-4xl">
                Editorial standards you can trust
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70 lg:text-right">
              We separate education from clinical decisions — our physicians review facts, not
              marketing copy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {standards.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md"
              >
                <span className="font-mono text-xs font-bold text-accent-300">0{index + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/blog" variant="accent" className="rounded-full">
              Explore articles
            </Button>
            <Button
              href="/contact-us"
              variant="outline"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Contact editorial
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
