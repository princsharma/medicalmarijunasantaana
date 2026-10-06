export const siteConfig = {
  name: "Medical Marijuana Card Santa Ana",
  shortName: "MMJ Santa Ana",
  description:
    "Get your medical marijuana card in Santa Ana, California. Licensed doctors, same-day telehealth evaluations, and HIPAA-compliant online applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicalmarijuanacardsantaana.com",
  ogImage: "/opengraph-image",
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
  heally: {
    prefillUrl: "https://mymmj.getheally.com/patient_admin/prefill",
    redirect: "sched",
    productName: "Eva",
  },
} as const;
