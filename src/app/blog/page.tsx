import type { Metadata } from "next";
import { ArrowRight, BookOpen, FileText, Sparkles } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HubPageHero, HubSectionIntro } from "@/components/ui/HubPageHero";
import { blogPosts, getFeaturedPost } from "@/data/blog";
import { buildHubMetadata } from "@/lib/og/hub-metadata";

export const metadata: Metadata = buildHubMetadata({
  title: "Blog",
  description:
    "Guides on medical marijuana laws, MMIC benefits, qualifying conditions, and patient rights for Santa Ana and California.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = getFeaturedPost();
  const otherPosts = blogPosts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <HubPageHero
        eyebrow="Patient guides"
        badgeIcon={BookOpen}
        title="Your guide to medical marijuana in California"
        description="Expert articles on MMIC rules, qualifying conditions, patient rights, and what Santa Ana patients need to know."
        stats={[
          { icon: FileText, label: `${blogPosts.length} in-depth guides` },
          { icon: Sparkles, label: "Updated for 2026" },
        ]}
        actions={
          <>
            <Button
              href="/#apply"
              size="lg"
              className="rounded-full bg-[#123c31] px-7 shadow-lg shadow-[#123c31]/15 hover:bg-[#0c3027]"
            >
              Get your card
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {featured ? (
              <Button
                href={`/blog/${featured.slug}`}
                variant="outline"
                className="rounded-full border-[#dce6dd] bg-white/90"
              >
                Read featured guide
              </Button>
            ) : null}
          </>
        }
      />

      <section className="relative bg-white pb-16 pt-4 md:pb-24 md:pt-6">
        <Container>
          {featured ? (
            <>
              <HubSectionIntro
                eyebrow="Featured"
                title="Start here"
                description="Our most-read guide for California patients navigating medical and recreational rules."
                className="mb-8 sm:mb-10"
              />
              <div className="mb-14">
                <BlogPostCard post={featured} featured />
              </div>
            </>
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
