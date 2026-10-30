import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HubPageHero, HubSectionIntro } from "@/components/ui/HubPageHero";
import { DoctorsGrid } from "@/components/doctors/DoctorsGrid";
import { doctorHubFaqs, doctors } from "@/data/doctors";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export const metadata: Metadata = buildHubMetadata({
  title: "Our Doctors",
  description:
    "Meet the California-licensed physicians who provide telehealth medical marijuana evaluations for Santa Ana and Orange County patients.",
  path: "/doctors",
});

const TELEHEALTH_HERO =
  "/hero/telehealth consultation with a doctor through a laptop video call.webp";

const reasons = [
  {
    icon: BadgeCheck,
    title: "California-licensed physicians",
    text: "Your evaluation is provided by a physician licensed to practice in California.",
    featured: true,
  },
  {
    icon: Stethoscope,
    title: "Individual clinical review",
    text: "The physician considers your health history and circumstances before making a decision.",
    featured: false,
  },
  {
    icon: LockKeyhole,
    title: "Privacy-conscious care",
    text: "Your health information is handled with safeguards designed to protect your privacy.",
    featured: false,
  },
  {
    icon: Clock3,
    title: "Care on your schedule",
    text: "Meet your physician through telehealth from a place that works for you.",
    featured: false,
  },
  {
    icon: HeartHandshake,
    title: "A patient-first conversation",
    text: "Discuss your questions and relevant health concerns directly with a physician.",
    featured: false,
  },
  {
    icon: Video,
    title: "Convenient virtual visits",
    text: "Connect online without needing to travel to an in-person appointment.",
    featured: false,
  },
];

const evaluationSteps = [
  {
    icon: ClipboardCheck,
    title: "Share your health history",
    text: "Complete the intake information and provide details relevant to your evaluation.",
  },
  {
    icon: Video,
    title: "Meet with your physician",
    text: "Discuss your health history, current concerns, and questions in a private telehealth visit.",
  },
  {
    icon: Stethoscope,
    title: "Receive an independent assessment",
    text: "The physician reviews your circumstances and determines whether a recommendation is appropriate.",
  },
  {
    icon: FileCheck2,
    title: "Review your next steps",
    text: "Your physician explains the outcome and any next steps following the evaluation.",
  },
];

export default function DoctorsPage() {
  const featuredReason = reasons.find((r) => r.featured) ?? reasons[0];
  const otherReasons = reasons.filter((r) => !r.featured);

  return (
    <>
      <Breadcrumbs items={[{ label: "Our Doctors" }]} />

      <HubPageHero
        align="split"
        eyebrow="Meet your medical team"
        badgeIcon={Stethoscope}
        title="Thoughtful care starts with a conversation."
        description="Our California-licensed physicians provide one-on-one telehealth evaluations for Santa Ana and Orange County patients. Every recommendation is based on an independent clinical assessment."
        stats={[
          { icon: Users, label: `${doctors.length} licensed physicians` },
          { icon: Video, label: "Secure telehealth visits" },
          { icon: ShieldCheck, label: "HIPAA-conscious workflow" },
          { icon: BadgeCheck, label: "Licensed in California" },
        ]}
        actions={
          <>
            <Button
              href="#apply"
              size="lg"
              className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
            >
              Book a consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <a
              href="#our-physicians"
              className="rounded-full border border-[#dce6dd] bg-white/90 px-5 py-3 text-sm font-semibold text-[#123c31] shadow-sm transition-colors hover:bg-white"
            >
              Meet the physicians
            </a>
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
                  src={TELEHEALTH_HERO}
                  alt="Physician conducting a secure telehealth consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123c31]/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
                    Virtual evaluations
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    Clinical care with you at the center.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f5f8f4] px-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#15503f] shadow-sm">
                  <LockKeyhole className="size-4" aria-hidden="true" />
                </span>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Private online visits — no travel to an office required.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section id="our-physicians" className="relative bg-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dce6dd] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <HubSectionIntro
            eyebrow="The physician team"
            title="Meet our physicians"
            description="Learn about the physicians who provide evaluations for our patients — credentials, experience, and how they approach telehealth care."
          />
          <DoctorsGrid />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#eaf1e9] py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.2]"
          aria-hidden="true"
        />
        <Container className="relative">
          <HubSectionIntro
            eyebrow="Care built around you"
            title="Why meet with our physicians?"
            description="Get a clear, personal evaluation from a physician who considers your individual circumstances."
          />

          <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
            <article className="relative overflow-hidden rounded-3xl border border-[#dce6dd] bg-[#123c31] p-7 text-white shadow-lg lg:col-span-5 lg:row-span-2 lg:p-9">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,212,191,0.18),_transparent_55%)]"
                aria-hidden="true"
              />
              <span className="relative flex size-12 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
                <featuredReason.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-bold sm:text-3xl">
                {featuredReason.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                {featuredReason.text}
              </p>
              <Button
                href="#apply"
                variant="outline"
                size="lg"
                className="relative mt-8 rounded-full border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#123c31]"
              >
                Start your evaluation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
              {otherReasons.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#dce6dd] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md sm:p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#f0f5f0] text-[#15503f]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-[#123c31]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f1] py-16 sm:py-20">
        <Container>
          <HubSectionIntro
            eyebrow="What to expect"
            title="How your evaluation works"
            description="A straightforward process, with your physician guiding the clinical conversation."
          />

          <ol className="relative mx-auto max-w-4xl">
            <div
              className="absolute left-[1.35rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent sm:block"
              aria-hidden="true"
            />
            {evaluationSteps.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-6">
                <span className="relative z-[1] flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-200 bg-white text-[#15503f] shadow-sm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-brand-700">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-[#123c31]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#123c31] py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,212,191,0.12),_transparent_50%)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-10 text-center backdrop-blur-sm sm:px-12 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-200">
              Begin with a consultation
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Take the next step in your care.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Book an online visit with a California-licensed physician. A recommendation is
              determined by the physician after an individual evaluation.
            </p>
            <Button
              href="#apply"
              variant="outline"
              size="lg"
              className="mt-8 rounded-full border-white bg-white px-7 text-[#123c31] hover:border-white hover:bg-[#f2f6f1]"
            >
              Book your consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[#eaf1e9] py-16 sm:py-20">
        <Container>
          <HubSectionIntro
            eyebrow="Here to help"
            title="Physician FAQs"
            description="Helpful answers about our doctors and the evaluation."
          />
          <div className="mx-auto max-w-2xl">
            <Accordion items={doctorHubFaqs.slice(0, 5)} variant="cards" />
          </div>
        </Container>
      </section>
    </>
  );
}
