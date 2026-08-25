/* LVMR Group — inner-page chrome, matched to the homepage design language (charcoal, teal, gold). */
"use client";

import { ReactNode, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandSet } from "@/lib/site";

const nav = [
  ["Accueil", "/"],
  ["Le Groupe", "/groupe"],
  ["LVMR Premium", "/premium"],
  ["LVMR Environnement", "/environnement"],
  ["Nos réalisations", "/realisations"],
  ["Contact", "/contact"],
];

function BrandMark() {
  return (
    <span className="flex items-center" aria-label="LVMR Group">
      <img src={brandSet.groupHorizontal} alt="LVMR Group — L’excellence en toutes circonstances" className="h-8 w-auto sm:h-9" />
    </span>
  );
}

export function usePageMeta({ title, description, path, schema }: { title: string; description: string; path: string; schema?: Record<string, unknown> }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attribute: string, key: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${window.location.origin}${path}`);
    setMeta("name", "twitter:card", "summary_large_image");
    let canonical = document.head.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;
    document.getElementById("lvmr-page-schema")?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "lvmr-page-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => document.getElementById("lvmr-page-schema")?.remove();
  }, [title, description, path, schema]);
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <div className="site-header-bar">
        <Link href="/" aria-label="Accueil"><BrandMark /></Link>
        <nav className="hidden shrink-0 items-center gap-0.5 rounded-full bg-[#202020]/[0.04] p-1 lg:flex" aria-label="Navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link" data-active={location === href}>{label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+33671849341" className="hidden whitespace-nowrap items-center gap-1.5 px-2 text-[12px] font-bold text-[#202020] xl:inline-flex"><Phone size={14} className="text-[#6b6b6b]" />06 71 84 93 41</a>
          <Link
            href="/devis"
            className="hidden min-h-11 whitespace-nowrap items-center gap-2 rounded-full bg-[#ffc547] px-5 text-[13px] font-bold text-[#202020] shadow-[0_8px_22px_rgba(255,197,71,.35)] transition hover:bg-[#b07e2b] lg:inline-flex"
          >
            Demander un devis <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#202020] text-white lg:hidden"
            aria-label={open ? "Fermer" : "Menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav-panel mx-auto mt-2 max-w-[1120px] overflow-y-auto rounded-[20px] border border-white/60 bg-white/95 p-3 shadow-[0_16px_40px_rgba(32,32,32,.12)] backdrop-blur-xl sm:rounded-[24px]">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#202020] hover:bg-[#f5f5f5]"
            >
              {label}
              <ArrowRight size={15} className="text-[#6b6b6b]" />
            </Link>
          ))}
          <Link
            href="/devis"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#ffc547] text-[14px] font-bold text-[#202020]"
          >
            Obtenir un devis <ArrowRight size={14} />
          </Link>
          <a href="tel:+33671849341" className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-[#202020]/10 text-[13px] font-bold text-[#202020]"><Phone size={14} />06 71 84 93 41</a>
        </div>
      )}
    </header>
  );
}

export function Breadcrumbs({ current, parent, dark = false }: { current: string; parent?: { label: string; href: string }; dark?: boolean }) {
  const link = dark ? "text-white/50 hover:text-[#f1f1f1]" : "text-[#424242] hover:text-[#6b6b6b]";
  return (
    <nav aria-label="Fil d’Ariane" className={`inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold backdrop-blur-md ${dark ? "border-white/12 bg-white/[.06]" : "border-[#202020]/8 bg-white/70"}`}>
      <Link href="/" className={link}>Accueil</Link>
      <ChevronRight size={12} className={dark ? "text-white/30" : "text-[#424242]/60"} />
      {parent && (<><Link href={parent.href} className={link}>{parent.label}</Link><ChevronRight size={12} className={dark ? "text-white/30" : "text-[#424242]/60"} /></>)}
      <span className={dark ? "text-white" : "text-[#202020]"}>{current}</span>
    </nav>
  );
}

/* Cinematic dark hero — same stage as the homepage: charcoal, grid, teal glow, gold-ready CTAs. */
export function PageHero({ eyebrow, title, intro, image, logo, accent = "#f1f1f1", children }: { eyebrow: string; title: ReactNode; intro?: string; image?: string; logo?: string; accent?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#202020] pb-14 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24" style={{ "--page-accent": accent } as React.CSSProperties}>
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-16 h-[460px] w-[460px] rounded-full bg-[#6b6b6b]/14 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#f1f1f1]/10 blur-[110px]" aria-hidden />
      <div className="container relative z-10">
        <Breadcrumbs dark current={typeof title === "string" ? title : eyebrow} />
        {logo && <img src={logo} alt="" className="mt-8 h-10 w-auto sm:h-12" />}
        <div className="mt-7 grid gap-6 sm:mt-9 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: accent }} aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>{eyebrow}</p>
            </div>
            <h1 className="mt-5 max-w-[760px] text-[clamp(2.2rem,9vw,4.4rem)] font-extrabold leading-[.98] tracking-[-0.055em] sm:mt-6">{title}</h1>
          </div>
          <div className="max-w-[430px] lg:pb-1">
            {intro && <p className="text-[15px] leading-7 text-white/65">{intro}</p>}
            {children}
          </div>
        </div>
        {image && (
          <div className="relative mt-8 overflow-hidden rounded-[20px] border border-white/12 shadow-[0_28px_80px_rgba(0,0,0,.28)] sm:mt-10 sm:rounded-[28px]">
            <img src={image} alt="" className="h-40 w-full object-cover sm:h-52 lg:h-60" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.72),transparent_62%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1f1f1] to-transparent opacity-70" aria-hidden />
          </div>
        )}
      </div>
    </section>
  );
}

export function CTASection({ title = <>Un besoin spécifique ? Parlons-en.</>, text = "Chaque espace et chaque contrainte sont différents." }: { dark?: boolean; title?: ReactNode; text?: string }) {
  return (
    <section className="bg-[#f5f5f5] py-8 sm:py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-[24px] bg-[#202020] px-6 py-9 text-white shadow-[0_24px_70px_rgba(32,32,32,.28)] sm:rounded-[28px] sm:px-10 sm:py-11 lg:px-12">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#6b6b6b]/16 blur-[110px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#f1f1f1]/10 blur-[100px]" aria-hidden />
          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#f1f1f1]" aria-hidden />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f1f1f1]">Contact</p>
              </div>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.04] tracking-[-0.05em]">{title}</h2>
            </div>
            <div className="max-w-[340px]">
              <p className="text-[14px] leading-7 text-white/60">{text}</p>
              <Link
                href="/devis"
                className="mt-6 inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-[#ffc547] px-7 text-[13px] font-extrabold text-[#202020] shadow-[0_12px_32px_rgba(255,197,71,.28)] transition hover:-translate-y-0.5 hover:bg-[#b07e2b] hover:shadow-[0_18px_40px_rgba(255,197,71,.38)]"
              >
                Demander un devis <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#202020] text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#6b6b6b]/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#6b6b6b]/10 blur-3xl" aria-hidden />

      <div className="container relative pb-24 pt-12 sm:py-14 lg:py-14">
        <div className="flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[460px]">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="LVMR Group">
              <img src={brandSet.groupHorizontalWhite} alt="LVMR Group" className="h-11 w-auto" />
            </Link>
            <h2 className="mt-6 text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold leading-[1.12] tracking-[-0.04em]">
              L’excellence en <span className="text-[#6b6b6b]">toutes circonstances.</span>
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-white/55">
              Propreté professionnelle & interventions techniques · Saint-Germain-en-Laye · Île-de-France
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <nav className="flex flex-wrap gap-2" aria-label="Footer">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] font-semibold text-white/75 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/devis"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffc547] px-5 text-[13px] font-bold text-[#202020] shadow-[0_10px_28px_rgba(255,197,71,.35)] transition hover:bg-[#b07e2b]"
            >
              Devis <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 px-1 text-[12px] text-white/35 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} LVMR Group</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-white/70">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white/70">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-white/70">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode; darkHeader?: boolean }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#202020]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <Link href="/devis" className="mobile-quote-cta fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#202020] text-[14px] font-bold text-white shadow-lg lg:hidden">
        Demander un devis <ArrowRight size={14} />
      </Link>
    </div>
  );
}
