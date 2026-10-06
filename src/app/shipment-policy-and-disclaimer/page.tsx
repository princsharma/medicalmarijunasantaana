import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

const formattedAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export const metadata: Metadata = buildMetadata({
  title: "Shipment Policy & Disclaimer",
  description:
    "Shipping timelines for physical MMIC ID cards and important legal disclaimers about our Santa Ana telehealth service.",
  path: "/shipment-policy-and-disclaimer",
});

export default function ShipmentPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Shipment Policy & Disclaimer" }]} />
      <LegalPage
        title="Shipment Policy & Disclaimer"
        intro={[
          `At ${siteConfig.name}, we make sure your medical marijuana card is delivered safely and on time. Once your application is approved, your card will be shipped, and you can expect to receive it within 10–12 business days.`,
          "If your card doesn't arrive, or if it comes damaged or with incorrect details, please contact us immediately. Our team will review your case and respond within 24 hours.",
        ]}
        sections={[
          {
            heading: "Support & Contact",
            body: [
              `Our team is available during ${siteConfig.businessHours} to assist with shipping questions or concerns.`,
              `Email: ${siteConfig.email}`,
              `Phone: ${siteConfig.phoneDisplay}`,
              `Address: ${formattedAddress}`,
              "We remain committed to ensuring your Medical Marijuana Card reaches you securely and on time.",
            ],
          },
          {
            heading: "Disclaimer",
            body: [
              `The information on this website is for educational purposes only and should not be taken as medical or legal advice. ${siteConfig.name} is not a medical clinic and does not provide direct medical treatment. Our role is to connect California patients with licensed healthcare professionals who are authorized to evaluate qualifying conditions for medical marijuana use under California law.`,
              "Approval is based solely on the evaluating physician's decision, and not every applicant will qualify. Medical marijuana use is governed by California state law and may also be subject to local regulations in Orange County and Santa Ana. Patients are responsible for knowing and following all applicable laws.",
            ],
          },
        ]}
      />
    </>
  );
}
