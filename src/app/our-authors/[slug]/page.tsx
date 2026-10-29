import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContributorProfileContent } from "@/components/authors/ContributorProfileContent";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  contributorDisplayName,
  contributors,
  getContributorBySlug,
} from "@/data/contributors";
import { getAuthorSlugOgAlt, getAuthorSlugOgImagePath } from "@/lib/og/author-slug";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return contributors.map((contributor) => ({ slug: contributor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const contributor = getContributorBySlug(slug);
  if (!contributor) return {};

  const path = `/our-authors/${slug}`;

  return buildMetadata({
    title: contributorDisplayName(contributor),
    description: contributor.seoDescription,
    path,
    ogImage: getAuthorSlugOgImagePath(contributor),
    ogImageDimensions: "auto",
    imageAlt: getAuthorSlugOgAlt(contributor),
  });
}

export default async function ContributorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const contributor = getContributorBySlug(slug);

  if (!contributor) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Our Authors", href: "/our-authors" },
          { label: contributor.name },
        ]}
      />
      <ContributorProfileContent contributor={contributor} />
    </>
  );
}
