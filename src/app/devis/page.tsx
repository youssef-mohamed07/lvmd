/* LVMR Atelier Parisien route: seven-step quote qualification flow. */
import type { Metadata } from "next";
import { DevisPage } from "@/components/ClientRoutes";

export const metadata: Metadata = {
  title: { absolute: "Devis nettoyage professionnel en Île-de-France | LVMR Group" },
  description: "Demandez un devis LVMR Group : quelques informations sur votre site suffisent pour préparer une proposition adaptée, en Île-de-France.",
  alternates: { canonical: "/devis" },
};

export default function Page() { return <DevisPage />; }
