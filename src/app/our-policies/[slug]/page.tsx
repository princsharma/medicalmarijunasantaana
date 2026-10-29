import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyDetailShell } from "@/components/policy/PolicyDetailShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  getPolicyBySlug,
  getPolicyHref,
  policyPages,
  POLICY_HUB_PATH,
} from "@/data/policies";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return policyPages.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);
  if (!policy) return {};

  return buildMetadata({
    title: policy.title,
    description: policy.description,
    path: getPolicyHref(policy.slug),
  });
}

export default async function PolicyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);
  if (!policy) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Our Policies", href: POLICY_HUB_PATH },
          { label: policy.shortTitle },
        ]}
      />
      <PolicyDetailShell policy={policy} />
    </>
  );
}
