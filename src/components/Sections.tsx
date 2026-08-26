/* LVMR Group — shared premium sections, restyled on the homepage palette (charcoal #202020, teal #6b6b6b, gold #ffc547). */
"use client";
import { useState } from "react";
import { ArrowRight, Briefcase, Building2, Check, ClipboardList, Clock3, Factory, FileCheck2, FileText, Hammer, HeartPulse, Home, Landmark, MapPin, MessagesSquare, ScrollText, ShieldCheck, Sparkles, Star, Store, UserCheck, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { imageSet, processSteps, ServiceItem } from "@/lib/site";

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
