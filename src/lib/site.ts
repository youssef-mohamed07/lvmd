/* LVMR Atelier Parisien content model: French editorial copy, reusable services, and transparent placeholders only where the brief asks for future real data. */

export type ServiceItem = {
  slug: string;
  group: "premium" | "environnement";
  number: string;
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  image: string;
  intro: string;
  points: string[];
  idealFor: string[];
};

export const imageSet = {
  hero: "/manus-storage/lvmr-hero.jpg",
  premium: "/manus-storage/lvmr-premium.jpg",
  environnement: "/manus-storage/lvmr-environnement.jpg",
  detail: "/manus-storage/lvmr-detail.jpg",
  monogram: "/manus-storage/lvmr-monogram.png",
};

export const premiumServices: ServiceItem[] = [
  {
    slug: "nettoyage-bureaux",
    group: "premium",
    number: "01",
    title: "Nettoyage de bureaux",
    shortTitle: "Bureaux",
    kicker: "LVMR Premium",
    description: "Des espaces professionnels nets, réguliers et prêts à accueillir chaque journée de travail.",
    image: imageSet.premium,
    intro: "Un bureau propre accompagne la concentration, l’accueil et l’image de votre entreprise. LVMR Premium construit un entretien cohérent avec vos usages, vos rythmes et la présence de vos équipes.",
    points: ["Entretien des espaces de travail et circulations", "Organisation adaptée aux horaires et aux usages", "Points de contrôle à définir selon vos attentes"],
    idealFor: ["Sièges sociaux", "Espaces de coworking", "Cabinets et agences", "Locaux professionnels"],
  },
  {
    slug: "coproprietes",
    group: "premium",
    number: "02",
    title: "Nettoyage de copropriétés",
    shortTitle: "Copropriétés",
    kicker: "LVMR Premium",
    description: "Un entretien précis des parties communes, pensé pour respecter les usages et les rythmes du lieu.",
    image: imageSet.detail,
    intro: "Les parties communes donnent le ton dès l’entrée. Notre approche privilégie la régularité, la lisibilité des passages et le soin des détails qui font la qualité perçue d’un immeuble.",
    points: ["Halls, escaliers, paliers et circulations", "Organisation des passages à définir avec la copropriété", "Attention portée aux matériaux et aux zones de contact"],
    idealFor: ["Immeubles résidentiels", "Résidences gérées", "Syndics de copropriété", "Ensembles mixtes"],
  },
  {
    slug: "vitrerie",
    group: "premium",
    number: "03",
    title: "Vitrerie",
    shortTitle: "Vitrerie",
    kicker: "LVMR Premium",
    description: "La lumière retrouvée par un travail soigneux des surfaces vitrées et des détails difficiles d’accès.",
    image: imageSet.hero,
    intro: "Une surface vitrée se juge à la lumière qu’elle laisse entrer. LVMR Premium intervient avec le matériel et l’organisation adaptés à la configuration des lieux.",
    points: ["Vitrages intérieurs et extérieurs selon accès", "Baies, cloisons vitrées et surfaces remarquables", "Cadrage de l’intervention selon la fréquence souhaitée"],
    idealFor: ["Bureaux", "Hôtels", "Commerces", "Résidences contemporaines"],
  },
  {
    slug: "remise-en-etat",
    group: "premium",
    number: "04",
    title: "Remise en état",
    shortTitle: "Remise en état",
    kicker: "LVMR Premium",
    description: "Une intervention structurée pour retrouver un espace propre, lisible et immédiatement exploitable.",
    image: imageSet.detail,
    intro: "Après un chantier, un déménagement ou une période de travaux, la remise en état donne au lieu sa lecture finale. Chaque intervention est pensée à partir de l’état réel des surfaces et des priorités du site.",
    points: ["Lecture des surfaces et des zones prioritaires", "Nettoyage des traces liées aux travaux et à l’occupation", "Préparation du lieu avant réouverture ou réception"],
    idealFor: ["Livraisons d’espaces", "Après travaux", "Déménagements", "Réouvertures"],
  },
];

export const environmentServices: ServiceItem[] = [
  {
    slug: "apres-sinistre",
    group: "environnement",
    number: "01",
    title: "Nettoyage après sinistre",
    shortTitle: "Après sinistre",
    kicker: "LVMR Environnement",
    description: "Une approche méthodique pour les situations qui demandent sang-froid, organisation et discrétion.",
    image: imageSet.environnement,
    intro: "Après un sinistre, les premières décisions comptent. LVMR Environnement vous aide à clarifier la situation, à qualifier les zones concernées et à organiser une intervention proportionnée.",
    points: ["Évaluation initiale du contexte et des surfaces", "Définition des priorités d’intervention", "Coordination discrète avec les interlocuteurs du site"],
    idealFor: ["Dégâts des eaux", "Incidents dans les locaux", "Propriétés occupées", "Gestionnaires de patrimoine"],
  },
  {
    slug: "decontamination",
    group: "environnement",
    number: "02",
    title: "Décontamination",
    shortTitle: "Décontamination",
    kicker: "LVMR Environnement",
    description: "Des protocoles d’intervention adaptés à la nature du site, de la situation et des surfaces concernées.",
    image: imageSet.environnement,
    intro: "Une situation de contamination nécessite une lecture précise du contexte et des mesures adaptées. Nous construisons une intervention claire, progressive et documentée selon les éléments disponibles.",
    points: ["Qualification des zones et des contraintes d’accès", "Choix d’une méthode adaptée au contexte", "Restitution claire des étapes réalisées"],
    idealFor: ["Locaux professionnels", "Sites techniques", "Logements", "Situations spécifiques"],
  },
  {
    slug: "desinfection",
    group: "environnement",
    number: "03",
    title: "Désinfection",
    shortTitle: "Désinfection",
    kicker: "LVMR Environnement",
    description: "Une intervention ciblée pour rétablir des conditions d’usage plus sereines dans les espaces concernés.",
    image: imageSet.detail,
    intro: "La désinfection s’inscrit dans un contexte précis : reprise d’activité, incident, zone sensible ou besoin ponctuel. LVMR Environnement adapte son intervention à la réalité du site.",
    points: ["Définition des zones à traiter", "Organisation de l’intervention selon l’occupation", "Conseils de remise en usage du lieu"],
    idealFor: ["Bureaux", "Commerces", "Établissements recevant du public", "Résidences"],
  },
  {
    slug: "logements-insalubres",
    group: "environnement",
    number: "04",
    title: "Logements insalubres",
    shortTitle: "Logements insalubres",
    kicker: "LVMR Environnement",
    description: "Une prise en charge discrète et structurée de situations humaines et matérielles particulièrement sensibles.",
    image: imageSet.environnement,
    intro: "Ces interventions demandent autant de méthode que de tact. Notre rôle est de rendre la situation lisible, de sécuriser les étapes et de permettre au lieu de retrouver un usage possible.",
    points: ["Échange préalable sur la situation et les contraintes", "Tri des priorités et séquençage de l’intervention", "Traitement des surfaces et évacuation à organiser selon le contexte"],
    idealFor: ["Bailleurs", "Gestionnaires", "Familles accompagnées", "Professionnels de l’immobilier"],
  },
  {
    slug: "assainissement",
    group: "environnement",
    number: "05",
    title: "Assainissement",
    shortTitle: "Assainissement",
    kicker: "LVMR Environnement",
    description: "Une prise en charge technique pour rétablir des conditions saines et maîtrisées.",
    image: imageSet.detail,
    intro: "L’assainissement s’aborde avec une vision d’ensemble : comprendre le contexte, traiter les zones prioritaires et laisser un espace plus clair à exploiter.",
    points: ["Lecture de la situation sur site", "Intervention sur les zones définies ensemble", "Conseils de suivi à préciser selon le besoin"],
    idealFor: ["Locaux vacants", "Caves et annexes", "Sites professionnels", "Logements"],
  },
  {
    slug: "hottes-professionnelles",
    group: "environnement",
    number: "06",
    title: "Hottes professionnelles",
    shortTitle: "Hottes professionnelles",
    kicker: "LVMR Environnement",
    description: "Le dégraissage des installations professionnelles avec une attention portée à chaque zone critique.",
    image: imageSet.environnement,
    intro: "Les installations de cuisine professionnelle nécessitent un entretien méthodique. Nous intervenons sur les zones et équipements définis lors de la qualification du besoin.",
    points: ["Repérage des installations concernées", "Dégraissage des zones accessibles", "Planification selon l’activité du site"],
    idealFor: ["Restaurants", "Hôtels", "Cuisines collectives", "Laboratoires alimentaires"],
  },
];

export const allServices = [...premiumServices, ...environmentServices];

export const processSteps = [
  ["01", "Échange", "Comprendre votre besoin."],
  ["02", "Évaluation", "Définir l’intervention adaptée."],
  ["03", "Proposition", "Recevoir une offre claire."],
  ["04", "Intervention", "Déployer les équipes nécessaires."],
  ["05", "Suivi", "Maintenir le niveau d’exigence."],
];

export const sectorPlaceholders = ["Bureaux", "Copropriétés", "Hôtellerie", "Résidences", "Commerce", "Sites techniques"];

export const findService = (slug: string) => allServices.find((service) => service.slug === slug);
