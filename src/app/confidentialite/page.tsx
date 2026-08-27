/* LVMR Atelier Parisien route: privacy policy placeholder awaiting validation. */
import type { Metadata } from "next";
import { LegalPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Politique de confidentialité — LVMR Group" },
  description: "Comment LVMR Group traite vos données : devis, contact et visite technique — sans revente, avec vos droits RGPD.",
  alternates: { canonical: "/confidentialite" },
};

export default function Page() { return <LegalPage type="confidentialite" />; }
