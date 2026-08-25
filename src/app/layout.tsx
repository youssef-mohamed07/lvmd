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
  metadataBase: new URL("https://lvmr-group.fr"),
  title: { default: "LVMR Group | Propreté et interventions techniques en Île-de-France", template: "%s — LVMR Group" },
  description: "LVMR Group accompagne les professionnels en propreté haut de gamme, remise en état et interventions techniques spécialisées en Île-de-France.",
  openGraph: {
    title: "LVMR Group | L’excellence en toutes circonstances",
    description: "Propreté professionnelle haut de gamme et interventions techniques spécialisées en Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVMR Group | L’excellence en toutes circonstances",
    description: "Propreté professionnelle haut de gamme et interventions techniques spécialisées en Île-de-France.",
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
