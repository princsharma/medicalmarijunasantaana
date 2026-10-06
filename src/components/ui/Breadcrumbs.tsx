import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getCanonicalUrl } from "@/lib/url-normalization";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: getCanonicalUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-brand-100 bg-brand-50/50">
      <Container>
        <ol className="flex flex-wrap items-center justify-center gap-2 py-4 text-sm font-medium text-brand-800/70">
          {allItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight aria-hidden="true" className="size-4 text-brand-400" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-700"
                >
                  {index === 0 && <Home aria-hidden="true" className="size-4" />}
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-brand-900">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
