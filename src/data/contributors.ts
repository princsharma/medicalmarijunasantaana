import { blogPosts } from "@/data/blog";

export type ContributorGlanceStat = {
  label: string;
  value: string;
  detail: string;
};

export type ContributorContact = {
  linkedinName?: string;
  linkedinHref?: string;
  email?: string;
  instagramLabel?: string;
  instagramHref?: string;
};

export type Contributor = {
  slug: string;
  name: string;
  credential?: string;
  credentialLine?: string;
  role: string;
  tagline: string;
  shortBio: string;
  bio: string;
  about?: string[];
  quote?: string;
  photo?: string;
  expertise: string[];
  highlights: { title: string; text: string }[];
  glance?: ContributorGlanceStat[];
  education?: string[];
  experience?: string[];
  contact?: ContributorContact;
  seoDescription: string;
  linkedIn?: string;
  doctorProfileHref?: string;
};

export const contributorsHubContent = {
  eyebrow: "Editorial team",
  title: "Our Authors & Medical Reviewers",
  description:
    "Meet the writers and licensed physicians who create and review patient education for Santa Ana and California cannabis rules — clear, accurate, and updated for 2026.",
  standardsTitle: "How we publish",
  standards: [
    {
      title: "Physician-reviewed",
      text: "Clinical articles are reviewed by California-licensed physicians before publication.",
    },
    {
      title: "Source-grounded",
      text: "We cite state law, county MMIC guidance, and reputable public health references.",
    },
    {
      title: "Patient-first tone",
      text: "Content is written for real patients — plain language, no hype, no product sales.",
    },
  ],
} as const;

export const contributors: Contributor[] = [
  {
    slug: "octavia-wyche",
    name: "Octavia Wyche",
    photo: "/authors/octavia-wyche.webp",
    credentialLine: "Paralegal Certified • Healthcare & Regulatory Content",
    role: "Medical Writer",
    tagline: "Clear, legally aligned writing on healthcare regulation and medical marijuana.",
    shortBio:
      "Octavia Wyche is a technical writer and documentation specialist with a strong background in healthcare and regulated government environments.",
    bio: "Octavia Wyche is a technical writer and documentation specialist with a strong background in healthcare and regulated government environments. She works across legally sensitive topics, including healthcare regulations and medical marijuana, ensuring content aligns with both legal and professional standards.",
    about: [
      "Octavia Wyche is a technical writer and documentation specialist with a strong background in healthcare and regulated government environments. She holds a Bachelor of Science in Biology with a minor in Chemistry from Howard University and has completed two years of medical training, providing a solid foundation for working with scientific and healthcare-related content.",
      "In addition to healthcare and technical documentation, Octavia holds a Paralegal Administrative Officer Certification, which supports her ability to work with legal and compliance-focused topics. Her expertise in regulatory standards and legal frameworks enables her to create content that is accurate, structured, and aligned with both healthcare and legal requirements.",
    ],
    quote:
      "My goal is to create content that helps readers understand complex healthcare regulations, medical marijuana programs, and compliance requirements without unnecessary confusion. By combining scientific knowledge, regulatory awareness, and technical writing principles, I strive to make healthcare information more accessible and reliable for every reader.",
    expertise: [
      "Healthcare regulation",
      "Medical marijuana education",
      "Technical documentation",
      "Legal & compliance writing",
      "Scientific communication",
    ],
    highlights: [
      {
        title: "Regulatory writing",
        text: "Works across legally sensitive healthcare and medical marijuana topics with a documentation specialist's discipline.",
      },
      {
        title: "Scientific foundation",
        text: "Biology and chemistry training plus two years of medical coursework inform how she explains clinical and policy details.",
      },
    ],
    glance: [
      {
        label: "Writing Experience",
        value: "10 Years",
        detail: "In health & telehealth content",
      },
      {
        label: "Articles Published",
        value: "11+",
        detail: "On Medical Marijuana Card Santa Ana",
      },
      {
        label: "Profile Last Verified",
        value: "May 2026",
        detail: "Reviewed by Editorial Team",
      },
    ],
    education: [
      "B.S. in Biology, Minor in Chemistry — Howard University",
      "Two years of medical training — clinical and healthcare sciences",
      "Paralegal Administrative Officer Certification",
    ],
    experience: [
      "Healthcare Documentation Specialist",
      "Regulatory Writer",
      "Technical Documentation Professional",
      "Compliance-Focused Content Developer",
    ],
    contact: {
      linkedinName: "Octavia Wyche",
      instagramLabel: "Octavia the Writer • Instagram",
    },
    seoDescription:
      "Octavia Wyche — medical writer and paralegal-certified documentation specialist for Medical Marijuana Card Santa Ana. Healthcare, regulatory, and medical marijuana education.",
  },
  {
    slug: "robert-d-saint-laurent",
    name: "Robert D. Saint Laurent",
    photo: "/authors/robert-d-saint-laurent.webp",
    credential: "M.Ed.",
    credentialLine: "Health & Medical Content Writer • Editorial Specialist",
    role: "Medical Writer",
    tagline:
      "Research-driven health writing that turns complex medical ideas into clear, useful guidance.",
    shortBio:
      "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with over three decades of professional experience in content development, education, and fitness sciences.",
    bio: "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with over three decades of professional experience in content development, education, and fitness sciences. With a strong foundation in both academic instruction and health-focused communication, Robert brings a clear, research-driven, and audience-centered approach to content creation that emphasizes accuracy, clarity, and reader engagement.",
    about: [
      "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with a strong background in research-driven writing, educational content development, and fitness sciences. He holds a Master of Education degree from Bridgewater State University (1999), which has deeply shaped his structured, instructional approach to content development.",
      "Robert has built an extensive career specializing in the development of educational materials that translate complex medical and wellness concepts into accessible, easy-to-understand language. His work reflects a deep commitment to delivering reliable, evidence-based information that supports informed decision-making for diverse audiences.",
    ],
    quote:
      "My goal as a health and medical content writer is to bridge the gap between complex clinical information and everyday readers. Accuracy and clarity are not mutually exclusive - when written well, evidence-based content empowers people to make better decisions about their health.",
    expertise: [
      "Health & medical writing",
      "Editorial quality assurance",
      "Educational content development",
      "Fitness sciences & wellness",
      "Evidence-based healthcare",
    ],
    highlights: [
      {
        title: "Instructional approach",
        text: "A Master of Education from Bridgewater State University informs how he structures complex health topics for everyday readers.",
      },
      {
        title: "Three decades of writing",
        text: "Career work in content development, education, and fitness sciences with a focus on accuracy and reader engagement.",
      },
    ],
    glance: [
      {
        label: "Writing Experience",
        value: "30+ Years",
        detail: "In health & telehealth content",
      },
      {
        label: "Articles Published",
        value: "55+",
        detail: "On Medical Marijuana Card Santa Ana",
      },
      {
        label: "Profile Last Verified",
        value: "May 2026",
        detail: "Reviewed by Editorial Team",
      },
    ],
    education: [
      "Master of Education (M.Ed.) — Bridgewater State University (1999)",
    ],
    experience: [
      "Health & Medical Content Writer (30+ years)",
      "Editorial Specialist — content accuracy and quality assurance",
      "Development of evidence-based educational healthcare materials",
      "Fitness sciences and wellness content expertise",
    ],
    contact: {
      linkedinName: "Robert D. Saint Laurent",
      instagramLabel: "Verified by Editorial Team • May 2026",
    },
    seoDescription:
      "Robert D. Saint Laurent, M.Ed. — health and medical content writer and editorial specialist for Medical Marijuana Card Santa Ana.",
  },
];

export function getContributorBySlug(slug: string) {
  return contributors.find((c) => c.slug === slug);
}

export function contributorDisplayName(contributor: Contributor) {
  return contributor.credential
    ? `${contributor.name}, ${contributor.credential}`
    : contributor.name;
}

export function contributorFirstName(contributor: Contributor) {
  return contributor.name.split(/\s+/)[0] ?? contributor.name;
}

export function getPostsForContributor(slug: string) {
  const contributor = getContributorBySlug(slug);
  if (!contributor) return [];

  return blogPosts.filter(
    (post) => post.author === contributor.name || post.reviewer === contributor.name
  );
}
