import { SectionLinks } from "@/components/PageShell";
import { getAllServices } from "@/lib/municipal-services";
import { getAllSections } from "@/lib/municipal-sections";

export default function PlanDuSite() {
  const services = getAllServices();
  const sections = getAllSections().filter((s) => s.slug !== "plan-du-site");

  return (
    <>
      <SectionLinks
        links={sections.map((s) => ({ href: `/${s.slug}`, label: s.title }))}
      />
      <h2 className="mt-8 text-lg font-semibold text-municipal-blue">שירותים</h2>
      <SectionLinks
        links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))}
      />
      <h2 className="mt-8 text-lg font-semibold text-municipal-blue">עמודים נוספים</h2>
      <SectionLinks
        links={[
          { href: "/actualites", label: "חדשות" },
          { href: "/search", label: "חיפוש" },
        ]}
      />
    </>
  );
}
