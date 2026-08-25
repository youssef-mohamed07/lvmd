import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import GlobalCursor from "@/components/GlobalCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lvmrgroup-6tv5wjjm.manus.space"),
  title: { default: "LVMR Group — Propreté & Environnement", template: "%s — LVMR Group" },
  description: "LVMR Group accompagne les professionnels, copropriétés et établissements exigeants avec des solutions de propreté et d’intervention spécialisées.",
  openGraph: {
    title: "LVMR Group — Propreté & Environnement",
    description: "Propreté premium et interventions environnementales spécialisées en Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVMR Group — Propreté & Environnement",
    description: "Propreté premium et interventions environnementales spécialisées en Île-de-France.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className={outfit.className}>
        {children}
        <GlobalCursor />
      </body>
    </html>
  );
}
