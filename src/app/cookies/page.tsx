/* LVMR Atelier Parisien route: cookie management placeholder awaiting validation. */
import type { Metadata } from "next";
import { LegalPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Gestion des cookies — LVMR Group" },
  description: "Gestion des cookies sur le site de LVMR Group.",
  alternates: { canonical: "/cookies" },
};

export default function Page() { return <LegalPage type="cookies" />; }
