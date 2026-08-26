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
  hero: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-office-lobby-02.webp",
  premium: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-office-lobby-02.webp",
  environnement: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-technical-ppe-01.webp",
  detail: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-detail-gloved-cleaning-01.webp",
  premiumOffice: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-office-lobby-01.webp",
  premiumGlass: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-glass-cleaning-01.webp",
  premiumGlassAlt: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-glass-cleaning-02.webp",
  premiumTeam: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-team-cleaning-01.webp",
  premiumTeamAlt: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-team-cleaning-02.webp",
  premiumEquipment: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/premium-equipment-floor-cleaning-01.webp",
  groupTechnical: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-technical-ppe-01.webp",
  groupEquipment: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-technical-disinfection-02.webp",
  groupMethodology: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-methodology-team-01.webp",
  groupReporting: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-reporting-documentation-01.webp",
  groupChecklist: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/group-reporting-checklist-02.webp",
  environmentHero: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-intervention.webp",
  environmentBefore: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-before-room.webp",
  environmentAfter: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-after-room.webp",
  environmentIntervention: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-intervention.webp",
  environmentDetail: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-detail.webp",
  environmentKitchen: "/LVMR-ALL-FILES/LVMR-WEBSITE-ASSETS/web/client-environment-kitchen.webp",
  monogram: "/branding/group/png/group-icon.png",
};

export const brandSet = {
  groupHorizontal: "/branding/group/png/group-horizontal.png",
  groupHorizontalWhite: "/branding/group/png/group-horizontal-white.png",
  groupIcon: "/branding/group/png/group-icon.png",
  groupIconWhite: "/branding/group/png/group-icon-white.png",
  premiumHorizontal: "/branding/premium/png/premium-horizontal.png",
  premiumHorizontalWhite: "/branding/premium/png/premium-horizontal-white.png",
  premiumIcon: "/branding/premium/png/premium-icon.png",
  environnementHorizontal: "/branding/environnement/png/environnement-horizontal.png",
  environnementIcon: "/branding/environnement/png/environnement-icon.png",
};

const service = (item: Omit<ServiceItem, "number">, number: number): ServiceItem => ({ ...item, number: String(number).padStart(2, "0") });

export const premiumServices: ServiceItem[] = [
  service({ slug: "nettoyage-bureaux", group: "premium", title: "Entretien de bureaux et espaces professionnels", shortTitle: "Bureaux", kicker: "LVMR Premium", image: imageSet.premiumOffice, description: "Entretien régulier des bureaux, accueils, salles de réunion, circulations, espaces de pause et sanitaires.", intro: "Nous assurons l’entretien régulier des bureaux, accueils, salles de réunion, circulations, espaces de pause, sanitaires et autres zones définies au contrat.", points: ["Dépoussiérage et entretien des surfaces accessibles", "Aspiration et lavage des sols selon leur nature", "Entretien et désinfection des sanitaires", "Vidage des corbeilles et gestion des déchets selon les consignes du site", "Entretien des points de contact et espaces communs", "Prestations quotidiennes, hebdomadaires ou adaptées au besoin"], idealFor: ["Bureaux", "Commerces", "ERP", "Espaces professionnels"] }, 1),
  service({ slug: "coproprietes", group: "premium", title: "Copropriétés et résidences", shortTitle: "Copropriétés", kicker: "LVMR Premium", image: imageSet.premiumTeam, description: "Entretien des halls, cages d’escalier, paliers, ascenseurs, vitrages accessibles et locaux communs.", intro: "LVMR Premium entretient les parties communes des immeubles et résidences. La fréquence et le cahier des charges sont établis en fonction de la configuration et de la fréquentation du site.", points: ["Halls, cages d’escalier et paliers", "Ascenseurs et locaux communs", "Vitrages accessibles et zones de circulation", "Fréquence et cahier des charges adaptés au site"], idealFor: ["Copropriétés", "Résidences", "Syndics", "Bailleurs"] }, 2),
  service({ slug: "remise-en-etat", group: "premium", title: "Remises en état", shortTitle: "Remise en état", kicker: "LVMR Premium", image: imageSet.premiumEquipment, description: "Interventions ponctuelles après travaux, déménagement, changement d’occupant, événement ou période d’inoccupation.", intro: "Une visite préalable peut être organisée pour évaluer les surfaces, le niveau d’encrassement et les moyens nécessaires.", points: ["Évaluation préalable selon le contexte", "Protocole adapté aux surfaces", "Restitution des lieux prêts à l’usage"], idealFor: ["Après travaux", "Déménagements", "Livraisons", "Réouvertures"] }, 3),
  service({ slug: "vitrerie", group: "premium", title: "Vitrerie", shortTitle: "Vitrerie", kicker: "LVMR Premium", image: imageSet.premiumGlass, description: "Nettoyage des vitres, vitrines, cloisons vitrées, baies et surfaces accessibles.", intro: "Pour les accès techniques, en hauteur ou nécessitant des moyens spécifiques, le dossier peut être pris en charge avec LVMR Environnement.", points: ["Vitres et vitrines", "Cloisons et baies vitrées", "Coordination avec le pôle technique si nécessaire"], idealFor: ["Bureaux", "Commerces", "Résidences", "ERP"] }, 4),
];

export const environmentServices: ServiceItem[] = [
  service({ slug: "apres-sinistre", group: "environnement", title: "Remise en état après sinistre", shortTitle: "Après sinistre", kicker: "LVMR Environnement", image: imageSet.environmentIntervention, description: "Remise en état après dégât des eaux, incendie, suies, vandalisme ou dégradation importante.", intro: "Nous évaluons le périmètre et adaptons l’intervention aux supports, au niveau de contamination et aux consignes du donneur d’ordre.", points: ["Évaluation des zones concernées", "Protocole adapté aux supports", "Compte rendu selon la prestation"], idealFor: ["Dégâts des eaux", "Incendies", "Vandalisme", "Sites dégradés"] }, 1),
  service({ slug: "logements-insalubres", group: "environnement", title: "Logements insalubres et situations complexes", shortTitle: "Logements insalubres", kicker: "LVMR Environnement", image: imageSet.environmentBefore, description: "Prise en charge respectueuse et confidentielle des logements encombrés, insalubres ou de type syndrome de Diogène.", intro: "Le protocole peut comprendre, selon le devis, tri, débarras, nettoyage, désinfection, neutralisation des odeurs et remise en propreté.", points: ["Approche confidentielle et respectueuse", "Séquençage adapté à l’état réel des lieux", "Tri, débarras et assainissement selon le devis"], idealFor: ["Logements", "Bailleurs", "Gestionnaires", "Familles"] }, 2),
  service({ slug: "nettoyage-industriel", group: "environnement", title: "Nettoyage industriel et technique", shortTitle: "Nettoyage industriel", kicker: "LVMR Environnement", image: imageSet.groupTechnical, description: "Opérations ponctuelles ou programmées dans les ateliers, entrepôts, zones de production et locaux techniques.", intro: "Nous préparons l’intervention selon les risques, les accès et les surfaces fortement encrassées à traiter.", points: ["Ateliers, entrepôts et zones de production", "Structures, bardages et plafonds accessibles", "Équipements et surfaces fortement encrassées"], idealFor: ["Industrie", "Logistique", "Locaux techniques", "Bâtiments professionnels"] }, 3),
  service({ slug: "vitrerie-technique", group: "environnement", title: "Vitrerie technique et accès spécifiques", shortTitle: "Vitrerie technique", kicker: "LVMR Environnement", image: imageSet.premiumGlassAlt, description: "Étude des moyens adaptés aux surfaces vitrées importantes ou difficiles d’accès.", intro: "Nettoyage à l’eau pure, perches, équipements d’accès ou nacelle lorsque les conditions du site et les habilitations le permettent.", points: ["Analyse des accès", "Moyens techniques appropriés", "Intervention selon les conditions et habilitations requises"], idealFor: ["Façades vitrées", "Grandes baies", "Accès difficiles", "Sites professionnels"] }, 4),
  service({ slug: "hottes-professionnelles", group: "environnement", title: "Dégraissage de hottes et systèmes d’extraction", shortTitle: "Hottes et extraction", kicker: "LVMR Environnement", image: imageSet.environmentKitchen, description: "Entretien des installations d’extraction de graisses dans les cuisines professionnelles.", intro: "Nous accompagnons restaurants, brasseries, cuisines collectives, établissements scolaires, hôtels et établissements de santé dans l’entretien de leurs installations d’extraction de graisses.", points: ["Hotte professionnelle et surfaces accessibles", "Filtres métalliques", "Conduits d’extraction accessibles", "Moteurs, turbines et caissons selon configuration et accessibilité", "Protection de la zone, dégraissage et remise en état de l’espace de travail"], idealFor: ["Restaurants", "Hôtels", "Cuisines collectives", "Établissements de santé"] }, 5),
  service({ slug: "deratisation", group: "environnement", title: "Dératisation", shortTitle: "Dératisation", kicker: "Pôle 3D", image: imageSet.groupChecklist, description: "Prévention, identification et traitement des rongeurs avec recommandations préventives et suivi selon le besoin.", intro: "Après analyse, nous définissons un plan adapté à la configuration des lieux et au niveau d’infestation.", points: ["Repérage des zones de passage", "Dispositifs adaptés à la situation", "Recommandations et suivi selon le besoin"], idealFor: ["Professionnels", "Restaurants", "Copropriétés", "Logements"] }, 6),
  service({ slug: "desinsectisation", group: "environnement", title: "Désinsectisation", shortTitle: "Désinsectisation", kicker: "Pôle 3D", image: imageSet.detail, description: "Traitement notamment des blattes, cafards, fourmis, puces, punaises de lit et autres insectes nuisibles.", intro: "La méthode est choisie selon l’espèce identifiée, l’activité du site et les précautions nécessaires.", points: ["Identification de la situation", "Méthode adaptée à l’espèce", "Consignes de préparation et de sécurité"], idealFor: ["Commerces", "Restaurants", "Copropriétés", "Logements"] }, 7),
  service({ slug: "desinfection", group: "environnement", title: "Désinfection", shortTitle: "Désinfection", kicker: "Pôle 3D", image: imageSet.groupEquipment, description: "Assainissement des surfaces et zones concernées après situation sanitaire, contamination, sinistre ou remise en état.", intro: "Le protocole et les produits sont adaptés à l’environnement traité et aux contraintes du site.", points: ["Définition des zones concernées", "Protocole adapté à l’environnement", "Fiche ou certificat selon la prestation"], idealFor: ["Professionnels", "ERP", "Copropriétés", "Environnements sensibles"] }, 8),
];

export const extractionReasons = [
  "Limiter l’accumulation de graisses et contribuer à réduire le risque d’incendie.",
  "Maintenir les performances d’aspiration et le confort de la cuisine.",
  "Réduire les odeurs et les dépôts graisseux.",
  "Participer au respect des obligations d’entretien applicables à l’établissement.",
  "Disposer d’une traçabilité de l’intervention réalisée.",
];

export const allServices = [...premiumServices, ...environmentServices];
export const processSteps = [
  ["01", "Analyse du besoin", "Échange initial et visite du site lorsque nécessaire."],
  ["02", "Proposition détaillée", "Un devis clair précisant prestations, moyens et conditions."],
  ["03", "Intervention", "Des équipes et un protocole adaptés aux contraintes du lieu."],
  ["04", "Contrôle et suivi", "Vérification et transmission des documents prévus."],
];
export const sectorPlaceholders = ["Entreprises", "Copropriétés", "Commerces", "ERP", "Gestionnaires de sites"];
export const findService = (slug: string) => allServices.find((item) => item.slug === slug);
