import servicesData from "../../content/municipal-services.json";

export type MunicipalService = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  ctaLabel: string;
  ctaHref: string;
};

export function getAllServices(): MunicipalService[] {
  return servicesData as MunicipalService[];
}

export function getServiceBySlug(slug: string): MunicipalService | undefined {
  return getAllServices().find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return getAllServices().map((s) => s.slug);
}
