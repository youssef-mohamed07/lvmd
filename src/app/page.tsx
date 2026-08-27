/* LVMR Atelier Parisien route: the homepage remains the cinematic editorial entry point. */
import type { Metadata } from "next";
import { Home } from "@/components/ClientRoutes";
import { defaultDescription, getSiteUrl, siteName } from "@/lib/site-url";

const title = `${siteName} — Propreté & Environnement`;

export const metadata: Metadata = {
  title,
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: defaultDescription,
    url: getSiteUrl(),
    siteName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: defaultDescription,
  },
};

export default function Page() {
  return <Home />;
}
