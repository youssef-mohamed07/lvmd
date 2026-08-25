/* LVMR Atelier Parisien dynamic route: scalable Environnement intervention detail pages. */
import { ServiceDetailPage } from "@/components/ClientRoutes";
import { environmentServices } from "@/lib/site";

export function generateStaticParams() {
  return environmentServices.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
