import type { Metadata } from "next";
import { GonePage } from "@/components/error/GonePage";

export const metadata: Metadata = {
  title: "Page Permanently Removed",
  description: "",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Page Permanently Removed",
    description: "",
  },
  twitter: {
    title: "Page Permanently Removed",
    description: "",
  },
};

export default function GoneRoutePage() {
  return <GonePage />;
}
