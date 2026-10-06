import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DoctorProfileContent } from "@/components/doctors/DoctorProfileContent";
import { doctors, doctorDisplayName, getDoctorBySlug } from "@/data/doctors";
import { getDoctorProfile } from "@/data/doctor-profiles";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};

  return buildMetadata({
    title: doctorDisplayName(doctor),
    description: `${doctor.bio} Book a telehealth medical marijuana evaluation in Santa Ana.`,
    path: `/doctors/${slug}`,
  });
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  const profile = getDoctorProfile(slug);

  if (!doctor || !profile) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Our Doctors", href: "/doctors" },
          { label: doctor.name },
        ]}
      />
      <DoctorProfileContent doctor={doctor} profile={profile} />
    </>
  );
}
