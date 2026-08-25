"use client";

import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Sparkles, Timer, UserRoundCheck } from "lucide-react";
import { ProcessRail, ServiceGrid } from "@/components/Sections";
import { SiteFooter, SiteHeader, usePageMeta } from "@/components/SiteChrome";
import { imageSet, environmentServices, premiumServices } from "@/lib/site";

const commitments = [
  [Sparkles, "Exigence", "Des protocoles adaptés et un niveau de qualité constant."],
  [Timer, "Réactivité", "Une prise en charge rapide selon la demande et nos disponibilités."],
  [ShieldCheck, "Sécurité", "Des équipes encadrées et des équipements adaptés au site."],
  [UserRoundCheck, "Discrétion", "Une organisation pensée pour limiter la gêne occasionnée."],
] as const;

export default function Home() {
  usePageMeta({
    title: "LVMR Group | Propreté et interventions techniques en Île-de-France",
    description: "LVMR Group accompagne les professionnels en propreté haut de gamme, remise en état et interventions techniques spécialisées en Île-de-France.",
    path: "/",
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#202020]">
      <SiteHeader />
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#202020] pt-28 text-white lg:min-h-[820px] lg:pt-32">
          <img src={imageSet.hero} alt="Intervention LVMR Group" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,32,.98)_0%,rgba(32,32,32,.78)_48%,rgba(32,32,32,.3)_100%)]" />
          <div className="hero-grid absolute inset-0 opacity-20" aria-hidden />
          <div className="container relative flex min-h-[620px] flex-col justify-center py-16 lg:min-h-[680px]">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#f1f1f1]"><span className="h-px w-8 bg-current" />Groupe LVMR</p>
            <h1 className="mt-6 max-w-[850px] text-[clamp(3rem,8vw,6.6rem)] font-extrabold leading-[.9] tracking-[-.065em]">L’excellence en<br/><span className="text-[#ffc547]">toutes circonstances.</span></h1>
            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-white/72 sm:text-[18px]">Deux pôles complémentaires pour répondre à vos besoins de propreté professionnelle et d’interventions techniques spécialisées en Île-de-France.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/devis" className="inline-flex min-h-13 items-center gap-2 rounded-xl bg-[#ffc547] px-7 text-[14px] font-extrabold text-[#202020] transition hover:bg-[#b07e2b]">Demander un devis <ArrowRight size={16}/></Link>
              <a href="tel:+33671849341" className="inline-flex min-h-13 items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 text-[14px] font-bold text-white backdrop-blur transition hover:bg-white/14"><Phone size={16}/> 06 71 84 93 41</a>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/12 bg-[#202020]/75 backdrop-blur-xl">
            <div className="container flex flex-wrap items-center justify-between gap-4 py-5 text-[12px] font-semibold text-white/65">
              <span className="flex items-center gap-2"><MapPin size={15} className="text-[#f1f1f1]"/> Saint-Germain-en-Laye · Paris · Île-de-France</span>
              <span>Entreprises · Copropriétés · Commerces · ERP</span>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div><p className="eyebrow">Une expertise globale</p><h2 className="mt-5 text-[clamp(2.3rem,5vw,4.6rem)] font-extrabold leading-[.98] tracking-[-.055em]">Deux pôles.<br/>Un même niveau d’exigence.</h2></div>
              <p className="max-w-[650px] text-[16px] leading-8 text-[#424242]">LVMR Group accompagne entreprises, copropriétés, commerces, établissements recevant du public et gestionnaires de sites dans l’entretien, la remise en état et la sécurisation de leurs environnements. Chaque demande est orientée vers l’équipe, les méthodes et les équipements réellement adaptés.</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {[
                { title: "LVMR Premium", text: "Propreté professionnelle haut de gamme : entretien régulier, copropriétés, remises en état et surfaces vitrées.", image: imageSet.premium, href: "/premium", label: "Découvrir LVMR Premium", tone: "#ffc547" },
                { title: "LVMR Environnement", text: "Interventions techniques, situations sensibles, nettoyage industriel, hottes professionnelles et solutions 3D.", image: imageSet.environnement, href: "/environnement", label: "Découvrir LVMR Environnement", tone: "#7ebcab" },
              ].map((item) => (
                <article key={item.title} className="group relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#202020] text-white">
                  <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,32,32,.98),rgba(32,32,32,.12)_72%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <span className="h-1 w-12 rounded-full" style={{background: item.tone}} />
                    <h3 className="mt-5 text-[2.2rem] font-extrabold tracking-[-.045em]">{item.title}</h3>
                    <p className="mt-3 max-w-[500px] text-[14px] leading-7 text-white/68">{item.text}</p>
                    <Link href={item.href} className="mt-7 inline-flex items-center gap-2 text-[13px] font-extrabold" style={{color:item.tone}}>{item.label} <ArrowRight size={15}/></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="container">
            <p className="eyebrow">Nos engagements</p>
            <h2 className="mt-5 max-w-[720px] text-[clamp(2.2rem,4vw,3.7rem)] font-extrabold leading-[1] tracking-[-.05em]">La qualité se construit à chaque étape.</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[26px] border border-[#202020]/8 bg-[#202020]/8 md:grid-cols-2 lg:grid-cols-4">
              {commitments.map(([Icon,title,text],index)=><article key={title} className="bg-white p-7"><span className="text-[11px] font-bold text-[#6b6b6b]">0{index+1}</span><Icon className="mt-8 text-[#6b6b6b]" size={24}/><h3 className="mt-5 text-[1.25rem] font-extrabold">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#424242]">{text}</p></article>)}
            </div>
          </div>
        </section>

        <ProcessRail />

        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="eyebrow">Nos expertises</p><h2 className="mt-5 text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[1] tracking-[-.05em]">Le bon pôle pour chaque besoin.</h2></div><Link href="/expertises" className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#6b6b6b]">Toutes les expertises <ArrowRight size={15}/></Link></div>
            <ServiceGrid services={[...premiumServices.slice(0,2), ...environmentServices.slice(0,4)]}/>
          </div>
        </section>

        <section className="bg-[#202020] py-16 text-white sm:py-20">
          <div className="container grid gap-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#f1f1f1]">Parlons de votre projet</p><h2 className="mt-5 max-w-[760px] text-[clamp(2.3rem,5vw,4.8rem)] font-extrabold leading-[.95] tracking-[-.055em]">Entretien, remise en état ou intervention spécialisée ?</h2></div>
            <div><p className="text-[15px] leading-7 text-white/60">Notre équipe étudie votre demande et vous oriente vers le pôle adapté.</p><Link href="/devis" className="mt-7 inline-flex min-h-13 items-center gap-2 rounded-xl bg-[#ffc547] px-7 text-[14px] font-extrabold text-[#202020]">Parler de votre projet <ArrowRight size={16}/></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Link href="/devis" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#ffc547] text-[14px] font-extrabold text-[#202020] shadow-xl lg:hidden">Demander un devis <ArrowRight size={15}/></Link>
    </div>
  );
}
