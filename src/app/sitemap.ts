import type { MetadataRoute } from "next";
import { environmentServices, premiumServices } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lvmr-group.fr";
  const pages = ["", "/groupe", "/premium", "/environnement", "/expertises", "/realisations", "/contact", "/devis", "/mentions-legales", "/confidentialite", "/cookies"];
  const services = [
    ...premiumServices.map((item) => `/premium/${item.slug}`),
    ...environmentServices.map((item) => `/environnement/${item.slug}`),
  ];

  return [...pages, ...services].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path.includes("/premium/") || path.includes("/environnement/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/devis" || path === "/contact" ? 0.9 : 0.7,
  }));
}
