import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeMapSection } from "@/components/sections/OfficeMapSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { contactPageContent } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact our Santa Ana medical marijuana card team by phone, email, or form. We're here to help with your MMJ evaluation questions.",
  path: "/contact-us",
});

const iconMap = {
  Phone,
  Email: Mail,
  Office: MapPin,
} as const;

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <div className="relative overflow-hidden bg-neutral-50 pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="pointer-events-none absolute -right-32 -top-40 size-[28rem] rounded-full bg-brand-100/70 blur-3xl" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Friendly help, right here in Santa Ana
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Have a question about your medical marijuana card? Tell us what you need and our
              team will help you find the right next step.
            </p>
          </div>
        </Container>
      </div>

      <Container className="relative -mt-4 pb-16 md:-mt-6 md:pb-24">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <aside className="rounded-3xl bg-brand-950 p-7 text-white shadow-elevated sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-200">
              Reach our team
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              We&apos;re here when you need us.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
              Choose what works best for you. We&apos;re happy to answer questions about the
              evaluation process and getting started.
            </p>

            <div className="mt-8 space-y-6">
              {contactPageContent.methods.map((method) => {
                const Icon = iconMap[method.title as keyof typeof iconMap];

                return (
                  <div key={method.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-100">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white">{method.title}</h3>
                      <a
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
                      </a>
                      <p className="mt-1 text-xs leading-relaxed text-brand-100/65">
                        {method.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-white/15 pt-6">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-brand-200" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-brand-100/75">
                Our team is available during business hours. Email replies are typically sent
                within one business day.
              </p>
            </div>
          </aside>

          <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-card">
            <div className="border-b border-neutral-100 px-6 py-6 sm:px-9 sm:py-8">
              <div className="flex items-start gap-4">
                <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 sm:flex">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">
                    Send us a message
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-neutral-950">
                    How can we help?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Share a few details and we&apos;ll get back to you within one business day.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-9">
              <ContactForm />
              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-neutral-500">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden="true" />
                Please don&apos;t include sensitive medical information in this form.
              </p>
            </div>
          </section>
        </div>
      </Container>

      <OfficeMapSection />
    </>
  );
}
