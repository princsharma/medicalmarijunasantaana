export const siteConfig = {
  name: "Medical Marijuana Card Santa Ana",
  shortName: "MMJ Santa Ana",
  description:
    "Get your medical marijuana card in Santa Ana, California. Licensed doctors, same-day telehealth evaluations, and HIPAA-compliant online applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalmarijuanacardsantaana.com",
  ogImage: "/OG_Images/home feature.webp",
  phone: "+1 333 444 1111",
  phoneDisplay: "(333) 444-1111",
  email: "contact@medicalmarijuanacardsantaana.com",
  address: {
    street: "123 Main Street",
    city: "Santa Ana",
    state: "CA",
    zip: "92701",
    country: "US",
  },
  businessHours: "Mon–Sat, 8 AM – 8 PM PST",
  /** Google Search Console HTML tag verification (public). */
  googleSiteVerification: "3-MKOn3wOYn_jkxw8nug-FwUtWt_HZOE2PEEvsdSPJs",
  /** Google Tag Manager container ID (public). */
  gtmId: "GTM-NF8D95P",
  heally: {
    prefillUrl: "https://mymmj.getheally.com/patient_admin/prefill",
    redirect: "sched",
    productName: "Eva",
  },
} as const;
