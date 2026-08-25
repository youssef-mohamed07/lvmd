/* LVMR Atelier Parisien route: complete service directory and expertise filters. */
import type { Metadata } from "next";
import { ExpertisesPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Expertises LVMR Group — Services de propreté et environnement" },
  description: "Explorez les expertises LVMR Premium et LVMR Environnement : entretien, remise en état, nettoyage technique et pôle 3D en Île-de-France.",
  alternates: { canonical: "/expertises" },
};

export default function Page() { return <ExpertisesPage />; }
