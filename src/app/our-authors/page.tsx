import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  FileCheck2,
  PenLine,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
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

const AUTHORS_HUB_HERO = "/authors/authors hub.webp";

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata({
    title: "Our Authors",
    description:
      "Meet the writers and California-licensed medical reviewers behind patient education for Medical Marijuana Card Santa Ana.",
    path: "/our-authors",
  });
}

export default function OurAuthorsPage() {
  const { eyebrow, title, description, standardsTitle, standards } = contributorsHubContent;

  return (
    <>
      <Breadcrumbs items={[{ label: "Our Authors" }]} />

      <HubPageHero
        align="split"
        eyebrow={eyebrow}
        badgeIcon={PenLine}
        title={title}
        description={description}
        stats={[
          { icon: Users, label: `${contributors.length} medical writers` },
          { icon: Stethoscope, label: `${doctors.length} physician reviewers` },
          { icon: FileCheck2, label: `${blogPosts.length} published guides` },
          { icon: ShieldCheck, label: "Physician-reviewed" },
        ]}
        actions={
          <>
            <Button
              href="#our-authors"
              size="lg"
              className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
            >
              Meet the writers
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href="/blog"
              variant="outline"
              className="rounded-full border-[#dce6dd] bg-white/90"
            >
              Read patient guides
            </Button>
          </>
        }
        media={
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#dce9df] via-brand-100/80 to-[#c5ddd0] opacity-90"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/90 bg-white p-2 shadow-elevated">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={AUTHORS_HUB_HERO}
                  alt="Medical writers and reviewers collaborating on patient education"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123c31]/80 via-[#123c31]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
                    Editorial team
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    Clear guides, reviewed by licensed physicians.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f5f8f4] px-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#15503f] shadow-sm">
                  <BookOpen className="size-4" aria-hidden="true" />
                </span>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Plain-language articles on California medical marijuana rules — no hype, no
                  product sales.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section id="our-authors" className="relative bg-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dce6dd] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.12]"
          aria-hidden="true"
        />
        <Container className="relative">
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

      <section className="relative overflow-hidden border-t border-[#dce6dd] bg-[#f5f6f0] py-16 sm:py-20">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-brand-100/40 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="mb-10 flex flex-col gap-6 rounded-3xl border border-[#dce6dd] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
                Clinical review
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                Every guide is reviewed before we publish
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                California-licensed physicians review clinical articles. Editorial review is
                separate from any individual patient evaluation.
              </p>
            </div>
            <Button href="/doctors" className="shrink-0 rounded-full bg-[#123c31] hover:bg-[#0c3027]">
              View physician profiles
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <HubSectionIntro
            eyebrow="Medical reviewers"
            title="Physician review team"
            description="Meet the licensed physicians who fact-check our patient education."
            className="mb-8 sm:mb-10"
          />
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
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
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-colors hover:bg-white/[0.09]"
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
