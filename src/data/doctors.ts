export const doctorSpecialties = [
  "All",
  "Family Medicine",
  "General Medicine",
  "Pediatrics",
] as const;

export type DoctorSpecialty = Exclude<(typeof doctorSpecialties)[number], "All">;

export type Doctor = {
  slug: string;
  name: string;
  credential: "MD" | "DO";
  licenseLabel: string;
  experience?: string;
  specialty: DoctorSpecialty;
  bio: string;
  photo?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "cheryl-bugailiskis",
    name: "Cheryl Bugailiskis",
    credential: "MD",
    licenseLabel: "Licensed CA · MD",
    experience: "15+ Years",
    specialty: "Pediatrics",
    bio: "A board-certified pediatrician with more than 10 years of clinical experience providing patient-centered, state-compliant medical cannabis evaluations.",
    photo: "/doctors/dr-cheryl-bugailiskis..webp",
  },
  {
    slug: "rick-rieser",
    name: "Rick Rieser",
    credential: "MD",
    licenseLabel: "Licensed CA · MD",
    experience: "Decades",
    specialty: "General Medicine",
    bio: "A licensed nuclear medicine specialist who provides thorough, patient-focused medical marijuana evaluations while following applicable California regulations.",
    photo: "/doctors/dr-rick-rieser.webp",
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller",
    credential: "MD",
    licenseLabel: "Licensed CA · MD",
    experience: "8 Years",
    specialty: "General Medicine",
    bio: "A California-licensed physician who takes a comprehensive, patient-centered approach to state-compliant medical marijuana evaluations.",
    photo: "/doctors/dr-johnathan-c-miller.webp",
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function doctorDisplayName(doctor: Doctor) {
  return `${doctor.name}, ${doctor.credential}`;
}

export const doctorHubFaqs = [
  {
    question: "Are the doctors licensed to recommend medical marijuana?",
    answer:
      "Yes. Medical evaluations are provided by California-licensed physicians who are authorized to evaluate patients and, when medically appropriate, recommend cannabis under California law. The evaluating physician independently determines whether a patient qualifies based on the patient's medical history, condition, and clinical circumstances.",
  },
  {
    question: "What qualifications do our doctors have?",
    answer:
      "Our medical evaluations are conducted by physicians licensed to practice medicine in California. Each physician is responsible for independently evaluating patients and determining whether a medical cannabis recommendation is appropriate under applicable California law. Physicians may also have additional clinical experience relevant to the conditions discussed during an evaluation.",
  },
  {
    question: "How can I speak directly with a medical marijuana doctor?",
    answer:
      "You can schedule a telehealth appointment through our website. After completing the required intake information and selecting an available appointment, you can meet with a California-licensed physician through a secure online consultation. The physician will discuss your medical history and determine whether a medical cannabis recommendation is appropriate.",
  },
  {
    question: "How long does a doctor consultation usually take?",
    answer:
      "The length of a consultation can vary depending on your medical history, condition, and the information the physician needs to review. Your physician will take the time necessary to complete an appropriate evaluation and answer relevant questions during the consultation.",
  },
  {
    question: "What should I prepare before my appointment with the doctor?",
    answer:
      "Before your appointment, be prepared to provide a valid government-issued photo ID and information about your California residency, medical history, current symptoms, medications, and relevant health conditions. If you have medical records or other documentation related to your condition, having them available may also help the physician during the evaluation.",
  },
  {
    question: "Will the doctor ask for my medical history or records?",
    answer:
      "Yes. The physician may ask about your medical history, current symptoms, previous treatments, medications, and other information relevant to the evaluation. Medical records or supporting documentation may be requested when the physician considers them necessary to assess your condition. Providing complete and accurate information helps the physician make an informed clinical decision.",
  },
  {
    question: "How do doctors ensure my privacy?",
    answer:
      "Patient information is handled using reasonable administrative, technical, and organizational safeguards designed to protect personal and health information. Where applicable, patient health information is handled in accordance with HIPAA and other applicable privacy requirements. Our telehealth services also use secure electronic systems for communications and consultations.",
  },
  {
    question: "How does the doctor decide if I qualify for medical marijuana?",
    answer:
      "The evaluating physician reviews your medical history, current condition, symptoms, and other relevant clinical information. Under California law, a physician may recommend cannabis when they determine, in their medical judgment, that the patient may benefit from its use. The decision is made independently by the physician and is not guaranteed by Medical Marijuana Card Santa Ana.",
  },
  {
    question: "What happens if the doctor doesn't approve my medical condition?",
    answer:
      "If the physician determines that a medical cannabis recommendation is not appropriate based on the evaluation, the physician will not issue a recommendation. Medical Marijuana Card Santa Ana does not influence or override the physician's clinical decision. If you have questions about the outcome of your evaluation, you can contact our support team for assistance.",
  },
  {
    question: "Do the same doctors handle renewals and first-time evaluations?",
    answer:
      "Renewals and first-time evaluations are both handled by California-licensed physicians through telehealth. Depending on physician availability, your renewal appointment may be with the same physician or a different qualified California-licensed physician. A renewal requires a new clinical evaluation, and approval is determined independently by the evaluating physician.",
  },
];
