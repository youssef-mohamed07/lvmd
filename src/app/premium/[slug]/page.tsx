/* LVMR Atelier Parisien dynamic route: scalable Premium service detail pages. */
import { ServiceDetailPage } from "@/components/ClientRoutes";
import { premiumServices } from "@/lib/site";

export function generateStaticParams() {
  return premiumServices.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
