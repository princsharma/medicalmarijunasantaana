import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Quote,
  Share2,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { Contributor } from "@/data/contributors";
import {
  contributorDisplayName,
  contributorFirstName,
  getPostsForContributor,
} from "@/data/contributors";
import { formatBlogDateLong } from "@/data/blog";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { getCanonicalUrl } from "@/lib/url-normalization";

type ContributorProfileContentProps = {
  contributor: Contributor;
};

export function ContributorProfileContent({ contributor }: ContributorProfileContentProps) {
  const posts = getPostsForContributor(contributor.slug);
  const profileUrl = getCanonicalUrl(`/our-authors/${contributor.slug}`);
  const firstName = contributorFirstName(contributor);
  const about = contributor.about?.length ? contributor.about : [contributor.bio];
  const glance = contributor.glance ?? [];
  const contact = contributor.contact;
  const initials = contributor.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contributorDisplayName(contributor),
    jobTitle: contributor.role,
    description: contributor.shortBio,
    url: profileUrl,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(contributor.photo ? { image: getCanonicalUrl(contributor.photo) } : {}),
    ...(contact?.email ? { email: contact.email } : {}),
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <section className="relative overflow-hidden bg-[#f2f5ef] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-44 size-[32rem] rounded-full bg-brand-100/70 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#dce9df]" aria-hidden="true" />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.75rem] border-4 border-white bg-[#e3ece4] shadow-elevated">
                {contributor.photo ? (
                  <Image
                    src={contributor.photo}
                    alt={contributorDisplayName(contributor)}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className="object-cover object-top"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center bg-gradient-to-br from-brand-500 to-[#123c31] font-display text-6xl font-bold text-white">
                    {initials}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102e25]/80 to-transparent px-5 pb-5 pt-16">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    <BadgeCheck className="size-4" aria-hidden="true" />
                    {contributor.role}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <Badge variant="brand" className="rounded-full px-4 py-1.5">
                Author profile
              </Badge>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-[#123c31] sm:text-5xl">
                {contributorDisplayName(contributor)}
              </h1>
              {contributor.credentialLine ? (
                <p className="mt-3 text-lg font-semibold text-brand-800">
                  {contributor.credentialLine}
                </p>
              ) : (
                <p className="mt-3 text-lg font-semibold text-brand-800">{contributor.tagline}</p>
              )}
              <p className="mt-5 leading-relaxed text-neutral-600 sm:text-lg">{contributor.bio}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href="#articles"
                  size="lg"
                  className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
                >
                  Read {firstName}&rsquo;s articles
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Link
                  href="#about"
                  className="rounded-full px-5 py-3 text-sm font-semibold text-[#123c31] transition-colors hover:bg-white/70"
                >
                  View credentials
                </Link>
                {contributor.doctorProfileHref ? (
                  <Link
                    href={contributor.doctorProfileHref}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
                  >
                    <Stethoscope className="size-4" aria-hidden="true" />
                    Physician profile
                  </Link>
                ) : null}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {contributor.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#15503f] ring-1 ring-[#dce6dd]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-[#fafaf7] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-5xl space-y-8">
            {glance.length > 0 ? (
              <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                  Author at a glance
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                  Qualifications behind {firstName}&rsquo;s published work
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {glance.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-[#f5f7f3] px-5 py-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-display text-3xl font-bold text-[#123c31]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section
              id="about"
              className="scroll-mt-28 rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                About {firstName}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                Experience, education, and editorial approach
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              {contributor.quote ? (
                <blockquote className="relative mt-8 overflow-hidden rounded-2xl bg-[#123c31] p-6 text-white sm:p-8">
                  <Quote className="absolute right-5 top-5 size-9 text-brand-300/25" aria-hidden="true" />
                  <p className="relative text-base leading-relaxed text-white/90 sm:text-lg">
                    “{contributor.quote}”
                  </p>
                  <footer className="relative mt-5 text-sm font-semibold text-brand-200">
                    — {contributorDisplayName(contributor)}
                  </footer>
                </blockquote>
              ) : null}
            </section>

            {contributor.education?.length || contributor.experience?.length ? (
              <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                  Professional background
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                  Credentials and health communication expertise
                </h2>
                <div className="mt-7 grid gap-5 lg:grid-cols-2">
                  {contributor.education?.length ? (
                    <div className="rounded-2xl bg-[#f5f7f3] p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-[#123c31] text-white">
                          <GraduationCap className="size-5" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-xl font-bold text-[#123c31]">Education</h3>
                      </div>
                      <ul className="mt-5 space-y-3">
                        {contributor.education.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-brand-400 pl-4 text-sm leading-relaxed text-neutral-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {contributor.experience?.length ? (
                    <div className="rounded-2xl bg-[#f5f7f3] p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
                          <BookOpen className="size-5" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-xl font-bold text-[#123c31]">Experience</h3>
                      </div>
                      <ul className="mt-5 space-y-3">
                        {contributor.experience.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-brand-400 pl-4 text-sm leading-relaxed text-neutral-700"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            {contact ? (
              <section className="rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                  Contact & verified profiles
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                  Reach {firstName} or verify this profile
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {contact.linkedinName ? (
                    <ContactCard
                      icon={UserRound}
                      label="LinkedIn DM"
                      value={contact.linkedinName}
                      href={contact.linkedinHref}
                    />
                  ) : null}
                  {contact.instagramLabel ? (
                    <ContactCard
                      icon={Share2}
                      label="Verified Profiles"
                      value={contact.instagramLabel}
                      href={contact.instagramHref}
                    />
                  ) : null}
                </div>
              </section>
            ) : null}

            <section
              id="articles"
              className="scroll-mt-28 rounded-3xl border border-[#e3e9e2] bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                    Published work
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-[#123c31] sm:text-3xl">
                    Articles on this site
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f7f3] px-3 py-1.5 text-xs font-semibold text-neutral-600">
                  <BookOpen className="size-3.5 text-brand-600" aria-hidden="true" />
                  {posts.length} {posts.length === 1 ? "piece" : "pieces"}
                </span>
              </div>

              {posts.length > 0 ? (
                <ul className="mt-7 space-y-3">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-3 rounded-2xl bg-[#f5f7f3] p-5 transition-all hover:bg-[#eef3ee] sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                            {post.category}
                          </p>
                          <p className="mt-1 font-display text-lg font-bold text-[#123c31] group-hover:text-brand-800">
                            {post.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{post.excerpt}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-3 text-sm text-neutral-500">
                          <time dateTime={post.date}>{formatBlogDateLong(post.date)}</time>
                          <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-[#dce6dd]">
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-7 rounded-2xl bg-[#f5f7f3] px-6 py-10 text-center text-sm text-neutral-600">
                  New articles from this contributor are coming soon. Browse the{" "}
                  <Link href="/blog" className="font-semibold text-brand-700 underline">
                    blog
                  </Link>{" "}
                  for the latest guides.
                </p>
              )}

              <Link
                href="/our-authors"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-950"
              >
                <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
                All contributors
              </Link>
            </section>
          </div>
        </Container>
      </div>

      <CtaSection />
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-brand-700 ring-1 ring-[#dce6dd]">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-widest text-brand-700">
          {label}
        </span>
        <span className="mt-1 block font-semibold text-[#123c31]">{value}</span>
      </span>
    </>
  );

  const className = "flex items-start gap-4 rounded-2xl bg-[#f5f7f3] p-5";

  if (href) {
    return (
      <a href={href} className={`${className} transition-colors hover:bg-[#eef3ee]`}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
