import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeMapSection } from "@/components/sections/OfficeMapSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { HubPageHero } from "@/components/ui/HubPageHero";
import { contactPageContent } from "@/data/contact";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export const metadata: Metadata = buildHubMetadata({
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

      <HubPageHero
        eyebrow="Friendly help, right here in Santa Ana"
        badgeIcon={MessageCircle}
        title="Let's talk."
        description={contactPageContent.subtitle}
        stats={[
          { icon: Phone, label: "Phone support" },
          { icon: Mail, label: "Email within 1 business day" },
          { icon: MapPin, label: "Santa Ana office" },
        ]}
      />

      <Container className="relative -mt-6 pb-16 md:-mt-10 md:pb-24">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <aside className="rounded-3xl bg-[#123c31] p-7 text-white shadow-elevated sm:p-9">
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

            <div className="mt-8 space-y-6">
              {contactPageContent.methods.map((method) => {
                const Icon = iconMap[method.title as keyof typeof iconMap];

                return (
                  <div key={method.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-100 ring-1 ring-white/10">
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

          <section className="overflow-hidden rounded-3xl border border-[#dce6dd] bg-white shadow-card">
            <div className="border-b border-neutral-100 bg-gradient-to-r from-[#f8faf6] to-white px-6 py-6 sm:px-9 sm:py-8">
              <div className="flex items-start gap-4">
                <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 sm:flex">
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
