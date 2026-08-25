/* LVMR Atelier Parisien dynamic route: scalable Environnement service detail pages. */
import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ClientRoutes";
import { environmentServices, findService } from "@/lib/site";

export function generateStaticParams() {
  return environmentServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: { absolute: "Page introuvable — LVMR Group" } };
  return {
    title: { absolute: `${service.title} en Île-de-France | LVMR Environnement` },
    description: service.description,
    alternates: { canonical: `/environnement/${service.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
