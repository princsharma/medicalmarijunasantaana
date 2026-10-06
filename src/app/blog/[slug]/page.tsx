import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogRichText } from "@/components/blog/BlogRichText";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  blogPosts,
  formatBlogDateLong,
  getPostBySlug,
  getPostFaqs,
  getPostHeadings,
} from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${slug}`,
    openGraphType: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = getPostHeadings(post);
  const faqs = getPostFaqs(post);

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.breadcrumbLabel ?? post.title },
        ]}
      />

      <Container narrow className="py-12 md:py-16">
        <Badge variant="brand">{post.category}</Badge>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        {post.subtitle ? (
          <p className="mt-2 text-lg font-medium text-brand-700">{post.subtitle}</p>
        ) : null}
        {post.heroDescription ? (
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">{post.heroDescription}</p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-neutral-200 pb-6 text-sm text-neutral-500">
          <span>By {post.author}{post.specialist ? `, ${post.specialist}` : ""}</span>
          <span>{formatBlogDateLong(post.date)}</span>
          <span>{post.readTime}</span>
          {post.reviewer ? <span>Reviewed by {post.reviewer}</span> : null}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
          {headings.length > 0 ? (
            <aside className="hidden lg:block">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                On this page
              </p>
              <nav className="mt-4 space-y-2" aria-label="Table of contents">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="block text-sm text-neutral-600 hover:text-brand-700"
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
          ) : null}

          <article>
            <BlogRichText blocks={post.content} />
          </article>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-950 p-8 text-center text-white">
          <p className="font-display text-xl font-bold">Need help with your MMIC?</p>
          <p className="mt-2 text-brand-100/85">
            Start your Santa Ana telehealth evaluation in minutes.
          </p>
          <Button href="/#apply" variant="accent" size="lg" className="mt-5">
            Get Started
          </Button>
        </div>
      </Container>
    </>
  );
}
