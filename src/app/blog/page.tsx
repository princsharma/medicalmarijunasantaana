import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HubPageHero, HubSectionIntro } from "@/components/ui/HubPageHero";
import { blogCategories, blogPosts, getFeaturedPost } from "@/data/blog";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

const BLOG_HUB_HERO = "/blog/blog Hub.webp";

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata({
    title: "Blog",
    description:
      "Guides on medical marijuana laws, MMIC benefits, qualifying conditions, and patient rights for Santa Ana and California.",
    path: "/blog",
  });
}

export default function BlogPage() {
  const featured = getFeaturedPost();
  const otherPosts = blogPosts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <HubPageHero
        align="split"
        eyebrow="Patient guides"
        badgeIcon={BookOpen}
        title="Your guide to medical marijuana in California"
        description="Expert articles on MMIC rules, qualifying conditions, patient rights, and what Santa Ana patients need to know."
        stats={[
          { icon: FileText, label: `${blogPosts.length} in-depth guides` },
          { icon: Sparkles, label: "Updated for 2026" },
          { icon: ShieldCheck, label: "Physician-reviewed" },
        ]}
        actions={
          <>
            <Button
              href={featured ? `#featured-guide` : "/#apply"}
              size="lg"
              className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
            >
              {featured ? "Read featured guide" : "Get your card"}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href="/our-authors"
              variant="outline"
              className="rounded-full border-[#dce6dd] bg-white/90"
            >
              Meet our authors
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
                  src={BLOG_HUB_HERO}
                  alt="Notebook and laptop for researching medical marijuana patient guides"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123c31]/80 via-[#123c31]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
                    Patient education
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    Clear answers for California cannabis rules.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f5f8f4] px-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#15503f] shadow-sm">
                  <FileText className="size-4" aria-hidden="true" />
                </span>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Guides on MMIC benefits, qualifying conditions, and patient rights — written
                  for Santa Ana and Orange County.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="relative border-t border-[#dce6dd] bg-[#f5f6f0] py-8 sm:py-10">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
            Topics we cover
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {blogCategories.map((category) => (
              <li key={category}>
                <span className="inline-flex rounded-full border border-[#dce6dd] bg-white/95 px-4 py-2 text-sm font-semibold text-[#15503f] shadow-sm">
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="blog-guides" className="relative bg-white py-16 sm:py-20 md:pb-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dce6dd] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.12]"
          aria-hidden="true"
        />
        <Container className="relative">
          {featured ? (
            <div id="featured-guide" className="scroll-mt-28">
              <HubSectionIntro
                eyebrow="Featured"
                title="Start here"
                description="Our most-read guide for California patients navigating medical and recreational rules."
                className="mb-8 sm:mb-10"
              />
              <div className="mb-14">
                <BlogPostCard post={featured} featured />
              </div>
            </div>
          ) : null}

          {otherPosts.length > 0 ? (
            <>
              <HubSectionIntro
                eyebrow="All articles"
                title="More patient resources"
                description="Browse guides written for clarity — no hype, no product sales."
                className="mb-8 sm:mb-10"
              />
              <div className="grid gap-6 md:grid-cols-2">
                {otherPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : null}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
