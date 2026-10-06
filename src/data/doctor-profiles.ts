export type DoctorProfile = {
  subtitle: string;
  licenseLine?: string;
  intro: string;
  heroCta?: string;
  credentialsIntro: string;
  npiUrl: string;
  credentials: { label: string; value: string }[];
  educationHeading?: string;
  educationIntro: string;
  education: { school: string; detail?: string }[];
  licensedPractice?: {
    heading: string;
    intro: string;
    items: { label: string; value: string }[];
  };
  about: string[];
  roleHeading: string;
  roleIntro: string;
  roleListIntro?: string;
  roleItems?: string[];
  roleNote?: string;
  conditionsHeading: string;
  conditionsIntro: string;
  conditions: string[];
  conditionsNote?: string;
  expectHeading?: string;
  expectIntro?: string;
  expectSteps?: { title: string; body: string }[];
  expectNote?: string;
  privacyHeading: string;
  privacy: string[];
  privacyItems?: string[];
  faqIntro?: string;
  faqs: { question: string; answer: string }[];
  faqCta?: { label: string; href: string };
  ctaHeading?: string;
  cta?: string;
};

export const doctorProfiles: Record<string, DoctorProfile> = {
  "cheryl-bugailiskis": {
    subtitle: "Pediatric Medicine Specialist - Medical Cannabis Evaluations",
    licenseLine: "Licensed in California · 15+ Years of Medical Experience",
    intro:
      "Dr. Cheryl Bugailiskis is an experienced physician who provides professional medical evaluations through secure telehealth consultations. Her approach focuses on careful medical history review, patient needs, and confidential clinical discussions for California patients seeking medical cannabis evaluations.",
    credentialsIntro:
      "Dr. Bugailiskis' provider information can be independently verified through the National Provider Identifier (NPI) Registry, maintained by the Centers for Medicare & Medicaid Services (CMS).",
    npiUrl: "https://npiregistry.cms.hhs.gov/search?number=1871882035",
    credentials: [
      { label: "NPI Number", value: "1871882035" },
      { label: "Provider Status", value: "Active" },
      { label: "State", value: "California" },
      { label: "Medical Specialty", value: "Pediatrics" },
    ],
    educationIntro:
      "Dr. Bugailiskis' medical education and residency training provide the foundation for her clinical practice.",
    education: [
      {
        school: "American University of the Caribbean School of Medicine",
        detail: "Medical Degree, Class of 2011",
      },
      {
        school: "University of Illinois College of Medicine at Chicago",
        detail: "Residency Training in Pediatrics, 2011–2014",
      },
    ],
    about: [
      "Dr. Cheryl Bugailiskis is a physician whose professional information is listed in the federal National Provider Identifier Registry. Her NPI record provides a publicly accessible source for verifying healthcare provider information.",
      "With more than 15 years of medical experience, Dr. Bugailiskis brings a patient-centered approach to medical consultations. Through telehealth evaluations, she reviews relevant health information and discusses each patient's individual circumstances before determining whether a medical cannabis recommendation or certification is clinically appropriate.",
      "For California patients, evaluations are conducted with consideration of applicable state medical cannabis requirements.",
    ],
    roleHeading: "Dr. Bugailiskis' Role at Medical Marijuana Card Santa Ana",
    roleIntro:
      "As part of the physician team at Medical Marijuana Card Santa Ana, Dr. Bugailiskis provides confidential medical cannabis evaluations through a secure telehealth platform.",
    roleListIntro: "During an evaluation, she may:",
    roleItems: [
      "Review your medical history",
      "Discuss your current symptoms and health concerns",
      "Review relevant medications and treatments",
      "Discuss your medical cannabis questions",
      "Determine whether you meet the applicable medical criteria",
      "Explain the next steps if you are approved",
    ],
    roleNote:
      "Every evaluation is based on the patient's individual medical circumstances. Approval or certification is determined by the evaluating physician and is not guaranteed.",
    conditionsHeading: "Conditions Discussed During Medical Cannabis Evaluations",
    conditionsIntro:
      "California law allows physicians to recommend medical cannabis when they determine that it may be appropriate for a patient's medical needs. Depending on the patient's circumstances, consultations may involve conditions such as:",
    conditions: [
      "Chronic pain",
      "Arthritis",
      "Anxiety",
      "PTSD",
      "Migraine",
      "Cancer-related symptoms",
      "Multiple sclerosis",
      "Epilepsy",
      "Glaucoma",
      "Crohn's disease",
      "Other qualifying or physician-determined medical conditions",
    ],
    conditionsNote:
      "Final medical eligibility is determined by the evaluating physician after reviewing the patient's individual health history and circumstances.",
    expectHeading: "What to Expect During Your Telehealth Evaluation",
    expectIntro:
      "Your consultation is designed to provide a straightforward and confidential medical evaluation.",
    expectSteps: [
      {
        title: "Secure Video Consultation",
        body: "Meet with Dr. Bugailiskis through a secure telehealth platform.",
      },
      {
        title: "Medical History Review",
        body: "Discuss your health history, symptoms, current treatments, and relevant medications.",
      },
      {
        title: "Clinical Discussion",
        body: "Ask questions and discuss whether medical cannabis may be appropriate for your situation.",
      },
      {
        title: "Physician Determination",
        body: "Dr. Bugailiskis makes an independent clinical determination based on the information available during the consultation.",
      },
      {
        title: "Next Steps",
        body: "If approved, you will receive information about the applicable certification and California medical cannabis process.",
      },
    ],
    expectNote:
      "Typical consultation time: approximately 10–15 minutes, depending on the patient's circumstances.",
    privacyHeading: "Privacy, Security & Professional Standards",
    privacy: [
      "Patient confidentiality is an important part of every telehealth consultation.",
      "Medical Marijuana Card Santa Ana uses secure technology designed to support confidential online healthcare consultations. Patient information is handled according to applicable privacy and healthcare requirements.",
      "Dr. Bugailiskis' professional provider information can also be independently checked through the federal NPI Registry.",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Bugailiskis evaluate?",
        answer:
          "Dr. Bugailiskis may evaluate patients with conditions such as chronic pain, arthritis, anxiety, PTSD, migraines, cancer-related symptoms, multiple sclerosis, epilepsy, glaucoma, and Crohn's disease. The appropriate medical evaluation depends on the patient's individual circumstances. Final eligibility is determined by the physician.",
      },
      {
        question: "How long does an evaluation with Dr. Bugailiskis take?",
        answer:
          "A typical telehealth evaluation may take approximately 10–15 minutes, although the actual consultation length can vary depending on your medical history, symptoms, medications, and questions.",
      },
      {
        question: "What can I expect during the consultation?",
        answer:
          "You will discuss your medical history, current symptoms, medications, and relevant health concerns with the physician. Dr. Bugailiskis will review the information provided and determine whether a medical cannabis recommendation or certification is medically appropriate.",
      },
      {
        question: "Is the consultation confidential?",
        answer:
          "Yes. Consultations are conducted through a secure telehealth platform designed to support confidential communication and the protection of patient information.",
      },
      {
        question: "Will I automatically be approved?",
        answer:
          "No. Approval is not guaranteed. The evaluating physician independently determines whether the patient meets the applicable medical criteria based on the information discussed during the consultation.",
      },
      {
        question: "What happens if Dr. Bugailiskis isn't available when I request her?",
        answer:
          "If Dr. Bugailiskis is unavailable, you may be offered another qualified physician from the Medical Marijuana Card Santa Ana medical team, subject to availability and applicable licensing requirements.",
      },
      {
        question: "Can I request Dr. Bugailiskis specifically?",
        answer:
          "You may request Dr. Bugailiskis when scheduling, subject to her availability. Physician availability may vary, so another qualified physician may be offered when she is unavailable.",
      },
      {
        question: "What happens after I am approved?",
        answer:
          "If the physician determines that you qualify, you will receive instructions about the next steps in California's medical cannabis process. The specific documentation or registration process may depend on your circumstances and whether you are applying for a state-issued Medical Marijuana Identification Card (MMIC).",
      },
    ],
    ctaHeading: "Meet With Dr. Bugailiskis",
    cta: "If you are considering medical cannabis in California, schedule a confidential telehealth evaluation with Dr. Cheryl Bugailiskis.",
  },
  "johnathan-miller": {
    subtitle: "General Practice Physician - Medical Cannabis Evaluations",
    licenseLine: "Licensed in California · 8 Years of Experience",
    intro:
      "Dr. Johnathan Miller is a licensed physician providing professional medical cannabis evaluations through secure telehealth consultations. He takes a patient-focused approach, reviewing each patient's medical history and individual circumstances while following applicable California medical cannabis requirements.",
    credentialsIntro:
      "Dr. Miller's provider information can be independently verified through the National Provider Identifier (NPI) Registry, maintained by the Centers for Medicare & Medicaid Services (CMS).",
    npiUrl: "https://npiregistry.cms.hhs.gov/search?number=1235623372",
    credentials: [
      { label: "NPI Number", value: "1235623372" },
      { label: "Provider Status", value: "Active" },
      { label: "Licensed State", value: "California" },
      { label: "Medical Specialty", value: "General Medicine" },
    ],
    educationIntro:
      "Dr. Miller's medical education and residency training provide the foundation for his clinical practice.",
    education: [
      {
        school: "Washington University/B-JH/SLCH Consortium",
        detail: "Residency in Orthopaedic Surgery, 2018–2020",
      },
      {
        school: "Columbia University Vagelos College of Physicians and Surgeons",
        detail: "Doctor of Medicine (M.D.), Class of 2018",
      },
      {
        school: "University of Alabama at Birmingham",
        detail:
          "B.A. in Foreign Languages and Literatures - Spanish, Summa Cum Laude, 2009–2014",
      },
    ],
    about: [
      "Dr. Johnathan Miller is a physician who provides patient-centered medical consultations through telehealth. His professional provider information is listed in the federal National Provider Identifier Registry, allowing relevant credentials to be independently verified.",
      "With approximately eight years of medical experience, Dr. Miller brings a comprehensive approach to patient consultations. He reviews relevant health information, discusses symptoms and medical concerns, and considers each patient's individual circumstances during the evaluation process.",
      "His telehealth consultations are designed to provide patients with a convenient and confidential way to discuss medical cannabis as a potential treatment option.",
    ],
    roleHeading: "Dr. Miller's Role in Medical Cannabis Evaluations",
    roleIntro:
      "As a physician providing medical cannabis evaluations, Dr. Miller conducts secure online consultations for eligible patients.",
    roleListIntro: "During a consultation, he may:",
    roleItems: [
      "Review your medical history",
      "Discuss your current symptoms and health concerns",
      "Review relevant medications and treatments",
      "Discuss your questions about medical cannabis",
      "Evaluate whether medical cannabis may be appropriate",
      "Explain the next steps if you are approved",
    ],
    roleNote:
      "Each evaluation is based on the patient's individual medical circumstances. Approval or certification is not guaranteed and is determined by the evaluating physician.",
    conditionsHeading: "Conditions Dr. Miller Evaluates",
    conditionsIntro:
      "Dr. Miller may evaluate patients with medical conditions for which medical cannabis may be appropriate under applicable California requirements. Depending on the patient's individual circumstances, consultations may involve:",
    conditions: [
      "Chronic pain",
      "Cancer-related symptoms",
      "PTSD",
      "Seizures",
      "Multiple sclerosis",
      "HIV/AIDS",
      "Severe nausea",
      "Other qualifying or physician-determined medical conditions",
    ],
    conditionsNote:
      "Final eligibility is determined by the evaluating physician after reviewing the patient's health history and individual circumstances.",
    expectHeading: "What to Expect During Your Consultation",
    expectIntro:
      "Your telehealth evaluation is designed to be straightforward, confidential, and focused on your individual medical needs.",
    expectSteps: [
      {
        title: "Secure Video Consultation",
        body: "Meet with Dr. Miller through a secure telehealth platform.",
      },
      {
        title: "Medical History & Symptom Review",
        body: "Discuss your medical history, symptoms, treatments, and relevant medications.",
      },
      {
        title: "Clinical Discussion",
        body: "Ask questions and discuss whether medical cannabis may be appropriate for your circumstances.",
      },
      {
        title: "Physician Evaluation",
        body: "Dr. Miller independently reviews the information provided and determines whether you meet the applicable medical criteria.",
      },
      {
        title: "Next Steps",
        body: "If approved, you will receive information about the applicable certification and the next steps in the California medical cannabis process.",
      },
    ],
    expectNote:
      "Typical consultation time: approximately 15–30 minutes, depending on the patient's circumstances.",
    privacyHeading: "Trust & Verification",
    privacy: [
      "Dr. Johnathan Miller's healthcare provider information is publicly accessible through the federal NPI Registry.",
    ],
    privacyItems: [
      "8 years of medical experience",
      "Active NPI record",
      "Medical education and residency training listed above",
      "Secure technology used for telehealth consultations",
      "Patient-focused approach to medical evaluations",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Miller evaluate?",
        answer:
          "Dr. Miller may evaluate patients with conditions such as chronic pain, cancer-related symptoms, PTSD, seizures, multiple sclerosis, HIV/AIDS, severe nausea, and other conditions that may qualify for medical cannabis under applicable California requirements. Final eligibility is determined during the medical evaluation.",
      },
      {
        question: "How long does an evaluation with Dr. Miller take?",
        answer:
          "A typical consultation takes approximately 15–30 minutes. The actual duration may vary depending on your medical history, symptoms, medications, and questions.",
      },
      {
        question: "Is the consultation secure?",
        answer:
          "Yes. Consultations are conducted through a secure telehealth platform designed to support confidential communication and the protection of patient information.",
      },
      {
        question: "When will I receive my certification?",
        answer:
          "If Dr. Miller determines that you meet the applicable medical criteria, you will receive information about the next steps following your evaluation. Processing and documentation timelines can vary, so certification should not be presented as guaranteed or automatically issued the same day.",
      },
      {
        question: "Do I need medical records?",
        answer:
          "Medical records may be helpful, but whether they are required depends on your individual circumstances and the physician's clinical evaluation. You should provide accurate information about your medical history, current symptoms, medications, and previous treatments.",
      },
      {
        question: "Will I automatically be approved?",
        answer:
          "No. Approval is not guaranteed. Dr. Miller makes an independent clinical determination based on the information available during the consultation and applicable requirements.",
      },
      {
        question: "Can I request Dr. Miller specifically?",
        answer:
          "You may request Dr. Miller when scheduling, subject to physician availability. If he is unavailable, another qualified physician may be available to conduct your evaluation.",
      },
      {
        question: "What happens after I am approved?",
        answer:
          "If you are approved, you will receive instructions explaining the applicable next steps for your California medical cannabis process. The specific process may depend on your circumstances and the type of documentation or registration you are pursuing.",
      },
    ],
    ctaHeading: "Ready for Your California Medical Cannabis Evaluation?",
    cta: "Schedule a confidential telehealth consultation with Dr. Johnathan Miller, MD, and discuss whether medical cannabis may be appropriate for your individual medical needs.",
  },
  "rick-rieser": {
    subtitle: "Nuclear Medicine Physician • Medical Cannabis Evaluations",
    intro:
      "Dr. Rick Rieser is an active physician listed in the National Provider Identifier (NPI) Registry specializing in Nuclear Medicine. Through secure telehealth consultations, he evaluates California patients seeking medical cannabis certification based on qualifying health conditions and applicable state medical guidelines. His clinical reviews emphasize responsible medical decision-making, patient safety, and regulatory compliance.",
    heroCta: "Start Your Evaluation",
    credentialsIntro:
      "Dr. Rick Rieser is registered as an individual healthcare provider under the federal NPPES system managed by the Centers for Medicare & Medicaid Services (CMS). His physician profile confirms active professional status and recognized medical specialization.",
    npiUrl: "https://npiregistry.cms.hhs.gov/search?number=1740735737",
    credentials: [
      { label: "NPI Number", value: "1740735737" },
      { label: "Status", value: "Active" },
      { label: "Licensed State", value: "California" },
    ],
    educationHeading: "Education & Professional Registration",
    educationIntro:
      "Verifiable credentials backing every clinical evaluation Dr. Rick Rieser conducts.",
    education: [
      {
        school: "University of Louisville School of Medicine",
        detail: "Class of 1983, MD",
      },
      {
        school: "American Board of Nuclear Medicine",
      },
    ],
    licensedPractice: {
      heading: "Licensed Practice Location",
      intro:
        "Dr. Rick Rieser maintains an active medical license in the State of California, enabling him to provide physician services consistent with state healthcare regulations.",
      items: [{ label: "California", value: "License G55156" }],
    },
    about: [
      "Dr. Rick Rieser practices within the field of Nuclear Medicine, a specialty focused on diagnostic assessment and clinical evaluation using advanced medical methodologies. His work involves reviewing patient history, medical symptoms, and treatment considerations to determine appropriate healthcare recommendations.",
    ],
    roleHeading: "My Role at Medical Marijuana Card Santa Ana",
    roleIntro:
      "At Medical Marijuana Card Santa Ana, I provide telehealth evaluations for patients seeking eligibility for medical cannabis certification under California's medical marijuana program. The platform enables patients to connect with licensed physicians through a streamlined online process focused on accessibility, efficiency, and convenience. Patients complete an online intake form followed by a brief virtual consultation where medical eligibility is reviewed. When appropriate, a physician recommendation may be issued to support California's Medical Marijuana Identification Card (MMIC) registration.",
    conditionsHeading: "Conditions Dr. Rick Rieser Evaluates",
    conditionsIntro:
      "Dr. Rick Rieser evaluates patients experiencing a range of qualifying medical conditions that may benefit from medical cannabis therapy under California's program.",
    conditions: [
      "Chronic Pain",
      "Anxiety Disorders",
      "PTSD",
      "Arthritis",
      "Neurological Discomfort",
      "Cancer",
      "Insomnia",
      "Other Qualifying Conditions",
    ],
    privacyHeading: "Trust & Verification",
    privacy: [
      "Dr. Rick Rieser is listed within the official National Provider Identifier Registry maintained by the U.S. Department of Health & Human Services. His physician profile confirms active healthcare provider status and recognized specialty classification.",
    ],
    privacyItems: [
      "Years of Experience - Dr. Rick Rieser brings over decades of clinical medical experience.",
      "HIPAA-Compliant Platform - All evaluations are conducted using encrypted, HIPAA-compliant technology.",
    ],
    faqIntro:
      "Specific to consultations with Dr. Rick Rieser. For general questions, see our main FAQ.",
    faqs: [
      {
        question: "Is Dr. Rick Rieser a licensed physician?",
        answer:
          "Yes. Dr. Rick Rieser is listed as an active healthcare provider in the NPPES NPI Registry.",
      },
      {
        question: "Are consultations completed online?",
        answer:
          "Yes. Consultations are conducted online through a secure telehealth platform, allowing patients to complete their medical evaluation remotely.",
      },
      {
        question: "How long does the appointment take?",
        answer:
          "Most consultations typically take 15–30 minutes, although the duration may vary depending on the patient's medical history, symptoms, and individual circumstances.",
      },
      {
        question: "Will I receive certification the same day?",
        answer:
          "If the physician determines that you meet the applicable medical criteria, certification may be completed following the consultation. Same-day certification is not guaranteed and depends on the physician's evaluation and any required documentation.",
      },
    ],
    faqCta: { label: "Contact Our Support Team", href: "/contact-us/" },
  },
};

export function getDoctorProfile(slug: string) {
  return doctorProfiles[slug];
}
