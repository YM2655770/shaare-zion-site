import sectionsData from "../../content/municipal-sections.json";

export type MunicipalSection = {
  slug: string;
  title: string;
  description: string;
};

export function getAllSections(): MunicipalSection[] {
  return sectionsData as MunicipalSection[];
}

export function getSectionBySlug(slug: string): MunicipalSection | undefined {
  return getAllSections().find((s) => s.slug === slug);
}

export function getAllSectionSlugs(): string[] {
  return getAllSections().map((s) => s.slug);
}
