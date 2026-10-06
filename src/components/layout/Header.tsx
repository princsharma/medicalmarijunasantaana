"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const sectionIds = mainNav
  .filter((item) => item.href.startsWith("/#"))
  .map((item) => item.href.replace("/#", ""));

function normalizePath(value: string) {
  return value.replace(/\/+$/, "") || "/";
}

function isRouteActive(pathname: string, href: string) {
  const path = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

function useScrolled(threshold = 12) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrolled;
}

function useActiveSection(ids: string[]) {
  const pathname = usePathname();
  // Always null on first render so server HTML matches the client (hydration-safe).
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (normalizePath(pathname) !== "/") {
      setActiveId(null);
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (ids.includes(hash)) {
      setActiveId(hash);
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      setActiveId(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, pathname]);

  useEffect(() => {
    if (normalizePath(pathname) !== "/") return;

    const nextUrl = activeId ? `/#${activeId}` : "/";
    const currentUrl = `${window.location.pathname}${window.location.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  }, [activeId, pathname]);

  return activeId;
}

export function Header() {
  const pathname = usePathname();
  const activeId = useActiveSection(sectionIds);
  const isScrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-brand-800/60 bg-brand-950/95 shadow-lg shadow-brand-950/30 backdrop-blur-xl sm:rounded-b-[1.75rem]"
          : "border-white/10 bg-brand-950/80 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/brand-logo-light.webp"
              alt="Medical Marijuana Santa Ana"
              width={1917}
              height={368}
              priority
              className="h-auto w-36 sm:w-48"
              sizes="(max-width: 640px) 144px, 192px"
            />
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) => {
              const isHashLink = item.href.startsWith("/#");
              const sectionId = item.href.replace("/#", "");
              const isActive = isHashLink
                ? activeId === sectionId
                : isRouteActive(pathname, item.href);

              const linkClass = cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4",
                isActive
                  ? "text-white"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              );

              const content = (
                <>
                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20" />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              );

              return isHashLink ? (
                <a key={item.href} href={item.href} className={linkClass}>
                  {content}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {content}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              aria-label={`Call us at ${siteConfig.phoneDisplay}`}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/90 transition-all hover:border-white/20 hover:bg-white/10 xl:inline-flex"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-brand-500/25 text-brand-200">
                <Phone className="size-3.5" aria-hidden="true" />
              </span>
              {siteConfig.phoneDisplay}
            </a>
            <Button href="#apply" variant="accent" size="sm" className="rounded-full px-5">
              Get My Card
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all lg:hidden",
              mobileOpen
                ? "border-white/25 bg-white/15 text-white"
                : "border-white/15 bg-white/10 text-white hover:bg-white/15"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-brand-950/98 backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "visible max-h-[calc(100dvh-4rem)] opacity-100" : "invisible max-h-0 opacity-0"
        )}
      >
        <Container className="py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <nav id="mobile-navigation" className="flex flex-col gap-2" aria-label="Mobile navigation">
            {mainNav.map((item) => {
              const isHashLink = item.href.startsWith("/#");
              const sectionId = item.href.replace("/#", "");
              const isActive = isHashLink
                ? activeId === sectionId
                : isRouteActive(pathname, item.href);

              const linkClass = cn(
                "flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-all",
                isActive
                  ? "border-brand-400/30 bg-brand-500/15 text-white"
                  : "border-white/10 bg-white/5 text-white/90 hover:border-white/20 hover:bg-white/10"
              );

              const content = (
                <>
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-4 opacity-60" />
                </>
              );

              return isHashLink ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {content}
                </Link>
              );
            })}

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              aria-label={`Call us at ${siteConfig.phoneDisplay}`}
              className="mt-1 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all hover:border-brand-400/30 hover:bg-white/10"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                <Phone className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-300/80">
                  Call Us
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-white">
                  {siteConfig.phoneDisplay}
                </span>
              </span>
            </a>

            <Button
              href="#apply"
              variant="accent"
              fullWidth
              className="mt-2 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Get My Card
              <ArrowUpRight className="size-4" />
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
