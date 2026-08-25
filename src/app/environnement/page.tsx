/* LVMR Atelier Parisien route: specialized environmental interventions. */
import type { Metadata } from "next";
import { EnvironnementPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Nettoyage technique, nuisibles et hottes | LVMR Environnement" },
  description: "Sinistres, logements insalubres, nettoyage industriel, hottes, dératisation, désinsectisation et désinfection en Île-de-France.",
  alternates: { canonical: "/environnement" },
};

export default function Page() { return <EnvironnementPage />; }
