/* LVMR Group — shared premium sections, restyled on the homepage palette (charcoal #202020, teal #6b6b6b, gold #ffc547). */
"use client";
import { useState } from "react";
import { ArrowRight, Briefcase, Bug, Building2, Check, ClipboardList, Clock3, Factory, FileCheck2, FileText, Flame, Hammer, HeartPulse, Home, Landmark, MapPin, MessagesSquare, ScrollText, ShieldCheck, Sparkles, Star, Store, UserCheck, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { extractionReasons, imageSet, processSteps, ServiceItem } from "@/lib/site";

export function SectionHead({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: React.ReactNode; intro?: string; dark?: boolean }) {
  return (
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <div>
        <p className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#f1f1f1]" : "text-[#6b6b6b]"}`}>
          <span className="h-px w-5 bg-current" aria-hidden />
          {eyebrow}
        </p>
        <h2 className={`mt-4 max-w-[560px] text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em] ${dark ? "text-white" : "text-[#202020]"}`}>
          {title}
        </h2>
      </div>
      {intro && <p className={`max-w-[360px] text-[14px] leading-6 ${dark ? "text-white/60" : "text-[#424242]"}`}>{intro}</p>}
    </div>
  );
}

/* Floating glass commitments bar — overlaps the bottom edge of a dark hero. */
export function EngageBar() {
  const items = [
    [Building2, "Sites professionnels", "Bureaux & copropriétés"],
    [Clock3, "Organisation", "Planning défini avec vous"],
    [ShieldCheck, "Méthode", "Protocoles adaptés au site"],
    [MapPin, "Proximité", "Interventions en Île-de-France"],
  ] as const;
  return (
    <div className="container relative z-20 -mt-9 sm:-mt-10">
      <div className="grid gap-px overflow-hidden rounded-[20px] border border-white/12 bg-white/12 shadow-[0_24px_70px_rgba(0,0,0,.4)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([Icon, title, text]) => (
          <div key={title} className="group flex items-center gap-4 bg-[#202020]/92 px-6 py-5 transition hover:bg-[#2b2b2b]/92">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#6b6b6b]/12 text-[#f1f1f1] ring-1 ring-inset ring-[#6b6b6b]/30 transition group-hover:bg-[#6b6b6b]/20">
              <Icon size={19} />
            </span>
            <div>
              <p className="text-[13px] font-extrabold text-white">{title}</p>
              <p className="mt-0.5 text-[11px] text-white/55">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Credibility strip — full-width, no boxed container. */
export function StatsBand({ dark = false }: { dark?: boolean }) {
  const stats = [
    ["12", "expertises"],
    ["2", "pôles"],
    ["4", "étapes"],
    ["IDF", "intervention"],
  ];
  return (
    <section className={`${dark ? "bg-[#202020] text-white" : "bg-[#f5f5f5] text-[#202020]"}`}>
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`flex flex-col justify-center px-5 py-7 sm:px-6 sm:py-8 lg:px-8 ${
                index === 1
                  ? `border-l ${dark ? "border-white/10" : "border-[#202020]/10"}`
                  : index === 2
                    ? `border-t sm:border-t-0 sm:border-l ${dark ? "border-white/10" : "border-[#202020]/10"}`
                    : index === 3
                      ? `border-l border-t sm:border-t-0 ${dark ? "border-white/10" : "border-[#202020]/10"}`
                      : ""
              }`}
            >
              <p className={`text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-none tracking-[-0.04em] ${dark ? "text-[#ffc547]" : "text-[#6b6b6b]"}`}>
                {value}
              </p>
              <p className={`mt-2 text-[11px] font-bold uppercase tracking-[0.14em] ${dark ? "text-white/45" : "text-[#424242]"}`}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Connected process stage — visual journey from brief to handoff. */
export function ProcessRail({ dark = false }: { dark?: boolean }) {
  const icons = [MessagesSquare, FileText, Hammer, Check] as const;
  const accents = ["#ffc547", "#f1f1f1", "#7ebcab", "#ffc547"] as const;

  return (
    <section className={`relative overflow-hidden py-14 sm:py-20 ${dark ? "bg-[#202020]" : "bg-[#f5f5f5]"}`}>
      <div className="container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end sm:gap-10">
          <div>
            <p className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] ${dark ? "text-[#ffc547]" : "text-[#6b6b6b]"}`}>
              <span className="h-px w-7 bg-current" aria-hidden /> Notre méthode
            </p>
            <h2 className={`mt-4 max-w-[650px] text-[clamp(2rem,4.4vw,3.8rem)] leading-[.98] tracking-[-0.045em] ${dark ? "text-white" : "text-[#202020]"}`}>
              Un parcours clair.<br />Aucune zone grise.
            </h2>
          </div>
          <div className="flex items-center gap-4 sm:pb-1">
            <span className={`text-[3rem] font-extrabold leading-none ${dark ? "text-white" : "text-[#202020]"}`}>04</span>
            <p className={`max-w-[190px] border-l pl-4 text-[10px] font-bold uppercase leading-5 tracking-[.14em] ${dark ? "border-white/15 text-white/42" : "border-[#202020]/12 text-[#424242]"}`}>étapes<br />du brief au contrôle</p>
          </div>
        </div>

        <div className={`relative mt-10 overflow-hidden rounded-[30px] border ${dark ? "border-white/10 bg-white/[.035]" : "border-[#202020]/8 bg-[#202020] shadow-[0_28px_80px_rgba(32,32,32,.18)]"}`}>
          <div className="pointer-events-none absolute inset-x-[8%] top-[72px] hidden h-px bg-gradient-to-r from-[#ffc547]/40 via-white/18 to-[#7ebcab]/40 lg:block" aria-hidden />
          <ol className="m-0 grid list-none p-0 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([n, title, text], index) => {
              const Icon = icons[index] ?? Check;
              const accent = accents[index] ?? "#ffc547";
              return (
                <li
                  key={n}
                  className="group relative flex min-h-[330px] flex-col overflow-hidden border-b border-white/10 p-6 text-white transition duration-300 last:border-b-0 hover:bg-white/[.055] sm:p-7 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 sm:[&:nth-child(odd)]:border-r lg:min-h-[390px] lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <span className="pointer-events-none absolute -right-3 -top-6 text-[8rem] font-extrabold leading-none tracking-[-.08em] text-white/[.035] transition group-hover:text-white/[.065]" aria-hidden>{n}</span>
                  <div className="relative flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-white/14 bg-white/[.07] backdrop-blur" style={{ color: accent }}>
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <span className="text-[11px] font-bold tracking-[.16em]" style={{ color: accent }}>{n} / 04</span>
                  </div>
                  <div className="relative mt-auto pt-16 lg:pt-20">
                    <span className="mb-5 block h-[3px] w-9 origin-left rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: accent }} aria-hidden />
                    <h3 className="max-w-[220px] text-[1.3rem] font-extrabold leading-[1.12] tracking-[-.03em] text-white">{title}</h3>
                    <p className="mt-3 max-w-[245px] text-[12px] leading-6 text-white/52">{text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 bg-white/[.035] px-6 py-4 text-[10px] font-bold uppercase tracking-[.12em] text-white/38 sm:flex-row sm:items-center sm:px-7">
            <span>Un interlocuteur du premier échange au contrôle final</span>
            <span className="inline-flex items-center gap-2 text-[#ffc547]">Méthode LVMR <ArrowRight size={13} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Bento proof grid — photo anchor + four value cards. */
const proofs = [
  ["Exigence", "Des protocoles adaptés et un niveau de qualité constant."],
  ["Réactivité", "Une prise en charge rapide selon nos disponibilités."],
  ["Sécurité", "Des équipes encadrées et des équipements adaptés."],
  ["Discrétion", "Une organisation pensée pour limiter la gêne."],
];

export function ValueBento() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Pourquoi LVMR"
          title={<>Le détail compte. Et ça se ressent.</>}
          intro="Un lieu propre se voit. Une intervention bien menée se ressent. Voici ce qui guide chaque intervention."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <article className="group relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#202020] text-white lg:row-span-2">
            <img src={imageSet.detail} alt="Le soin du détail par LVMR" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.92),transparent_65%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#f1f1f1]">Le détail compte</p>
              <p className="mt-3 max-w-[360px] text-[clamp(1.6rem,2.6vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-.04em]">
                Un lieu propre se voit. Une intervention bien menée se ressent.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["12 expertises", "Deux pôles", "Île-de-France"].map((chip) => (
                  <span key={chip} className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3.5 py-2 text-[11px] font-bold text-white/75 backdrop-blur-md">
                    <Check size={12} className="text-[#f1f1f1]" />{chip}
                  </span>
                ))}
              </div>
            </div>
          </article>
          {proofs.map(([title, text], index) => {
            const Icon = [Clock3, ShieldCheck, Sparkles, MapPin][index];
            return (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.10)] sm:p-8"
              >
                <span className="absolute right-6 top-6 text-[2.6rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#6b6b6b]/12" aria-hidden>
                  0{index + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(107,107,107,.35)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-[-.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 max-w-[380px] text-[14px] leading-6 text-[#424242]">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* IDF coverage — dark coverage card: anchor point, department tiles, confirmation strip. */
export function ZoneSection() {
  const zones = [
    { code: "75", name: "Paris" },
    { code: "77", name: "Seine-et-Marne" },
    { code: "78", name: "Yvelines", base: true },
    { code: "91", name: "Essonne" },
    { code: "92", name: "Hauts-de-Seine" },
    { code: "93", name: "Seine-Saint-Denis" },
    { code: "94", name: "Val-de-Marne" },
    { code: "95", name: "Val-d’Oise" },
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Zone d’intervention"
          title={<>Ancrés localement, mobiles en Île-de-France.</>}
          intro="Saint-Germain-en-Laye est notre point d’ancrage. Les huit départements franciliens constituent notre terrain d’intervention naturel."
        />

        <div className="relative mt-10 overflow-hidden rounded-[26px] border border-white/10 bg-[#202020] shadow-[0_28px_80px_rgba(32,32,32,.18)]">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#ffc547]/8 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#7ebcab]/10 blur-[100px]" aria-hidden />

          <div className="relative flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center sm:px-7">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#ffc547]/30 bg-[#ffc547]/10 px-4 py-2 text-[12px] font-extrabold text-[#ffc547] backdrop-blur-md">
              <MapPin size={13} strokeWidth={2.2} />
              Saint-Germain-en-Laye · point d’ancrage
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[.14em] text-white/40">08 départements couverts</p>
          </div>

          <div className="relative grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-4">
            {zones.map((zone) => (
              <div
                key={zone.code}
                className={`group relative overflow-hidden p-5 transition duration-300 sm:p-6 ${zone.base ? "bg-[#ffc547]/[0.07]" : "bg-[#202020] hover:bg-[#2b2b2b]"}`}
              >
                <span
                  className={`text-[1.7rem] font-extrabold leading-none tabular-nums tracking-[-0.04em] ${
                    zone.base ? "text-[#ffc547]" : "text-white/22 transition duration-300 group-hover:text-white/45"
                  }`}
                  aria-hidden
                >
                  {zone.code}
                </span>
                <p className="mt-3 text-[13px] font-extrabold text-white">{zone.name}</p>
                {zone.base ? (
                  <span className="mt-2.5 inline-flex rounded-full bg-[#ffc547] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#202020]">
                    Siège du groupe
                  </span>
                ) : (
                  <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[.11em] text-white/32">Intervention</p>
                )}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition duration-300 group-hover:scale-x-100 ${zone.base ? "bg-[#ffc547]" : "bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1]"}`}
                  aria-hidden
                />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col justify-between gap-3 border-t border-white/10 bg-white/[.035] px-6 py-4 text-[10px] font-bold uppercase tracking-[.12em] text-white/38 sm:flex-row sm:items-center sm:px-7">
            <span>Le périmètre exact est confirmé avec vous lors du premier échange</span>
            <Link href="/devis" className="inline-flex items-center gap-2 text-[#ffc547] transition hover:text-white">
              Confirmer votre zone <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Related services — curated picks on service detail pages. */
export function RelatedServices({ services }: { services: ServiceItem[] }) {
  if (services.length === 0) return null;

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const accent = service.group === "premium" ? "#ffc547" : "#7ebcab";

        return (
          <Link
            key={service.slug}
            href={`/${service.group}/${service.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white shadow-[0_12px_40px_rgba(32,32,32,.07)] transition duration-300 hover:-translate-y-1 hover:border-[#202020]/14 hover:shadow-[0_22px_55px_rgba(32,32,32,.14)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#202020]">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.45),transparent_55%)]" aria-hidden />
              <span
                className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#202020]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] backdrop-blur-md"
                style={{ color: accent }}
              >
                {service.kicker}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[1.08rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#202020] sm:text-[1.12rem]">
                  {service.shortTitle ?? service.title}
                </h3>
                <span className="text-[1.35rem] font-extrabold leading-none text-[#202020]/10 transition group-hover:text-[#202020]/16" aria-hidden>
                  0{index + 1}
                </span>
              </div>
              <p className="mt-2.5 line-clamp-3 flex-1 text-[13px] leading-6 text-[#424242]">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold" style={{ color: accent }}>
                Découvrir
                <span className="grid h-8 w-8 place-items-center rounded-full border border-current/20 transition group-hover:translate-x-0.5">
                  <ArrowRight size={14} />
                </span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* Service card grid — immersive inner-page cards. */
export function ServiceGrid({ services }: { services: ServiceItem[] }) {
  const isFourCardGrid = services.length === 4;

  return (
    <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${isFourCardGrid ? "lg:grid-cols-2" : "lg:grid-cols-3 xl:grid-cols-4"}`}>
      {services.map((service) => {
        const accent = service.group === "premium" ? "#ffc547" : "#7ebcab";

        return (
          <Link
            key={service.slug}
            href={`/${service.group}/${service.slug}`}
            className={`group relative flex overflow-hidden rounded-[24px] border border-white/10 bg-[#202020] text-white shadow-[0_14px_40px_rgba(32,32,32,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(32,32,32,.24)] ${
              isFourCardGrid ? "min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]" : "min-h-[320px] sm:min-h-[380px] xl:min-h-[420px]"
            }`}
          >
            <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-1000 group-hover:scale-[1.045]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,20,20,.98)_0%,rgba(24,24,24,.78)_38%,rgba(24,24,24,.12)_76%)]" />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
              <span className="rounded-full border border-white/20 bg-[#202020]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] backdrop-blur-md" style={{ color: accent }}>
                {service.kicker}
              </span>
              <span className={`font-extrabold leading-none text-white/35 ${isFourCardGrid ? "text-[2rem]" : "text-[1.5rem]"}`} aria-hidden>{service.number}</span>
            </div>
            <div className="relative z-10 mt-auto p-6 sm:p-7">
              <h3 className={`max-w-[340px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white ${isFourCardGrid ? "text-[1.35rem]" : "text-[1.05rem]"}`}>
                {isFourCardGrid ? service.title : (service.shortTitle ?? service.title)}
              </h3>
              <p className={`mt-3 max-w-[360px] leading-6 text-white/68 ${isFourCardGrid ? "text-[13px]" : "line-clamp-2 text-[12px]"}`}>{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold" style={{ color: accent }}>
                Découvrir <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* Two-pole orientation block — helps visitors pick Premium vs Environnement. */
export function PolesComparison() {
  const poles = [
    {
      name: "LVMR Premium",
      accent: "#ffc547",
      href: "/premium",
      tagline: "La propreté au quotidien",
      items: [
        "Entretien régulier de bureaux et copropriétés",
        "Vitrerie et surfaces vitrées accessibles",
        "Remise en état après travaux ou déménagement",
        "Discrétion en site occupé",
      ],
      cta: "Découvrir LVMR Premium",
    },
    {
      name: "LVMR Environnement",
      accent: "#7ebcab",
      href: "/environnement",
      tagline: "Les situations techniques",
      items: [
        "Après sinistre et situations complexes",
        "Nettoyage industriel et locaux techniques",
        "Hottes et systèmes d’extraction",
        "Pôle 3D : nuisibles et désinfection",
      ],
      cta: "Découvrir LVMR Environnement",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#202020] py-14 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#ffc547]/8 blur-[110px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#7ebcab]/10 blur-[110px]" aria-hidden />
      <div className="container relative">
        <SectionHead
          dark
          eyebrow="S’orienter"
          title={<>Quel pôle pour votre besoin ?</>}
          intro="Deux équipes, deux savoir-faire. Un seul interlocuteur qui vous oriente vers la bonne réponse."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {poles.map((pole) => (
            <article key={pole.name} className="group relative flex flex-col rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[1.2rem] font-extrabold tracking-[-0.03em]" style={{ color: pole.accent }}>{pole.name}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">{pole.tagline}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition group-hover:bg-white group-hover:text-[#202020]"><ArrowRight size={16} /></span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {pole.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-6 text-white/72">
                    <Check size={15} className="mt-[5px] shrink-0" style={{ color: pole.accent }} />{item}
                  </li>
                ))}
              </ul>
              <Link
                href={pole.href}
                className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] px-6 text-[13px] font-extrabold text-[#202020] transition hover:-translate-y-0.5"
                style={{ background: pole.accent }}
              >
                {pole.cta} <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[13px] text-white/55">
          Un doute sur le bon pôle ?
          <Link href="/devis" className="font-extrabold text-white underline-offset-4 transition hover:underline">Décrivez votre besoin, nous vous orientons.</Link>
        </p>
      </div>
    </section>
  );
}

/* Sectors covered — the environments LVMR works in. */
export function SectorsSection() {
  const sectors = [
    [Building2, "Bureaux & tertiaire", "Sièges sociaux, plateaux de bureaux et espaces de travail."],
    [Home, "Copropriétés & résidences", "Parties communes tenues avec discrétion, dans le respect des résidents."],
    [Store, "Commerces & retail", "Surfaces de vente, vitrines et espaces ouverts au public."],
    [HeartPulse, "Santé & médical", "Cabinets, structures de soins et environnements exigeants."],
    [UtensilsCrossed, "Hôtellerie & restauration", "Cuisines, salles et installations d’extraction."],
    [Factory, "Industrie & logistique", "Ateliers, entrepôts et locaux techniques."],
    [Landmark, "ERP & établissements publics", "Écoles, équipements publics et sites recevant du public."],
    [Briefcase, "Gestionnaires & syndics", "Syndics, bailleurs et administrateurs de biens."],
  ] as const;
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Secteurs d’intervention"
          title={<>Des environnements variés, une même exigence.</>}
          intro="Chaque site a ses contraintes : fréquentation, horaires, sécurité. L’intervention s’organise en conséquence."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map(([Icon, title, text]) => (
            <article key={title} className="group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.10)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white">
                <Icon size={19} />
              </span>
              <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Client voices — editorial spotlight with selectable testimonials. */
export function TestimonialsSection() {
  const voices = [
    {
      quote: "Les parties communes sont tenues et les résidents ne s’aperçoivent de rien. C’est exactement ce que nous attendons.",
      role: "Syndic de copropriété",
      place: "Yvelines",
      accent: "#ffc547",
    },
    {
      quote: "Intervention rapide, méthode claire et compte rendu précis à la fin. On sait ce qui a été fait, et comment.",
      role: "Responsable de site tertiaire",
      place: "Paris",
      accent: "#f1f1f1",
    },
    {
      quote: "Après le sinistre, l’équipe a remis le local en état sans ajouter de stress à une situation déjà compliquée.",
      role: "Gérant de commerce",
      place: "Essonne",
      accent: "#7ebcab",
    },
  ] as const;
  const [active, setActive] = useState(0);
  const voice = voices[active];

  return (
    <section className="relative overflow-hidden bg-[#202020] py-14 sm:py-20">
      <div className="pointer-events-none absolute -left-28 top-0 h-56 w-56 rounded-full bg-[#ffc547]/8 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#7ebcab]/10 blur-[100px]" aria-hidden />

      <div className="container relative">
        <SectionHead
          dark
          eyebrow="Ils nous font confiance"
          title={<>La parole aux sites que nous entretenons.</>}
          intro="Retours terrains anonymisés, conformément à notre politique de publication."
        />

        <div className="mt-7 grid gap-3 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-4">
          <article className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035]">
            <span className="pointer-events-none absolute -right-1 -top-6 display-font text-[5.5rem] leading-none tracking-[-0.06em] text-white/[0.04] sm:text-[6.5rem]" aria-hidden>
              “
            </span>

            <div key={active} className="voice-fade relative flex flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={10} className="fill-[#ffc547] text-[#ffc547]" />
                  ))}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/35">Retour terrain · 0{active + 1}/03</span>
              </div>

              <blockquote className="display-font mt-4 text-[clamp(1.15rem,2.2vw,1.55rem)] leading-[1.22] tracking-[-0.025em] text-white">
                {voice.quote}
              </blockquote>

              <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="text-[13px] font-extrabold text-white">{voice.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.11em]" style={{ color: voice.accent }}>
                    <MapPin size={11} strokeWidth={2.2} />
                    {voice.place}
                  </p>
                </div>
              </figcaption>
            </div>
          </article>

          <div className="flex flex-row gap-2 lg:flex-col">
            {voices.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.role}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(index)}
                  className={`group relative flex-1 overflow-hidden rounded-[16px] border px-3 py-3 text-left transition duration-300 sm:px-4 lg:flex-none ${
                    isActive
                      ? "border-[#ffc547]/35 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/18 hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-[2px] origin-top transition duration-300 ${
                      isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                    style={{ backgroundColor: item.accent }}
                    aria-hidden
                  />
                  <p className={`pl-1 text-[9px] font-bold uppercase tracking-[.12em] ${isActive ? "text-[#ffc547]" : "text-white/30"}`}>
                    0{index + 1}
                  </p>
                  <p className="mt-1 pl-1 text-[12px] font-extrabold leading-snug text-white">{item.role}</p>
                  <p className="mt-0.5 pl-1 text-[10px] font-bold uppercase tracking-[.1em] text-white/35">{item.place}</p>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] leading-5 text-white/34">
          Les références nominatives sont communiquées sur demande, avec l’accord des clients concernés.
        </p>
      </div>
    </section>
  );
}

/* Working-method guarantees — compact reassurance band. */
export function GarantiesBand() {
  const items = [
    [FileCheck2, "Devis clair", "Un périmètre détaillé avant toute intervention."],
    [UserCheck, "Équipes encadrées", "Personnel déclaré, formé et identifié sur site."],
    [ScrollText, "Protocoles formalisés", "Des consignes écrites, adaptées à chaque lieu."],
    [ShieldCheck, "Suivi & traçabilité", "Comptes rendus et documents remis selon la prestation."],
  ] as const;
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Nos garanties"
          title={<>Une organisation qui se vérifie.</>}
          intro="Ce qui est annoncé au devis est ce qui est réalisé sur site — et ce qui peut être vérifié ensuite."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text], index) => (
            <article key={title} className="group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.10)]">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white">
                  <Icon size={19} />
                </span>
                <span className="text-[2rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#6b6b6b]/12" aria-hidden>0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageFinalCta({
  title,
  text,
  href,
  label,
  tone = "group",
}: {
  title: React.ReactNode;
  text: string;
  href: string;
  label: string;
  tone?: "group" | "premium" | "environnement";
}) {
  const btnClass =
    tone === "premium"
      ? "bg-[#ffc547] hover:bg-[#b07e2b] text-[#202020] shadow-[0_12px_32px_rgba(255,197,71,.28)]"
      : tone === "environnement"
        ? "bg-[#7ebcab] hover:bg-[#a2cebd] text-[#202020] shadow-[0_12px_32px_rgba(126,188,171,.28)]"
        : "bg-[#202020] hover:bg-[#303030] text-white shadow-[0_12px_32px_rgba(32,32,32,.2)]";

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <div className="overflow-hidden rounded-[26px] border border-[#202020]/8 bg-white p-7 shadow-[0_18px_60px_rgba(32,32,32,.08)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Prochaine étape</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#202020]">{title}</h2>
            <p className="mt-4 text-[14px] leading-7 text-[#424242]">{text}</p>
          </div>
          <Link href={href} className={`mt-6 inline-flex min-h-[52px] shrink-0 items-center gap-2 rounded-[10px] px-6 text-[13px] font-extrabold transition hover:-translate-y-0.5 lg:mt-0 ${btnClass}`}>
            {label} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyPremiumSection() {
  const reasons = [
    { icon: Sparkles, title: "Discrétion", text: "Respect des lieux occupés et interventions sans perturber votre activité." },
    { icon: UserCheck, title: "Personnel encadré", text: "Consignes d’intervention formalisées et équipes identifiées sur site." },
    { icon: Clock3, title: "Organisation", text: "Planning adapté à vos horaires, contraintes d’accès et fréquentation." },
    { icon: MessagesSquare, title: "Suivi", text: "Interlocuteur identifié et ajustements si le site ou le besoin évolue." },
    { icon: ScrollText, title: "Méthodes", text: "Produits et protocoles sélectionnés selon les surfaces et les usages." },
  ] as const;

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Pourquoi choisir LVMR Premium ?"
          title={<>Une propreté qui valorise vos espaces.</>}
          intro="LVMR Premium accompagne les professionnels et les gestionnaires de sites qui attendent davantage qu’un simple entretien courant."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          <article className="group relative min-h-[340px] overflow-hidden rounded-[28px] bg-[#202020] text-white lg:col-span-5 lg:row-span-3 lg:min-h-[520px]">
            <img
              src={imageSet.premiumTeam}
              alt="Équipe LVMR Premium en intervention discrète"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(24,24,24,.96)_0%,rgba(24,24,24,.55)_45%,rgba(24,24,24,.12)_100%)]" aria-hidden />
            <div className="relative flex h-full min-h-[340px] flex-col justify-between p-6 sm:p-8 lg:min-h-[520px]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ffc547]/30 bg-[#ffc547]/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#ffc547]">
                  LVMR Premium
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ffc547]">Au-delà de l’entretien courant</p>
                <p className="mt-4 max-w-[320px] text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-[1.12] tracking-[-0.04em]">
                  Discrétion, méthode et régularité — visibles dès le premier passage.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Site occupé", "Personnel encadré", "Interlocuteur dédié"].map((chip) => (
                    <span key={chip} className="rounded-full border border-white/16 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.08em] text-white/65">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:row-span-3 lg:grid-rows-3">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ffc547]/35 hover:shadow-[0_18px_50px_rgba(255,197,71,.12)] sm:p-6 ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <span className="absolute right-5 top-5 text-[2.2rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#ffc547]/20" aria-hidden>
                  0{index + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ffc547]/15 text-[#b07e2b] transition duration-300 group-hover:bg-[#ffc547] group-hover:text-[#202020]">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#ffc547] to-[#b07e2b] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReferencesProofSection() {
  const sectors = [
    [Store, "Commerce"],
    [Building2, "Copropriété"],
    [Factory, "Site industriel"],
    [Landmark, "Établissement"],
    [Briefcase, "Gestionnaire"],
    [Home, "Logement"],
  ] as const;

  const proofs = [
    {
      icon: FileCheck2,
      title: "Attestations d’assurance",
      text: "Disponibles sur demande, en cours de validité.",
      accent: "text-[#b07e2b]",
      glow: "bg-[#ffc547]/15 ring-[#ffc547]/25",
    },
    {
      icon: ScrollText,
      title: "Qualifications & certifications",
      text: "Présentées selon les prestations réellement couvertes.",
      accent: "text-[#5a9a88]",
      glow: "bg-[#7ebcab]/15 ring-[#7ebcab]/25",
    },
    {
      icon: ShieldCheck,
      title: "Traçabilité d’intervention",
      text: "Compte rendu, rapport ou certificat selon la mission.",
      accent: "text-[#6b6b6b]",
      glow: "bg-[#202020]/[0.06] ring-[#202020]/10",
    },
  ] as const;

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <SectionHead
          eyebrow="Références et preuves"
          title={<>Des contenus authentiques, publiés avec accord.</>}
          intro="Logos, photographies, cas clients et témoignages ne sont diffusés qu’avec l’autorisation expresse des clients concernés."
        />

        <div className="mt-10 overflow-hidden rounded-[28px] border border-[#202020]/8 bg-white shadow-[0_24px_70px_rgba(32,32,32,.08)]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="relative border-b border-[#202020]/8 bg-[linear-gradient(135deg,#fff_0%,#fafafa_55%,#f5f5f5_100%)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#ffc547]/10 blur-[80px]" aria-hidden />
              <div className="pointer-events-none absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-[#7ebcab]/10 blur-[70px]" aria-hidden />

              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#ffc547]/25 bg-[#ffc547]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#b07e2b]">
                  <ShieldCheck size={13} /> Engagement éditorial
                </p>
                <h3 className="mt-5 max-w-[420px] text-[clamp(1.55rem,2.6vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#202020]">
                  Rien n’est publié <span className="text-[#6b6b6b]">sans votre accord.</span>
                </h3>
                <p className="mt-4 max-w-[440px] text-[13px] leading-7 text-[#424242]">
                  Chaque logo, visuel ou retour d’expérience est validé par le client concerné avant diffusion — sur le site, en devis ou en présentation commerciale.
                </p>

                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#6b6b6b]">Types de sites accompagnés</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sectors.map(([Icon, label]) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-2 rounded-full border border-[#202020]/8 bg-white px-3.5 py-2 text-[11px] font-semibold text-[#202020] shadow-[0_4px_14px_rgba(32,32,32,.04)] transition hover:-translate-y-0.5 hover:border-[#7ebcab]/35 hover:shadow-[0_8px_22px_rgba(126,188,171,.12)]"
                      >
                        <Icon size={13} className="text-[#5a9a88]" aria-hidden />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#202020]/8">
              {proofs.map(({ icon: Icon, title, text, accent, glow }) => (
                <article key={title} className="group relative p-7 transition hover:bg-[#fafafa] sm:p-8 lg:p-9">
                  <div className="flex items-start gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ring-inset transition duration-300 group-hover:scale-105 ${glow} ${accent}`}>
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
                    </div>
                    <ArrowRight size={16} className="mt-1 hidden shrink-0 text-[#202020]/20 transition group-hover:translate-x-0.5 group-hover:text-[#b07e2b] sm:block" aria-hidden />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-[#202020]/8 bg-[#fafafa] px-7 py-4 text-[10px] font-bold uppercase tracking-[.12em] text-[#6b6b6b] sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <span>Contenus authentiques · Île-de-France</span>
            <span className="normal-case tracking-normal text-[#424242]/80">Documents transmis sur demande lors de votre brief</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HottesExtractionSection() {
  const perimeter = [
    "Hotte professionnelle et surfaces accessibles",
    "Filtres métalliques",
    "Conduits d’extraction accessibles",
    "Moteurs, turbines et caissons selon accessibilité",
  ];

  return (
    <section className="pb-8 sm:pb-10">
      <div className="container">
        <div className="overflow-hidden rounded-[26px] border border-[#202020]/8 bg-[#202020] text-white shadow-[0_28px_80px_rgba(32,32,32,.18)] lg:grid lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]">
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
            <img src={imageSet.environmentKitchen} alt="Dégraissage de hottes professionnelles" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.94)_0%,rgba(32,32,32,.45)_55%,rgba(32,32,32,.15)_100%)] lg:bg-[linear-gradient(to_right,rgba(32,32,32,.15)_0%,rgba(32,32,32,.88)_100%)]" aria-hidden />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 sm:p-8 lg:min-h-[420px]">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7ebcab]/30 bg-[#7ebcab]/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#7ebcab]">
                <UtensilsCrossed size={13} /> Hottes & extraction
              </span>
              <div>
                <h3 className="max-w-[380px] text-[clamp(1.45rem,2.5vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">Dégraissage de hottes professionnelles</h3>
                <p className="mt-3 max-w-[360px] text-[13px] leading-6 text-white/62">Restaurants, brasseries, cuisines collectives, établissements scolaires, hôtels et établissements de santé.</p>
                <Link href="/environnement/hottes-professionnelles" className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#7ebcab] transition hover:gap-2.5">
                  Voir la prestation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-[#202020] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#7ebcab]/15 text-[#7ebcab]"><Flame size={18} /></span>
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7ebcab]">Périmètre possible</p>
              </div>
              <ul className="mt-5 space-y-3">
                {perimeter.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-6 text-white/72">
                    <Check size={14} className="mt-0.5 shrink-0 text-[#7ebcab]" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#252525] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ffc547]/12 text-[#ffc547]"><ShieldCheck size={18} /></span>
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#ffc547]">Pourquoi entretenir ?</p>
              </div>
              <ul className="mt-5 space-y-3">
                {extractionReasons.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-6 text-white/68">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ebcab]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pole3DDetailSection() {
  const blocks = [
    { icon: ShieldCheck, title: "Dératisation", text: "Repérage des zones de passage, dispositifs adaptés, recommandations préventives et suivi selon le besoin." },
    { icon: Bug, title: "Désinsectisation", text: "Blattes, cafards, fourmis, puces, punaises de lit : méthode choisie selon l’espèce, le site et les précautions nécessaires." },
    { icon: Sparkles, title: "Désinfection", text: "Assainissement des surfaces après situation sanitaire, contamination, sinistre ou remise en état approfondie." },
  ] as const;

  const tracked = [
    "Diagnostic ou visite préalable selon la situation.",
    "Protocole adapté au nuisible et à l’activité du site.",
    "Consignes de préparation communiquées avant l’intervention.",
    "Personnel formé et certifié pour les traitements réalisés.",
    "Compte rendu ou fiche d’intervention remis selon la prestation.",
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#202020] shadow-[0_28px_80px_rgba(32,32,32,.2)]">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#7ebcab]/10 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#ffc547]/8 blur-[100px]" aria-hidden />

          <div className="relative border-b border-white/10 px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-[620px]">
              <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7ebcab]">
                <span className="h-px w-5 bg-current" aria-hidden />
                Pôle 3D
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
                Dératisation, désinsectisation, désinfection.
              </h2>
            </div>
            <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-white/58 lg:mt-0">
              Prévention, identification et traitement des nuisibles — ainsi que les opérations de désinfection dans les locaux professionnels, commerces, restaurants, copropriétés et environnements sensibles.
            </p>
          </div>

          <ol className="relative m-0 grid list-none gap-px border-b border-white/10 bg-white/10 p-0 lg:grid-cols-3">
            {blocks.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="group relative flex min-h-[240px] flex-col bg-[#202020] p-6 transition duration-300 hover:bg-[#2a2a2a] sm:p-7">
                <span className="absolute right-5 top-5 text-[2.4rem] font-extrabold leading-none text-white/[0.04] transition group-hover:text-[#7ebcab]/15" aria-hidden>0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/[0.06] text-[#7ebcab] transition group-hover:border-[#7ebcab]/35 group-hover:bg-[#7ebcab]/10">
                  <Icon size={19} />
                </span>
                <h3 className="mt-6 text-[1.15rem] font-extrabold tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-6 text-white/58">{text}</p>
                <span className="mt-5 block h-[3px] w-10 origin-left rounded-full bg-[#7ebcab] transition-all duration-300 group-hover:w-16" aria-hidden />
              </li>
            ))}
          </ol>

          <div className="relative px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#ffc547]">Méthode</p>
                <h3 className="mt-2 text-[1.25rem] font-extrabold tracking-[-0.02em] text-white">Une intervention encadrée et traçable.</h3>
              </div>
              <Link href="/devis" className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#7ebcab] transition hover:gap-2.5">
                Demander un diagnostic 3D <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tracked.map((item, index) => (
                <li key={item} className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[12px] leading-5 text-white/70">
                  <span className="mt-0.5 text-[10px] font-bold tabular-nums text-[#7ebcab]">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
