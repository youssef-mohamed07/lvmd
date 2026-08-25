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
      className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-[#ffc547] px-7 text-[13px] font-extrabold text-[#202020] shadow-[0_12px_32px_rgba(255,197,71,.28)] transition hover:-translate-y-0.5 hover:bg-[#b07e2b] hover:shadow-[0_18px_40px_rgba(255,197,71,.38)]"
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
              <span className="text-[#ffc547]">— </span>{quote}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#ffc547]/12 blur-[90px]" aria-hidden />
          <div className="relative">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffc547]">
              <span className="h-px w-6 bg-current" aria-hidden />
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-[520px] text-[clamp(1.9rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.045em]">
              {title}
            </h2>
            <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-white/60">{text}</p>
            <Link
              href="/expertises"
              className="group mt-8 inline-flex items-center gap-2 text-[13px] font-bold text-[#ffc547] transition hover:gap-3"
            >
              Explorer les expertises <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative mt-12 hidden border-t border-white/10 pt-8 lg:block">
            <p className="text-[12px] font-semibold leading-6 text-white/45">
              <span className="text-[#ffc547]">— </span>{quote}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#202020]">
        <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
            Environnements
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
            {sectorPlaceholders.map((sector, index) => (
              <span key={sector} className="inline-flex items-center gap-5 text-[13px] font-semibold text-white/70">
                {index > 0 && <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" aria-hidden />}
                <span className="transition hover:text-[#ffc547]">{sector}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PremiumPage() {
  usePageMeta({ title: "Entreprise de nettoyage professionnel haut de gamme | LVMR Premium", description: "Entretien de bureaux, copropriétés, remises en état et vitrerie en Île-de-France. Découvrez les prestations de LVMR Premium.", path: "/premium", schema: { "@context": "https://schema.org", "@type": "Service", name: "LVMR Premium", areaServed: "Île-de-France" } });
  return (
    <PageFrame>
      <PageHero
        eyebrow="Propreté professionnelle haut de gamme"
        title={<>La propreté au rang <span className="hero-stroke">du luxe.</span></>}
        intro="Des prestations soignées, discrètes et adaptées aux bureaux, copropriétés, résidences et environnements professionnels exigeants."
        image={imageSet.premium}
      >
        <CtaChip href="/devis" label="Demander une étude personnalisée" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Une propreté qui valorise vos espaces"
            title={<>Davantage qu’un simple entretien courant.</>}
            intro="Chaque site fait l’objet d’un périmètre défini, de consignes précises et d’un suivi qui assure la régularité de la prestation."
          />
          <ServiceGrid services={premiumServices} />
        </div>
      </section>
      <EditorialSplit
        eyebrow="Un environnement bien tenu"
        title={<>Une organisation adaptée à vos contraintes.</>}
        quote="Discrétion, personnel encadré, consignes formalisées et interlocuteur identifié."
        text="Nos prestations sont organisées en fonction de vos horaires, de la fréquentation des lieux, de vos contraintes et de l’image que vous souhaitez offrir à vos collaborateurs, visiteurs, clients ou résidents."
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
  usePageMeta({ title: "Nettoyage technique, nuisibles et hottes | LVMR Environnement", description: "Sinistres, logements insalubres, nettoyage industriel, hottes, dératisation, désinsectisation et désinfection en Île-de-France.", path: "/environnement", schema: { "@context": "https://schema.org", "@type": "Service", name: "LVMR Environnement", areaServed: "Île-de-France" } });
  const steps = [
    [MessagesSquare, "Qualifier", "Comprendre le contexte et les zones concernées."],
    [ClipboardList, "Structurer", "Définir les étapes et les conditions d’accès."],
    [Hammer, "Intervenir", "Déployer une réponse proportionnée au besoin."],
    [Recycle, "Restituer", "Laisser une lecture claire de ce qui a été réalisé."],
  ] as const;
  return (
    <PageFrame>
      <PageHero
        eyebrow="Assainir, sécuriser, préserver"
        title={<>Des situations complexes, <span className="hero-stroke">une réponse maîtrisée.</span></>}
        intro="Interventions techniques, remises en état, environnements sensibles, nettoyage industriel, dégraissage professionnel et solutions 3D en Île-de-France."
        image={imageSet.environnement}
      >
        <CtaChip href="/devis" label="Demander une expertise" />
      </PageHero>
      <section className="relative overflow-hidden bg-[#f5f5f5] py-12 sm:py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#6b6b6b]/10 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#ffc547]/10 blur-[100px]" aria-hidden />
        <div className="container relative">
          <SectionHead
            eyebrow="Le bon niveau d’intervention"
            title={<>Des interventions techniques spécialisées.</>}
            intro="Chaque intervention est préparée selon l’état des lieux, les risques identifiés, les contraintes d’accès et le résultat attendu. Une visite technique peut être organisée avant devis."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text], index) => (
              <div key={title} className="group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-6 shadow-[0_10px_40px_rgba(32,32,32,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.12)]">
                <span className="absolute right-5 top-4 text-[2.4rem] font-extrabold leading-none text-[#202020]/[0.05] transition group-hover:text-[#6b6b6b]/15" aria-hidden>0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition group-hover:bg-[#6b6b6b] group-hover:text-white">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Les interventions spécialisées"
            title={<>Des moyens adaptés à chaque famille d’intervention.</>}
            intro="Remise en état, environnements insalubres, nettoyage industriel, vitrerie technique, extraction professionnelle et pôle 3D."
          />
          <ServiceGrid services={environmentServices} />
        </div>
      </section>
      <CTASection title={<>Une situation urgente ?</>} text="Contactez directement notre équipe. Nous évaluons la demande, le niveau de priorité et nos possibilités d’intervention dans les meilleurs délais." />
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
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-extrabold transition ${group === value ? "bg-[#6b6b6b] text-white shadow-[0_8px_20px_rgba(107,107,107,.35)]" : "text-[#424242] hover:text-[#202020]"}`}
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
  usePageMeta({ title: "Nos réalisations | LVMR Group", description: "Découvrez progressivement des réalisations LVMR Group documentées avec des contenus authentiques et autorisés.", path: "/realisations" });

  return (
    <PageFrame>
      <PageHero
        eyebrow="Références et preuves"
        title={<>Le réel comme <span className="hero-stroke">meilleure preuve.</span></>}
        intro="Cette section sera alimentée progressivement avec des photographies, cas clients, témoignages et références authentiques dont la publication est expressément autorisée."
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
              Aucun nom, logo, témoignage ou contexte client n’est publié sans accord écrit.
            </p>
          </div>

          <div className="grid auto-rows-[230px] gap-4 sm:auto-rows-[280px] md:grid-cols-12">
            {[
              [imageSet.detail, "Format de publication", "Contexte & besoin", "md:col-span-7 md:row-span-2"],
              [imageSet.environnement, "Format de publication", "Solution mise en œuvre", "md:col-span-5"],
              [imageSet.hero, "Format de publication", "Organisation de l’intervention", "md:col-span-5"],
              [imageSet.premium, "Format de publication", "Résultat documenté", "md:col-span-7"],
              [imageSet.environnement, "Contenu autorisé", "Photographies avant / après", "md:col-span-5"],
            ].map(([src, tag, title, span]) => (
              <article key={title} className={`group relative overflow-hidden rounded-[24px] bg-[#202020] ${span}`}>
                <img
                  src={src}
                  alt={tag}
                  className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.8),transparent_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#f1f1f1]">{tag}</p>
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
                <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#f1f1f1]">Le détail compte</p>
                <p className="mt-3 max-w-[360px] text-[clamp(1.6rem,2.6vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-.04em]">
                  Un lieu propre se voit. Une intervention bien menée se ressent.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Études de cas", "Visuels autorisés", "Île-de-France"].map((chip) => (
                    <span key={chip} className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3.5 py-2 text-[11px] font-bold text-white/75 backdrop-blur-md">
                      <Check size={12} className="text-[#f1f1f1]" />{chip}
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
                className="group relative overflow-hidden rounded-[28px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.10)] sm:p-8"
              >
                <span className="absolute right-6 top-6 text-[2.6rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#6b6b6b]/12" aria-hidden>
                  0{index + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(107,107,107,.35)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-[-.02em] text-[#202020]">{title as string}</h3>
                <p className="mt-2 max-w-[380px] text-[14px] leading-6 text-[#424242]">{text as string}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
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
  usePageMeta({ title: "Le Groupe | LVMR Group", description: "Découvrez LVMR Group, ses engagements et ses deux pôles spécialisés en Île-de-France.", path: "/groupe", schema: { "@context": "https://schema.org", "@type": "Organization", name: "LVMR Group", areaServed: "Île-de-France", address: "30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye" } });
  const values = [[Layers, "Exigence", "Des protocoles adaptés et une qualité constante."], [ShieldCheck, "Sécurité", "Des équipes encadrées et des équipements adaptés."], [Sparkles, "Discrétion", "Des interventions qui limitent la gêne occasionnée."], [CalendarCheck, "Suivi", "Un interlocuteur identifié et des documents selon la prestation."]] as const;
  return (
    <PageFrame>
      <PageHero
        eyebrow="Le Groupe"
        title={<>L’excellence en <span className="hero-stroke">toutes circonstances.</span></>}
        intro="LVMR Group réunit deux sociétés complémentaires pour l’entretien, la remise en état et la sécurisation des environnements professionnels en Île-de-France."
        image={imageSet.hero}
      />
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container">
          <SectionHead
            eyebrow="Notre positionnement"
            title={<>Une expertise globale, deux pôles spécialisés.</>}
            intro="LVMR Premium prend en charge la propreté professionnelle haut de gamme. LVMR Environnement intervient sur les opérations techniques, sensibles ou complexes."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_.92fr]">
            <article className="group relative min-h-[520px] overflow-hidden rounded-[26px] bg-[#202020] text-white sm:min-h-[580px]">
              <img src={imageSet.detail} alt="L’approche LVMR Group sur le terrain" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.98)_0%,rgba(32,32,32,.62)_52%,rgba(32,32,32,.18)_100%)]" />
              <div className="relative flex min-h-[520px] flex-col justify-between p-6 sm:min-h-[580px] sm:p-9">
                <div className="flex items-center justify-between border-b border-white/18 pb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">LVMR Group</span>
                  <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/45">Saint-Germain-en-Laye</span>
                </div>
                <div>
                  <h3 className="max-w-[560px] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-.05em]">L’équipe et les moyens réellement adaptés.</h3>
                  <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-white/65">Nous analysons le besoin, définissons un périmètre précis, organisons l’intervention puis assurons le contrôle et le suivi prévus.</p>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {values.map(([Icon, title, text], index) => (
                      <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-[#202020]/45 p-3.5 backdrop-blur-md">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#6b6b6b]/18 text-[#f1f1f1]"><Icon size={16} /></span>
                        <div className="min-w-0"><p className="text-[12px] font-extrabold"><span className="mr-2 text-[#f1f1f1]">0{index + 1}</span>{title}</p><p className="mt-0.5 text-[10px] leading-4 text-white/50">{text}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              {[
                ["01", "LVMR Premium", "La tenue régulière des lieux professionnels, résidentiels et hôteliers.", imageSet.premium, "/premium", "#ffc547"],
                ["02", "LVMR Environnement", "La réponse structurée aux situations sensibles, techniques ou imprévues.", imageSet.environnement, "/environnement", "#7ebcab"],
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
  usePageMeta({ title: "Devis nettoyage professionnel en Île-de-France | LVMR Group", description: "Contactez LVMR Group pour un devis, une visite technique ou une intervention de propreté professionnelle en Île-de-France.", path: "/devis" });
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
  usePageMeta({ title: "Devis nettoyage professionnel en Île-de-France | LVMR Group", description: "Contactez LVMR Group pour un devis, une visite technique ou une intervention de propreté professionnelle en Île-de-France.", path: "/contact" });
  return (
    <PageFrame>
      <PageHero
        eyebrow="Contact"
        title={<>Parlons de votre <span className="hero-stroke">besoin.</span></>}
        intro="Vous souhaitez obtenir un devis, organiser une visite technique ou échanger sur une intervention ? Notre équipe vous orientera vers LVMR Premium ou LVMR Environnement."
      >
        <CtaChip href="/devis" label="Demander un devis" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="LVMR Group" title={<>À votre écoute.</>} />
            <p className="mt-7 max-w-[420px] text-[15px] leading-8 text-[#424242]">Lundi au vendredi de 8 h à 20 h<br/>Samedi de 10 h à 18 h</p>
            <a href="tel:+33671849341" className="mt-6 inline-flex items-center gap-2 text-[1.25rem] font-extrabold text-[#202020]">06 71 84 93 41</a>
            <div className="mt-5 space-y-2 text-[13px] text-[#424242]"><a className="block hover:text-[#6b6b6b]" href="mailto:contact@lvmr-premium.fr">contact@lvmr-premium.fr</a><a className="block hover:text-[#6b6b6b]" href="mailto:contact@lvmr-environnement.fr">contact@lvmr-environnement.fr</a></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.1)] sm:col-span-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white">
                <MapPin size={19} />
              </span>
              <h3 className="mt-5 text-[1.25rem] font-extrabold tracking-[-0.02em] text-[#202020]">30 bis rue du Vieil Abreuvoir</h3>
              <p className="mt-2 max-w-[420px] text-[13px] leading-6 text-[#424242]">78100 Saint-Germain-en-Laye · Interventions principalement à Paris et en Île-de-France.</p>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.1)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white">
                <ClipboardList size={19} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">Un devis</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">Le parcours guidé précise le site, la surface, la fréquence ou l’urgence et les documents utiles.</p>
              <Link href="/devis" className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#6b6b6b]">Accéder au formulaire <ArrowRight size={13} /></Link>
            </div>
            <div className="group relative overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/30 hover:shadow-[0_18px_50px_rgba(107,107,107,.1)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition duration-300 group-hover:bg-[#6b6b6b] group-hover:text-white">
                <MessagesSquare size={19} />
              </span>
              <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">Une situation ?</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#424242]">LVMR Environnement qualifie les contextes sensibles ou techniques.</p>
              <Link href="/environnement" className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#6b6b6b]">Voir les interventions <ArrowRight size={13} /></Link>
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
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">{service.number} · {service.kicker}</p>
                <h2 className="mt-3 max-w-[480px] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-.05em]">{service.title}</h2>
                <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/60">Un cadre clair, adapté aux contraintes réelles du site.</p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-11">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">Ce que nous préparons</p>
                <h2 className="mt-4 max-w-[560px] text-[clamp(2rem,3.7vw,3.2rem)] font-extrabold leading-[1.03] tracking-[-.05em]">Une intervention pensée pour votre site.</h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-white/62">{service.description} La qualification permet de préciser les accès, le rythme et les conditions utiles avant l’intervention.</p>

                <ol className="mt-7 m-0 list-none border-t border-white/14 p-0">
                  {service.points.map((point, index) => (
                    <li key={point} className="group flex items-center gap-4 border-b border-white/14 py-4">
                      <span className="text-[11px] font-extrabold tabular-nums text-[#f1f1f1]">0{index + 1}</span>
                      <p className="flex-1 text-[13px] font-bold leading-6 text-white/78 sm:text-[14px]">{point}</p>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6b6b6b] opacity-30 transition group-hover:opacity-100" />
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 border-t border-white/14 pt-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">Pour quels lieux ?</p><p className="mt-2 text-[12px] leading-5 text-white/45">Le périmètre exact se précise avec le contexte.</p></div>
                  <Link href="/devis" className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#f1f1f1]">Parler de ce besoin <ArrowRight size={14} /></Link>
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
                <span className="text-[11px] font-extrabold tracking-[.14em] text-[#6b6b6b]">0{index + 1}</span>
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
        <Link href="/" className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-[#ffc547] px-7 text-[13px] font-extrabold text-[#202020] shadow-[0_12px_32px_rgba(255,197,71,.28)] transition hover:-translate-y-0.5 hover:bg-[#b07e2b]">Retour à l’accueil <ArrowRight size={15} /></Link>
      </PageHero>
      <CTASection />
    </PageFrame>
  );
}
