import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/CtaSection";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts, getFeaturedPost } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
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
      <PageHero
        eyebrow="Patient Guides"
        title="Your Guide to Medical Marijuana in California"
        description="Expert articles on MMIC rules, qualifying conditions, patient rights, and what Santa Ana patients need to know."
      >
        <Button href="/#apply" variant="accent" size="lg">
          Get Your Card
        </Button>
      </PageHero>

      <Container className="-mt-10 relative pb-16 md:pb-24">
        {featured ? (
          <div className="mb-12">
            <BlogPostCard post={featured} featured />
          </div>
        ) : null}

        {otherPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : null}
      </Container>

      <CtaSection />
    </>
  );
}
