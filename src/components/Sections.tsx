/* LVMR Group — shared premium sections, restyled on the homepage palette (charcoal #202020, teal #6b6b6b, gold #ffc547). */
"use client";
import { ArrowRight, Briefcase, Building2, Check, ClipboardList, Clock3, Factory, FileCheck2, FileText, Hammer, HeartPulse, Home, Landmark, MapPin, MessagesSquare, Quote, ScrollText, ShieldCheck, Sparkles, Store, UserCheck, UtensilsCrossed } from "lucide-react";
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

/* Compact credibility strip — tight, aligned, no huge gaps. */
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

/* Connected process stage — a visual journey from brief to handoff. */
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
    <section className="bg-[#f5f5f5] py-12 sm:py-16">
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

/* IDF coverage — editorial department index, not pill clutter. */
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
    <section className="bg-[#f5f5f5] py-14 sm:py-16">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 border-b border-[#202020]/10 pb-8 sm:flex-row sm:items-end sm:gap-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Zone d’intervention</p>
            <h2 className="mt-3 max-w-[520px] text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#202020]">
              Ancrés localement,<br />mobiles en Île-de-France.
            </h2>
          </div>
          <div className="max-w-[300px]">
            <p className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#202020]">
              <MapPin size={15} className="text-[#6b6b6b]" strokeWidth={2} />
              Saint-Germain-en-Laye
            </p>
            <p className="mt-2 text-[13px] leading-6 text-[#424242]">
              Point d’ancrage. La zone exacte est confirmée avec vous lors du premier échange.
            </p>
          </div>
        </div>

        <ul className="m-0 grid list-none grid-cols-2 border-t border-[#202020]/10 p-0 sm:grid-cols-4">
          {zones.map((zone, index) => {
            const col2 = index % 2 === 1;
            const col4 = index % 4 !== 0;
            const row2Mobile = index >= 2;
            const row2Desktop = index >= 4;
            return (
              <li
                key={zone.code}
                className={`px-4 py-5 sm:px-5 sm:py-6 ${col2 ? "border-l border-[#202020]/10" : ""} ${
                  row2Mobile ? "border-t border-[#202020]/10 sm:border-t-0" : ""
                } ${row2Desktop ? "sm:border-t sm:border-[#202020]/10" : ""} ${
                  col4 ? "sm:border-l sm:border-[#202020]/10" : "sm:border-l-0"
                }`}
              >
                <p className={`text-[12px] font-bold tabular-nums tracking-[0.04em] ${zone.base ? "text-[#6b6b6b]" : "text-[#202020]/35"}`}>
                  {zone.code}
                </p>
                <p className="mt-2 text-[14px] font-extrabold tracking-[-0.02em] text-[#202020] sm:text-[15px]">
                  {zone.name}
                </p>
                {zone.base && (
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Siège
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* Service card grid — the inner-pages equivalent of the homepage explorer. */
export function ServiceGrid({ services }: { services: ServiceItem[] }) {
  const isFourCardGrid = services.length === 4;
  return (
    <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${isFourCardGrid ? "lg:grid-cols-2" : "lg:grid-cols-3 xl:grid-cols-4"}`}>
      {services.map((service) => {
        const isPremium = service.group === "premium";
        const accent = isPremium ? "#ffc547" : "#7ebcab";
        return <Link
          key={service.slug}
          href={`/${service.group}/${service.slug}`}
          className={`group relative flex min-h-[430px] overflow-hidden rounded-[24px] border border-white/10 bg-[#202020] text-white shadow-[0_14px_40px_rgba(32,32,32,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(32,32,32,.24)] ${isFourCardGrid ? "sm:min-h-[500px] lg:min-h-[540px]" : "sm:min-h-[470px] xl:min-h-[500px]"}`}
          style={{ "--service-accent": accent } as React.CSSProperties}
        >
          <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-1000 group-hover:scale-[1.045]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,20,20,.98)_0%,rgba(24,24,24,.78)_38%,rgba(24,24,24,.12)_76%)]" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
            <span className="rounded-full border border-white/20 bg-[#202020]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] backdrop-blur-md" style={{ color: accent }}>
              {service.kicker}
            </span>
            <span className="text-[2rem] font-extrabold leading-none text-white/35" aria-hidden>{service.number}</span>
          </div>
          <div className="relative z-10 mt-auto p-6 sm:p-7">
            <h3 className="max-w-[340px] text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-white">{service.title}</h3>
            <p className="mt-3 max-w-[360px] text-[13px] leading-6 text-white/68">{service.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold" style={{ color: accent }}>
              Découvrir <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>;
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
    <section className="relative overflow-hidden bg-[#202020] py-14 sm:py-16">
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
    <section className="bg-[#f5f5f5] py-14 sm:py-16">
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

/* Client voices — anonymized, consistent with the site's editorial policy. */
export function TestimonialsSection() {
  const voices = [
    {
      quote: "Les parties communes sont tenues et les résidents ne s’aperçoivent de rien. C’est exactement ce que nous attendons.",
      role: "Syndic de copropriété",
      place: "Yvelines",
    },
    {
      quote: "Intervention rapide, méthode claire et compte rendu précis à la fin. On sait ce qui a été fait, et comment.",
      role: "Responsable de site tertiaire",
      place: "Paris",
    },
    {
      quote: "Après le sinistre, l’équipe a remis le local en état sans ajouter de stress à une situation déjà compliquée.",
      role: "Gérant de commerce",
      place: "Essonne",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#202020] py-14 sm:py-16">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#6b6b6b]/14 blur-[110px]" aria-hidden />
      <div className="container relative">
        <SectionHead
          dark
          eyebrow="Ils nous font confiance"
          title={<>La parole aux sites que nous entretenons.</>}
          intro="Des retours terrains, recueillis auprès de nos clients, anonymisés conformément à notre politique de publication."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {voices.map((voice) => (
            <figure key={voice.role} className="flex flex-col rounded-[24px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-8">
              <Quote size={22} className="text-[#ffc547]" aria-hidden />
              <blockquote className="mt-5 flex-1 text-[15px] leading-7 text-white/75">
                {voice.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-[13px] font-extrabold text-white">{voice.role}</p>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">{voice.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-7 text-center text-[12px] text-white/40">
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
    <section className="bg-[#f5f5f5] py-14 sm:py-16">
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
