/* LVMR Group — inner-page chrome, matched to the homepage design language (charcoal, teal, gold). */
"use client";

import { ReactNode, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandSet } from "@/lib/site";
import { ogImagePath } from "@/lib/site-url";
import { useSiteHeaderScroll } from "@/lib/useSiteHeaderScroll";

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
  const schemaKey = schema ? JSON.stringify(schema) : "";

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
    setMeta("property", "og:image", `${window.location.origin}${ogImagePath}`);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", `${window.location.origin}${ogImagePath}`);
    let canonical = document.head.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;
    document.getElementById("lvmr-page-schema")?.remove();
    if (schemaKey) {
      const script = document.createElement("script");
      script.id = "lvmr-page-schema";
      script.type = "application/ld+json";
      script.textContent = schemaKey;
      document.head.appendChild(script);
    }
    return () => document.getElementById("lvmr-page-schema")?.remove();
  }, [title, description, path, schemaKey]);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = usePathname();
  const { scrolled, hidden } = useSiteHeaderScroll(open);

  return (
    <header className="site-header" data-scrolled={scrolled || open} data-hidden={hidden && !open}>
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
    <section className="relative overflow-hidden bg-[#202020] pb-10 pt-24 text-white sm:pb-12 sm:pt-28 lg:pb-14" style={{ "--page-accent": accent } as React.CSSProperties}>
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-16 h-[460px] w-[460px] rounded-full bg-[#6b6b6b]/14 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#f1f1f1]/10 blur-[110px]" aria-hidden />
      <div className="container relative z-10">
        <Breadcrumbs dark current={typeof title === "string" ? title : eyebrow} />
        <div className="mt-5 grid gap-6 sm:mt-6 sm:gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:gap-10">
          <div>
            {logo && (
              <Link href="/" aria-label="Retour à l’accueil" className="inline-flex">
                <img src={logo} alt="LVMR Group" className="h-9 w-auto sm:h-10" />
              </Link>
            )}
            <div className={`${logo ? "mt-6" : ""} flex items-center gap-3`}>
              <span className="h-px w-8" style={{ backgroundColor: accent }} aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>{eyebrow}</p>
            </div>
            <h1 className="mt-4 max-w-[640px] text-[clamp(2rem,5.5vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.05em] sm:mt-5">{title}</h1>
            {intro && <p className="mt-5 max-w-[540px] text-[14px] leading-7 text-white/65">{intro}</p>}
            {children}
          </div>
          {image && (
            <div className="w-full max-w-[450px] lg:justify-self-end">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/12 shadow-[0_24px_64px_rgba(0,0,0,.26)] sm:rounded-[24px]">
                <img src={image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.5),transparent_58%)]" aria-hidden />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1f1f1] to-transparent opacity-70" aria-hidden />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ title = <>Un besoin spécifique ? Parlons-en.</>, text = "Chaque espace et chaque contrainte sont différents." }: { dark?: boolean; title?: ReactNode; text?: string }) {
  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-14">
      <div className="container">
        <div className="grid min-h-[300px] overflow-hidden rounded-[26px] border border-[#202020]/8 bg-white shadow-[0_24px_70px_rgba(32,32,32,.16)] sm:rounded-[30px] md:grid-cols-[1.12fr_.88fr]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#202020] p-7 text-white sm:p-10 lg:p-12">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
            <div className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#ffc547]/10 blur-[100px]" aria-hidden />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#ffc547]" aria-hidden />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc547]">Votre prochain projet</p>
              </div>
              <h2 className="mt-5 max-w-[560px] text-[clamp(2rem,4vw,3.4rem)] leading-[.98] tracking-[-0.045em]">{title}</h2>
            </div>
            <div className="relative mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[.14em] text-white/38">
              <span>LVMR Premium</span><span className="h-1 w-1 rounded-full bg-[#ffc547]" aria-hidden /><span>LVMR Environnement</span>
            </div>
          </div>

          <div className="relative flex flex-col justify-between bg-[#efede7] p-7 text-[#202020] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#ffc547] to-[#7ebcab]" aria-hidden />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#6b6b6b]">Une réponse adaptée, pas une formule toute faite</p>
              <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[#424242]">{text}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/devis"
                className="group inline-flex min-h-[52px] items-center justify-between gap-5 rounded-full bg-[#202020] py-1.5 pl-6 pr-1.5 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(32,32,32,.2)] transition hover:-translate-y-0.5 hover:bg-[#303030]"
              >
                Demander un devis <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffc547] text-[#202020] transition group-hover:translate-x-0.5"><ArrowRight size={15} /></span>
              </Link>
              <a href="tel:+33671849341" className="inline-flex min-h-[48px] items-center gap-2 px-2 text-[12px] font-extrabold text-[#202020] transition hover:text-[#6b6b6b]"><Phone size={15} />06 71 84 93 41</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#181818] text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#ffc547]/7 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#7ebcab]/8 blur-[150px]" aria-hidden />

      <div className="container relative pb-24 pt-12 sm:py-16">
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-8">
          <Link href="/" className="inline-flex items-center" aria-label="Retour à l’accueil">
            <img src={brandSet.groupHorizontalWhite} alt="LVMR Group" className="h-10 w-auto sm:h-12" />
          </Link>
          <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em] text-white/42">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ebcab] opacity-50" /><span className="relative h-2 w-2 rounded-full bg-[#7ebcab]" /></span>
            Île-de-France
          </span>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-12 lg:items-end lg:py-14">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#ffc547]">Propreté · Technique · Environnement</p>
            <h2 className="footer-headline display-font mt-5 flex max-w-[760px] flex-col gap-1 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.08] tracking-[-.04em] sm:gap-1.5 sm:leading-[1.06]">
              <span className="footer-headline-line footer-headline-line--primary block">L’excellence,</span>
              <span className="footer-headline-line footer-headline-line--secondary block">jusqu’au dernier détail.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <Link href="/devis" className="group block rounded-[26px] border border-white/12 bg-white/[.045] p-6 transition duration-300 hover:border-[#ffc547]/35 hover:bg-white/[.065] sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/38">Votre besoin, notre point de départ</p>
                  <p className="mt-4 text-[1.4rem] font-extrabold leading-[1.12] tracking-[-.03em] text-white">Parlons de votre site.</p>
                  <p className="mt-2 text-[12px] leading-6 text-white/48">Une demande claire, une réponse orientée vers le bon pôle.</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffc547] text-[#202020] transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-105"><ArrowRight size={18} /></span>
              </div>
            </Link>
            <a href="tel:+33671849341" className="mt-5 inline-flex items-center gap-3 text-[13px] font-extrabold text-white transition hover:text-[#ffc547]"><Phone size={15} className="text-[#ffc547]" />06 71 84 93 41</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="group inline-flex items-center gap-2 text-[12px] font-bold text-white/52 transition hover:text-white">
                <span className="h-1 w-1 rounded-full bg-white/20 transition group-hover:bg-[#ffc547]" aria-hidden />{label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[.11em] text-white/28 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} LVMR Group · Saint-Germain-en-Laye</span>
            <div className="flex flex-wrap gap-5 normal-case tracking-normal">
            <Link href="/conditions-generales" className="hover:text-white/70">Conditions générales</Link>
            <Link href="/confidentialite" className="hover:text-white/70">Politique de confidentialité</Link>
            <Link href="/mentions-legales" className="hover:text-white/70">Mentions légales</Link>
            <Link href="/cookies" className="hover:text-white/70">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode; darkHeader?: boolean }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f5f5] text-[#202020]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <Link href="/devis" className="mobile-quote-cta fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#202020] text-[14px] font-bold text-white shadow-lg lg:hidden">
        Demander un devis <ArrowRight size={14} />
      </Link>
    </div>
  );
}
