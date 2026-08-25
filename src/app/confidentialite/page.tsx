/* LVMR Atelier Parisien route: privacy policy placeholder awaiting validation. */
import type { Metadata } from "next";
import { LegalPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Politique de confidentialité — LVMR Group" },
  description: "Politique de confidentialité de LVMR Group : traitement des données personnelles collectées via le site.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() { return <LegalPage type="confidentialite" />; }
