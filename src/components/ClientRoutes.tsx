/* Client page exports — SSR enabled so route changes don't flash a blank screen. */
"use client";

export { default as Home } from "@/site-pages/Home";
export {
  PremiumPage,
  EnvironnementPage,
  ExpertisesPage,
  RealisationsPage,
  GroupePage,
  DevisPage,
  ContactPage,
  LegalPage,
  NotFoundPage,
  ServiceDetailPage,
} from "@/site-pages/InnerPages";
