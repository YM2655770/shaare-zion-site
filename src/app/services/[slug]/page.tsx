import PageShell, { ServicePageContent } from "@/components/PageShell";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/municipal-services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "שירות לא נמצא" };
  return {
    title: `${service.title} | עיריית עפולה`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <PageShell title={service.title} backHref="/services" backLabel="כל השירותים">
      <ServicePageContent service={service} />
    </PageShell>
  );
}
