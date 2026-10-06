import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { trustBadges } from "@/data/homepage";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const marqueeItems = [...trustBadges, ...trustBadges];

function FooterLinkColumn({
  heading,
  links,
  navLabel,
}: {
  heading: string;
  links: readonly { label: string; href: string }[];
  navLabel: string;
}) {
  return (
    <nav aria-label={navLabel}>
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-200/80">
        {heading}
      </p>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-all duration-200 hover:translate-x-0.5 hover:text-brand-200"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-brand-400/60 transition-colors group-hover:bg-accent-400" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-[#FAFAF7] pt-3 sm:pt-4">
      <footer className="relative overflow-hidden rounded-t-[2rem] border border-b-0 border-brand-800/40 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-950 shadow-elevated sm:rounded-t-[2.5rem] md:rounded-t-[3rem]">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(45,212,191,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(249,115,22,0.12), transparent 50%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        {/* Trust marquee band */}
        <div className="relative overflow-hidden border-b border-white/10 py-5 sm:py-6">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee">
              {marqueeItems.map((badge, i) => (
                <span
                  key={`${badge}-${i}`}
                  className="mx-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm sm:mx-4 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  <Shield className="size-3.5 shrink-0 text-brand-300" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Container className="relative pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 sm:pt-12 md:pt-14 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Brand + contact */}
            <div className="lg:col-span-7 xl:col-span-6">
              <Link
                href="/"
                className="group inline-flex items-center"
                aria-label={`${siteConfig.name} home`}
              >
                <Image
                  src="/brand-logo-light.webp"
                  alt="Medical Marijuana Santa Ana"
                  width={1917}
                  height={368}
                  className="h-auto w-56 sm:w-64"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </Link>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-brand-100/75 sm:text-[0.9375rem]">
                Licensed medical marijuana evaluations for Santa Ana and Orange
                County patients. HIPAA-compliant telehealth with same-day
                appointments.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  aria-label={`Call us at ${siteConfig.phoneDisplay}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-brand-400/30 hover:bg-white/10"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200 transition-colors group-hover:bg-brand-400/25">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-300/70">
                      Call Us
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-white">
                      {siteConfig.phoneDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Email us at ${siteConfig.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-brand-400/30 hover:bg-white/10"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200 transition-colors group-hover:bg-brand-400/25">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold uppercase tracking-wider text-brand-300/70">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-300/70">
                      Office
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-white/90">
                      {siteConfig.address.street}, {siteConfig.address.city},{" "}
                      {siteConfig.address.state} {siteConfig.address.zip}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 text-accent-200">
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-300/70">
                      Hours
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-white/90">
                      {siteConfig.businessHours}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#apply" variant="accent" size="md" className="sm:w-auto">
                  Get My Card
                  <ArrowUpRight className="size-4" />
                </Button>
                <Button
                  href="/contact-us"
                  variant="outline"
                  size="md"
                  className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-5 lg:gap-12 xl:col-span-6 xl:justify-items-end">
              <FooterLinkColumn
                heading="Resources"
                links={footerNav.resources}
                navLabel="Footer resources"
              />
              <FooterLinkColumn heading="Legal" links={footerNav.legal} navLabel="Footer legal" />

              {/* Decorative trust card — hidden on smallest screens, shown from sm */}
              <div className="col-span-2 hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 backdrop-blur-sm sm:block lg:col-span-2 xl:max-w-md xl:justify-self-end">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300">
                    <Leaf className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      State-Compliant Care
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-brand-100/70 sm:text-sm">
                      Evaluations follow California Medical Marijuana
                      Identification Card Program guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-8 md:mt-14">
            <div className="flex flex-col gap-4 text-center sm:text-left lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <p className="mx-auto max-w-3xl text-xs leading-relaxed text-brand-100/60 sm:mx-0 sm:text-[13px]">
                This website does not sell medicine nor controlled substances.
                It is a network of doctors and nurse practitioners, not a
                pharmacy or dispensary.
              </p>
              <p className="shrink-0 text-xs font-medium text-brand-200/70 sm:text-[13px]">
                © {year} {siteConfig.name}. All Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
