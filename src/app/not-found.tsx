import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Page Not Found",
    description: "",
  },
  twitter: {
    title: "Page Not Found",
    description: "",
  },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">404</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-neutral-900">Page Not Found</h1>
      <p className="mt-4 max-w-md text-neutral-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </Container>
  );
}
