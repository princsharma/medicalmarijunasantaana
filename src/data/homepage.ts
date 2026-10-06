export const heroContent = {
  badge: "Trusted by 1,000+ Santa Ana Patients",
  title: "Apply for a Santa Ana Medical Marijuana Card Today",
  subtitle:
    "Connect with a licensed California medical marijuana doctor and get evaluated in full compliance with state guidelines — from the comfort of your home.",
  stats: [
    { value: "15–30 min", label: "Average Approval Time" },
    { value: "$55–$199", label: "Affordable MMJ Plans" },
    { value: "100%", label: "Money-Back Guarantee" },
  ],
  ctaPrimary: { label: "Start Your Application", href: "#apply" },
  ctaSecondary: { label: "Check Benefits", href: "#benefits" },
};

export const processSectionContent = {
  badge: "Our Simple Process",
  title: "Steps to Get a Medical Marijuana Card in Santa Ana",
  description:
    "Getting your medical marijuana card online is simple and secure, fully compliant with the California Medical Marijuana Identification Card Program administered by the California Department of Public Health.",
  highlight: "Medical Marijuana Identification Card Program",
  ctaPrimary: { label: "Apply Here", href: "#apply" },
  ctaSecondary: { label: "See More", href: "#benefits" },
  processTime: {
    title: "Average Process Time: Typically Within 30 Minutes",
    description:
      "Many patients complete their online consultation and receive their physician's medical marijuana recommendation the same day, though times may vary depending on the doctor's availability.",
  },
  timeline: [
    { label: "Start", position: 0 },
    { label: "~10 min", position: 33 },
    { label: "~20 min", position: 66 },
    { label: "Approved", position: 100 },
  ],
};

export const processSteps = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Fill out our HIPAA-compliant online form with your basic information, California ID, and medical history. Schedule your consultation at a convenient time from the comfort of your home.",
    icon: "calendar" as const,
    accent: "amber" as const,
    offset: "lg:translate-x-0",
  },
  {
    step: 2,
    title: "Attend Your MMJ Consultation",
    description:
      "Connect with a licensed California MMJ doctor online via audio or video call. The doctor reviews your symptoms and determines whether medical cannabis is appropriate for you.",
    icon: "consult" as const,
    accent: "brand" as const,
    offset: "lg:translate-x-8 xl:translate-x-14",
    options: [
      { label: "Audio Call", icon: "phone" as const },
      { label: "Video Call", icon: "video" as const },
    ],
  },
  {
    step: 3,
    title: "Receive Your Recommendation",
    description:
      "If approved, you'll receive a written medical marijuana recommendation for legal access at licensed California dispensaries, plus an optional wallet-sized ID card for convenience.",
    icon: "card" as const,
    accent: "orange" as const,
    offset: "lg:translate-x-16 xl:translate-x-28",
  },
];

export const benefitsSectionContent = {
  title: "Benefits of a Medical Marijuana Card in Santa Ana",
  description:
    "Under California's Compassionate Use Act (Prop 215) and SB 420 guidelines, a valid medical cannabis card unlocks advantages that recreational users don't have.",
};

export const benefits = [
  {
    id: "tax",
    title: "Tax Savings",
    stat: "Up to 11.25%",
    description:
      "MMIC holders are exempt from California's state sales tax, which ranges from 7.25% to 11.25% on cannabis purchases.",
    layout: "wide" as const,
  },
  {
    id: "dispensary",
    title: "Certified Medical Dispensary Access",
    stat: "More Stores",
    description:
      "Shop at certified medical dispensaries that aren't open to recreational customers, often with stronger products.",
    layout: "tall" as const,
  },
  {
    id: "possession",
    title: "Higher Possession Limits",
    stat: "8x Limit",
    description:
      "Legally possess up to 8 ounces of dried flower, compared to the 1-ounce limit for recreational users.",
    layout: "compact" as const,
  },
  {
    id: "cultivation",
    title: "Legal Cannabis Cultivation",
    stat: "6 Plants",
    description:
      "Grow up to 6 mature or 12 immature plants at home for personal medical use.",
    layout: "compact" as const,
  },
];

export const conditionsSectionContent = {
  badge: "12+ Qualifying Conditions",
  title: "Qualifying Medical Conditions for MMJ in Santa Ana",
  description:
    "Under California law, a patient may qualify for medical cannabis if a licensed MMJ doctor determines its use is appropriate for a diagnosed condition.",
  infoCard:
    "If your condition isn't listed among the official qualifying ones, our licensed doctors will carefully review your medical history to determine if medical cannabis is suitable for you.",
  cta: "Check If You Qualify",
};

export const qualifyingConditions = [
  "Arthritis",
  "Cancer",
  "Chronic Pain",
  "Glaucoma",
  "HIV/AIDS",
  "Migraine",
  "Seizures",
  "Severe Nausea",
  "Muscle Spasms",
  "Cachexia",
  "Anorexia",
  "Fibromyalgia",
];

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 55,
    badge: "Digital Only",
    description: "Everything you need for legal protection.",
    features: [
      "Digital recommendation letter",
      "Full legal protections statewide",
      "Same-day evaluation",
    ],
    highlighted: false,
  },
  {
    id: "gold",
    name: "Gold Plan",
    price: 99,
    badge: "Physical Card",
    description: "Our most popular plan, with a physical card.",
    features: [
      "Everything in Basic",
      "Plastic MMIC ID card",
      "MMIC delivered via email",
      "Printed recommendation copy",
    ],
    highlighted: true,
  },
  {
    id: "platinum",
    name: "Platinum Plan",
    price: 199,
    badge: "+ Grow License",
    description: "For patients who want to grow their own.",
    features: [
      "Everything in Gold",
      "Grower's license included",
      "Cultivate up to 99 plants",
      "Plastic MMIC ID card",
    ],
    highlighted: false,
  },
];

export type TrustStatDisplay = {
  label: string;
  value: string;
  suffix: string;
};

export type TrustStatConfig = {
  label: string;
  suffix: string;
  min: number;
  max: number;
  fallback: string;
  format: "locale-plus" | "int";
};

/** Ranges for client-side Math.random stat generation (TrustSection) */
export const trustStatConfig: TrustStatConfig[] = [
  {
    label: "Patients Served",
    suffix: "",
    min: 4800,
    max: 5600,
    fallback: "5,000+",
    format: "locale-plus",
  },
  {
    label: "Approval Rate",
    suffix: "%",
    min: 96,
    max: 99,
    fallback: "98",
    format: "int",
  },
  {
    label: "Average Time",
    suffix: " min",
    min: 15,
    max: 28,
    fallback: "20",
    format: "int",
  },
  {
    label: "Support Available",
    suffix: " hrs",
    min: 24,
    max: 24,
    fallback: "24",
    format: "int",
  },
];

/** Static snapshot — use trustStatConfig + randomizer in TrustSection for live values */
export const trustStats: TrustStatDisplay[] = trustStatConfig.map((item) => ({
  label: item.label,
  value: item.fallback,
  suffix: item.suffix,
}));

export const trustBadges = [
  "HIPAA Compliant",
  "CA Licensed Physicians",
  "Secure Telehealth",
  "Money-Back Guarantee",
];

export const serviceAreas = [
  "San Jose", "San Diego", "Los Angeles", "Oakland", "Sacramento",
  "Escondido", "Elk Grove", "Murrieta", "Antioch", "Fairfield",
  "Oceanside", "San Mateo", "Bakersfield", "Fontana", "Ontario",
  "Santa Ana", "Fremont", "Orange", "Santa Clara", "Berkeley",
  "Oxnard", "Santa Clarita", "West Covina", "Burbank", "Fullerton",
  "Palmdale", "Santa Maria", "Camarillo", "Garden Grove", "Pasadena",
  "Santa Rosa", "Carlsbad", "Glendale", "Pittsburg", "Seaside",
  "Chico", "Hayward", "Pomona", "Simi Valley", "Chula Vista",
  "Huntington Beach", "Rancho Cucamonga", "Stockton", "Clovis", "Inglewood",
  "Rialto", "Sunnyvale", "Concord", "Irvine", "Richmond",
  "Temecula", "Corona", "Jurupa Valley", "Riverside", "Thousand Oaks",
  "Costa Mesa", "Lancaster", "Roseville", "Torrance", "Daly City",
  "Lodi", "Tracy", "Moreno Valley", "Downey", "Salinas",
  "Vallejo", "El Monte", "East Los Angeles", "San Bernardino", "Victorville",
  "Visalia", "El Cajon", "Modesto", "San Buenaventura",
];

export const reviews = [
  {
    name: "Maria G.",
    rating: 5,
    text: "Super fast and professional. I had my recommendation the same day and the doctor was very thorough and kind.",
    date: "2 months ago",
  },
  {
    name: "James T.",
    rating: 5,
    text: "The online process was seamless. Clear instructions, quick consultation, and excellent customer support throughout.",
    date: "3 months ago",
  },
  {
    name: "Sandra L.",
    rating: 5,
    text: "Best experience getting my med card in Orange County. Affordable pricing and the staff answered all my questions.",
    date: "1 month ago",
  },
  {
    name: "David R.",
    rating: 5,
    text: "I was nervous about the telehealth visit but the doctor made it easy. Got approved in under 30 minutes.",
    date: "4 months ago",
  },
];

export const faqCategories = [
  { id: "all", label: "All" },
  { id: "getting-started", label: "Getting Started" },
  { id: "process", label: "Process & Timing" },
  { id: "eligibility", label: "Eligibility" },
  { id: "privacy", label: "Privacy" },
  { id: "benefits", label: "Benefits" },
  { id: "renewal", label: "Renewal" },
] as const;

export const faqHighlights = [
  {
    value: "15–30 min",
    label: "Average approval time",
    accent: "brand" as const,
  },
  {
    value: "HIPAA",
    label: "Secure & compliant",
    accent: "accent" as const,
  },
  {
    value: "From $55",
    label: "Affordable plans",
    accent: "brand" as const,
  },
];

export const faqItems = [
  {
    question: "How can I get a medical marijuana card in Santa Ana?",
    answer:
      "Complete our online application, schedule a telehealth consultation with a licensed California physician, and receive your recommendation if approved. The entire process can be done from home.",
    category: "getting-started" as const,
  },
  {
    question: "How long does it take?",
    answer:
      "Most patients complete their evaluation and receive approval within 15–30 minutes. Same-day appointments are typically available within 24–48 hours.",
    category: "process" as const,
  },
  {
    question: "Who qualifies for a recommendation?",
    answer:
      "California patients with qualifying conditions such as chronic pain, anxiety, insomnia, arthritis, and other conditions a licensed doctor determines may benefit from medical cannabis.",
    category: "eligibility" as const,
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes. Our platform is HIPAA-compliant with encrypted data transmission. Your medical information is kept strictly confidential.",
    category: "privacy" as const,
  },
  {
    question: "What are the benefits of having a card?",
    answer:
      "Medical cardholders enjoy tax savings, higher possession limits, access to medical-only dispensaries, and the ability to grow plants for personal use.",
    category: "benefits" as const,
  },
  {
    question: "Can I renew my recommendation online?",
    answer:
      "Yes. Renewals can be completed online through a follow-up telehealth consultation with a licensed physician.",
    category: "renewal" as const,
  },
];

export const telehealthContent = {
  badge: "Same-Day Telehealth",
  title: "Fast MMJ Approval in Less Than 30 Minutes",
  paragraphs: [
    "Most patients complete the process easily and receive their doctor's approval within 15 to 30 minutes. It's a quick and stress-free experience designed to fit right into your day.",
    "Once approved, you'll instantly get access to your digital recommendation, so you can start visiting dispensaries without delay. Our friendly team and licensed doctors make sure every step feels smooth, secure, and completely confidential.",
  ],
  stats: [
    { value: "15–30 min", label: "Avg. Wait" },
    { value: "Same Day", label: "Approval" },
    { value: "100%", label: "Online" },
  ],
  form: {
    eyebrow: "Get Approved Today",
    priceLine: "Plans starting at",
    price: "$55",
    priceSuffix: "only",
  },
};
