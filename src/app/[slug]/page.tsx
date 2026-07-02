import PlanDuSite from "@/components/PlanDuSite";
import PageShell from "@/components/PageShell";
import { getAllSectionSlugs, getSectionBySlug } from "@/lib/municipal-sections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) return { title: "עמוד לא נמצא" };
  return {
    title: `${section.title} | עיריית עפולה`,
    description: section.description,
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) notFound();

  return (
    <PageShell title={section.title} description={section.description}>
      {slug === "plan-du-site" && <PlanDuSite />}
    </PageShell>
  );
}
