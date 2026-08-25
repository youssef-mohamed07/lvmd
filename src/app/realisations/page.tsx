/* LVMR Atelier Parisien route: portfolio structure for authentic LVMR case studies. */
import type { Metadata } from "next";
import { RealisationsPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Nos réalisations | LVMR Group" },
  description: "Des réalisations LVMR Group documentées avec des photographies, cas clients et témoignages authentiques dont la publication est autorisée.",
  alternates: { canonical: "/realisations" },
};

export default function Page() { return <RealisationsPage />; }
