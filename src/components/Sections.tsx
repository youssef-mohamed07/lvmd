/* LVMR Group — shared premium sections, restyled on the homepage palette (charcoal #202020, teal #6b6b6b, gold #ffc547). */
"use client";
import { useState } from "react";
import { ArrowRight, Building2, Check, ChevronLeft, ChevronRight, ClipboardList, Clock3, FileText, Hammer, MapPin, MessagesSquare, ShieldCheck, Sparkles } from "lucide-react";
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
        <h2 className={`mt-4 max-w-[640px] text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-0.045em] ${dark ? "text-white" : "text-[#202020]"}`}>
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
    ["IDF", "zone principale"],
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

/* Editorial process — numbered rows, not floating cards. */
export function ProcessRail({ dark = false }: { dark?: boolean }) {
  const icons = [MessagesSquare, ClipboardList, FileText, Hammer, Check] as const;
  return (
    <section className={`py-14 sm:py-16 ${dark ? "bg-[#202020]" : "bg-[#f5f5f5]"}`}>
      <div className="container">
        <div className="flex flex-col justify-between gap-4 border-b pb-8 sm:flex-row sm:items-end sm:gap-10"
          style={{ borderColor: dark ? "rgba(255,255,255,.1)" : "rgba(32,32,32,.1)" }}
        >
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#ffc547]" : "text-[#6b6b6b]"}`}>
              Notre méthode
            </p>
            <h2 className={`mt-3 max-w-[520px] text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] ${dark ? "text-white" : "text-[#202020]"}`}>
              Simple pour vous.<br />Rigoureuse sur le terrain.
            </h2>
          </div>
          <p className={`max-w-[300px] text-[13px] leading-6 ${dark ? "text-white/50" : "text-[#424242]"}`}>
            Vous savez qui intervient, pourquoi, et ce qui est contrôlé.
          </p>
        </div>

        <ol className={`m-0 list-none divide-y p-0 ${dark ? "divide-white/10" : "divide-[#202020]/10"}`}>
          {processSteps.map(([n, title, text], index) => {
            const Icon = icons[index] ?? Check;
            return (
              <li
                key={n}
                className="grid grid-cols-[48px_minmax(0,1fr)_40px] items-center gap-3 py-5 sm:grid-cols-[56px_160px_minmax(0,1fr)_40px] sm:gap-5 sm:py-5"
              >
                <span className={`text-[13px] font-bold tabular-nums ${dark ? "text-[#ffc547]" : "text-[#6b6b6b]"}`}>
                  {n}
                </span>
                <h3 className={`text-[1.02rem] font-extrabold tracking-[-0.02em] ${dark ? "text-white" : "text-[#202020]"}`}>
                  {title}
                </h3>
                <p className={`col-span-3 text-[13px] leading-6 sm:col-span-1 ${dark ? "text-white/50" : "text-[#424242]"}`}>
                  {text}
                </p>
                <span
                  className={`col-start-3 row-start-1 grid h-10 w-10 place-items-center rounded-[12px] sm:col-start-4 ${
                    dark ? "bg-white/8 text-[#ffc547]" : "bg-[#f1f1f1] text-[#6b6b6b]"
                  }`}
                >
                  <Icon size={17} strokeWidth={1.9} />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* Bento proof grid — photo anchor + four value cards. */
const proofs = [
  ["Réactivité", "Organisation claire pour intervenir vite, sans friction."],
  ["Discrétion", "Présence pensée pour l’activité et l’image du lieu."],
  ["Qualité", "Contrôles adaptés à vos attentes et à la nature du site."],
  ["Proximité", "Ancrage à Saint-Germain-en-Laye, interventions en Île-de-France."],
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

const clientStories = [
  {
    quote: "Les témoignages authentiques seront publiés ici après autorisation écrite.",
    name: "Référence à venir",
    role: "Contenu autorisé uniquement",
    place: "Île-de-France",
    tag: "Preuve client",
    image: imageSet.premium,
  },
  {
    quote: "Chaque cas client précisera le contexte, le besoin, la solution mise en œuvre et le résultat.",
    name: "Cas client à venir",
    role: "Publication après accord",
    place: "Île-de-France",
    tag: "Étude de cas",
    image: imageSet.detail,
  },
  {
    quote: "Les photos avant et après seront présentées sans personne identifiable ni donnée confidentielle.",
    name: "Réalisation à venir",
    role: "Visuels validés uniquement",
    place: "Île-de-France",
    tag: "Avant / après",
    image: imageSet.environnement,
  },
];

export function ClientStories() {
  const [active, setActive] = useState(0);
  const current = clientStories[active] ?? clientStories[0];
  const previous = () => setActive((index) => (index - 1 + clientStories.length) % clientStories.length);
  const next = () => setActive((index) => (index + 1) % clientStories.length);

  return (
    <section className="bg-[#f5f5f5] py-8 sm:py-12">
      <div className="container">
        <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[620px] sm:rounded-[28px]">
          {clientStories.map((story, index) => (
            <img
              key={story.name}
              src={story.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${active === index ? "opacity-45" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(32,32,32,.96)_15%,rgba(32,32,32,.58)_60%,rgba(32,32,32,.82)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(107,107,107,.26),transparent_55%)]" />

          <div className="relative flex min-h-[560px] flex-col justify-between p-6 sm:min-h-[620px] sm:p-10 lg:p-14">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow text-[#f1f1f1]">Voix clients</p>
              <p className="text-[11px] font-bold tabular-nums text-white/45">0{active + 1} — 0{clientStories.length}</p>
            </div>

            <div className="mx-auto max-w-[900px] py-10 text-center sm:py-14">
              <p key={`tag-${current.name}`} className="voice-fade text-[11px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">{current.tag}</p>
              <blockquote key={`quote-${current.name}`} className="voice-fade mt-5 text-[clamp(1.8rem,5vw,3.8rem)] font-extrabold leading-[1.06] tracking-[-.05em]">
                {current.quote}
              </blockquote>
              <p key={`meta-${current.name}`} className="voice-fade mt-7 text-[13px] text-white/55 sm:text-[15px]">
                <span className="font-bold text-white">{current.name}</span>
                <span className="mx-2 text-white/25">·</span>{current.role}
                <span className="mx-2 text-white/25">·</span>{current.place}
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {clientStories.map((story, index) => (
                  <button
                    key={story.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={active === index}
                    className={`border-b-2 pb-1.5 text-[12px] font-bold transition ${active === index ? "border-[#6b6b6b] text-white" : "border-transparent text-white/40 hover:text-white/70"}`}
                  >
                    {story.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={previous} className="service-nav-button" aria-label="Témoignage précédent"><ChevronLeft size={17} /></button>
                <button type="button" onClick={next} className="service-nav-button" aria-label="Témoignage suivant"><ChevronRight size={17} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FAQ accordion — answers without fabricated promises. */
const faqs = [
  ["Sous quel délai pouvez-vous intervenir ?", "Nous évaluons la demande, son niveau de priorité et nos possibilités d’intervention. Le délai dépend du type de site, de la prestation et de nos disponibilités."],
  ["Intervenez-vous en dehors de Saint-Germain-en-Laye ?", "Oui, LVMR Group intervient en Île-de-France. La zone exacte et les modalités d’intervention sont confirmées lors de l’échange initial."],
  ["Comment est définie la fréquence d’entretien ?", "Elle est proposée à partir de vos usages, de la superficie et du niveau de tenue attendu, puis ajustée selon le ressenti du site et vos attentes."],
  ["Le matériel et les produits sont-ils fournis ?", "L’organisation du matériel et des produits est précisée dans la proposition, selon le type de lieu et les contraintes du site."],
  ["Peut-on commencer par une intervention ponctuelle ?", "Oui. Une remise en état ou une intervention unique peut précéder un entretien régulier, selon votre besoin et votre calendrier."],
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-14">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 border-b border-[#202020]/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Questions</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#202020]">
              Avant le devis.
            </h2>
          </div>
          <Link href="/devis" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#6b6b6b] transition hover:gap-3">
            Passer au devis <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-2 grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="divide-y divide-[#202020]/10 border-b border-[#202020]/10 lg:border-b-0 lg:border-r lg:pr-8">
            {faqs.map(([question], index) => {
              const active = openIndex === index;
              return (
                <button
                  key={question}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-pressed={active}
                  className="group flex w-full items-baseline gap-4 py-5 text-left transition sm:gap-5 sm:py-6"
                >
                  <span className={`w-8 shrink-0 text-[12px] font-bold tabular-nums transition ${active ? "text-[#6b6b6b]" : "text-[#202020]/30 group-hover:text-[#202020]/55"}`}>
                    0{index + 1}
                  </span>
                  <span className={`flex-1 text-[clamp(1.15rem,2vw,1.55rem)] font-extrabold tracking-[-0.035em] transition ${active ? "text-[#202020]" : "text-[#202020]/35 group-hover:text-[#202020]/70"}`}>
                    {question}
                  </span>
                  <span className={`hidden h-2 w-2 shrink-0 rounded-full transition sm:block ${active ? "scale-100 bg-[#6b6b6b]" : "scale-0 bg-[#6b6b6b]/40"}`} />
                </button>
              );
            })}
          </div>

          <div className="relative flex min-h-[220px] flex-col justify-center py-8 lg:min-h-[260px] lg:pl-12 lg:py-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
              0{openIndex + 1} · Réponse
            </p>
            <p key={faqs[openIndex]?.[0]} className="voice-fade mt-5 max-w-[440px] text-[clamp(1.35rem,2.6vw,1.95rem)] font-semibold leading-[1.35] tracking-[-0.03em] text-[#202020]">
              {faqs[openIndex]?.[1]}
            </p>
            <div className="mt-10 h-px w-full max-w-[280px] overflow-hidden bg-[#202020]/10">
              <div className="h-full bg-[#6b6b6b] transition-all duration-500" style={{ width: `${((openIndex + 1) / faqs.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* IDF coverage chips. */
export function ZoneSection() {
  const zones = ["75 · Paris", "77 · Seine-et-Marne", "78 · Yvelines", "91 · Essonne", "92 · Hauts-de-Seine", "93 · Seine-Saint-Denis", "94 · Val-de-Marne", "95 · Val-d’Oise"];
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16">
      <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="Zone d’intervention"
            title={<>Ancrés localement, mobiles en Île-de-France.</>}
            intro="Saint-Germain-en-Laye est notre point d’ancrage. La zone exacte d’intervention est confirmée avec vous lors du premier échange."
          />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {zones.map((zone) => (
            <span key={zone} className="rounded-full border border-[#202020]/10 bg-white px-4 py-2.5 text-[12px] font-bold text-[#424242] transition hover:border-[#6b6b6b]/40 hover:text-[#6b6b6b]">
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Service card grid — the inner-pages equivalent of the homepage explorer. */
export function ServiceGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/${service.group}/${service.slug}`}
          className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.12)]"
        >
          <div className="relative h-44 overflow-hidden bg-[#202020]">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.75),transparent_60%)]" />
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#202020]/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#f1f1f1] backdrop-blur-md">
              {service.kicker}
            </span>
            <span className="absolute bottom-3 right-4 text-[2rem] font-extrabold leading-none text-white/25" aria-hidden>{service.number}</span>
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em] text-[#202020]">{service.title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#424242]">{service.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#6b6b6b]">
              Découvrir <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
