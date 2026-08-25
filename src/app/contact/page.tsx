/* LVMR Atelier Parisien route: contact orientation and quote handoff. */
import type { Metadata } from "next";
import { ContactPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Devis nettoyage professionnel en Île-de-France | LVMR Group" },
  description: "Contactez LVMR Group pour un devis, une visite technique ou une intervention de propreté professionnelle en Île-de-France.",
  alternates: { canonical: "/contact" },
};

export default function Page() { return <ContactPage />; }
