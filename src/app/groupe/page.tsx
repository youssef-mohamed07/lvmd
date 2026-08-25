/* LVMR Atelier Parisien route: group positioning and operating model. */
import type { Metadata } from "next";
import { GroupePage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Le Groupe | LVMR Group" },
  description: "Découvrez LVMR Group, ses engagements et ses deux pôles spécialisés — LVMR Premium et LVMR Environnement — en Île-de-France.",
  alternates: { canonical: "/groupe" },
};

export default function Page() { return <GroupePage />; }
