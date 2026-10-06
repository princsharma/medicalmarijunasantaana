import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ApplicationPopupProvider } from "@/components/providers/ApplicationPopupProvider";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        <ApplicationPopupProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ApplicationPopupProvider>
      </body>
    </html>
  );
}
