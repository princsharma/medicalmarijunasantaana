import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { BlogLibrary } from "@/components/blog/BlogLibrary";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { blogCategories, blogPosts } from "@/data/blog";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildHubMetadata({
    title: "Blog",
    description:
      "Guides on medical marijuana laws, MMIC benefits, qualifying conditions, and patient rights for Santa Ana and California.",
    path: "/blog",
  });
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="relative overflow-hidden bg-[#f5f6f0] py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(20,184,166,0.14),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#dce6dd] bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#15503f] shadow-sm">
              Patient guides
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#123c31] sm:text-5xl">
              Your guide to medical marijuana in Santa Ana
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Expert articles on MMIC rules, qualifying conditions, patient rights, and what Santa
              Ana patients need to know.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#dce6dd] bg-[#f7f6f1] py-14 sm:py-16 md:py-20">
        <Container>
          <BlogLibrary posts={blogPosts} categories={blogCategories} />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
