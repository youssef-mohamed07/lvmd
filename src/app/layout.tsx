import type { Metadata } from "next";
import GlobalCursor from "@/components/GlobalCursor";
import { defaultDescription, getSiteUrl, ogImagePath, siteName } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "LVMR Group | Propreté et interventions techniques en Île-de-France", template: "%s — LVMR Group" },
  description: "LVMR Group accompagne les professionnels en propreté haut de gamme, remise en état et interventions techniques spécialisées en Île-de-France.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName,
    url: siteUrl,
    title: "LVMR Group | L'excellence en toutes circonstances",
    description: defaultDescription,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "LVMR Group — Propreté & Environnement en Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LVMR Group | L'excellence en toutes circonstances",
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/branding/group/png/group-icon.png`,
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 bis rue du Vieil Abreuvoir",
      addressLocality: "Saint-Germain-en-Laye",
      postalCode: "78100",
      addressCountry: "FR",
    },
    telephone: "+33671849341",
    areaServed: "Île-de-France",
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <GlobalCursor />
      </body>
    </html>
  );
}
