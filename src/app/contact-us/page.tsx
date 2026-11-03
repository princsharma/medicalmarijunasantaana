import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeMapSection } from "@/components/sections/OfficeMapSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HubPageHero } from "@/components/ui/HubPageHero";
import { contactPageContent } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

const CONTACT_HUB_HERO = "/media/contact-hub.webp";

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata({
    title: "Contact Us",
    description:
      "Contact our Santa Ana medical marijuana card team by phone, email, or form. We're here to help with your MMJ evaluation questions.",
    path: "/contact-us",
  });
}

const iconMap = {
  Phone,
  Email: Mail,
  Office: MapPin,
} as const;

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <HubPageHero
        align="split"
        eyebrow="Friendly help, right here in Santa Ana"
        badgeIcon={MessageCircle}
        title="Let's talk."
        description={contactPageContent.subtitle}
        stats={[
          { icon: Phone, label: "Phone support" },
          { icon: Mail, label: "Email within 1 business day" },
          { icon: MapPin, label: "Santa Ana office" },
        ]}
        actions={
          <>
            <Button
              href="#contact-form"
              size="lg"
              className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
            >
              Send a message
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              variant="outline"
              className="rounded-full border-[#dce6dd] bg-white/90"
            >
              Call {siteConfig.phoneDisplay}
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
                  src={CONTACT_HUB_HERO}
                  alt="Patient support specialist on a phone call at a laptop"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123c31]/80 via-[#123c31]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
                    Real people, real answers
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    Questions about your MMJ evaluation? We&apos;re here.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f5f8f4] px-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#15503f] shadow-sm">
                  <Clock3 className="size-4" aria-hidden="true" />
                </span>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {siteConfig.businessHours} — email replies typically within one business day.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section id="contact-form" className="relative scroll-mt-28 border-t border-[#dce6dd] bg-white py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dce6dd] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.1]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <aside className="flex flex-col rounded-3xl border border-[#dce6dd] bg-gradient-to-br from-[#123c31] to-[#0c3027] p-7 text-white shadow-elevated sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-200">
                Reach our team
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                We are here when you need us.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
                Choose what works best for you. We are happy to answer questions about the
                evaluation process and getting started.
              </p>

              <div className="mt-8 space-y-5">
                {contactPageContent.methods.map((method) => {
                  const Icon = iconMap[method.title as keyof typeof iconMap];

                  return (
                    <div
                      key={method.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
                    >
                      <div className="flex gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-100 ring-1 ring-white/10">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-white">{method.title}</h3>
                          <Link
                            href={method.href}
                            className="mt-1 block break-words text-sm font-semibold text-brand-100 underline decoration-brand-100/40 underline-offset-4 transition-colors hover:text-white"
                            aria-label={
                              method.title === "Phone"
                                ? `Call us at ${method.value}`
                                : method.title === "Email"
                                  ? `Email us at ${method.value}`
                                  : `View office location: ${method.value}`
                            }
                            {...(method.title === "Office"
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {method.value}
                          </Link>
                          <p className="mt-1 text-xs leading-relaxed text-brand-100/65">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto flex items-start gap-3 border-t border-white/15 pt-6">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-200" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-brand-100/75">
                  For your privacy, please do not include detailed medical records in email or
                  the contact form.
                </p>
              </div>
            </aside>

            <section className="overflow-hidden rounded-3xl border border-[#dce6dd] bg-white shadow-card">
              <div className="border-b border-neutral-100 bg-gradient-to-r from-[#f8faf6] to-white px-6 py-6 sm:px-9 sm:py-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">
                      Send us a message
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#123c31]">
                      How can we help?
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      Share a few details and we will get back to you within one business day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-9">
                <ContactForm />
                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-neutral-500">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-brand-700"
                    aria-hidden="true"
                  />
                  Please don&apos;t include sensitive medical information in this form.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <OfficeMapSection />
    </>
  );
}
