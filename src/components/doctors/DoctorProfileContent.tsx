import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, ExternalLink, GraduationCap, Shield } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { doctorDisplayName } from "@/data/doctors";
import type { DoctorProfile } from "@/data/doctor-profiles";
import { DoctorAvatar } from "@/components/doctors/DoctorAvatar";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type DoctorProfileContentProps = {
  doctor: Doctor;
  profile: DoctorProfile;
};

export function DoctorProfileContent({ doctor, profile }: DoctorProfileContentProps) {
  const otherDoctors = doctors.filter((item) => item.slug !== doctor.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f2f5ef] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-32 -top-44 size-[32rem] rounded-full bg-brand-100/70 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#dce9df]" />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] border-4 border-white bg-[#e3ece4] shadow-elevated">
                {doctor.photo ? (
                  <Image
                    src={doctor.photo}
                    alt={doctorDisplayName(doctor)}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <DoctorAvatar
                      name={doctor.name}
                      size="lg"
                      className="rounded-full bg-gradient-to-br from-[#1d705a] to-[#123c31] ring-4 ring-white"
                    />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102e25]/80 to-transparent px-5 pb-5 pt-16">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <BadgeCheck className="size-4" aria-hidden="true" />
                    California physician
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <Badge variant="brand" className="rounded-full px-4 py-1.5">
                {doctor.specialty}
              </Badge>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-[#123c31] sm:text-5xl">
                {doctorDisplayName(doctor)}
              </h1>
              <p className="mt-3 text-lg font-semibold text-brand-800">{profile.subtitle}</p>
              {profile.licenseLine ? (
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-neutral-600">
                  <BadgeCheck className="size-4 shrink-0 text-brand-700" aria-hidden="true" />
                  {profile.licenseLine}
                </p>
              ) : null}
              <p className="mt-5 leading-relaxed text-neutral-600 sm:text-lg">{profile.intro}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href="/#apply"
                  size="lg"
                  className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
                >
                  {profile.heroCta ?? "Book Evaluation"}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Link
                  href="#credentials"
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[#123c31] transition-colors hover:bg-white/70"
                >
                  View credentials
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-[#fafaf7] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-5xl space-y-8">
            <section
              id="credentials"
              className="scroll-mt-24 rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8"
            >
              <SectionHeader
                eyebrow="Professional background"
                title="Medical Credentials"
                description={profile.credentialsIntro}
                align="left"
                className="mb-7"
              />
              <dl className="grid gap-3 sm:grid-cols-2">
                {profile.credentials.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-[#f5f7f3] px-4 py-4">
                    <dt className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-[#123c31]">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <Link
                  href={profile.npiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
                >
                  Verify physician information
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Education"
                title={profile.educationHeading ?? "Education & Training"}
                description={profile.educationIntro}
                align="left"
                className="mb-7"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.education.map((item) => (
                  <article
                    key={item.school}
                    className="flex gap-4 rounded-2xl bg-[#f5f7f3] p-5"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-800 shadow-sm">
                      <GraduationCap className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display font-bold text-[#123c31]">{item.school}</p>
                      {item.detail ? (
                        <p className="mt-1 text-sm text-neutral-600">{item.detail}</p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {profile.licensedPractice ? (
              <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
                <SectionHeader
                  eyebrow="Practice details"
                  title={profile.licensedPractice.heading}
                  description={profile.licensedPractice.intro}
                  align="left"
                  className="mb-7"
                />
                <dl className="divide-y divide-neutral-200 rounded-2xl border border-neutral-100 px-4">
                  {profile.licensedPractice.items.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-4 text-sm">
                      <dt className="font-medium text-neutral-600">{item.label}</dt>
                      <dd className="font-semibold text-[#123c31]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader title="About" align="left" className="mb-7" />
              <div className="space-y-4 leading-relaxed text-neutral-600">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Patient care"
                title={profile.roleHeading}
                description={profile.roleIntro}
                align="left"
                className="mb-7"
              />
              {profile.roleListIntro && profile.roleItems ? (
                <div>
                  <p className="text-neutral-600">{profile.roleListIntro}</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {profile.roleItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-xl bg-[#f5f7f3] px-4 py-3 text-sm text-neutral-700"
                      >
                        <BadgeCheck
                          className="mt-0.5 size-4 shrink-0 text-brand-700"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {profile.roleNote ? (
                <p className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/70 px-5 py-4 text-sm leading-relaxed text-brand-900">
                  {profile.roleNote}
                </p>
              ) : null}
            </section>

            <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Clinical evaluation"
                title={profile.conditionsHeading}
                description={profile.conditionsIntro}
                align="left"
                className="mb-7"
              />
              <div className="flex flex-wrap gap-2">
                {profile.conditions.map((condition) => (
                  <Badge
                    key={condition}
                    variant="outline"
                    className="rounded-full border-[#dce6dd] bg-[#f5f8f4] px-3 py-1.5 text-[#255444]"
                  >
                    {condition}
                  </Badge>
                ))}
              </div>
              {profile.conditionsNote ? (
                <p className="mt-4 text-sm text-neutral-500">{profile.conditionsNote}</p>
              ) : null}
            </section>

            {profile.expectSteps ? (
              <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
                <SectionHeader
                  eyebrow="Your appointment"
                  title={profile.expectHeading ?? "What to Expect"}
                  description={profile.expectIntro}
                  align="left"
                  className="mb-7"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {profile.expectSteps.map((step, index) => (
                    <article key={step.title} className="rounded-2xl bg-[#f5f7f3] p-5">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-[#123c31] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="mt-4 font-display font-bold text-[#123c31]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
                    </article>
                  ))}
                </div>
                {profile.expectNote ? (
                  <p className="mt-4 text-sm text-neutral-500">{profile.expectNote}</p>
                ) : null}
              </section>
            ) : null}

            <section className="rounded-3xl border border-[#dce6dd] bg-[#eef4ee] p-6 sm:p-8">
              <SectionHeader
                eyebrow="Trust & privacy"
                title={profile.privacyHeading}
                align="left"
                className="mb-7"
              />
              <div className="rounded-2xl border border-white bg-white/80 p-5 sm:p-6">
                <div className="flex gap-3">
                  <Shield className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                  <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
                    {profile.privacy.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                {profile.privacyItems ? (
                  <ul className="mt-4 space-y-2 border-t border-brand-200/60 pt-4">
                    {profile.privacyItems.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-neutral-700">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>

            <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Good to know"
                title="Frequently Asked Questions"
                description={profile.faqIntro}
                align="left"
                className="mb-7"
              />
              <Accordion items={profile.faqs} variant="cards" />
              {profile.faqCta ? (
                <div className="mt-6 text-center">
                  <Button href={profile.faqCta.href} variant="outline">
                    {profile.faqCta.label}
                  </Button>
                </div>
              ) : null}
            </section>

            <div className="overflow-hidden rounded-3xl bg-[#123c31] p-8 text-center text-white shadow-lg sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-200">
                Start with a consultation
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                {profile.ctaHeading ?? `Meet With ${doctor.name}`}
              </h2>
              {profile.cta ? (
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-brand-100/85">
                  {profile.cta}
                </p>
              ) : null}
              <Button
                href="/#apply"
                variant="outline"
                size="lg"
                className="mt-6 rounded-full border-white bg-white px-7 text-[#123c31] hover:border-white hover:bg-[#f2f6f1]"
              >
                Book My Appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <SectionHeader
              eyebrow="Our Team"
              title="Other Physicians"
              description={`More licensed doctors available through ${siteConfig.shortName}.`}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {otherDoctors.map((item) => (
                <DoctorCard key={item.slug} doctor={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
