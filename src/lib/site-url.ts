/** Canonical site origin — set NEXT_PUBLIC_SITE_URL on preview/staging (e.g. https://lvmr.build8.dev). */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://lvmr-group.fr";
}

export const siteName = "LVMR Group";

export const defaultDescription =
  "Propreté premium et interventions environnementales spécialisées en Île-de-France.";

export const ogImagePath = "/og-image.png";
