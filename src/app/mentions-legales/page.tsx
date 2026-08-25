/* LVMR Atelier Parisien route: legal information placeholder awaiting validation. */
import type { Metadata } from "next";
import { LegalPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales — LVMR Group" },
  description: "Mentions légales du site de LVMR Group.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() { return <LegalPage type="mentions" />; }
