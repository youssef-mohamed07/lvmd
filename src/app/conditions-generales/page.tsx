/* LVMR Atelier Parisien route: terms and conditions placeholder awaiting validation. */
import type { Metadata } from "next";
import { LegalPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Conditions générales — LVMR Group" },
  description: "Cadre d’utilisation du site et conditions de prestation de LVMR Group — LVMR Premium & Environnement en Île-de-France.",
  alternates: { canonical: "/conditions-generales" },
};

export default function Page() { return <LegalPage type="conditions" />; }
