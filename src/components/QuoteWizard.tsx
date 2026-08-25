/* LVMR quote flow — wide light stage with left means + option icons. */
"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CircleHelp,
  ClipboardList,
  DoorOpen,
  Hammer,
  HelpCircle,
  Hotel,
  Loader2,
  MapPin,
  MessagesSquare,
  Ruler,
  ShieldAlert,
  Sparkles,
  Store,
  Upload,
  Home,
  Briefcase,
  Layers,
  CalendarDays,
  X,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { environmentServices, premiumServices } from "@/lib/site";

type QuoteData = {
  service: string;
  exactService: string;
  place: string;
  surface: string;
  rhythm: string;
  location: string;
  files: string[];
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
};

const initialData: QuoteData = {
  service: "",
  exactService: "",
  place: "",
  surface: "",
  rhythm: "",
  location: "",
  files: [],
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
  consent: false,
};

const storageKey = "lvmr-quote-draft";
const steps = ["Service", "Lieu", "Surface", "Fréquence", "Localisation", "Documents", "Coordonnées"];
const prompts = [
  "Quel service recherchez-vous ?",
  "Quel type de lieu est concerné ?",
  "Quelle est la surface approximative ?",
  "Quel rythme imaginez-vous ?",
  "Où se situe le site ?",
  "Des documents utiles ?",
  "Comment vous recontacter ?",
];

const means = [
  [Sparkles, "Service", "Premium, Environnement ou à cadrer"],
  [ClipboardList, "Contexte", "Lieu, surface et rythme"],
  [MessagesSquare, "Contact", "Coordonnées pour vous répondre"],
] as const;

const serviceOptions = [
  { value: "LVMR Premium", hint: "Entretien régulier", tone: "gold" as const, Icon: Sparkles },
  { value: "LVMR Environnement", hint: "Intervention technique", tone: "env" as const, Icon: ShieldAlert },
  { value: "Je ne sais pas encore", hint: "On cadrera ensemble", tone: "cyan" as const, Icon: HelpCircle },
];

const placeOptions: { value: string; Icon: LucideIcon }[] = [
  { value: "Bureaux", Icon: Building2 },
  { value: "Copropriété", Icon: DoorOpen },
  { value: "Commerce", Icon: Store },
  { value: "Hôtel", Icon: Hotel },
  { value: "Résidence", Icon: Home },
  { value: "Local professionnel", Icon: Briefcase },
  { value: "Autre", Icon: Layers },
];

const surfaceOptions: { value: string; Icon: LucideIcon }[] = [
  { value: "Moins de 100 m²", Icon: Ruler },
  { value: "100–300 m²", Icon: Ruler },
  { value: "300–1000 m²", Icon: Ruler },
  { value: "1000+ m²", Icon: Ruler },
  { value: "Je ne sais pas", Icon: CircleHelp },
];

function toneClasses(tone: "gold" | "env" | "cyan", selected: boolean) {
  if (tone === "gold") {
    return selected
      ? "border-[#ffc547] bg-[#ffc547] text-[#202020] shadow-[0_14px_36px_rgba(255,197,71,.28)]"
      : "border-[#202020]/10 bg-white text-[#202020] hover:border-[#ffc547]/60 hover:bg-[#ffc547]/20";
  }
  if (tone === "env") {
    return selected
      ? "border-[#7ebcab] bg-[#7ebcab] text-[#202020] shadow-[0_14px_36px_rgba(126,188,171,.25)]"
      : "border-[#202020]/10 bg-white text-[#202020] hover:border-[#7ebcab]/60 hover:bg-[#7ebcab]/12";
  }
  return selected
    ? "border-[#6b6b6b] bg-[#6b6b6b] text-white shadow-[0_14px_36px_rgba(107,107,107,.28)]"
    : "border-[#202020]/10 bg-white text-[#202020] hover:border-[#6b6b6b]/50 hover:bg-[#f1f1f1]";
}

function Choice({
  value,
  hint,
  selected,
  onClick,
  tone = "cyan",
  Icon,
}: {
  value: string;
  hint?: string;
  selected: boolean;
  onClick: () => void;
  tone?: "gold" | "env" | "cyan";
  Icon: LucideIcon;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`group grid w-full grid-cols-[44px_1fr_32px] items-center gap-3.5 rounded-[16px] border px-4 py-3.5 text-left transition duration-300 sm:gap-4 sm:px-4 ${toneClasses(tone, selected)}`}
    >
      <span
        className={`grid h-11 w-11 place-items-center rounded-[12px] transition ${
          selected
            ? tone === "cyan"
              ? "bg-white/20 text-white"
              : "bg-[#202020]/12 text-current"
            : "bg-[#f5f5f5] text-[#6b6b6b] group-hover:bg-[#f1f1f1]"
        }`}
      >
        <Icon size={18} strokeWidth={1.9} />
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-extrabold tracking-[-0.02em]">{value}</span>
        {hint && (
          <span className={`mt-0.5 block text-[12px] font-medium leading-5 ${selected ? "opacity-70" : "text-[#9f9f9f]"}`}>
            {hint}
          </span>
        )}
      </span>
      <span
        className={`grid h-8 w-8 place-items-center rounded-full transition ${
          selected
            ? tone === "cyan"
              ? "bg-white/20 text-white"
              : "bg-[#202020]/12 text-current"
            : "bg-[#f5f5f5] text-[#9f9f9f]"
        }`}
      >
        {selected ? <Check size={15} strokeWidth={2.4} /> : <ArrowRight size={13} />}
      </span>
    </button>
  );
}

function Tile({
  value,
  selected,
  onClick,
  Icon,
}: {
  value: string;
  selected: boolean;
  onClick: () => void;
  Icon: LucideIcon;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`grid min-h-[64px] grid-cols-[40px_1fr] items-center gap-3 rounded-[16px] border px-3.5 text-left transition ${
        selected
          ? "border-[#ffc547] bg-[#ffc547] text-[#202020] shadow-[0_8px_20px_rgba(255,197,71,.22)]"
          : "border-[#202020]/10 bg-white text-[#202020] hover:border-[#6b6b6b]/40 hover:bg-[#f1f1f1]/50"
      }`}
    >
      <span
        className={`grid h-10 w-10 place-items-center rounded-[12px] ${
          selected ? "bg-[#202020]/12" : "bg-[#f5f5f5] text-[#6b6b6b]"
        }`}
      >
        <Icon size={17} strokeWidth={1.9} />
      </span>
      <span className="text-[13px] font-bold leading-snug">{value}</span>
    </button>
  );
}

const fieldClass =
  "mt-2 w-full rounded-2xl border border-[#202020]/10 bg-[#f7f7f7] px-4 py-3.5 text-[15px] text-[#202020] outline-none transition placeholder:text-[#9f9f9f] focus:border-[#6b6b6b] focus:bg-white focus:ring-4 focus:ring-[#6b6b6b]/12";

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>(initialData);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const draft = window.localStorage.getItem(storageKey);
      if (draft) setData({ ...initialData, ...JSON.parse(draft) });
    } catch {
      /* draft is optional */
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  }, [data]);

  const update = (key: keyof QuoteData, value: string | boolean | string[]) =>
    setData((current) => ({ ...current, [key]: value }));

  const isLast = step === steps.length - 1;
  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(data.service && (data.service === "Je ne sais pas encore" || data.exactService));
    if (step === 1) return Boolean(data.place);
    if (step === 2) return Boolean(data.surface);
    if (step === 3) return Boolean(data.rhythm);
    if (step === 4) return Boolean(data.location.trim());
    if (step === 6) return Boolean(data.name.trim() && data.phone.trim() && data.email.trim() && data.consent);
    return true;
  }, [data, step]);

  const next = () => {
    if (!canContinue) {
      setError(
        step === 6
          ? "Renseignez votre nom, votre téléphone, votre email et votre consentement."
          : "Sélectionnez une réponse pour continuer.",
      );
      return;
    }
    setError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const previous = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) =>
    update(
      "files",
      Array.from(event.target.files ?? []).map((file) => file.name),
    );

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!canContinue) {
      setError("Renseignez les champs obligatoires et acceptez la confidentialité.");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setLoading(false);
    setSent(true);
    window.localStorage.removeItem(storageKey);
    toast.success("Votre demande est prête à être transmise.");
  };

  const rhythms: { value: string; Icon: LucideIcon }[] =
    data.service === "LVMR Environnement"
      ? [
          { value: "Standard", Icon: CalendarDays },
          { value: "Urgent", Icon: Hammer },
        ]
      : [
          { value: "Ponctuel", Icon: CalendarDays },
          { value: "Hebdomadaire", Icon: CalendarDays },
          { value: "Plusieurs fois par semaine", Icon: CalendarDays },
          { value: "Quotidien", Icon: CalendarDays },
        ];

  const detailedServices = data.service === "LVMR Premium"
    ? premiumServices
    : data.service === "LVMR Environnement"
      ? environmentServices
      : [];

  if (sent) {
    return (
      <div className="overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white shadow-[0_16px_50px_rgba(32,32,32,.05)]">
        <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ffc547] text-[#202020] shadow-[0_14px_36px_rgba(255,197,71,.3)]">
            <Check size={24} strokeWidth={2.4} />
          </div>
          <h2 className="mt-6 text-[clamp(1.7rem,3.5vw,2.2rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#202020]">
            Merci. C’est prêt.
          </h2>
          <p className="mt-3 max-w-[420px] text-[14px] leading-7 text-[#424242]">
            Votre demande est préparée. Le branchement email / CRM pourra être activé en production.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setStep(0);
              setData(initialData);
            }}
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-[#6b6b6b] transition hover:gap-3"
          >
            Nouvelle demande <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#202020]/8 bg-white shadow-[0_16px_50px_rgba(32,32,32,.05)] lg:grid lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)]">
      {/* Left means — same card, shared top edge */}
      <aside className="border-b border-[#202020]/8 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">Votre parcours</p>
        <h2 className="mt-2 text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202020] sm:text-[1.45rem]">
          7 étapes. Une demande claire.
        </h2>
        <p className="mt-2 text-[12px] leading-5 text-[#9f9f9f]">
          Progression conservée sur cet appareil.
        </p>
        <ul className="mt-6 space-y-2">
          {means.map(([Icon, title, text], index) => {
            const active = step < 2 ? index === 0 : step < 6 ? index === 1 : index === 2;
            return (
              <li
                key={title}
                className={`grid grid-cols-[40px_1fr] items-center gap-3 rounded-[14px] border px-3 py-3 transition ${
                  active
                    ? "border-[#6b6b6b]/25 bg-[#f1f1f1]"
                    : "border-transparent bg-[#f7f7f7]"
                }`}
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-[12px] ${
                    active ? "bg-[#6b6b6b] text-white" : "bg-white text-[#6b6b6b]"
                  }`}
                >
                  <Icon size={17} strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-extrabold text-[#202020]">{title}</span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-[#424242]">{text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </aside>

      <form onSubmit={submit} noValidate className="flex min-w-0 flex-col p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
              Étape 0{step + 1} · 07
            </p>
            <h3 className="mt-2 text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202020] sm:text-[1.45rem]">
              {steps[step]}
            </h3>
            <p className="mt-1.5 text-[13px] leading-5 text-[#424242]">{prompts[step]}</p>
          </div>
          <div className="mt-1 flex shrink-0 gap-1" aria-label={`Progression : étape ${step + 1} sur 7`}>
            {steps.map((label, index) => (
              <button
                key={label}
                type="button"
                title={label}
                onClick={() => index < step && setStep(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === step
                    ? "w-7 bg-[#ffc547]"
                    : index < step
                      ? "w-3.5 bg-[#6b6b6b]"
                      : "w-2 bg-[#202020]/10"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex-1">
          {step === 0 && (
            <div>
              <div className="grid gap-2.5">
                {serviceOptions.map((item) => (
                  <Choice
                    key={item.value}
                    value={item.value}
                    hint={item.hint}
                    tone={item.tone}
                    Icon={item.Icon}
                    selected={data.service === item.value}
                    onClick={() => {
                      update("service", item.value);
                      update("exactService", "");
                    }}
                  />
                ))}
              </div>
              {detailedServices.length > 0 && (
                <label className="mt-4 block">
                  <span className="text-[12px] font-semibold text-[#424242]">Prestation recherchée *</span>
                  <select
                    value={data.exactService}
                    onChange={(event) => update("exactService", event.target.value)}
                    required
                    className={fieldClass}
                  >
                    <option value="">Choisir une prestation</option>
                    {detailedServices.map((item) => <option key={item.slug} value={item.title}>{item.title}</option>)}
                  </select>
                </label>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-2.5 sm:grid-cols-2">
              {placeOptions.map((item) => (
                <Tile
                  key={item.value}
                  value={item.value}
                  Icon={item.Icon}
                  selected={data.place === item.value}
                  onClick={() => update("place", item.value)}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-2.5 sm:grid-cols-2">
              {surfaceOptions.map((item) => (
                <Tile
                  key={item.value}
                  value={item.value}
                  Icon={item.Icon}
                  selected={data.surface === item.value}
                  onClick={() => update("surface", item.value)}
                />
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-2.5 sm:grid-cols-2">
              {rhythms.map((item) => (
                <Tile
                  key={item.value}
                  value={item.value}
                  Icon={item.Icon}
                  selected={data.rhythm === item.value}
                  onClick={() => update("rhythm", item.value)}
                />
              ))}
            </div>
          )}

          {step === 4 && (
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-[12px] font-semibold text-[#424242]">
                <MapPin size={14} className="text-[#6b6b6b]" /> Adresse complète du site
              </span>
              <input
                autoFocus
                required
                value={data.location}
                onChange={(event) => update("location", event.target.value)}
                placeholder="Ex. 30 rue…, 78100 Saint-Germain-en-Laye"
                className={fieldClass}
              />
              <p className="mt-3 text-[12px] text-[#9f9f9f]">Intervention en Île-de-France. Zone confirmée avec vous.</p>
            </label>
          )}

          {step === 5 && (
            <div>
              <label className="flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-[16px] border border-dashed border-[#202020]/15 bg-[#f7f7f7] px-6 text-center transition hover:border-[#6b6b6b]/45 hover:bg-[#f1f1f1]/60">
                <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-[#f1f1f1] text-[#6b6b6b]">
                  <Upload size={18} />
                </span>
                <span className="mt-3 text-[14px] font-bold text-[#202020]">Ajouter des fichiers</span>
                <span className="mt-1 text-[12px] text-[#9f9f9f]">Photos, plans, notes — optionnel</span>
                <input type="file" multiple className="sr-only" onChange={handleFiles} />
              </label>
              {data.files.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.files.map((file) => (
                    <span
                      key={file}
                      className="inline-flex items-center gap-2 rounded-full border border-[#202020]/8 bg-[#f1f1f1] px-3.5 py-2 text-[12px] font-semibold text-[#6b6b6b]"
                    >
                      {file}
                      <button
                        type="button"
                        onClick={() => update("files", data.files.filter((item) => item !== file))}
                        aria-label={`Retirer ${file}`}
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 6 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-[12px] font-semibold text-[#424242]">Nom et prénom *</span>
                <input
                  required
                  value={data.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Votre nom"
                  className={fieldClass}
                />
              </label>
              <label>
                <span className="text-[12px] font-semibold text-[#424242]">Entreprise</span>
                <input
                  value={data.company}
                  onChange={(event) => update("company", event.target.value)}
                  placeholder="Votre entreprise"
                  className={fieldClass}
                />
              </label>
              <label>
                <span className="text-[12px] font-semibold text-[#424242]">Téléphone *</span>
                <input
                  required
                  type="tel"
                  value={data.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="06 00 00 00 00"
                  className={fieldClass}
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-[12px] font-semibold text-[#424242]">Email *</span>
                <input
                  required
                  type="email"
                  value={data.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="nom@entreprise.fr"
                  className={fieldClass}
                />
              </label>
              <label className="sm:col-span-2">
                <span className="text-[12px] font-semibold text-[#424242]">Message</span>
                <textarea
                  value={data.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Décrivez le besoin, les contraintes du site ou le degré d’urgence."
                  rows={4}
                  className={fieldClass}
                />
              </label>
              <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(event) => update("consent", event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#ffc547]"
                />
                <span className="text-[12px] leading-5 text-[#424242]">
                  J’accepte que LVMR Group utilise ces informations pour répondre à ma demande. Consultez notre <a href="/confidentialite" className="font-bold underline">politique de confidentialité</a>. *
                </span>
              </label>
            </div>
          )}
        </div>

        {error && (
          <p role="alert" className="mt-4 text-[12px] font-semibold text-[#c0392b]">
            {error}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#202020]/8 pt-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={previous}
              className="inline-flex min-h-11 items-center gap-2 text-[13px] font-bold text-[#9f9f9f] transition hover:text-[#202020]"
            >
              <ArrowLeft size={15} /> Retour
            </button>
          ) : (
            <span />
          )}

          {isLast ? (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ffc547] px-5 text-[13px] font-extrabold text-[#202020] shadow-[0_10px_24px_rgba(255,197,71,.28)] transition hover:bg-[#b07e2b] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Envoi…
                </>
              ) : (
                <>
                  Envoyer ma demande <ArrowRight size={15} />
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ffc547] px-5 text-[13px] font-extrabold text-[#202020] shadow-[0_10px_24px_rgba(255,197,71,.28)] transition hover:bg-[#b07e2b]"
            >
              Continuer <ArrowRight size={15} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
