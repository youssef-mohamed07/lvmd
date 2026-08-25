"use client";

import { FormEvent, MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DoorOpen,
  Hammer,
  MapPin,
  Menu,
  Minus,
  Plus,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Wrench,
  X,
} from "lucide-react";

/**
 * LVMR homepage — designed to beat French market leaders on clarity & conversion.
 * Benchmarked against: Onet, GSF, Samsic, Atalian (corporate clutter) and
 * Airelle / OptimusClean (IDF premium). Wins: devis-first path, dual expertise,
 * calm craft, local Île-de-France authority.
 */

const images = {
  hero: "/manus-storage/lvmr-hero.jpg",
  premium: "/manus-storage/lvmr-premium.jpg",
  environnement: "/manus-storage/lvmr-environnement.jpg",
  detail: "/manus-storage/lvmr-detail.jpg",
  groupHorizontal: "/branding/group/png/group-horizontal.png",
  groupHorizontalWhite: "/branding/group/png/group-horizontal-white.png",
  premiumHorizontalWhite: "/branding/premium/png/premium-horizontal-white.png",
  environnementHorizontal: "/branding/environnement/png/environnement-horizontal.png",
};

const navItems = [
  ["Accueil", "/"],
  ["Le Groupe", "/groupe"],
  ["LVMR Premium", "/premium"],
  ["LVMR Environnement", "/environnement"],
  ["Nos réalisations", "/realisations"],
  ["Contact", "/contact"],
];

const needOptions = [
  { id: "bureaux", label: "Bureaux", hint: "Entretien régulier", icon: Building2, image: images.premium, text: "Espaces de travail nets, réguliers, prêts dès le matin. Fréquence et horaires coordonnés avec votre activité." },
  { id: "copro", label: "Copropriété", hint: "Parties communes", icon: DoorOpen, image: images.detail, text: "Halls, cages d’escalier et parties communes tenus avec discrétion, dans le respect des résidents." },
  { id: "vitrerie", label: "Vitrerie", hint: "Surfaces vitrées", icon: Sun, image: images.hero, text: "Lumière retrouvée sur baies, cloisons vitrées et accès difficiles, sans perturber le lieu." },
  { id: "remise", label: "Remise en état", hint: "Après travaux", icon: Hammer, image: images.detail, text: "Après chantier, déménagement ou période intensive : un lieu rendu prêt à l’usage." },
  { id: "sinistre", label: "Après sinistre", hint: "Intervention urgente", icon: ShieldAlert, image: images.environnement, text: "Méthode, sang-froid et organisation pour reprendre le contrôle rapidement." },
  { id: "technique", label: "Technique & 3D", hint: "Hottes / nuisibles", icon: Wrench, image: images.environnement, text: "Nettoyage technique, dégraissage professionnel, dératisation, désinsectisation et désinfection." },
];

const services = [
  { n: "01", title: "Bureaux", group: "Premium", text: "Entretien régulier des bureaux et espaces professionnels.", image: images.premium },
  { n: "02", title: "Copropriétés", group: "Premium", text: "Halls, paliers, ascenseurs et parties communes.", image: images.detail },
  { n: "03", title: "Remise en état", group: "Premium", text: "Après travaux, déménagement ou période d’inoccupation.", image: images.detail },
  { n: "04", title: "Vitrerie", group: "Premium", text: "Vitres, vitrines, cloisons vitrées et baies accessibles.", image: images.hero },
  { n: "05", title: "Après sinistre", group: "Environnement", text: "Remise en état après dégâts, suies ou dégradations.", image: images.environnement },
  { n: "06", title: "Logements insalubres", group: "Environnement", text: "Prise en charge respectueuse des situations complexes.", image: images.environnement },
  { n: "07", title: "Nettoyage industriel", group: "Environnement", text: "Ateliers, entrepôts, zones de production et locaux techniques.", image: images.detail },
  { n: "08", title: "Vitrerie technique", group: "Environnement", text: "Surfaces importantes ou difficiles d’accès.", image: images.hero },
  { n: "09", title: "Hottes & extraction", group: "Environnement", text: "Dégraissage des installations de cuisine professionnelle.", image: images.environnement },
  { n: "10", title: "Dératisation", group: "Environnement", text: "Prévention, identification et traitement des rongeurs.", image: images.environnement },
  { n: "11", title: "Désinsectisation", group: "Environnement", text: "Traitement adapté à l’espèce et à l’activité du site.", image: images.detail },
  { n: "12", title: "Désinfection", group: "Environnement", text: "Assainissement des surfaces et zones concernées.", image: images.detail },
];

const steps = [
  ["01", "Analyse du besoin", "Échange initial et visite du site lorsque nécessaire."],
  ["02", "Proposition détaillée", "Un devis clair précisant les prestations et les moyens."],
  ["03", "Intervention", "Des équipes et un protocole adaptés aux contraintes du lieu."],
  ["04", "Contrôle et suivi", "Vérification et transmission des documents prévus."],
];

const proofs = [
  ["Exigence", "Des protocoles adaptés et un niveau de qualité constant."],
  ["Réactivité", "Une prise en charge rapide selon la demande et nos disponibilités."],
  ["Sécurité", "Des équipes encadrées et des équipements adaptés au site."],
  ["Discrétion", "Une organisation pensée pour limiter la gêne occasionnée."],
];

const faqs = [
  { q: "Zone d’intervention", a: "Basé à Saint-Germain-en-Laye, LVMR Group intervient principalement à Paris et en Île-de-France. Les autres demandes sont étudiées selon leur nature." },
  { q: "Comment est préparé le devis ?", a: "Nous analysons le besoin et organisons une visite du site lorsqu’elle est nécessaire pour définir précisément le périmètre." },
  { q: "Premium ou Environnement", a: "Premium couvre la propreté professionnelle haut de gamme. Environnement prend en charge les opérations techniques, sensibles ou complexes." },
  { q: "Une demande urgente ?", a: "Contactez directement notre équipe. Nous évaluons la priorité et nos possibilités d’intervention dans les meilleurs délais." },
  { q: "Quels documents sont remis ?", a: "Selon la prestation, un compte rendu, un rapport photographique, une fiche ou un certificat d’intervention peut être prévu." },
];

function BrandMark() {
  return (
    <span className="flex items-center" aria-label="LVMR Group">
      <img src={images.groupHorizontal} alt="LVMR Group — L’excellence en toutes circonstances" className="h-8 w-auto sm:h-9" />
    </span>
  );
}

export default function Home() {
  const location = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [need, setNeed] = useState("bureaux");
  const [formSent, setFormSent] = useState(false);
  const [serviceGroup, setServiceGroup] = useState<"Premium" | "Environnement">("Premium");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(distance > 0 ? (window.scrollY / distance) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section:not(#accueil)");
    sections.forEach((section) => section.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
    toast.success("Votre demande a bien été préparée.", {
      description: "Un membre de l’équipe LVMR reviendra vers vous.",
    });
  };

  const selectedNeed = needOptions.find((item) => item.id === need);
  const selectedIndex = Math.max(0, needOptions.findIndex((item) => item.id === need));
  const visibleServices = services.filter((service) => service.group === serviceGroup);
  const activeService = visibleServices[activeServiceIndex] ?? visibleServices[0];
  const activeServiceFacts = serviceGroup === "Premium"
    ? ["Fréquence adaptée", "Horaires coordonnés", "Contrôle terrain"]
    : ["Intervention ciblée", "Protocole adapté", "Coordination du site"];
  const activeBrandColor = serviceGroup === "Premium" ? "#ffc547" : "#7ebcab";

  const showPreviousService = () => setActiveServiceIndex((index) => (index - 1 + visibleServices.length) % visibleServices.length);
  const showNextService = () => setActiveServiceIndex((index) => (index + 1) % visibleServices.length);
  const moveServicePreview = (event: ReactMouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--spot-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y * 100}%`);
    event.currentTarget.style.setProperty("--shift-x", `${(0.5 - x) * 12}px`);
    event.currentTarget.style.setProperty("--shift-y", `${(0.5 - y) * 12}px`);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#202020]">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      {/* FLOATING HEADER — clearer than Onet/GSF mega-nav */}
      <header className="site-header" data-scrolled={scrolled || mobileOpen}>
        <div className="site-header-bar">
          <Link href="/" aria-label="Accueil" className="shrink-0">
            <BrandMark />
          </Link>

          <nav className="hidden shrink-0 items-center gap-0.5 rounded-full bg-[#202020]/[0.04] p-1 lg:flex" aria-label="Navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="nav-link" data-active={location === href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden whitespace-nowrap items-center gap-1.5 rounded-full bg-[#f1f1f1] px-3 py-1.5 text-[11px] font-semibold text-[#6b6b6b] xl:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6b6b6b]" aria-hidden />
              Île-de-France
            </span>
            <Link
              href="/devis"
              className="hidden min-h-11 whitespace-nowrap items-center gap-2 rounded-full bg-[#ffc547] px-5 text-[13px] font-bold text-[#202020] shadow-[0_8px_22px_rgba(255,197,71,.35)] transition hover:bg-[#b07e2b] lg:inline-flex"
            >
              Devis <ArrowRight size={14} />
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-[#202020] text-white lg:hidden"
              aria-label={mobileOpen ? "Fermer" : "Menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-nav-panel mx-auto mt-2 max-w-[1120px] overflow-y-auto rounded-[20px] border border-white/60 bg-white/95 p-3 shadow-[0_16px_40px_rgba(32,32,32,.12)] backdrop-blur-xl sm:rounded-[24px]">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-[#202020] hover:bg-[#f5f5f5]"
              >
                {label}
                <ArrowRight size={15} className="text-[#6b6b6b]" />
              </Link>
            ))}
            <Link
              href="/devis"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#ffc547] text-[14px] font-bold text-[#202020]"
            >
              Obtenir un devis <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </header>

      <main>
        {/* HERO — clear corporate statement with an independent visual */}
        <section id="accueil" className="hero-stage relative overflow-hidden bg-[#202020] text-white">
          <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#6b6b6b]/14 blur-[120px]" aria-hidden />
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />
          <div className="container relative z-10 grid gap-9 pb-10 pt-28 sm:gap-12 sm:pb-14 sm:pt-32 lg:min-h-[790px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-36">
            <div className="max-w-[660px]">
              <img src={images.groupHorizontalWhite} alt="LVMR Group" className="hero-reveal mb-7 h-11 w-auto sm:h-14" style={{ animationDelay: "20ms" }} />
              <div className="hero-reveal flex items-center gap-3" style={{ animationDelay: "60ms" }}>
                <span className="h-px w-8 bg-[#f1f1f1]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f1f1f1]">Groupe LVMR</p>
              </div>
              <h1 className="hero-reveal mt-6 max-w-[760px] text-[clamp(2.7rem,12vw,4.8rem)] font-extrabold leading-[.98] tracking-[-0.055em] sm:mt-7" style={{ animationDelay: "140ms" }}>
                L’excellence en <span className="text-[#f1f1f1]">toutes circonstances.</span>
              </h1>
              <p className="hero-reveal mt-7 max-w-[520px] text-[16px] leading-7 text-white/65" style={{ animationDelay: "230ms" }}>Deux pôles complémentaires pour vos besoins de propreté professionnelle et d’interventions techniques spécialisées en Île-de-France.</p>
              <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
                <button type="button" className="hero-cta" onClick={() => goTo("devis")}><span>Demander un devis</span><ArrowRight size={18} /></button>
                <button type="button" onClick={() => goTo("services")} className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-[10px] border border-white/20 px-6 text-[13px] font-extrabold text-white/80 transition hover:border-white/45 hover:bg-white/8 hover:text-white">Découvrir nos services <ArrowRight size={16} /></button>
              </div>
              <div className="hero-reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/12 pt-5 text-[9px] font-bold uppercase tracking-[.11em] text-white/40 sm:mt-10 sm:gap-x-6 sm:text-[10px] sm:tracking-[.13em]" style={{ animationDelay: "410ms" }}>
                <span>LVMR Premium</span><span className="h-1 w-1 rounded-full bg-[#f1f1f1]" /><span>LVMR Environnement</span><span className="h-1 w-1 rounded-full bg-[#f1f1f1]" /><span>Île-de-France</span>
              </div>
            </div>

            <div className="hero-reveal lg:justify-self-end" style={{ animationDelay: "260ms" }}>
              <div className="hero-visual relative mx-auto aspect-[4/3] max-h-[380px] w-full max-w-[540px] overflow-hidden rounded-[22px] border border-white/12 bg-[#3d3d3d] sm:aspect-[16/11] sm:max-h-[480px] sm:rounded-[28px] lg:aspect-[4/5] lg:max-h-[610px]">
                <img src={images.hero} alt="Espace professionnel entretenu par LVMR Group" className="hero-image h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.88)_0%,transparent_55%)]" />
                <div className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1f1f1] to-transparent opacity-70" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-6 border-t border-white/20 pt-5">
                    <div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#f1f1f1] sm:text-[10px]">LVMR Group</p><p className="mt-2 max-w-[290px] text-[1rem] font-extrabold leading-tight tracking-[-.03em] sm:text-[1.2rem]">Un interlocuteur pour l’entretien courant et les situations techniques.</p></div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#202020] sm:h-11 sm:w-11"><ShieldCheck size={18} /></span>
                  </div>
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#202020]/55 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.1em] text-white/75 backdrop-blur-md sm:left-5 sm:top-5 sm:px-3.5 sm:py-2 sm:text-[10px] sm:tracking-[.12em]">Saint-Germain-en-Laye</span>
              </div>
            </div>
          </div>
        </section>

        {/* NEED SELECTOR — visual configurator with live preview */}
        <section id="besoin" className="relative z-20 bg-[#f5f5f5] pb-20 pt-12 sm:pb-24 sm:pt-16">
          <div className="container">
            <div className="grid overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(11,31,26,.10)] lg:grid-cols-[1.02fr_.98fr]">
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="eyebrow">Votre besoin</p>
                    <h2 className="mt-3 max-w-[520px] text-[clamp(1.9rem,3.3vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.045em]">
                      Commençons par votre espace.
                    </h2>
                  </div>
                  <p className="max-w-[260px] text-[14px] leading-6 text-[#424242]">Un choix suffit pour orienter la demande. Nous affinons le reste avec vous.</p>
                </div>

                <div className="need-options mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3">
                  {needOptions.map((option, index) => {
                    const TileIcon = option.icon;
                    const isActive = need === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setNeed(option.id)}
                        aria-pressed={isActive}
                        className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition duration-200 ${
                          isActive
                            ? "border-[#6b6b6b] bg-white shadow-[0_14px_36px_rgba(107,107,107,.14)]"
                            : "border-[#202020]/8 bg-[#f4f8fa] hover:-translate-y-0.5 hover:border-[#6b6b6b]/35 hover:bg-white"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
                        />
                        <span className="flex items-center justify-between">
                          <span
                            className={`grid h-9 w-9 place-items-center rounded-xl transition ${
                              isActive
                                ? "bg-[#6b6b6b] text-white shadow-[0_8px_20px_rgba(107,107,107,.35)]"
                                : "border border-[#202020]/6 bg-white text-[#6b6b6b] group-hover:border-[#6b6b6b]/30"
                            }`}
                          >
                            <TileIcon size={16} />
                          </span>
                          <span className={`text-[10px] font-extrabold tabular-nums ${isActive ? "text-[#6b6b6b]" : "text-[#202020]/30"}`}>0{index + 1}</span>
                        </span>
                        <span className="mt-3.5 block text-[14px] font-extrabold tracking-[-0.02em] text-[#202020]">{option.label}</span>
                        <span className="mt-0.5 block text-[11px] leading-4 text-[#424242]">{option.hint}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-2.5 text-[12px] font-semibold text-[#424242]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f1f1f1] text-[#6b6b6b]"><Sparkles size={12} /></span>
                  Le devis s’adapte automatiquement à votre sélection.
                </div>
              </div>

              <div className="relative min-h-[390px] overflow-hidden bg-[#202020] text-white sm:min-h-[500px] lg:min-h-full">
                <div key={need} className="service-preview absolute inset-0">
                  <img src={selectedNeed?.image} alt="" className="service-preview-image absolute inset-0 h-full w-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.96)_0%,rgba(32,32,32,.4)_55%,rgba(32,32,32,.12)_100%)]" />
                </div>
                <div className="absolute right-6 top-6 z-10 text-[11px] font-extrabold tabular-nums text-white/60">
                  0{selectedIndex + 1} / 0{needOptions.length}
                </div>
                <div key={`${need}-content`} className="service-preview-content absolute inset-x-0 bottom-0 p-7 sm:p-10">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.14em] text-[#f1f1f1]">
                    <span>{selectedNeed?.hint}</span>
                    <span className="h-px w-7 bg-current" />
                    <span>Île-de-France</span>
                  </div>
                  <h3 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-none tracking-[-0.05em]">{selectedNeed?.label}</h3>
                  <p className="mt-4 max-w-[430px] text-[14px] leading-6 text-white/70 sm:text-[15px] sm:leading-7">{selectedNeed?.text}</p>
                  <button type="button" onClick={() => goTo("devis")} className="btn btn-light mt-7">
                    Préparer ma demande <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DUAL EXPERTISE — compact immersive divisions */}
        <section id="services" className="overflow-hidden bg-[#f5f5f5] py-14 sm:py-20 lg:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">LVMR Group</p>
                <h2 className="mt-4 max-w-[760px] text-[clamp(2.1rem,4vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-.05em]">Une expertise globale, deux pôles spécialisés.</h2>
              </div>
              <p className="max-w-[360px] text-[15px] leading-7 text-[#424242]">Chaque demande est orientée vers l’équipe, les méthodes et les équipements réellement adaptés.</p>
            </div>

            <div className="expertise-duo mt-8 flex flex-col gap-3 sm:mt-10 lg:min-h-[620px] lg:flex-row">
              <article className="expertise-division group relative min-h-[460px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[520px] lg:min-h-[560px]">
                <img src={images.premium} alt="Équipe LVMR Premium" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.98)_0%,rgba(32,32,32,.55)_45%,rgba(32,32,32,.08)_100%)]" />
                <div className="expertise-division-content absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-center justify-between border-b border-white/18 pb-5">
                    <img src={images.premiumHorizontalWhite} alt="LVMR Premium" className="h-9 w-auto sm:h-11" />
                    <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/50">04 services</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.12em] text-white/55">Entretien régulier</p>
                    <h3 className="mt-3 text-[clamp(2rem,3.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-.045em]">Des espaces nets, jour après jour.</h3>
                    <p className="mt-4 max-w-[450px] text-[14px] leading-6 text-white/68">Une présence discrète et organisée pour maintenir durablement le niveau attendu.</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Bureaux", "Copropriétés", "Vitrerie", "Remise en état"].map((item) => <span key={item} className="expertise-chip">{item}</span>)}
                    </div>
                    <button type="button" onClick={() => { setServiceGroup("Premium"); setActiveServiceIndex(0); goTo("expertises"); }} className="mt-7 inline-flex items-center gap-3 text-[13px] font-extrabold">Voir les services <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#202020]"><ArrowRight size={15} /></span></button>
                  </div>
                </div>
              </article>

              <article className="expertise-division group relative min-h-[460px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[520px] lg:min-h-[560px]">
                <img src={images.environnement} alt="Intervention LVMR Environnement" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.98)_0%,rgba(32,32,32,.55)_45%,rgba(32,32,32,.08)_100%)]" />
                <div className="expertise-division-content absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-center justify-between border-b border-white/18 pb-5">
                    <img src={images.environnementHorizontal} alt="LVMR Environnement" className="h-9 w-auto sm:h-11" />
                    <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/50">06 services</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.12em] text-white/55">Interventions techniques</p>
                    <h3 className="mt-3 text-[clamp(2rem,3.5vw,3.1rem)] font-extrabold leading-[1.02] tracking-[-.045em]">Agir avec méthode, même dans l’urgence.</h3>
                    <p className="mt-4 max-w-[450px] text-[14px] leading-6 text-white/68">Des protocoles adaptés aux situations sensibles et aux contraintes réelles du site.</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Après sinistre", "Décontamination", "Désinfection", "Assainissement"].map((item) => <span key={item} className="expertise-chip">{item}</span>)}
                    </div>
                    <button type="button" onClick={() => { setServiceGroup("Environnement"); setActiveServiceIndex(0); goTo("expertises"); }} className="mt-7 inline-flex items-center gap-3 text-[13px] font-extrabold">Voir les services <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7ebcab] text-[#202020]"><ArrowRight size={15} /></span></button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERTISES — guided service explorer */}
        <section id="expertises" className="bg-[#f5f5f5] py-16 sm:py-20">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <div className="flex items-center gap-4"><p className="eyebrow">Nos interventions</p><span className="rounded-full bg-[#f1f1f1] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#6b6b6b]">12 expertises</span></div>
                <h2 className="mt-4 max-w-[620px] text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-.05em]">Trouvez la réponse adaptée à votre site.</h2>
              </div>
              <div className="inline-flex w-full self-start rounded-xl border border-[#202020]/10 bg-white p-1 sm:w-auto" role="tablist" aria-label="Catégorie de services">
                {(["Premium", "Environnement"] as const).map((group) => (
                  <button
                    key={group}
                    type="button"
                    role="tab"
                    aria-selected={serviceGroup === group}
                    onClick={() => { setServiceGroup(group); setActiveServiceIndex(0); }}
                    className={`min-h-10 flex-1 rounded-lg px-3 text-[12px] font-extrabold transition sm:flex-none sm:px-4 sm:text-[13px] ${serviceGroup === group ? "bg-[#202020] text-white shadow-sm" : "text-[#424242] hover:text-[#202020]"}`}
                  >
                    LVMR {group}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid overflow-hidden border border-[#202020]/10 bg-white lg:grid-cols-[.76fr_1.24fr]">
              <div className="service-list flex flex-col border-b border-[#202020]/10 lg:border-b-0 lg:border-r">
                {visibleServices.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    onFocus={() => setActiveServiceIndex(index)}
                    className={`service-row group relative flex min-h-[92px] gap-4 overflow-hidden border-b border-[#202020]/10 px-5 py-6 text-left last:border-b-0 sm:px-7 ${activeServiceIndex === index ? "is-active bg-[#202020] text-white" : "hover:bg-[#f5f5f5]"}`}
                    aria-pressed={activeServiceIndex === index}
                  >
                    {activeServiceIndex === index && <span className="service-row-progress absolute inset-y-0 left-0 w-[3px]" style={{ backgroundColor: activeBrandColor }} />}
                    <span className="mt-1 text-[11px] font-bold" style={{ color: activeServiceIndex === index ? activeBrandColor : "#6b6b6b" }}>{service.n}</span>
                    <span className="min-w-0 flex-1"><span className="block text-[1.05rem] font-extrabold tracking-[-.025em]">{service.title}</span><span className="service-row-copy"><span className="block overflow-hidden"><span className="mt-2 block max-w-[280px] text-[12px] leading-5 text-white/55">{service.text}</span></span></span></span>
                    <ArrowRight size={17} className={`mt-1 shrink-0 transition duration-300 ${activeServiceIndex === index ? "translate-x-0" : "-translate-x-1 text-[#424242]/50 group-hover:translate-x-0"}`} style={activeServiceIndex === index ? { color: activeBrandColor } : undefined} />
                  </button>
                ))}
              </div>

              <div
                key={`${serviceGroup}-${activeServiceIndex}`}
                className="service-preview relative min-h-[510px] overflow-hidden bg-[#202020] sm:min-h-[560px]"
                onMouseMove={moveServicePreview}
              >
                <img src={activeService.image} alt={activeService.title} className="service-preview-image absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.96)_0%,rgba(32,32,32,.12)_72%)]" />
                <div className="service-spotlight pointer-events-none absolute inset-0" />

                <div className="absolute right-5 top-5 z-10 flex items-center gap-2 sm:right-7 sm:top-7">
                  <span className="mr-2 text-[11px] font-extrabold tabular-nums text-white/65">0{activeServiceIndex + 1} / 0{visibleServices.length}</span>
                  <button type="button" onClick={showPreviousService} className="service-nav-button" aria-label="Service précédent"><ChevronLeft size={17} /></button>
                  <button type="button" onClick={showNextService} className="service-nav-button" aria-label="Service suivant"><ChevronRight size={17} /></button>
                </div>

                <div className="service-preview-content absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.14em]" style={{ color: activeBrandColor }}><span>{activeService.n}</span><span className="h-px w-7 bg-current" /><span>LVMR {serviceGroup}</span></div>
                  <h3 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-.05em]">{activeService.title}</h3>
                  <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-white/72">{activeService.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeServiceFacts.map((fact) => <span key={fact} className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3.5 py-2 text-[11px] font-bold text-white/72 backdrop-blur-md"><Check size={12} style={{ color: activeBrandColor }} />{fact}</span>)}
                  </div>
                  <div className="mt-7 flex flex-col justify-between gap-5 border-t border-white/16 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:pt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[.1em] text-white/42">Étude du besoin · proposition adaptée</p>
                    <button type="button" onClick={() => goTo("devis")} className="btn btn-light shrink-0">Parler de ce besoin <ArrowRight size={15} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD — cool glass process rail */}
        <section id="methode" className="relative overflow-hidden bg-[#f5f5f5] py-16 sm:py-20">
          <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#6b6b6b]/12 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#f1f1f1]/20 blur-3xl" aria-hidden />

          <div className="container relative">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-[520px]">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#6b6b6b]/15 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b6b6b] shadow-[0_1px_0_rgba(32,32,32,.04)] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6b6b6b]" aria-hidden />
                  Notre méthode
                </p>
                <h2 className="mt-5 text-[clamp(1.95rem,3.8vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#202020]">
                  Simple pour vous, rigoureuse sur le terrain.
                </h2>
              </div>
              <p className="max-w-[320px] text-[14px] leading-6 text-[#424242] lg:pb-1.5">
                Vous savez qui intervient, pourquoi, et ce qui est contrôlé. Rien de plus compliqué que nécessaire.
              </p>
            </div>

            <ol className="relative mt-12 m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              <div
                className="pointer-events-none absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[#6b6b6b]/35 to-transparent lg:block"
                aria-hidden
              />
              {steps.map(([n, title, text], index) => (
                <li
                  key={n}
                  className="group relative overflow-hidden rounded-[26px] border border-white/80 bg-white/65 p-5 shadow-[0_10px_40px_rgba(32,32,32,.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#6b6b6b]/25 hover:bg-white/90 hover:shadow-[0_18px_50px_rgba(107,107,107,.12)] sm:p-6"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6b6b6b] to-[#4a4a4a] text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(107,107,107,.3)]">
                      {n}
                    </span>
                    <span className="text-[3.4rem] font-extrabold leading-none tracking-[-0.06em] text-[#202020]/[0.05] transition group-hover:text-[#6b6b6b]/15">
                      {n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-[-0.03em] text-[#202020]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#424242] sm:text-[14px]">{text}</p>
                  <span
                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                </li>
              ))}
            </ol>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => goTo("devis")}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#202020] px-6 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(32,32,32,.2)] transition hover:bg-[#6b6b6b]"
              >
                Passer au devis <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* PROOF — bento grid: photo anchor + value cards */}
        <section className="bg-[#f5f5f5] py-16 sm:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">Pourquoi LVMR</p>
                <h2 className="mt-4 max-w-[560px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-.05em]">
                  Le détail compte, et ça se ressent.
                </h2>
              </div>
              <p className="max-w-[340px] text-[15px] leading-7 text-[#424242]">
                Un lieu propre se voit. Une intervention bien menée se ressent. Voici ce qui guide chaque intervention.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
              <article className="group relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#202020] text-white sm:min-h-[420px] sm:rounded-[28px] lg:row-span-2">
                <img src={images.detail} alt="Le soin du détail par LVMR" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.92),transparent_65%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#f1f1f1]">Le détail compte</p>
                  <p className="mt-3 max-w-[360px] text-[clamp(1.6rem,2.6vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-.04em]">
                    Un lieu propre se voit. Une intervention bien menée se ressent.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["10 expertises", "Deux pôles", "Île-de-France"].map((chip) => (
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
                    <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-[-.02em]">{title}</h3>
                    <p className="mt-2 max-w-[380px] text-[14px] leading-6 text-[#424242]">{text}</p>
                    <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#6b6b6b] to-[#f1f1f1] transition duration-300 group-hover:scale-x-100" aria-hidden />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* REALISATIONS — cinematic mosaic */}
        <section id="realisations" className="bg-[#f5f5f5] pb-20 sm:pb-28">
          <div className="container">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Références & preuves</p><h2 className="mt-3 text-[clamp(2rem,4vw,3.7rem)] font-extrabold leading-[1] tracking-[-.05em]">Le réel comme meilleure preuve.</h2></div><p className="max-w-[360px] text-[14px] leading-6 text-[#424242]">Cette section sera alimentée avec des contenus authentiques dont la publication est expressément autorisée.</p></div>
            <div className="grid auto-rows-[230px] gap-4 sm:auto-rows-[280px] md:grid-cols-12">
              {[
                [images.detail, "Format de publication", "Contexte & besoin", "md:col-span-7 md:row-span-2"],
                [images.environnement, "Contenu autorisé", "Solution mise en œuvre", "md:col-span-5"],
                [images.hero, "Preuve terrain", "Résultat documenté", "md:col-span-5"],
              ].map(([src, tag, title, span]) => (
                <article key={title} className={`group relative overflow-hidden rounded-[24px] bg-[#202020] ${span}`}><img src={src} alt={tag} className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.8),transparent_65%)]" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#f1f1f1]">{tag}</p><h3 className="mt-1.5 text-[1.2rem] font-extrabold tracking-[-.03em]">{title}</h3></div></article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — editorial index, not accordion */}
        <section id="faq" className="bg-[#f5f5f5] py-16 sm:py-20">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 border-b border-[#202020]/10 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Questions</p>
                <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#202020]">
                  Avant le devis.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => goTo("devis")}
                className="inline-flex items-center gap-2 text-[13px] font-bold text-[#6b6b6b] transition hover:gap-3"
              >
                Passer au devis <ArrowRight size={15} />
              </button>
            </div>

            <div className="mt-2 grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="divide-y divide-[#202020]/10 border-b border-[#202020]/10 lg:border-b-0 lg:border-r lg:pr-8">
                {faqs.map((item, index) => {
                  const active = openFaq === index;
                  return (
                    <button
                      key={item.q}
                      type="button"
                      onClick={() => setOpenFaq(index)}
                      className="group flex w-full items-baseline gap-4 py-5 text-left transition sm:gap-5 sm:py-6"
                    >
                      <span
                        className={`w-8 shrink-0 text-[12px] font-bold tabular-nums transition ${
                          active ? "text-[#6b6b6b]" : "text-[#202020]/30 group-hover:text-[#202020]/55"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`flex-1 text-[clamp(1.15rem,2vw,1.55rem)] font-extrabold tracking-[-0.035em] transition ${
                          active ? "text-[#202020]" : "text-[#202020]/35 group-hover:text-[#202020]/7"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`hidden h-2 w-2 shrink-0 rounded-full transition sm:block ${
                          active ? "bg-[#6b6b6b] scale-100" : "scale-0 bg-[#6b6b6b]/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="relative flex min-h-[220px] flex-col justify-center py-8 lg:min-h-[260px] lg:pl-12 lg:py-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
                  0{(openFaq < 0 ? 0 : openFaq) + 1} · Réponse
                </p>
                <p
                  key={faqs[Math.max(0, openFaq)]?.q}
                  className="voice-fade mt-5 max-w-[440px] text-[clamp(1.35rem,2.6vw,1.95rem)] font-semibold leading-[1.35] tracking-[-0.03em] text-[#202020]"
                >
                  {faqs[Math.max(0, openFaq)]?.a}
                </p>
                <div className="mt-10 h-px w-full max-w-[280px] overflow-hidden bg-[#202020]/10">
                  <div
                    className="h-full bg-[#6b6b6b] transition-all duration-500"
                    style={{ width: `${((Math.max(0, openFaq) + 1) / faqs.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEVIS — compact split conversion block */}
        <section id="devis" className="bg-[#f5f5f5] py-12 sm:py-16">
          <div className="container">
            <div className="grid overflow-hidden rounded-[26px] bg-white shadow-[0_18px_60px_rgba(32,32,32,.09)] lg:grid-cols-[.82fr_1.18fr]">
              <div className="relative overflow-hidden bg-[#202020] p-7 text-white sm:p-9 lg:p-11">
                <img src={images.detail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[.18]" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(32,32,32,.96),rgba(32,32,32,.78))]" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-between gap-8 sm:min-h-[320px] lg:min-h-[340px] lg:gap-10">
                  <div>
                    <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b6b6b]"><span className="h-px w-5 bg-current" aria-hidden />Devis</p>
                    <h2 className="mt-5 text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.045em]">Parlons de votre site.</h2>
                    <p className="mt-5 max-w-[350px] text-[14px] leading-7 text-white/60">Quelques informations suffisent pour préparer un cadrage clair et adapté à votre besoin.</p>
                  </div>
                  <div>
                    {selectedNeed && <p className="inline-flex rounded-full border border-[#6b6b6b]/30 bg-[#6b6b6b]/15 px-3.5 py-2 text-[12px] font-bold text-[#f1f1f1]">Besoin · {selectedNeed.label}</p>}
                    <ul className="mt-6 space-y-3 border-t border-white/14 pt-5 text-[12px] font-semibold text-white/60">
                      {["Demande rapide", "Cadrage adapté au site", "Intervention en Île-de-France"].map((item) => <li key={item} className="flex items-center gap-2.5"><Check size={14} className="text-[#6b6b6b]" />{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <form
                className="flex flex-col justify-center p-6 sm:p-9 lg:p-11"
                onSubmit={onSubmit}
              >
                {formSent ? (
                  <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#f1f1f1] text-[#6b6b6b]">
                      <Check size={20} />
                    </div>
                    <h3 className="mt-5 text-[1.45rem] font-extrabold tracking-[-0.03em] text-[#202020]">
                      Merci. Votre demande est prête.
                    </h3>
                    <p className="mt-3 max-w-[380px] text-[15px] leading-7 text-[#424242]">
                      Branchez ensuite votre canal d’envoi (email / CRM) pour la mise en production.
                    </p>
                    <button
                      type="button"
                      className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#6b6b6b]"
                      onClick={() => setFormSent(false)}
                    >
                      Nouvelle demande <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    <label className="block">
                      <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Vous êtes</span>
                      <div className="relative">
                        <select
                          required
                          defaultValue=""
                          className="min-h-[50px] w-full appearance-none rounded-2xl border border-[#d8e0e6] bg-[#f7f9fb] px-4 pr-10 text-[15px] text-[#202020] outline-none transition focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12"
                        >
                          <option value="" disabled>Choisir une catégorie</option>
                          <option>Une entreprise</option>
                          <option>Une copropriété / syndic</option>
                          <option>Un établissement</option>
                          <option>Autre professionnel</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#424242]" size={16} />
                      </div>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Votre besoin</span>
                      <input
                        required
                        name="need"
                        defaultValue={selectedNeed ? `${selectedNeed.label} — ${selectedNeed.hint}` : ""}
                        placeholder="Ex. nettoyage bureaux, 3 passages / semaine"
                        className="min-h-[50px] w-full rounded-2xl border border-[#d8e0e6] bg-[#f7f9fb] px-4 text-[15px] text-[#202020] outline-none transition placeholder:text-[#9f9f9f] focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12"
                      />
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Nom</span>
                        <input
                          required
                          name="name"
                          placeholder="Nom et prénom"
                          className="min-h-[50px] w-full rounded-2xl border border-[#d8e0e6] bg-[#f7f9fb] px-4 text-[15px] text-[#202020] outline-none transition placeholder:text-[#9f9f9f] focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Email</span>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="nom@entreprise.fr"
                          className="min-h-[50px] w-full rounded-2xl border border-[#d8e0e6] bg-[#f7f9fb] px-4 text-[15px] text-[#202020] outline-none transition placeholder:text-[#9f9f9f] focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12"
                        />
                      </label>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[12px] leading-5 text-[#424242]">
                        Saint-Germain-en-Laye · Île-de-France
                      </p>
                      <button type="submit" className="btn btn-primary min-h-[50px] rounded-2xl px-6">
                        Envoyer ma demande <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#202020] text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#6b6b6b]/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#6b6b6b]/10 blur-3xl" aria-hidden />

        <div className="container relative pb-24 pt-12 sm:py-14 lg:py-14">
          <div className="flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-[460px]">
              <span className="flex items-center" aria-label="LVMR Group">
                <img src={images.groupHorizontalWhite} alt="LVMR Group" className="h-11 w-auto" />
              </span>
              <h2 className="mt-6 text-[clamp(1.55rem,3vw,2.15rem)] font-extrabold leading-[1.12] tracking-[-0.04em]">
                L’excellence en <span className="text-[#6b6b6b]">toutes circonstances.</span>
              </h2>
              <p className="mt-3 text-[14px] leading-6 text-white/55">
                Propreté professionnelle & interventions techniques · Saint-Germain-en-Laye · Île-de-France
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <nav className="flex flex-wrap gap-2" aria-label="Footer">
                {navItems.slice(1).map(([label, href]) => (
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
            <span className="tracking-[0.08em]">PROPRETÉ · ENVIRONNEMENT · IDF</span>
          </div>
        </div>
      </footer>

      <Link
        href="/devis"
        className="mobile-quote-cta fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#202020] text-[14px] font-bold text-white shadow-lg lg:hidden"
      >
        Obtenir un devis <ArrowRight size={14} />
      </Link>
    </div>
  );
}
