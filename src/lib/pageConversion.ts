import { ServiceItem } from "@/lib/site";

export type FaqItem = { q: string; a: string };

export type NeedChip = { id: string; label: string; hint: string };

export type PageConversionContent = {
  faqTitle: string;
  faqs: FaqItem[];
  devisTitle: string;
  devisIntro: string;
  defaultNeed: string;
  defaultNeedId: string;
  needChips: NeedChip[];
  source: string;
};

const sharedFaqs = {
  zone: {
    q: "Zone d’intervention",
    a: "Basé à Saint-Germain-en-Laye, LVMR Group intervient principalement à Paris et en Île-de-France. Les autres demandes sont étudiées selon leur nature.",
  },
  devis: {
    q: "Comment est préparé le devis ?",
    a: "Nous analysons le besoin et organisons une visite du site lorsqu’elle est nécessaire pour définir précisément le périmètre.",
  },
  urgent: {
    q: "Une demande urgente ?",
    a: "Contactez directement notre équipe au 06 71 84 93 41. Nous évaluons la priorité et nos possibilités d’intervention dans les meilleurs délais.",
  },
  documents: {
    q: "Quels documents sont remis ?",
    a: "Selon la prestation, un compte rendu, un rapport photographique, une fiche ou un certificat d’intervention peut être prévu.",
  },
} as const;

export const pageConversionContent = {
  premium: {
    faqTitle: "Avant votre devis Premium.",
    faqs: [
      sharedFaqs.devis,
      { q: "Quelle fréquence est possible ?", a: "Entretien quotidien, hebdomadaire ou ponctuel : la fréquence est définie selon la surface, la fréquentation et vos contraintes d’horaires." },
      { q: "Intervention en site occupé", a: "Nos équipes interviennent avec discrétion, selon des consignes formalisées et des plages horaires adaptées à votre activité." },
      sharedFaqs.zone,
      { q: "Suivi et interlocuteur", a: "Un interlocuteur identifié suit la prestation et ajuste l’organisation si le site ou les besoins évoluent." },
    ],
    devisTitle: "Parlons de vos locaux.",
    devisIntro: "Trois étapes pour cadrer une prestation LVMR Premium — bureaux, copropriété, vitrerie ou remise en état.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "Entretien régulier" },
      { id: "copro", label: "Copropriété", hint: "Parties communes" },
      { id: "vitrerie", label: "Vitrerie", hint: "Surfaces vitrées" },
      { id: "remise", label: "Remise en état", hint: "Après travaux" },
    ],
    source: "Formulaire court — LVMR Premium",
  },
  environnement: {
    faqTitle: "Avant votre expertise Environnement.",
    faqs: [
      { q: "Visite technique avant devis", a: "Pour les situations complexes, une visite peut être organisée afin d’évaluer l’état des lieux, les accès et le périmètre réel d’intervention." },
      sharedFaqs.urgent,
      { q: "Pôle 3D : nuisibles et désinfection", a: "Dératisation, désinsectisation et désinfection sont traitées avec un protocole adapté à l’espèce, au site et aux contraintes sanitaires." },
      sharedFaqs.documents,
      sharedFaqs.zone,
    ],
    devisTitle: "Décrivez la situation.",
    devisIntro: "Trois étapes pour qualifier une intervention LVMR Environnement — sinistre, technique ou pôle 3D.",
    defaultNeed: "Après sinistre — Intervention urgente",
    defaultNeedId: "sinistre",
    needChips: [
      { id: "sinistre", label: "Après sinistre", hint: "Intervention urgente" },
      { id: "insalubre", label: "Logement insalubre", hint: "Situation complexe" },
      { id: "hottes", label: "Hottes", hint: "Extraction pro" },
      { id: "technique", label: "Pôle 3D", hint: "Nuisibles / DDD" },
    ],
    source: "Formulaire court — LVMR Environnement",
  },
  expertises: {
    faqTitle: "Avant de choisir une expertise.",
    faqs: [
      { q: "Premium ou Environnement", a: "Premium couvre la propreté professionnelle haut de gamme. Environnement prend en charge les opérations techniques, sensibles ou complexes." },
      sharedFaqs.devis,
      sharedFaqs.zone,
      sharedFaqs.urgent,
      sharedFaqs.documents,
    ],
    devisTitle: "Parlons de votre site.",
    devisIntro: "Indiquez le service qui correspond le mieux à votre situation — nous vous orientons vers le bon pôle.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "Entretien régulier" },
      { id: "sinistre", label: "Après sinistre", hint: "Intervention urgente" },
      { id: "hottes", label: "Hottes", hint: "Extraction pro" },
      { id: "technique", label: "Pôle 3D", hint: "Nuisibles / DDD" },
    ],
    source: "Formulaire court — Expertises",
  },
  realisations: {
    faqTitle: "Avant de nous confier votre site.",
    faqs: [
      { q: "Références et confidentialité", a: "Les références nominatives sont communiquées sur demande, avec l’accord des clients concernés. Les retours publiés sont anonymisés." },
      sharedFaqs.devis,
      { q: "Types de sites accompagnés", a: "Bureaux, copropriétés, commerces, établissements recevant du public, sites industriels et logements en situation complexe." },
      sharedFaqs.zone,
      sharedFaqs.documents,
    ],
    devisTitle: "Un projet similaire ?",
    devisIntro: "Décrivez votre site et votre besoin — nous comparons avec des interventions comparables déjà menées.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "Entretien régulier" },
      { id: "copro", label: "Copropriété", hint: "Parties communes" },
      { id: "sinistre", label: "Après sinistre", hint: "Remise en état" },
      { id: "remise", label: "Remise en état", hint: "Après travaux" },
    ],
    source: "Formulaire court — Réalisations",
  },
  groupe: {
    faqTitle: "Avant de nous contacter.",
    faqs: [
      { q: "Deux pôles, un interlocuteur", a: "LVMR Premium et LVMR Environnement partagent la même exigence de méthode. Vous êtes orienté vers l’équipe réellement adaptée à votre besoin." },
      sharedFaqs.devis,
      sharedFaqs.zone,
      sharedFaqs.urgent,
      { q: "Organisation et encadrement", a: "Personnel encadré, consignes formalisées, protocoles adaptés au site et suivi de la prestation ou de l’intervention." },
    ],
    devisTitle: "Parlons de votre besoin.",
    devisIntro: "Quelques informations pour orienter votre demande vers le bon pôle LVMR.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "LVMR Premium" },
      { id: "copro", label: "Copropriété", hint: "LVMR Premium" },
      { id: "sinistre", label: "Après sinistre", hint: "LVMR Environnement" },
      { id: "technique", label: "Technique & 3D", hint: "LVMR Environnement" },
    ],
    source: "Formulaire court — Le Groupe",
  },
  devis: {
    faqTitle: "Avant le devis.",
    faqs: [
      sharedFaqs.zone,
      sharedFaqs.devis,
      { q: "Premium ou Environnement", a: "Premium couvre la propreté professionnelle haut de gamme. Environnement prend en charge les opérations techniques, sensibles ou complexes." },
      sharedFaqs.urgent,
      sharedFaqs.documents,
    ],
    devisTitle: "Parlons de votre site.",
    devisIntro: "Trois étapes courtes pour cadrer votre besoin — sans formulaire interminable.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "Entretien régulier" },
      { id: "copro", label: "Copropriété", hint: "Parties communes" },
      { id: "sinistre", label: "Après sinistre", hint: "Intervention urgente" },
      { id: "technique", label: "Technique & 3D", hint: "Hottes / nuisibles" },
    ],
    source: "Formulaire court — Devis",
  },
  contact: {
    faqTitle: "Avant de nous écrire.",
    faqs: [
      { q: "Délai de réponse", a: "Nous revenons vers vous rapidement pour préciser le périmètre, organiser une visite si nécessaire et préparer une proposition adaptée." },
      sharedFaqs.devis,
      sharedFaqs.urgent,
      sharedFaqs.zone,
      { q: "Quelle information préparer ?", a: "Adresse du site, type de locaux, surface approximative, fréquence souhaitée ou degré d’urgence, et photographies si la situation le permet." },
    ],
    devisTitle: "Envoyez votre demande.",
    devisIntro: "Trois étapes pour transmettre les informations essentielles à notre équipe.",
    defaultNeed: "Bureaux — Entretien régulier",
    defaultNeedId: "bureaux",
    needChips: [
      { id: "bureaux", label: "Bureaux", hint: "Entretien régulier" },
      { id: "copro", label: "Copropriété", hint: "Parties communes" },
      { id: "sinistre", label: "Après sinistre", hint: "Intervention urgente" },
      { id: "technique", label: "Technique & 3D", hint: "Hottes / nuisibles" },
    ],
    source: "Formulaire court — Contact",
  },
} satisfies Record<string, PageConversionContent>;

export type PageConversionKey = keyof typeof pageConversionContent;

export function getServiceConversionContent(service: ServiceItem): PageConversionContent {
  const pole = service.group === "premium" ? "Premium" : "Environnement";
  const relatedChips: NeedChip[] = service.idealFor.slice(0, 3).map((label, index) => ({
    id: `ideal-${index}`,
    label,
    hint: pole,
  }));

  return {
    faqTitle: `Avant de parler de ${service.shortTitle.toLowerCase()}.`,
    faqs: [
      { q: "Périmètre de cette prestation", a: service.description },
      { q: "Pour quels lieux ?", a: `Cette intervention concerne notamment : ${service.idealFor.join(", ")}. Le périmètre exact se précise avec le contexte du site.` },
      sharedFaqs.devis,
      service.group === "environnement" ? sharedFaqs.urgent : { q: "Organisation sur site occupé", a: "L’intervention est planifiée selon vos horaires, la fréquentation des lieux et les contraintes d’accès identifiées lors de l’échange initial." },
      sharedFaqs.zone,
    ],
    devisTitle: "Parler de ce besoin.",
    devisIntro: `Trois étapes pour qualifier une demande ${pole} — ${service.shortTitle.toLowerCase()}.`,
    defaultNeed: `${service.shortTitle} — ${service.kicker}`,
    defaultNeedId: service.slug,
    needChips: relatedChips.length >= 2
      ? relatedChips
      : pageConversionContent[service.group === "premium" ? "premium" : "environnement"].needChips,
    source: `Formulaire court — ${service.title}`,
  };
}
