/* LVMR Atelier Parisien route: premium cleaning services. */
import type { Metadata } from "next";
import { PremiumPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Entreprise de nettoyage professionnel haut de gamme | LVMR Premium" },
  description: "Entretien de bureaux, copropriétés, remises en état et vitrerie en Île-de-France. Découvrez les prestations de LVMR Premium.",
  alternates: { canonical: "/premium" },
};

export default function Page() { return <PremiumPage />; }
