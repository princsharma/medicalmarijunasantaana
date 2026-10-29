import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, FileText, List } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LegalArticleBody, toLegalHeadingId } from "@/components/ui/LegalPage";
import {
  getPolicyHref,
  policyPages,
  POLICY_HUB_PATH,
  type PolicyPageData,
} from "@/data/policies";

type PolicyDetailShellProps = {
  policy: PolicyPageData;
};

export function PolicyDetailShell({ policy }: PolicyDetailShellProps) {
  const related = policyPages.filter((item) => item.slug !== policy.slug);

  return (
    <div className="bg-[#f5f6f0]">
      <section className="relative overflow-hidden border-b border-[#dce6dd] py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(20,184,166,0.12),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.28]"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Link
              href={POLICY_HUB_PATH}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-950"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All policies
            </Link>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-800 shadow-sm">
              <FileText className="size-3.5 text-brand-600" aria-hidden="true" />
              Our Policies
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl">
              {policy.title}
            </h1>
            {policy.updated ? (
              <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-neutral-600">
                <Calendar className="size-4 text-brand-600" aria-hidden="true" />
                Last updated {policy.updated}
              </p>
            ) : null}
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {policy.summary}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-[#dce6dd] bg-white p-5 shadow-sm">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800/80">
                  <List className="size-3.5" aria-hidden="true" />
                  On this page
                </p>
                <nav aria-label="On this page" className="mt-4">
                  <ol className="space-y-1">
                    {policy.sections.map((section, index) => (
                      <li key={section.heading}>
                        <a
                          href={`#${toLegalHeadingId(section.heading)}`}
                          className="flex gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-brand-50 hover:text-brand-800"
                        >
                          <span className="w-5 shrink-0 font-semibold text-brand-600/80">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{section.heading}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <article className="min-w-0 rounded-3xl border border-[#dce6dd] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
              <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                {policy.title}
              </h2>
              <div className="mt-3">
                <LegalArticleBody intro={policy.intro} sections={policy.sections} />
              </div>
              {policy.footerDisclaimer ? (
                <div className="mt-12 border-t border-neutral-100 pt-8">
                  <h2 className="font-display text-lg font-bold text-neutral-900">
                    Medical Disclaimer
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {policy.footerDisclaimer}
                  </p>
                </div>
              ) : null}
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#dce6dd] bg-white py-12 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
              More policies
            </h2>
            <Link
              href={POLICY_HUB_PATH}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              View all
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={getPolicyHref(item.slug)}
                  className="group flex h-full flex-col rounded-2xl border border-[#dce6dd] bg-[#f8faf6] p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:shadow-md"
                >
                  <span className="font-display text-base font-bold text-[#123c31] group-hover:text-brand-800">
                    {item.shortTitle}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {item.summary}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Read policy
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
