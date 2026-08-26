/* LVMR Group inner pages — composed from the shared premium section library, with page-specific sections on top. */
"use client";
import { useState } from "react";
import { ArrowRight, Building2, CalendarCheck, Check, ClipboardList, Clock3, Hammer, Layers, Mail, MapPin, MessagesSquare, Phone, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageConversionSections } from "@/components/PageConversionSections";
import { GarantiesBand, ProcessRail, RelatedServices, SectionHead, SectorsSection, ServiceGrid, StatsBand, TestimonialsSection, ZoneSection } from "@/components/Sections";
import { PageFrame, PageHero, usePageMeta } from "@/components/SiteChrome";
import { allServices, brandSet, environmentServices, extractionReasons, findService, imageSet, premiumServices } from "@/lib/site";
import { getServiceConversionContent, pageConversionContent } from "@/lib/pageConversion";

function CtaChip({ href, label, tone = "group" }: { href: string; label: string; tone?: "group" | "premium" | "environnement" }) {
  const toneClass = tone === "premium"
    ? "bg-[#ffc547] hover:bg-[#b07e2b] shadow-[0_12px_32px_rgba(255,197,71,.28)]"
    : tone === "environnement"
      ? "bg-[#7ebcab] hover:bg-[#a2cebd] shadow-[0_12px_32px_rgba(126,188,171,.28)]"
      : "bg-[#f1f1f1] hover:bg-white shadow-[0_12px_32px_rgba(107,107,107,.24)]";
  return (
    <Link
      href={href}
      className={`mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-[10px] px-6 text-[13px] font-extrabold text-[#202020] transition hover:-translate-y-0.5 ${toneClass}`}
    >
      {label} <ArrowRight size={15} />
    </Link>
  );
}

/* Compact editorial band — contained card, not full-bleed. */
function EditorialSplit({ eyebrow, title, quote, text, image, imageAlt }: { eyebrow: string; title: React.ReactNode; quote: string; text: string; image: string; imageAlt: string }) {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <div className="overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white shadow-[0_12px_40px_rgba(32,32,32,.06)] lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)]">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[260px]">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.35),transparent_55%)] lg:bg-[linear-gradient(to_right,transparent_55%,rgba(32,32,32,.08)_100%)]" aria-hidden />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b07e2b]">{eyebrow}</p>
            <h2 className="mt-3 max-w-[420px] text-[clamp(1.35rem,2.4vw,1.85rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#202020]">
              {title}
            </h2>
            <p className="mt-3 max-w-[440px] text-[13px] leading-6 text-[#424242]">{text}</p>
            <p className="mt-4 max-w-[440px] border-l-2 border-[#ffc547]/60 pl-3 text-[12px] leading-5 text-[#424242]/90">
              {quote}
            </p>
            <Link
              href="/expertises"
              className="group mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#202020] transition hover:gap-2.5"
            >
              Explorer les expertises <ArrowRight size={14} className="text-[#b07e2b] transition group-hover:translate-x-0.5" />
            </Link>
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
        logo={brandSet.premiumHorizontalWhite}
        accent="#ffc547"
        eyebrow="Propreté professionnelle haut de gamme"
        title={<>La propreté au rang <span className="hero-stroke">du luxe.</span></>}
        intro="Des prestations soignées, discrètes et adaptées aux bureaux, copropriétés, résidences et environnements professionnels exigeants."
        image={imageSet.premium}
      >
        <CtaChip href="/devis" label="Demander une étude personnalisée" tone="premium" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <SectionHead
            eyebrow="Une propreté qui valorise vos espaces"
            title={<>Davantage qu’un simple entretien courant.</>}
            intro="Chaque site fait l’objet d’un périmètre défini, de consignes précises et d’un suivi qui assure la régularité de la prestation."
          />
          <ServiceGrid services={premiumServices} />
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#202020]/10 pt-5">
            {["Discrétion en site occupé", "Personnel encadré", "Horaires adaptés", "Interlocuteur identifié", "Méthodes par surface"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.08em] text-[#424242]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc547]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EditorialSplit
        eyebrow="Un environnement bien tenu"
        title={<>Une organisation adaptée à vos contraintes.</>}
        quote="Discrétion, personnel encadré, consignes formalisées et interlocuteur identifié."
        text="Nos prestations sont organisées selon vos horaires, la fréquentation des lieux, vos contraintes et l’image que vous souhaitez offrir à vos collaborateurs, visiteurs, clients ou résidents."
        image={imageSet.premiumTeam}
        imageAlt="Équipe de nettoyage coordonnée dans un espace contemporain"
      />
      <GarantiesBand />
      <ProcessRail />
      <ZoneSection />
      <PageConversionSections content={pageConversionContent.premium} />
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
        logo={brandSet.environnementHorizontal}
        accent="#7ebcab"
        eyebrow="Assainir, sécuriser, préserver"
        title={<>Des situations complexes, <span className="hero-stroke">une réponse maîtrisée.</span></>}
        intro="Interventions techniques, remises en état, environnements sensibles, nettoyage industriel, dégraissage professionnel et solutions 3D en Île-de-France."
        image={imageSet.environmentHero}
      >
        <CtaChip href="/devis" label="Demander une expertise" tone="environnement" />
      </PageHero>
      <section className="relative overflow-hidden bg-[#f5f5f5] py-14 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#7ebcab]/10 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#a2cebd]/10 blur-[100px]" aria-hidden />
        <div className="container relative">
          <SectionHead
            eyebrow="Le bon niveau d’intervention"
            title={<>Des interventions techniques spécialisées.</>}
            intro="Chaque intervention est préparée selon l’état des lieux, les risques identifiés, les contraintes d’accès et le résultat attendu. Une visite technique peut être organisée avant devis."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text], index) => (
              <div key={title} className="group relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-white p-6 shadow-[0_10px_40px_rgba(32,32,32,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#7ebcab]/40 hover:shadow-[0_18px_50px_rgba(126,188,171,.16)]">
                <span className="absolute right-5 top-4 text-[2.4rem] font-extrabold leading-none text-[#202020]/[0.05] transition group-hover:text-[#7ebcab]/20" aria-hidden>0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#a2cebd]/25 text-[#7ebcab] transition group-hover:bg-[#7ebcab] group-hover:text-white">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#424242]">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#7ebcab] to-[#a2cebd] transition duration-300 group-hover:scale-x-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-14 pb-8 sm:pt-20 sm:pb-10">
        <div className="container">
          <SectionHead
            eyebrow="Les interventions spécialisées"
            title={<>Des moyens adaptés à chaque intervention.</>}
            intro="Remise en état, nettoyage industriel, extraction et pôle 3D en Île-de-France."
          />
          <ServiceGrid services={environmentServices} />
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#202020]/10 pt-5">
            {["Diagnostic préalable", "Protocole adapté", "Consignes de sécurité", "Personnel certifié", "Compte rendu remis"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.07em] text-[#424242]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7ebcab]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pb-8 sm:pb-10">
        <div className="container">
          <div className="rounded-[20px] border border-[#202020]/8 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7ebcab]">Hottes & extraction</p>
                <h3 className="mt-2 text-[1.15rem] font-extrabold tracking-[-0.02em] text-[#202020]">Dégraissage de hottes professionnelles</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#424242]">Restaurants, cuisines collectives, hôtels et établissements de santé.</p>
              </div>
              <Link href="/environnement/hottes-professionnelles" className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-extrabold text-[#7ebcab]">
                Voir la prestation <ArrowRight size={13} />
              </Link>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ul className="space-y-2">
                {["Hotte et surfaces accessibles", "Filtres métalliques", "Conduits accessibles", "Moteurs et caissons selon accessibilité"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-[#424242]">
                    <Check size={13} className="mt-0.5 shrink-0 text-[#7ebcab]" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {extractionReasons.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-[#424242]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7ebcab]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] pb-14 sm:pb-20">
        <div className="container grid gap-3 md:grid-cols-2">
          <Link
            href="/devis"
            className="group relative flex min-h-[320px] overflow-hidden rounded-[24px] bg-[#202020] text-white shadow-[0_14px_40px_rgba(32,32,32,.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(32,32,32,.2)] sm:min-h-[360px]"
          >
            <img src={imageSet.groupEquipment} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.97)_0%,rgba(32,32,32,.68)_44%,rgba(32,32,32,.1)_100%)]" aria-hidden />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7ebcab]">Pôle 3D</p>
              <div>
                <h3 className="max-w-[340px] text-[clamp(1.35rem,2.2vw,1.75rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">Dératisation, désinsectisation, désinfection.</h3>
                <p className="mt-2.5 max-w-[360px] text-[13px] leading-6 text-white/65">Décrivez la situation et les zones concernées pour préparer un diagnostic adapté.</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Dératisation", "Désinsectisation", "Désinfection"].map((item) => (
                    <span key={item} className="rounded-full border border-white/14 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-white/55">{item}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-3 text-[13px] font-extrabold">
                  Demander un diagnostic 3D
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7ebcab] text-[#202020] transition group-hover:translate-x-0.5"><ArrowRight size={15} /></span>
                </span>
              </div>
            </div>
          </Link>

          <a
            href="tel:+33671849341"
            className="group relative flex min-h-[320px] overflow-hidden rounded-[24px] bg-[#202020] text-white shadow-[0_14px_40px_rgba(32,32,32,.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(32,32,32,.2)] sm:min-h-[360px]"
          >
            <img src={imageSet.environmentIntervention} alt="" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.97)_0%,rgba(32,32,32,.68)_44%,rgba(32,32,32,.1)_100%)]" aria-hidden />
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#ffc547]">Gestion des demandes urgentes</p>
              <div>
                <h3 className="max-w-[340px] text-[clamp(1.35rem,2.2vw,1.75rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">Une situation technique ou sanitaire urgente ?</h3>
                <p className="mt-2.5 max-w-[360px] text-[13px] leading-6 text-white/65">Contactez directement notre équipe. Nous évaluons la demande, le niveau de priorité et nos possibilités d’intervention dans les meilleurs délais.</p>
                <span className="mt-5 inline-flex items-center gap-3 text-[13px] font-extrabold">
                  Signaler une demande urgente
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ffc547] text-[#202020] transition group-hover:translate-x-0.5"><Phone size={15} /></span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>
      <ZoneSection />
      <PageConversionSections content={pageConversionContent.environnement} />
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
        logo={brandSet.groupHorizontalWhite}
        eyebrow="Le savoir-faire"
        title={<>La précision, <span className="hero-stroke">en pratique.</span></>}
        intro="Deux pôles, un même niveau d’attention. Parcourez les services LVMR et trouvez le point d’entrée qui correspond à votre situation."
        image={imageSet.groupMethodology}
      />
      <section className="py-14 sm:py-20">
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
      <PageConversionSections content={pageConversionContent.expertises} />
    </PageFrame>
  );
}

export function RealisationsPage() {
  usePageMeta({ title: "Nos réalisations | LVMR Group", description: "Des réalisations LVMR Group documentées avec des contenus authentiques et autorisés.", path: "/realisations" });

  return (
    <PageFrame>
      <PageHero
        logo={brandSet.groupHorizontalWhite}
        eyebrow="Références et preuves"
        title={<>Le réel comme <span className="hero-stroke">meilleure preuve.</span></>}
        intro="Découvrez des photographies terrain authentiques qui documentent le contexte, l’intervention et le résultat obtenu."
        image={imageSet.environmentAfter}
      />

      {/* Same cinematic mosaic language as homepage */}
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Sur le terrain</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,3rem)] font-extrabold leading-[1.05] tracking-[-.045em] text-[#202020]">
                Laisser parler le réel.
              </h2>
            </div>
            <p className="max-w-[320px] text-[14px] leading-6 text-[#424242]">
              Aucun nom, logo, témoignage ou contexte client n’est publié sans accord écrit.
            </p>
          </div>

          <div className="grid auto-rows-[230px] gap-4 sm:auto-rows-[280px] md:grid-cols-12">
            {[
              [imageSet.environmentBefore, "Avant intervention", "État initial du logement", "md:col-span-7 md:row-span-2"],
              [imageSet.environmentIntervention, "Pendant", "Remise en état en cours", "md:col-span-5"],
              [imageSet.environmentDetail, "Contrôle", "Nettoyage des zones sensibles", "md:col-span-5"],
              [imageSet.environmentAfter, "Après intervention", "Espace restitué", "md:col-span-7"],
              [imageSet.groupChecklist, "Traçabilité", "Intervention documentée", "md:col-span-5"],
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
      <section className="bg-[#f5f5f5] pt-14 pb-8 sm:pt-20 sm:pb-10">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Fiche projet</p>
              <h2 className="mt-4 max-w-[480px] text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-.045em] text-[#202020]">
                Un format pensé pour le concret.
              </h2>
            </div>
            <p className="max-w-[340px] text-[15px] leading-7 text-[#424242]">
              Lieu, enjeu, intervention et visuels — une lecture claire de chaque mission.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <article className="group relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[420px] sm:rounded-[28px] lg:row-span-2">
              <img src={imageSet.environmentAfter} alt="Espace remis en état après intervention" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.05]" />
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

      {/* First documented case — anonymized as required by the editorial brief */}
      <section className="bg-[#f5f5f5] pb-14 sm:pb-20">
        <div className="container">
          <div className="overflow-hidden rounded-[26px] bg-[#202020] text-white shadow-[0_24px_70px_rgba(32,32,32,.22)]">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
                <img src={imageSet.environmentIntervention} alt="Remise en état d’un logement en cours" className="absolute inset-0 h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.92),rgba(32,32,32,.2)_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#ffc547]">Étude de cas · Publication autorisée</p>
                  <h3 className="mt-3 max-w-[420px] text-[clamp(1.55rem,2.6vw,2.15rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">Remise en état approfondie d’un logement.</h3>
                </div>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 lg:p-10">
                {[
                  ["Contexte", "Logement encombré nécessitant une remise en état approfondie et une progression zone par zone."],
                  ["Mission", "Désencombrement, nettoyage des surfaces accessibles et remise en propreté des pièces définies au devis."],
                  ["Organisation", "Équipe dédiée, protocole adapté, contrôle final et restitution des lieux."],
                ].map(([title, text], index) => (
                  <div key={title} className="grid gap-2 border-b border-white/10 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-5">
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ffc547]"><span className="text-white/35">0{index + 1}</span>{title}</p>
                    <p className="text-[14px] leading-7 text-white/70">{text}</p>
                  </div>
                ))}
                <p className="text-[11px] leading-5 text-white/40">Conformément à nos engagements, le nom, les photos et les circonstances exactes du client ne sont publiés qu’avec son accord écrit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageConversionSections content={pageConversionContent.realisations} />
    </PageFrame>
  );
}

export function GroupePage() {
  usePageMeta({ title: "Le Groupe | LVMR Group", description: "Découvrez LVMR Group, ses engagements et ses deux pôles spécialisés en Île-de-France.", path: "/groupe", schema: { "@context": "https://schema.org", "@type": "Organization", name: "LVMR Group", areaServed: "Île-de-France", address: "30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye" } });
  const values = [[Layers, "Exigence", "Des protocoles adaptés et un niveau de qualité constant."], [CalendarCheck, "Réactivité", "Une prise en charge rapide des demandes et des besoins urgents selon nos disponibilités."], [ShieldCheck, "Sécurité", "Des équipes encadrées, des équipements adaptés et le respect des consignes applicables au site."], [Sparkles, "Discrétion", "Des interventions organisées pour limiter la gêne occasionnée à vos collaborateurs, occupants ou clients."], [ClipboardList, "Suivi", "Un interlocuteur identifié et, selon la prestation, un compte rendu, un rapport ou un certificat d’intervention."]] as const;
  const poles = [
    ["01", "LVMR Premium", "Entretien haut de gamme des espaces professionnels et résidentiels.", imageSet.premiumOffice, "/premium", "#ffc547", "Découvrir Premium"],
    ["02", "LVMR Environnement", "Interventions techniques, sensibles et complexes, prises en charge avec méthode.", imageSet.groupTechnical, "/environnement", "#7ebcab", "Découvrir Environnement"],
  ];
  return (
    <PageFrame>
      <PageHero
        logo={brandSet.groupHorizontalWhite}
        eyebrow="Groupe LVMR"
        title={<>L’excellence en <span className="hero-stroke">toutes circonstances.</span></>}
        intro="Deux pôles complémentaires pour répondre à vos besoins de propreté professionnelle et d’interventions techniques spécialisées en Île-de-France."
        image={imageSet.groupMethodology}
      >
        <CtaChip href="/devis" label="Demander un devis" tone="premium" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <SectionHead
            eyebrow="Une expertise globale, deux pôles spécialisés"
            title={<>Le bon interlocuteur, dès le premier échange.</>}
            intro="LVMR Group accompagne les entreprises, les copropriétés, les commerces, les établissements recevant du public et les gestionnaires de sites dans l’entretien, la remise en état et la sécurisation de leurs environnements."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <article className="group relative min-h-[540px] overflow-hidden rounded-[28px] bg-[#202020] text-white lg:col-span-7 lg:min-h-[640px]">
              <img src={imageSet.groupMethodology} alt="Équipe coordonnée selon la méthode LVMR Group" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-1000 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(24,24,24,.98)_0%,rgba(24,24,24,.66)_42%,rgba(24,24,24,.08)_78%)]" />
              <div className="relative flex min-h-[540px] flex-col justify-between p-6 sm:p-9 lg:min-h-[640px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/18 bg-[#202020]/55 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md">LVMR Group</span>
                  <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/45">Saint-Germain-en-Laye</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#ffc547]">Une organisation, deux expertises</p>
                  <h3 className="mt-4 max-w-[560px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-.05em]">La bonne équipe.<br />Le bon niveau d’intervention.</h3>
                  <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-white/68">Un interlocuteur unique mobilise les méthodes, les moyens et le pôle réellement adaptés à votre situation.</p>
                  <div className="mt-7 grid grid-cols-3 divide-x divide-white/14 border-t border-white/16 pt-6">
                    {[['02', 'pôles spécialisés'], ['12', 'expertises'], ['01', 'interlocuteur']].map(([value, label]) => (
                      <div key={label} className="px-4 first:pl-0 last:pr-0">
                        <p className="text-[1.55rem] font-extrabold leading-none text-white">{value}</p>
                        <p className="mt-2 text-[9px] font-bold uppercase tracking-[.12em] text-white/45">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-5">
              {poles.map(([number, title, text, image, href, accent, cta]) => (
                <Link key={title} href={href} className="group relative min-h-[260px] overflow-hidden rounded-[28px] bg-[#202020] p-6 text-white sm:min-h-[312px] sm:p-8">
                  <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(24,24,24,.96)_0%,rgba(24,24,24,.62)_48%,rgba(24,24,24,.1)_100%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="rounded-full border border-white/18 bg-[#202020]/60 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] backdrop-blur" style={{ color: accent }}>{number}</span><span className="grid h-11 w-11 place-items-center rounded-full border border-white/22 bg-[#202020]/45 backdrop-blur transition group-hover:bg-white group-hover:text-[#202020]"><ArrowRight size={17} /></span></div>
                    <div>
                      <h3 className="text-[clamp(1.55rem,2.6vw,2.2rem)] font-extrabold tracking-[-.04em]">{title}</h3>
                      <p className="mt-3 max-w-[390px] text-[13px] leading-6 text-white/66">{text}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold" style={{ color: accent }}>{cta} <ArrowRight size={13} className="transition group-hover:translate-x-1" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([Icon, title, text], index) => (
              <article key={title} className="group rounded-[22px] border border-[#202020]/8 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/25 hover:shadow-[0_16px_40px_rgba(32,32,32,.08)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1f1f1] text-[#6b6b6b] transition group-hover:bg-[#202020] group-hover:text-white"><Icon size={17} /></span>
                  <span className="text-[11px] font-bold text-[#202020]/25">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-[1rem] font-extrabold tracking-[-.02em] text-[#202020]">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#424242]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectorsSection />
      <ProcessRail />
      <ZoneSection />
      <TestimonialsSection />
      <PageConversionSections content={pageConversionContent.groupe} />
    </PageFrame>
  );
}

export function DevisPage() {
  usePageMeta({ title: "Devis nettoyage professionnel en Île-de-France | LVMR Group", description: "Contactez LVMR Group pour un devis, une visite technique ou une intervention de propreté professionnelle en Île-de-France.", path: "/devis" });
  return (
    <PageFrame>
      <PageHero
        logo={brandSet.groupHorizontalWhite}
        eyebrow="Demander un devis"
        title={<>Parlons de votre <span className="hero-stroke">besoin.</span></>}
        intro="Quelques informations nous aideront à comprendre votre environnement et à préparer un échange utile."
        image={imageSet.premiumOffice}
      />
      <PageConversionSections content={pageConversionContent.devis} />
    </PageFrame>
  );
}

export function ContactPage() {
  usePageMeta({ title: "Devis nettoyage professionnel en Île-de-France | LVMR Group", description: "Contactez LVMR Group pour un devis, une visite technique ou une intervention de propreté professionnelle en Île-de-France.", path: "/contact" });
  return (
    <PageFrame>
      <PageHero
        logo={brandSet.groupHorizontalWhite}
        eyebrow="Contact"
        title={<>Parlons de votre <span className="hero-stroke">besoin.</span></>}
        intro="Vous souhaitez obtenir un devis, organiser une visite technique ou échanger sur une intervention ? Notre équipe vous orientera vers LVMR Premium ou LVMR Environnement."
      >
        <CtaChip href="/devis" label="Demander un devis" />
      </PageHero>
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <div className="overflow-hidden rounded-[28px] border border-[#202020]/8 bg-white shadow-[0_24px_70px_rgba(32,32,32,.10)] lg:grid lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]">
            <div className="relative flex flex-col justify-between bg-[#202020] p-7 text-white sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[#ffc547]/10 blur-[90px]" aria-hidden />
              <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#7ebcab]/8 blur-[80px]" aria-hidden />

              <div className="relative">
                <p className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffc547]">
                  <span className="h-px w-5 bg-current" aria-hidden />
                  LVMR Group
                </p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em]">À votre écoute.</h2>
                <p className="mt-4 max-w-[340px] text-[13px] leading-6 text-white/55">
                  Une équipe unique pour orienter votre demande vers LVMR Premium ou LVMR Environnement.
                </p>
              </div>

              <div className="relative mt-10 space-y-5 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[.06] text-[#ffc547]">
                    <Clock3 size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/40">Horaires</p>
                    <p className="mt-1 text-[13px] font-semibold leading-6 text-white/80">
                      Lundi au vendredi · 8 h – 20 h
                      <br />
                      Samedi · 10 h – 18 h
                    </p>
                  </div>
                </div>

                <a href="tel:+33671849341" className="group flex items-start gap-4 transition hover:opacity-90">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[.06] text-[#ffc547] transition group-hover:bg-[#ffc547] group-hover:text-[#202020]">
                    <Phone size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/40">Téléphone</p>
                    <p className="mt-1 text-[1.15rem] font-extrabold tracking-[-0.02em] text-white transition group-hover:text-[#ffc547]">06 71 84 93 41</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[.06] text-[#7ebcab]">
                    <Mail size={17} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.12em] text-white/40">E-mail</p>
                    <a href="mailto:contact@lvmr-premium.fr" className="mt-1 block text-[13px] font-semibold text-white/75 transition hover:text-[#ffc547]">contact@lvmr-premium.fr</a>
                    <a href="mailto:contact@lvmr-environnement.fr" className="mt-1 block text-[13px] font-semibold text-white/75 transition hover:text-[#7ebcab]">contact@lvmr-environnement.fr</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5 sm:p-7 lg:p-8">
              <div className="relative overflow-hidden rounded-[22px] border border-[#202020]/8 bg-[#f5f5f5] p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#ffc547] to-[#7ebcab]" aria-hidden />
                <div className="flex items-start gap-4 pl-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#202020] text-[#ffc547]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#6b6b6b]">Siège</p>
                    <h3 className="mt-1 text-[1.15rem] font-extrabold tracking-[-0.02em] text-[#202020]">30 bis rue du Vieil Abreuvoir</h3>
                    <p className="mt-2 max-w-[420px] text-[13px] leading-6 text-[#424242]">
                      78100 Saint-Germain-en-Laye · Interventions principalement à Paris et en Île-de-France.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                <Link
                  href="/devis"
                  className="group flex flex-col justify-between rounded-[22px] border border-[#202020]/8 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#ffc547]/35 hover:shadow-[0_16px_40px_rgba(255,197,71,.12)] sm:p-6"
                >
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ffc547]/15 text-[#b07e2b] transition group-hover:bg-[#ffc547] group-hover:text-[#202020]">
                      <ClipboardList size={18} />
                    </span>
                    <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">Un devis</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#424242]">
                      Le parcours guidé précise le site, la surface, la fréquence ou l’urgence et les documents utiles.
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#202020]">
                    Accéder au formulaire
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#202020] text-[#ffc547] transition group-hover:translate-x-0.5">
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </Link>

                <Link
                  href="/environnement"
                  className="group flex flex-col justify-between rounded-[22px] border border-[#202020]/8 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#7ebcab]/35 hover:shadow-[0_16px_40px_rgba(126,188,171,.12)] sm:p-6"
                >
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#7ebcab]/15 text-[#7ebcab] transition group-hover:bg-[#7ebcab] group-hover:text-[#202020]">
                      <MessagesSquare size={18} />
                    </span>
                    <h3 className="mt-5 text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#202020]">Une situation ?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#424242]">
                      LVMR Environnement qualifie les contextes sensibles ou techniques.
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#202020]">
                    Voir les interventions
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#202020] text-[#7ebcab] transition group-hover:translate-x-0.5">
                      <ArrowRight size={14} />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ZoneSection />
      <PageConversionSections content={pageConversionContent.contact} />
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
        logo={service.group === "premium" ? brandSet.premiumHorizontalWhite : brandSet.environnementHorizontal}
        accent={service.group === "premium" ? "#ffc547" : "#7ebcab"}
        eyebrow={`${service.number} — ${service.kicker}`}
        title={<>{service.title.split(" ").slice(0, -1).join(" ")} {" "}<span className="hero-stroke">{service.title.split(" ").slice(-1)}</span></>}
        intro={service.intro}
        image={service.image}
      >
        <CtaChip href="/devis" label="Parler de ce besoin" tone={service.group === "premium" ? "premium" : "environnement"} />
      </PageHero>
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <div className="grid overflow-hidden rounded-[26px] bg-[#202020] text-white shadow-[0_28px_80px_rgba(32,32,32,.18)] lg:grid-cols-[.88fr_1.12fr]">
            <div className="group relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-[620px]">
              <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.045]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.94)_0%,rgba(32,32,32,.2)_70%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">{service.number} · {service.kicker}</p>
                <h2 className="mt-3 max-w-[480px] text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-.045em]">{service.title}</h2>
                <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/60">Un cadre clair, adapté aux contraintes réelles du site.</p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-11">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f1f1f1]">Ce que nous préparons</p>
                <h2 className="mt-4 max-w-[520px] text-[clamp(1.7rem,3.2vw,2.7rem)] font-extrabold leading-[1.08] tracking-[-.045em]">Une intervention pensée pour votre site.</h2>
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
      <section className="bg-[#f5f5f5] py-14 sm:py-20">
        <div className="container">
          <SectionHead
            eyebrow="Dans la même expertise"
            title={<>À explorer également.</>}
            intro="D’autres interventions du même pôle, complémentaires à votre besoin actuel."
          />
          <RelatedServices services={related} />
        </div>
      </section>
      <PageConversionSections content={getServiceConversionContent(service)} />
    </PageFrame>
  );
}

const TO_VALIDATE = "Contenu à compléter et valider avec les informations légales réelles de LVMR Group avant publication. Aucun élément contractuel ou réglementaire ne doit être considéré comme final dans cette version.";

const legalContent: Record<"mentions" | "confidentialite" | "cookies", [string, string][]> = {
  mentions: [
    ["Éditeur du site", "Le présent site est édité par LVMR Group — 30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye. Téléphone : 06 71 84 93 41. E-mail : contact@lvmr-premium.fr / contact@lvmr-environnement.fr. Forme juridique, capital social et numéro d’immatriculation : à compléter après validation des informations officielles."],
    ["Responsable de publication", "Le responsable de la publication est le représentant de LVMR Group. Identité exacte à valider avant mise en production."],
    ["Hébergement", "Le site est hébergé par un prestataire dont les coordonnées (nom, adresse, site internet) seront indiquées ici après confirmation de l’hébergeur de production."],
    ["Propriété intellectuelle", "L’ensemble des contenus du site (textes, visuels, logos, marques LVMR Group, LVMR Premium et LVMR Environnement) est protégé. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite. Les photographies de chantiers sont publiées avec l’autorisation de leurs ayants droit."],
    ["Responsabilité", "Les informations publiées sont fournies à titre indicatif et peuvent être mises à jour. LVMR Group ne saurait être tenu responsable de l’usage qui en est fait. Les demandes d’intervention font l’objet d’une étude préalable et d’un devis."],
    ["Contact", "Pour toute question relative au site : LVMR Group, 30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye — 06 71 84 93 41."],
  ],
  confidentialite: [
    ["Responsable de traitement", "LVMR Group, 30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye, traite les données collectées sur ce site pour répondre aux demandes de devis, de visite technique et de contact. Téléphone : 06 71 84 93 41."],
    ["Données collectées", "Les formulaires du site collectent uniquement les informations nécessaires au traitement de votre demande : société ou organisme, nom et prénom, téléphone, adresse e-mail, adresse du site concerné, type de prestation, surface, fréquence ou degré d’urgence, message et, le cas échéant, photographies ou documents transmis."],
    ["Finalités et base légale", "Les données sont utilisées pour étudier votre demande, vous recontacter et établir une proposition adaptée. Le traitement repose sur votre consentement, recueilli via la case prévue à cet effet avant chaque envoi."],
    ["Durées de conservation", "Les données sont conservées le temps nécessaire au traitement de la demande et à la relation commerciale qui peut en découler, puis archivées ou supprimées conformément aux délais légaux applicables. Durées précises à valider avant mise en production."],
    ["Vos droits", "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Pour l’exercer, contactez-nous aux coordonnées ci-dessus. Vous pouvez également adresser une réclamation à la CNIL (www.cnil.fr)."],
    ["Destinataires et sécurité", "Les données sont destinées aux équipes de LVMR Group et, le cas échéant, aux prestataires techniques contribuant au fonctionnement du site. Elles ne sont ni vendues ni louées. Des mesures raisonnables sont mises en œuvre pour protéger leur confidentialité."],
  ],
  cookies: [
    ["Cookies utilisés", "Le site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement (préférences d’affichage, enregistrement local du parcours de devis sur votre appareil). Aucun cookie publicitaire ou de suivi tiers n’est déposé à ce stade. Liste détaillée à valider avant mise en production."],
    ["Finalités", "Les traceurs éventuels serviraient exclusivement à mesurer l’audience de manière anonymisée et à améliorer l’expérience du site, après recueil de votre consentement."],
    ["Consentement", "Lorsqu’un traceur soumis au consentement sera mis en place, un bandeau vous permettra d’accepter ou de refuser avant tout dépôt. Votre choix pourra être modifié à tout moment depuis cette page."],
    ["Gestion dans le navigateur", "Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou les supprimer à tout moment. La désactivation des cookies techniques peut dégrader certaines fonctionnalités du site."],
    ["Durée de validité", "La durée de vie des traceurs soumis au consentement n’excède pas les recommandations en vigueur (13 mois maximum pour le consentement). Durées précises à documenter lors de l’ajout de traceurs."],
    ["Contact", "Pour toute question relative aux cookies : LVMR Group, 30 bis rue du Vieil Abreuvoir, 78100 Saint-Germain-en-Laye — 06 71 84 93 41."],
  ],
};

export function LegalPage({ type }: { type: "mentions" | "confidentialite" | "cookies" }) {
  const titles = { mentions: "Mentions légales", confidentialite: "Politique de confidentialité", cookies: "Gestion des cookies" };
  const currentTitle = titles[type];
  const sections = legalContent[type];
  usePageMeta({ title: `${currentTitle} — LVMR Group`, description: `${currentTitle} de LVMR Group.`, path: `/${type === "mentions" ? "mentions-legales" : type}` });
  return (
    <PageFrame>
      <PageHero logo={brandSet.groupHorizontalWhite} eyebrow="Informations" title={<>{currentTitle.split(" ").slice(0, -1).join(" ")} {" "}<span className="hero-stroke">{currentTitle.split(" ").slice(-1)}</span></>} intro="Cette page est structurée pour recevoir les informations officielles validées par LVMR Group et son conseil juridique." />
      <section className="py-14 sm:py-20">
        <div className="container max-w-[900px]">
          <div className="grid gap-3">
            {sections.map(([heading, content], index) => (
              <section key={heading} className="rounded-[20px] border border-[#202020]/8 bg-white p-6 sm:p-8">
                <span className="text-[11px] font-extrabold tracking-[.14em] text-[#6b6b6b]">0{index + 1}</span>
                <h2 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.03em] text-[#202020]">{heading}</h2>
                <p className="mt-3 max-w-[680px] text-[13px] leading-7 text-[#424242]">{content}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 rounded-[16px] border border-[#202020]/8 bg-white/60 p-5 text-[12px] leading-6 text-[#6b6b6b]">
            Note : {TO_VALIDATE}
          </p>
        </div>
      </section>
      <PageConversionSections content={pageConversionContent.contact} />
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
      <PageConversionSections content={pageConversionContent.contact} />
    </PageFrame>
  );
}
