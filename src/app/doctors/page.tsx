import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  Stethoscope,
  Video,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DoctorsGrid } from "@/components/doctors/DoctorsGrid";
import { doctorHubFaqs } from "@/data/doctors";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Doctors",
  description:
    "Meet the California-licensed physicians who provide telehealth medical marijuana evaluations for Santa Ana and Orange County patients.",
  path: "/doctors",
});

const reasons = [
  {
    icon: BadgeCheck,
    title: "California-licensed physicians",
    text: "Your evaluation is provided by a physician licensed to practice in California.",
  },
  {
    icon: Stethoscope,
    title: "Individual clinical review",
    text: "The physician considers your health history and circumstances before making a decision.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy-conscious care",
    text: "Your health information is handled with safeguards designed to protect your privacy.",
  },
  {
    icon: Clock3,
    title: "Care on your schedule",
    text: "Meet your physician through telehealth from a place that works for you.",
  },
  {
    icon: HeartHandshake,
    title: "A patient-first conversation",
    text: "Discuss your questions and relevant health concerns directly with a physician.",
  },
  {
    icon: Video,
    title: "Convenient virtual visits",
    text: "Connect online without needing to travel to an in-person appointment.",
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
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Doctors" }]} />

      <section className="relative overflow-hidden bg-[#f5f6f0] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-28 -top-36 size-[30rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-28 size-[26rem] rounded-full bg-[#dce9df]/70 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-800 shadow-sm">
                <span className="size-2 rounded-full bg-brand-600" />
                Meet your medical team
              </span>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl lg:text-6xl">
                Thoughtful care starts with a conversation.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                Our California-licensed physicians provide one-on-one telehealth evaluations
                for Santa Ana and Orange County patients. Every recommendation is based on an
                independent clinical assessment.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  href="#apply"
                  size="lg"
                  className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
                >
                  Book a Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <a
                  href="#our-physicians"
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[#123c31] transition-colors hover:bg-white/70"
                >
                  Meet the physicians
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-brand-700" aria-hidden="true" />
                  Licensed in California
                </span>
                <span className="inline-flex items-center gap-2">
                  <Video className="size-4 text-brand-700" aria-hidden="true" />
                  Secure telehealth visits
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#dce9df]" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-7 shadow-elevated sm:p-9">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#eaf2eb] text-[#15503f]">
                  <HeartHandshake className="size-7" aria-hidden="true" />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
                  Your visit, your questions
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-[#123c31] sm:text-3xl">
                  Clinical care with you at the center.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Your physician will take time to understand your health history, answer
                  relevant questions, and explain their clinical decision.
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                    <LockKeyhole className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-600">
                    Your consultation takes place online from a location that works for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="our-physicians" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
              The physician team
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
              Meet our physicians
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Learn about the physicians who provide evaluations for our patients.
            </p>
          </div>
          <DoctorsGrid />
        </Container>
      </section>

      <section className="bg-[#eaf1e9] py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
              Care built around you
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
              Why meet with our physicians?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Get a clear, personal evaluation from a physician who considers your individual
              circumstances.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#dce6dd] bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#f0f5f0] text-[#15503f]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-[#123c31]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-[#123c31] px-6 py-8 text-center text-white shadow-lg sm:px-10 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-200">
              Begin with a consultation
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Take the next step in your care.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
              Book an online visit with a California-licensed physician. A recommendation is
              determined by the physician after an individual evaluation.
            </p>
            <Button
              href="#apply"
              variant="outline"
              size="lg"
              className="mt-6 rounded-full border-white bg-white px-7 text-[#123c31] hover:border-white hover:bg-[#f2f6f1]"
            >
              Book Your Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f6f1] py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
              What to expect
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
              How your evaluation works
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              A straightforward process, with your physician guiding the clinical conversation.
            </p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {evaluationSteps.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf1e9] text-[#15503f]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-brand-700">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold text-[#123c31]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[#eaf1e9] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
                Here to help
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#123c31] sm:text-4xl">
                Physician FAQs
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                Helpful answers about our doctors and the evaluation.
              </p>
            </div>
            <Accordion items={doctorHubFaqs.slice(0, 5)} variant="cards" />
          </div>
        </Container>
      </section>
    </>
  );
}
