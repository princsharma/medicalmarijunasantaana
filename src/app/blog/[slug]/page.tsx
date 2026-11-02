import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { BlogRichText } from "@/components/blog/BlogRichText";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  blogPosts,
  formatBlogDateLong,
  getPostBySlug,
  getPostFaqs,
  getPostHeadings,
} from "@/data/blog";
import { DEFAULT_OG_CARD_PATH } from "@/lib/og/og-cards";
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

  const path = `/blog/${slug}`;

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path,
    openGraphType: "article",
    publishedTime: post.date,
    authors: [post.author],
    ogImage: post.image ?? post.authorFeatureImage ?? DEFAULT_OG_CARD_PATH,
    ogImageDimensions: "auto",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = getPostHeadings(post);
  const faqs = getPostFaqs(post);
  const heroImage = post.image ?? post.authorFeatureImage ?? DEFAULT_OG_CARD_PATH;

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

      <section className="bg-[#f7f6f1] py-10 sm:py-14">
        <Container className="max-w-6xl">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex rounded-full bg-[#123c31] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
              {post.category}
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-snug tracking-tight text-[#123c31] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            {post.subtitle ? (
              <p className="mt-3 font-display text-xl font-semibold text-[#15503f] sm:text-2xl">
                {post.subtitle}
              </p>
            ) : null}
            {post.heroDescription ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {post.heroDescription}
              </p>
            ) : null}
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#dce6dd] bg-gradient-to-r from-white via-[#f5f8f4] to-white shadow-sm">
            <div className="grid gap-5 px-4 py-5 sm:px-7 sm:py-6 lg:grid-cols-3 lg:items-center lg:gap-0">
              <div className="flex min-w-0 items-center gap-3">
                {post.authorImage ? (
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                ) : null}
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#15503f]">
                    Written by
                  </p>
                  {post.authorBioHref ? (
                    <Link href={post.authorBioHref} className="mt-1 block font-display font-bold text-[#123c31] hover:underline">
                      {post.author}
                    </Link>
                  ) : (
                    <p className="mt-1 font-display font-bold text-[#123c31]">{post.author}</p>
                  )}
                  {post.authorRole ? (
                    <p className="text-sm text-neutral-600">{post.authorRole}</p>
                  ) : null}
                  {post.specialist ? (
                    <p className="text-sm text-neutral-500">{post.specialist}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-3 border-y border-[#dce6dd] py-4 lg:justify-center lg:border-x lg:border-y-0 lg:px-6 lg:py-0">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#eaf1e9] text-[#123c31]">
                  <CalendarDays className="size-5" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#15503f]">
                    Published
                  </p>
                  <p className="mt-1 font-display font-bold text-[#123c31]">
                    {formatBlogDateLong(post.date)}
                  </p>
                  <p className="text-sm text-neutral-500">{post.readTime}</p>
                </div>
              </div>

              {post.reviewer ? (
                <div className="flex min-w-0 items-center gap-3 lg:pl-6">
                  {post.reviewerImage ? (
                    <Image
                      src={post.reviewerImage}
                      alt={post.reviewer}
                      width={56}
                      height={56}
                      className="size-14 shrink-0 rounded-full object-cover object-top"
                    />
                  ) : null}
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#15503f]">
                      Medically reviewed by
                    </p>
                    <p className="mt-1 font-display font-bold text-[#123c31]">{post.reviewer}</p>
                    {post.reviewerRole ? (
                      <p className="text-sm text-neutral-600">{post.reviewerRole}</p>
                    ) : null}
                    {post.reviewerSpecialist ? (
                      <p className="text-sm text-neutral-500">{post.reviewerSpecialist}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl shadow-md ring-1 ring-[#123c31]/10">
            <div className="relative aspect-[16/10] min-h-[200px] sm:min-h-[320px] lg:aspect-[21/9] lg:min-h-[420px]">
              <Image
                src={heroImage}
                alt={post.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123c31]/45 via-transparent to-[#123c31]/10" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(17rem,22rem)_minmax(0,1fr)] lg:gap-x-12">
          <BlogTableOfContents headings={headings} />

          <article className="min-w-0 px-4 sm:px-6 lg:pr-10 lg:pl-2 xl:pr-16">
              <BlogRichText blocks={post.content} />

              {post.author ? (
                <div className="mt-12 rounded-[1.75rem] border border-[#dce6dd] bg-[#f5f8f4] p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-[#123c31]">About the author</h2>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start">
                    {post.authorImage ? (
                      <Image
                        src={post.authorImage}
                        alt=""
                        width={96}
                        height={96}
                        className="size-24 shrink-0 rounded-2xl object-cover"
                      />
                    ) : null}
                    <div>
                      <p className="font-display text-xl font-bold text-[#123c31]">{post.author}</p>
                      {post.authorRole ? (
                        <p className="mt-1 text-sm font-semibold text-[#15503f]">{post.authorRole}</p>
                      ) : null}
                      {post.authorBio ? (
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{post.authorBio}</p>
                      ) : null}
                      {post.authorBioHref ? (
                        <Link
                          href={post.authorBioHref}
                          className="mt-4 inline-flex text-sm font-semibold text-[#123c31] underline-offset-4 hover:underline"
                        >
                          View authors
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="mt-10 rounded-[1.75rem] bg-[#123c31] px-6 py-8 text-center text-white sm:px-10 sm:py-10">
                <p className="font-display text-2xl font-bold">Need help with your MMIC?</p>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                  Start your Santa Ana telehealth evaluation in minutes.
                </p>
                <Button
                  href="/#apply"
                  size="lg"
                  className="mt-6 rounded-full bg-white px-7 text-[#123c31] hover:bg-[#f5f8f4]"
                >
                  Get Started
                </Button>
              </div>
            </article>
        </div>
      </section>
    </>
  );
}
