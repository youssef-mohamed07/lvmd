/* LVMR Group inner pages — composed from the shared premium section library, with page-specific sections on top. */
"use client";
import { useState } from "react";
import { ArrowRight, Building2, CalendarCheck, Check, ClipboardList, Hammer, Layers, MapPin, MessagesSquare, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import QuoteWizard from "@/components/QuoteWizard";
import { ProcessRail, SectionHead, ServiceGrid, StatsBand, ZoneSection } from "@/components/Sections";
import { CTASection, PageFrame, PageHero, usePageMeta } from "@/components/SiteChrome";
import { allServices, environmentServices, findService, imageSet, premiumServices, sectorPlaceholders } from "@/lib/site";

function CtaChip({ href, label }: { href: string; label: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-[#dab844] px-7 text-[13px] font-extrabold text-[#202020] shadow-[0_12px_32px_rgba(218,184,68,.28)] transition hover:-translate-y-0.5 hover:bg-[#e2c86f] hover:shadow-[0_18px_40px_rgba(218,184,68,.38)]"
    >
      {label} <ArrowRight size={15} />
    </Link>
  );
}

/* Editorial band — full-bleed photo + copy, sectors as text rail (no pill strip). */
function EditorialSplit({ eyebrow, title, quote, text, image, imageAlt }: { eyebrow: string; title: React.ReactNode; quote: string; text: string; image: string; imageAlt: string }) {
  return (
    <section className="relative overflow-hidden bg-[#202020] text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_40%,rgba(32,32,32,.55)_100%)] max-lg:bg-[linear-gradient(to_top,rgba(32,32,32,.88),transparent_55%)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:hidden">
            <p className="max-w-[420px] text-[15px] font-semibold leading-6 text-white/90">
              <span className="text-[#ebd899]">— </span>{quote}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#dab844]/12 blur-[90px]" aria-hidden />
          <div className="relative">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ebd899]">
              <span className="h-px w-6 bg-current" aria-hidden />
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-[520px] text-[clamp(1.9rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.045em]">
              {title}
            </h2>
            <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-white/60">{text}</p>
            <Link
              href="/expertises"
              className="group mt-8 inline-flex items-center gap-2 text-[13px] font-bold text-[#ebd899] transition hover:gap-3"
            >
              Explorer les expertises <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative mt-12 hidden border-t border-white/10 pt-8 lg:block">
            <p className="text-[12px] font-semibold leading-6 text-white/45">
              <span className="text-[#ebd899]">— </span>{quote}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#202020]">
        <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-[#4caac9]">
            Environnements
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
            {sectorPlaceholders.map((sector, index) => (
              <span key={sector} className="inline-flex items-center gap-5 text-[13px] font-semibold text-white/70">
                {index > 0 && <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" aria-hidden />}
                <span className="transition hover:text-[#ebd899]">{sector}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PremiumPage() {
  usePageMeta({ title: "LVMR Premium — Nettoyage professionnel en Île-de-France", description: "LVMR Premium accompagne les bureaux, copropriétés, résidences et établissements exigeants.", path: "/premium", schema: { "@context": "https://schema.org", "@type": "Service", name: "LVMR Premium", areaServed: "Île-de-France" } });
  return (
    <PageFrame>
      <PageHero
        eyebrow="01 — LVMR Premium"
        title={<>La propreté, <span className="hero-stroke">élevée.</span></>}
        intro="Des services de nettoyage professionnel et d’entretien pensés pour les lieux qui veulent rester justes, nets et accueillants."
        image={imageSet.premium}
      >
        <CtaChip href="/devis" label="Parler de votre besoin" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Les services Premium"
            title={<>Une réponse claire à chaque usage.</>}
            intro="Chaque prestation peut être ajustée à la configuration et au rythme de votre environnement."
          />
          <ServiceGrid services={premiumServices} />
        </div>
      </section>
      <EditorialSplit
        eyebrow="Un environnement bien tenu"
        title={<>Le soin des espaces, au quotidien.</>}
        quote="La qualité se mesure dans ce que l’on ne remarque plus."
        text="LVMR Premium s’adresse aux entreprises, copropriétés et établissements qui attendent davantage qu’une simple présence : une organisation lisible, une exécution soignée et un résultat qui s’intègre au lieu. Nous commençons par comprendre vos espaces, leurs contraintes et leur rythme d’utilisation."
        image={imageSet.detail}
        imageAlt="Détail de matériaux dans un espace professionnel"
      />
      <ProcessRail />
      <StatsBand dark />
      <CTASection />
    </PageFrame>
  );
}

export function EnvironnementPage() {
  usePageMeta({ title: "LVMR Environnement — Interventions spécialisées", description: "LVMR Environnement accompagne les situations techniques, sensibles ou après sinistre en Île-de-France.", path: "/environnement", schema: { "@context": "https://schema.org", "@type": "Service", name: "LVMR Environnement", areaServed: "Île-de-France" } });
  const steps = [
    [MessagesSquare, "Qualifier", "Comprendre le contexte et les zones concernées."],
    [ClipboardList, "Structurer", "Définir les étapes et les conditions d’accès."],
    [Hammer, "Intervenir", "Déployer une réponse proportionnée au besoin."],
    [Recycle, "Restituer", "Laisser une lecture claire de ce qui a été réalisé."],
  ] as const;
  return (
    <PageFrame>
      <PageHero
        eyebrow="02 — LVMR Environnement"
        title={<>Quand la situation <span className="hero-stroke">exige davantage.</span></>}
        intro="Des interventions spécialisées pour les situations techniques, sensibles ou imprévues. Une méthode structurée, une présence discrète, un cadre clair."
        image={imageSet.environnement}
      >
        <CtaChip href="/devis" label="Qualifier une intervention" />
      </PageHero>
      <section className="relative overflow-hidden bg-[#f5f5f5] py-12 sm:py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#4caac9]/10 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#dab844]/10 blur-[100px]" aria-hidden />
        <div className="container relative">
          <SectionHead
            eyebrow="Le bon niveau d’intervention"
            title={<>Rendre une situation plus lisible.</>}
            intro="Un sinistre, une contamination ou un logement difficile à traiter demandent une approche différente : définir les priorités, les contraintes et les étapes utiles avant d’intervenir."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text], index) => (
              <div key={title} className="group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-6 shadow-[0_10px_40px_rgba(32,32,32,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#4caac9]/30 hover:shadow-[0_18px_50px_rgba(76,170,201,.12)]">
                <span className="absolute right-5 top-4 text-[2.4rem] font-extrabold leading-none text-[#202020]/[0.05] transition group-hover:text-[#4caac9]/15" aria-hidden>0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f3f7] text-[#4caac9] transition group-hover:bg-[#4caac9] group-hover:text-white">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#4caac9] to-[#a8d8ea] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Les interventions spécialisées"
            title={<>Maîtriser l’imprévu.</>}
            intro="Une première qualification permet de choisir le bon niveau de réponse, structuré pour évoluer avec les besoins réels du site."
          />
          <ServiceGrid services={environmentServices} />
        </div>
      </section>
      <CTASection title={<>Une situation à clarifier ?</>} text="Décrivez le contexte, même en quelques mots. Le parcours de demande vous aidera à préciser les éléments utiles." />
    </PageFrame>
  );
}

export function ExpertisesPage() {
  const [group, setGroup] = useState<"all" | "premium" | "environnement">("all");
  const visible = group === "all" ? allServices : group === "premium" ? premiumServices : environmentServices;
  usePageMeta({ title: "Expertises LVMR Group — Services de propreté et environnement", description: "Explorez les expertises LVMR Premium et LVMR Environnement.", path: "/expertises" });
  const tabs: [typeof group, string][] = [["all", "Tous"], ["premium", "Premium"], ["environnement", "Environnement"]];
  return (
    <PageFrame>
      <PageHero
        eyebrow="Le savoir-faire"
        title={<>La précision, <span className="hero-stroke">en pratique.</span></>}
        intro="Deux pôles, un même niveau d’attention. Parcourez les services LVMR et trouvez le point d’entrée qui correspond à votre situation."
        image={imageSet.detail}
      />
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow="Répertoire des services"
              title={<>Choisir le bon point de départ.</>}
              intro="Les pages de service présentent le contexte, les usages concernés et les éléments à préciser pour préparer un échange utile."
            />
            <div className="flex max-w-full shrink-0 gap-1 overflow-x-auto rounded-full border border-[#202020]/8 bg-white p-1 shadow-[0_8px_24px_rgba(32,32,32,.06)]">
              {tabs.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setGroup(value)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-extrabold transition ${group === value ? "bg-[#4caac9] text-white shadow-[0_8px_20px_rgba(76,170,201,.35)]" : "text-[#424242] hover:text-[#202020]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <ServiceGrid services={visible} />
        </div>
      </section>
      <StatsBand />
      <ProcessRail dark />
      <CTASection />
    </PageFrame>
  );
}

export function RealisationsPage() {
  usePageMeta({ title: "Réalisations LVMR Group — Portfolio d’interventions", description: "Un espace éditorial pour présenter les réalisations réelles de LVMR Group.", path: "/realisations" });

  return (
    <PageFrame>
      <PageHero
        eyebrow="Portfolio"
        title={<>Des espaces <span className="hero-stroke">prêts à vivre.</span></>}
        intro="Chaque lieu impose son rythme. Notre travail consiste à le respecter tout en élevant son niveau de tenue."
        image={imageSet.hero}
      />

      {/* Same cinematic mosaic language as homepage */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Sur le terrain</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.7rem)] font-extrabold leading-[1] tracking-[-.05em] text-[#202020]">
                Laisser parler le réel.
              </h2>
            </div>
            <p className="max-w-[320px] text-[14px] leading-6 text-[#424242]">
              Projets, images et contextes authentiques — sans inventer de résultats.
            </p>
          </div>

          <div className="grid auto-rows-[230px] gap-4 sm:auto-rows-[280px] md:grid-cols-12">
            {[
              [imageSet.detail, "Remise en état", "Espace professionnel · Paris", "md:col-span-7 md:row-span-2"],
              [imageSet.environnement, "Intervention spécialisée", "Site technique · Yvelines", "md:col-span-5"],
              [imageSet.hero, "Entretien premium", "Bureaux & accueil · IDF", "md:col-span-5"],
              [imageSet.premium, "Parties communes", "Copropriété · Île-de-France", "md:col-span-7"],
              [imageSet.environnement, "Après sinistre", "Reprise de site · IDF", "md:col-span-5"],
            ].map(([src, tag, title, span]) => (
              <article key={title} className={`group relative overflow-hidden rounded-[24px] bg-[#202020] ${span}`}>
                <img
                  src={src}
                  alt={tag}
                  className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.8),transparent_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#a8d8ea]">{tag}</p>
                  <h3 className="mt-1.5 text-[1.2rem] font-extrabold tracking-[-.03em]">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Same proof bento language as homepage */}
      <section className="bg-[#f5f5f5] py-16 sm:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Fiche projet</p>
              <h2 className="mt-4 max-w-[560px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-.05em] text-[#202020]">
                Un format pensé pour le concret.
              </h2>
            </div>
            <p className="max-w-[340px] text-[15px] leading-7 text-[#424242]">
              Lieu, enjeu, intervention et visuels — une lecture claire de chaque mission.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <article className="group relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[420px] sm:rounded-[28px] lg:row-span-2">
              <img src={imageSet.detail} alt="Le soin du détail par LVMR" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.92),transparent_65%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#a8d8ea]">Le détail compte</p>
                <p className="mt-3 max-w-[360px] text-[clamp(1.6rem,2.6vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-.04em]">
                  Un lieu propre se voit. Une intervention bien menée se ressent.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Études de cas", "Visuels autorisés", "Île-de-France"].map((chip) => (
                    <span key={chip} className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3.5 py-2 text-[11px] font-bold text-white/75 backdrop-blur-md">
                      <Check size={12} className="text-[#a8d8ea]" />{chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {[
              [MapPin, "Localisation", "Situer le site et son contexte."],
              [Building2, "Type de lieu", "Usages et contraintes du lieu."],
              [Layers, "Enjeu", "Ce que le site attendait de l’intervention."],
              [Hammer, "Intervention", "Méthode, déroulé et résultat."],
            ].map(([Icon, title, text], index) => (
              <article
                key={title as string}
                className="group relative overflow-hidden rounded-[28px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4caac9]/30 hover:shadow-[0_18px_50px_rgba(76,170,201,.10)] sm:p-8"
              >
                <span className="absolute right-6 top-6 text-[2.6rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#4caac9]/12" aria-hidden>
                  0{index + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e5f3f7] text-[#4caac9] transition duration-300 group-hover:bg-[#4caac9] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(76,170,201,.35)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-[-.02em] text-[#202020]">{title as string}</h3>
                <p className="mt-2 max-w-[380px] text-[14px] leading-6 text-[#424242]">{text as string}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#4caac9] to-[#a8d8ea] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageFrame>
  );
}

export function GroupePage() {
  usePageMeta({ title: "Le Groupe — LVMR Group", description: "Découvrez le positionnement, les expertises et la manière de travailler de LVMR Group.", path: "/groupe", schema: { "@context": "https://schema.org", "@type": "Organization", name: "LVMR Group", areaServed: "Île-de-France" } });
  const values = [[Layers, "Exigence", "Tenir la promesse du détail."], [ShieldCheck, "Précision", "Travailler à partir du réel."], [Sparkles, "Discrétion", "Respecter les lieux et leurs usages."], [CalendarCheck, "Maîtrise", "Rester clair dans chaque étape."]] as const;
  return (
    <PageFrame>
      <PageHero
        eyebrow="Le Groupe"
        title={<>Une présence <span className="hero-stroke">qui compte.</span></>}
        intro="LVMR Group réunit une approche premium de la propreté et une expertise dédiée aux situations environnementales spécialisées."
        image={imageSet.hero}
      />
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Notre positionnement"
            title={<>Faire simple pour vous. Être précis sur le terrain.</>}
            intro="Deux expertises complémentaires, une même organisation et un interlocuteur qui comprend réellement le site."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_.92fr]">
            <article className="group relative min-h-[520px] overflow-hidden rounded-[26px] bg-[#202020] text-white sm:min-h-[580px]">
              <img src={imageSet.detail} alt="L’approche LVMR Group sur le terrain" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.98)_0%,rgba(32,32,32,.62)_52%,rgba(32,32,32,.18)_100%)]" />
              <div className="relative flex min-h-[520px] flex-col justify-between p-6 sm:min-h-[580px] sm:p-9">
                <div className="flex items-center justify-between border-b border-white/18 pb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a8d8ea]">LVMR Group</span>
                  <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/45">Saint-Germain-en-Laye</span>
                </div>
                <div>
                  <h3 className="max-w-[560px] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-.05em]">Une exigence qui reste simple à vivre.</h3>
                  <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-white/65">Nous adaptons l’organisation au lieu, à ses usages et à son rythme—sans surpromesse ni complexité inutile.</p>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {values.map(([Icon, title, text], index) => (
                      <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-[#202020]/45 p-3.5 backdrop-blur-md">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#4caac9]/18 text-[#a8d8ea]"><Icon size={16} /></span>
                        <div className="min-w-0"><p className="text-[12px] font-extrabold"><span className="mr-2 text-[#a8d8ea]">0{index + 1}</span>{title}</p><p className="mt-0.5 text-[10px] leading-4 text-white/50">{text}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {[
                ["01", "LVMR Premium", "La tenue régulière des lieux professionnels, résidentiels et hôteliers.", imageSet.premium, "/premium", "#ebd899"],
                ["02", "LVMR Environnement", "La réponse structurée aux situations sensibles, techniques ou imprévues.", imageSet.environnement, "/environnement", "#9dd573"],
              ].map(([number, title, text, image, href, accent]) => (
                <Link key={title} href={href} className="group relative min-h-[252px] overflow-hidden rounded-[26px] bg-[#202020] p-6 text-white sm:min-h-[282px] sm:p-8">
                  <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-1000 group-hover:scale-[1.05] group-hover:opacity-65" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,32,.96),rgba(32,32,32,.42))]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="text-[11px] font-bold tracking-[.16em]" style={{ color: accent }}>{number}</span><span className="grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-white/8 backdrop-blur transition group-hover:bg-white group-hover:text-[#202020]"><ArrowRight size={16} /></span></div>
                    <div><h3 className="text-[clamp(1.55rem,2.8vw,2.35rem)] font-extrabold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[390px] text-[13px] leading-6 text-white/60">{text}</p></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection title={<>Construire une relation claire.</>} />
    </PageFrame>
  );
}

export function DevisPage() {
  usePageMeta({ title: "Demander un devis — LVMR Group", description: "Préparez votre demande de devis LVMR Group en quelques étapes simples.", path: "/devis" });
  return (
    <PageFrame>
      <PageHero
        eyebrow="Demander un devis"
        title={<>Parlons de votre <span className="hero-stroke">besoin.</span></>}
        intro="Quelques informations nous aideront à comprendre votre environnement et à préparer un échange utile."
        image={imageSet.detail}
      />
      <section className="relative overflow-hidden bg-[#f5f5f5] py-10 sm:py-14">
        <div className="container relative">
          <QuoteWizard />
        </div>
      </section>
    </PageFrame>
  );
}

export function ContactPage() {
  usePageMeta({ title: "Contact — LVMR Group", description: "Contacter LVMR Group au sujet d’un besoin de propreté ou d’intervention environnementale.", path: "/contact" });
  return (
    <PageFrame>
      <PageHero
        eyebrow="Contact"
        title={<>Créer le bon <span className="hero-stroke">premier échange.</span></>}
        intro="Vous avez déjà les éléments essentiels ? Le formulaire de devis est le moyen le plus précis de qualifier votre besoin. Pour toute autre question, cette page est le point de contact."
      >
        <CtaChip href="/devis" label="Demander un devis" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="LVMR Group" title={<>À votre écoute.</>} />
            <p className="mt-7 max-w-[420px] text-[15px] leading-8 text-[#424242]">Décrivez votre contexte dans le parcours de demande. Les coordonnées d’email et de téléphone seront affichées dès validation des informations officielles.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4caac9]/30 hover:shadow-[0_18px_50px_rgba(76,170,201,.1)] sm:col-span-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f3f7] text-[#4caac9] transition duration-300 group-hover:bg-[#4caac9] group-hover:text-white">
                <MapPin size={19} />
              </span>
              <h3 className="mt-5 text-[1.25rem] font-extrabold tracking-[-0.02em] text-[#202020]">Saint-Germain-en-Laye</h3>
              <p className="mt-2 max-w-[420px] text-[13px] leading-6 text-[#424242]">LVMR Group intervient en Île-de-France. La zone précise et les modalités de contact seront confirmées par l’équipe.</p>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4caac9]/30 hover:shadow-[0_18px_50px_rgba(76,170,201,.1)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f3f7] text-[#4caac9] transition duration-300 group-hover:bg-[#4caac9] group-hover:text-white">
                <ClipboardList size={19} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">Un devis</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">Le parcours guidé qualifie votre besoin en 7 étapes.</p>
              <Link href="/devis" className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#4caac9]">Accéder au formulaire <ArrowRight size={13} /></Link>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4caac9]/30 hover:shadow-[0_18px_50px_rgba(76,170,201,.1)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5f3f7] text-[#4caac9] transition duration-300 group-hover:bg-[#4caac9] group-hover:text-white">
                <MessagesSquare size={19} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">Une situation ?</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">LVMR Environnement qualifie les contextes sensibles ou techniques.</p>
              <Link href="/environnement" className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#4caac9]">Voir les interventions <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </section>
      <ZoneSection />
      <CTASection />
    </PageFrame>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = findService(slug);
  usePageMeta(service ? { title: `${service.title} — LVMR Group`, description: service.description, path: `/${service.group}/${service.slug}`, schema: { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Organization", name: "LVMR Group" }, areaServed: "Île-de-France" } } : { title: "Page introuvable — LVMR Group", description: "La page demandée n’a pas été trouvée.", path: "/404" });
  if (!service) return <NotFoundPage />;
  const related = allServices.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 3);
  return (
    <PageFrame>
      <PageHero
        eyebrow={`${service.number} — ${service.kicker}`}
        title={<>{service.title.split(" ").slice(0, -1).join(" ")} {" "}<span className="hero-stroke">{service.title.split(" ").slice(-1)}</span></>}
        intro={service.intro}
        image={service.image}
      >
        <CtaChip href="/devis" label="Parler de ce besoin" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-10 sm:py-12">
        <div className="container">
          <div className="grid overflow-hidden rounded-[26px] bg-[#202020] text-white shadow-[0_28px_80px_rgba(32,32,32,.18)] lg:grid-cols-[.88fr_1.12fr]">
            <div className="group relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-[620px]">
              <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.045]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.94)_0%,rgba(32,32,32,.2)_70%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a8d8ea]">{service.number} · {service.kicker}</p>
                <h2 className="mt-3 max-w-[480px] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-.05em]">{service.title}</h2>
                <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/60">Un cadre clair, adapté aux contraintes réelles du site.</p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-11">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a8d8ea]">Ce que nous préparons</p>
                <h2 className="mt-4 max-w-[560px] text-[clamp(2rem,3.7vw,3.2rem)] font-extrabold leading-[1.03] tracking-[-.05em]">Une intervention pensée pour votre site.</h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-white/62">{service.description} La qualification permet de préciser les accès, le rythme et les conditions utiles avant l’intervention.</p>

                <ol className="mt-7 m-0 list-none border-t border-white/14 p-0">
                  {service.points.map((point, index) => (
                    <li key={point} className="group flex items-center gap-4 border-b border-white/14 py-4">
                      <span className="text-[11px] font-extrabold tabular-nums text-[#a8d8ea]">0{index + 1}</span>
                      <p className="flex-1 text-[13px] font-bold leading-6 text-white/78 sm:text-[14px]">{point}</p>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4caac9] opacity-30 transition group-hover:opacity-100" />
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 border-t border-white/14 pt-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a8d8ea]">Pour quels lieux ?</p><p className="mt-2 text-[12px] leading-5 text-white/45">Le périmètre exact se précise avec le contexte.</p></div>
                  <Link href="/devis" className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#a8d8ea]">Parler de ce besoin <ArrowRight size={14} /></Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.idealFor.map((item) => (
                    <span key={item} className="rounded-full border border-white/16 bg-white/[.06] px-3.5 py-2 text-[11px] font-bold text-white/70 backdrop-blur">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] pb-6 pt-10 sm:pb-8 sm:pt-12">
        <div className="container">
          <SectionHead eyebrow="Dans la même expertise" title={<>À explorer également.</>} />
          <ServiceGrid services={related} />
        </div>
      </section>
      <CTASection title={<>Parler de ce besoin.</>} />
    </PageFrame>
  );
}

export function LegalPage({ type }: { type: "mentions" | "confidentialite" | "cookies" }) {
  const titles = { mentions: "Mentions légales", confidentialite: "Politique de confidentialité", cookies: "Gestion des cookies" };
  const currentTitle = titles[type];
  const sections = type === "cookies" ? ["Cookies utilisés", "Finalités", "Consentement", "Gestion dans le navigateur", "Durée de validité", "Contact"] : ["Éditeur du site", "Responsable de publication", "Hébergement", "Données collectées", "Durées de conservation", "Vos droits"];
  usePageMeta({ title: `${currentTitle} — LVMR Group`, description: `${currentTitle} de LVMR Group — contenu à valider avant mise en production.`, path: `/${type === "mentions" ? "mentions-legales" : type}` });
  return (
    <PageFrame>
      <PageHero eyebrow="Informations" title={<>{currentTitle.split(" ").slice(0, -1).join(" ")} {" "}<span className="hero-stroke">{currentTitle.split(" ").slice(-1)}</span></>} intro="Cette page est structurée pour recevoir les informations officielles validées par LVMR Group et son conseil juridique." />
      <section className="py-12 sm:py-16">
        <div className="container max-w-[900px]">
          <div className="grid gap-3">
            {sections.map((heading, index) => (
              <section key={heading} className="rounded-[20px] border border-[#202020]/8 bg-white p-6 sm:p-8">
                <span className="text-[11px] font-extrabold tracking-[.14em] text-[#4caac9]">0{index + 1}</span>
                <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.03em] text-[#202020]">{heading}</h2>
                <p className="mt-3 max-w-[680px] text-[13px] leading-7 text-[#424242]">Contenu à compléter et valider avec les informations légales réelles de LVMR Group avant publication. Aucun élément contractuel ou réglementaire ne doit être considéré comme final dans cette version.</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageFrame>
  );
}

export function NotFoundPage() {
  usePageMeta({ title: "Page introuvable — LVMR Group", description: "La page demandée n’a pas été trouvée.", path: "/404" });
  return (
    <PageFrame>
      <PageHero eyebrow="404" title={<>Cette page <span className="hero-stroke">reste à trouver.</span></>} intro="Le lien que vous avez suivi ne mène plus ici. Revenez à l’accueil ou découvrez les expertises LVMR Group.">
        <Link href="/" className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-[#dab844] px-7 text-[13px] font-extrabold text-[#202020] shadow-[0_12px_32px_rgba(218,184,68,.28)] transition hover:-translate-y-0.5 hover:bg-[#e2c86f]">Retour à l’accueil <ArrowRight size={15} /></Link>
      </PageHero>
      <CTASection />
    </PageFrame>
  );
}
