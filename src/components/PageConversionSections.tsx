"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronLeft, Loader2, Upload } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { imageSet } from "@/lib/site";
import { PageConversionContent } from "@/lib/pageConversion";

const fieldClass =
  "min-h-[50px] w-full rounded-2xl border border-[#d8e0e6] bg-[#f7f9fb] px-4 text-[15px] text-[#202020] outline-none transition placeholder:text-[#9f9f9f] focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12";

const devisSteps = [
  { label: "Besoin", title: "Votre besoin", hint: "Qui vous êtes et ce dont vous avez besoin." },
  { label: "Contact", title: "Vos coordonnées", hint: "Pour vous recontacter rapidement." },
  { label: "Site", title: "Le site & le rythme", hint: "Adresse, fréquence et précisions utiles." },
] as const;

function scrollToDevis() {
  document.getElementById("page-devis")?.scrollIntoView({ behavior: "smooth" });
}

export function PageFaqSection({ title, faqs }: { title: string; faqs: PageConversionContent["faqs"] }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 border-b border-[#202020]/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Questions</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#202020]">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={scrollToDevis}
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
                  <span className={`w-8 shrink-0 text-[12px] font-bold tabular-nums transition ${active ? "text-[#6b6b6b]" : "text-[#202020]/30 group-hover:text-[#202020]/55"}`}>
                    0{index + 1}
                  </span>
                  <span className={`flex-1 text-[clamp(1.15rem,2vw,1.55rem)] font-extrabold tracking-[-0.035em] transition ${active ? "text-[#202020]" : "text-[#202020]/35 group-hover:text-[#202020]/70"}`}>
                    {item.q}
                  </span>
                  <span className={`hidden h-2 w-2 shrink-0 rounded-full transition sm:block ${active ? "scale-100 bg-[#6b6b6b]" : "scale-0 bg-[#6b6b6b]/40"}`} />
                </button>
              );
            })}
          </div>

          <div className="relative flex min-h-[220px] flex-col justify-center py-8 lg:min-h-[260px] lg:pl-12 lg:py-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
              0{openFaq + 1} · Réponse
            </p>
            <p key={faqs[openFaq]?.q} className="voice-fade mt-5 max-w-[440px] text-[clamp(1.35rem,2.6vw,1.95rem)] font-semibold leading-[1.35] tracking-[-0.03em] text-[#202020]">
              {faqs[openFaq]?.a}
            </p>
            <div className="mt-10 h-px w-full max-w-[280px] overflow-hidden bg-[#202020]/10">
              <div className="h-full bg-[#6b6b6b] transition-all duration-500" style={{ width: `${((openFaq + 1) / faqs.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageDevisForm({ content }: { content: PageConversionContent }) {
  const [needId, setNeedId] = useState(content.defaultNeedId);
  const [formStep, setFormStep] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formProfile, setFormProfile] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formNeed, setFormNeed] = useState(content.defaultNeed);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formSurface, setFormSurface] = useState("");
  const [formRhythm, setFormRhythm] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formConsent, setFormConsent] = useState(false);
  const [formFiles, setFormFiles] = useState<string[]>([]);
  const formHoneypotRef = useRef<HTMLInputElement>(null);

  const selectedChip = content.needChips.find((item) => item.id === needId);

  const canAdvanceDevis = () => {
    if (formStep === 0) return Boolean(formNeed.trim());
    if (formStep === 1) return Boolean(formName.trim() && formPhone.trim() && formEmail.trim());
    return Boolean(formConsent);
  };

  const goDevisNext = () => {
    if (!canAdvanceDevis()) {
      setFormError(
        formStep === 0
          ? "Indiquez votre besoin pour continuer."
          : formStep === 1
            ? "Renseignez votre nom, téléphone et e-mail."
            : "Acceptez la politique de confidentialité pour envoyer.",
      );
      return;
    }
    setFormError("");
    setFormStep((current) => Math.min(current + 1, devisSteps.length - 1));
  };

  const goDevisBack = () => {
    setFormError("");
    setFormStep((current) => Math.max(current - 1, 0));
  };

  const resetDevisForm = () => {
    setFormSent(false);
    setFormStep(0);
    setFormError("");
    setFormConsent(false);
    setFormFiles([]);
    setFormMessage("");
    setFormAddress("");
    setFormSurface("");
    setFormCompany("");
    setFormRhythm("");
    setNeedId(content.defaultNeedId);
    setFormNeed(content.defaultNeed);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStep < devisSteps.length - 1) {
      goDevisNext();
      return;
    }
    if (!canAdvanceDevis()) {
      setFormError("Renseignez les champs obligatoires et acceptez la politique de confidentialité.");
      return;
    }

    const payload = {
      place: formProfile,
      company: formCompany.trim(),
      exactService: formNeed.trim(),
      name: formName.trim(),
      phone: formPhone.trim(),
      email: formEmail.trim(),
      location: formAddress.trim(),
      surface: formSurface.trim(),
      rhythm: formRhythm,
      message: formMessage.trim(),
      files: formFiles,
      consent: formConsent,
      website: formHoneypotRef.current?.value || "",
      source: content.source,
    };

    setFormError("");
    setFormLoading(true);
    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !result?.ok) {
        setFormError(result?.error ?? "L’envoi a échoué. Réessayez ou appelez le 06 71 84 93 41.");
        return;
      }
      setFormSent(true);
      toast.success("Votre demande a bien été envoyée.", {
        description: "Un membre de l’équipe LVMR reviendra vers vous.",
      });
    } catch {
      setFormError("Impossible de contacter le serveur. Réessayez ou appelez le 06 71 84 93 41.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section id="page-devis" className="bg-[#f5f5f5] py-14 sm:py-20">
      <div className="container">
        <div className="grid overflow-hidden rounded-[26px] bg-white shadow-[0_18px_60px_rgba(32,32,32,.09)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-[#202020] p-7 text-white sm:p-9 lg:p-11">
            <img src={imageSet.detail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[.18]" />
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(32,32,32,.96),rgba(32,32,32,.78))]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between gap-8 sm:min-h-[320px] lg:min-h-[360px] lg:gap-10">
              <div>
                <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  <span className="h-px w-5 bg-current" aria-hidden />
                  Devis
                </p>
                <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">{content.devisTitle}</h2>
                <p className="mt-5 max-w-[350px] text-[14px] leading-7 text-white/60">{content.devisIntro}</p>
              </div>
              <div>
                {selectedChip && (
                  <p className="inline-flex rounded-full border border-[#6b6b6b]/30 bg-[#6b6b6b]/15 px-3.5 py-2 text-[12px] font-bold text-[#f1f1f1]">
                    Besoin · {selectedChip.label}
                  </p>
                )}
                <ol className="mt-6 space-y-0 border-t border-white/14 pt-2">
                  {devisSteps.map((step, index) => {
                    const done = !formSent && index < formStep;
                    const active = !formSent && index === formStep;
                    return (
                      <li key={step.label} className={`flex items-center gap-3 border-b border-white/10 py-3.5 transition ${active ? "opacity-100" : done ? "opacity-70" : "opacity-35"}`}>
                        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold tabular-nums ${done ? "bg-[#ffc547] text-[#202020]" : active ? "bg-white text-[#202020]" : "bg-white/10 text-white/70"}`}>
                          {done ? <Check size={13} strokeWidth={2.5} /> : `0${index + 1}`}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[13px] font-extrabold tracking-[-0.02em]">{step.label}</p>
                          <p className="mt-0.5 text-[11px] leading-4 text-white/50">{step.hint}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>

          <form className="flex flex-col justify-center p-6 sm:p-9 lg:p-11" onSubmit={onSubmit}>
            {formSent ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#f1f1f1] text-[#6b6b6b]">
                  <Check size={20} />
                </div>
                <h3 className="mt-5 text-[1.45rem] font-extrabold tracking-[-0.03em] text-[#202020]">Merci. Votre demande est prête.</h3>
                <p className="mt-3 max-w-[380px] text-[15px] leading-7 text-[#424242]">
                  Votre demande a été transmise à notre équipe. Nous revenons vers vous rapidement pour préciser le périmètre et préparer votre devis.
                </p>
                <button type="button" className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#6b6b6b]" onClick={resetDevisForm}>
                  Nouvelle demande <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Étape {formStep + 1} / {devisSteps.length}
                    </p>
                    <h3 className="mt-1.5 text-[clamp(1.25rem,2.2vw,1.55rem)] font-extrabold tracking-[-0.03em] text-[#202020]">
                      {devisSteps[formStep].title}
                    </h3>
                  </div>
                  <div className="flex gap-1.5" aria-hidden>
                    {devisSteps.map((step, index) => (
                      <span key={step.label} className={`h-1.5 w-6 rounded-full transition-all duration-300 sm:w-8 ${index <= formStep ? "bg-[#ffc547]" : "bg-[#202020]/10"}`} />
                    ))}
                  </div>
                </div>

                <input ref={formHoneypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div key={formStep} className="voice-fade grid gap-4">
                  {formStep === 0 && (
                    <>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Vous êtes</span>
                        <div className="relative">
                          <select value={formProfile} onChange={(event) => setFormProfile(event.target.value)} className={`${fieldClass} appearance-none pr-10`}>
                            <option value="">Choisir une catégorie</option>
                            <option>Une entreprise</option>
                            <option>Une copropriété / syndic</option>
                            <option>Un établissement</option>
                            <option>Autre professionnel</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#424242]" size={16} />
                        </div>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Société / organisme</span>
                        <input value={formCompany} onChange={(event) => setFormCompany(event.target.value)} placeholder="Nom de l’entreprise, du syndic ou de l’établissement" className={fieldClass} />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Type de prestation recherchée *</span>
                        <input required value={formNeed} onChange={(event) => setFormNeed(event.target.value)} placeholder="Ex. nettoyage bureaux, 3 passages / semaine" className={fieldClass} />
                      </label>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {content.needChips.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setNeedId(option.id);
                              setFormNeed(`${option.label} — ${option.hint}`);
                            }}
                            className={`rounded-full border px-3.5 py-2 text-[12px] font-bold transition ${needId === option.id ? "border-[#202020] bg-[#202020] text-white" : "border-[#202020]/12 bg-[#f7f9fb] text-[#424242] hover:border-[#202020]/25"}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {formStep === 1 && (
                    <>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Nom et prénom *</span>
                        <input required autoComplete="name" value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="Nom et prénom" className={fieldClass} />
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Téléphone *</span>
                          <input required type="tel" autoComplete="tel" value={formPhone} onChange={(event) => setFormPhone(event.target.value)} placeholder="06 00 00 00 00" className={fieldClass} />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Adresse e-mail *</span>
                          <input required type="email" autoComplete="email" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="nom@entreprise.fr" className={fieldClass} />
                        </label>
                      </div>
                    </>
                  )}

                  {formStep === 2 && (
                    <>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Adresse du site à traiter</span>
                        <input value={formAddress} onChange={(event) => setFormAddress(event.target.value)} placeholder="Ex. 30 rue…, 78100 Saint-Germain-en-Laye" className={fieldClass} />
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Fréquence ou urgence</span>
                          <div className="relative">
                            <select value={formRhythm} onChange={(event) => setFormRhythm(event.target.value)} className={`${fieldClass} appearance-none pr-10`}>
                              <option value="">Sélectionner</option>
                              <option>Ponctuel</option>
                              <option>Hebdomadaire</option>
                              <option>Plusieurs fois par semaine</option>
                              <option>Quotidien</option>
                              <option>Urgent</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#424242]" size={16} />
                          </div>
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Surface approximative</span>
                          <input value={formSurface} onChange={(event) => setFormSurface(event.target.value)} placeholder="Ex. 250 m², 3 niveaux, cuisine pro." className={fieldClass} />
                        </label>
                      </div>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Photographies ou documents</span>
                          <span className={`${fieldClass} relative flex min-h-[50px] cursor-pointer items-center gap-2.5 text-[13px] text-[#424242]`}>
                            <Upload size={15} className="shrink-0 text-[#6b6b6b]" />
                            <span className="truncate">{formFiles.length > 0 ? formFiles.join(", ") : "Ajouter des photos (optionnel)"}</span>
                            <input type="file" multiple accept="image/*,.pdf" className="absolute inset-0 cursor-pointer opacity-0" onChange={(event) => setFormFiles(Array.from(event.target.files ?? []).map((file) => file.name))} />
                          </span>
                        </label>
                      <label className="block">
                        <span className="mb-2 block text-[12px] font-semibold text-[#202020]">Message</span>
                        <textarea value={formMessage} onChange={(event) => setFormMessage(event.target.value)} rows={3} placeholder="Décrivez le besoin, les contraintes du site ou le degré d’urgence." className={`${fieldClass} min-h-0 resize-none py-3`} />
                      </label>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input type="checkbox" checked={formConsent} onChange={(event) => setFormConsent(event.target.checked)} className="mt-1 h-4 w-4 accent-[#6b6b6b]" />
                        <span className="text-[12px] leading-5 text-[#424242]">
                          J’accepte que LVMR Group utilise ces informations pour répondre à ma demande. Consultez notre <Link href="/confidentialite" className="font-bold underline">politique de confidentialité</Link>. *
                        </span>
                      </label>
                    </>
                  )}
                </div>

                {formError && <p role="alert" className="mt-4 text-[12px] font-semibold text-[#c0392b]">{formError}</p>}

                <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#202020]/08 pt-5">
                  {formStep > 0 ? (
                    <button type="button" onClick={goDevisBack} className="inline-flex items-center gap-2 text-[13px] font-bold text-[#6b6b6b] transition hover:text-[#202020]">
                      <ChevronLeft size={16} /> Retour
                    </button>
                  ) : (
                    <p className="text-[12px] leading-5 text-[#9f9f9f]">Saint-Germain-en-Laye · Île-de-France</p>
                  )}

                  {formStep < devisSteps.length - 1 ? (
                    <button type="button" onClick={goDevisNext} className="btn btn-primary min-h-[48px] rounded-2xl px-5">
                      Continuer <ArrowRight size={15} />
                    </button>
                  ) : (
                    <button type="submit" disabled={formLoading} className="btn btn-primary min-h-[48px] rounded-2xl px-5 disabled:opacity-60">
                      {formLoading ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> Envoi…
                        </>
                      ) : (
                        <>
                          {content.submitLabel ?? "Envoyer ma demande"} <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function PageConversionSections({ content }: { content: PageConversionContent }) {
  return (
    <>
      <PageFaqSection title={content.faqTitle} faqs={content.faqs} />
      <PageDevisForm content={content} />
    </>
  );
}
