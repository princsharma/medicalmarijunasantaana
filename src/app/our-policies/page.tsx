import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  FilePenLine,
  Lock,
  Package,
  Scale,
  ScrollText,
  Shield,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  getPolicyHref,
  policiesHubContent,
  policyPages,
  POLICY_HUB_PATH,
  type PolicySlug,
} from "@/data/policies";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

const policyIcons: Record<PolicySlug, LucideIcon> = {
  "refund-policy": BadgeDollarSign,
  "privacy-policy": Lock,
  "editorial-policy": FilePenLine,
  "shipping-policy": Package,
  "terms-of-use": ScrollText,
  disclaimer: AlertTriangle,
  "hipaa-compliance": ShieldCheck,
  "consent-for-telehealth": Video,
  "accessibility-statement": Accessibility,
};

export const metadata: Metadata = buildHubMetadata({
  title: "Our Policies",
  description: policiesHubContent.description,
  path: POLICY_HUB_PATH,
});

export default function OurPoliciesHubPage() {
  const { eyebrow, title, description } = policiesHubContent;

  return (
    <>
      <Breadcrumbs items={[{ label: "Our Policies" }]} />

      <section className="relative overflow-hidden bg-[#f5f6f0] py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(20,184,166,0.12),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.32]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-brand-100/60 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-800 shadow-sm backdrop-blur-sm">
              <Scale className="size-3.5 text-brand-600" aria-hidden="true" />
              {eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dce6dd] bg-white/95 px-4 py-2 text-sm font-semibold text-[#15503f] shadow-sm">
              <Shield className="size-4 text-brand-600" aria-hidden="true" />
              {policyPages.length} policy documents
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-white pb-16 pt-4 sm:pb-20 sm:pt-6">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {policyPages.map((policy) => {
              const Icon = policyIcons[policy.slug];

              return (
              <li key={policy.slug} className="flex">
                <Link
                  href={getPolicyHref(policy.slug)}
                  className="group flex h-full w-full flex-col rounded-2xl border border-[#dce6dd] bg-gradient-to-b from-white to-[#f8faf6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 sm:p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-100 group-hover:ring-brand-200">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold leading-snug text-[#123c31] transition-colors group-hover:text-brand-800 sm:text-xl">
                    {policy.shortTitle}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {policy.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read full policy
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
