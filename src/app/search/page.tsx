import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "חיפוש | עיריית עפולה",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const suggestions = [
    { href: "/services/arnona", label: "תשלום ארנונה" },
    { href: "/services/inscription-scolaire", label: "רישום לבית ספר" },
    { href: "/services/106", label: "דיווח 106" },
    { href: "/services/permis-construire", label: "היתר בנייה" },
  ];

  return (
    <PageShell title="תוצאות חיפוש" backHref="/">
      {query ? (
        <p className="text-municipal-gray">
          לא נמצאו תוצאות עבור «{" "}
          <span className="font-semibold text-municipal-blue">{query}</span> ». נסו אחד
          מהשירותים הבאים:
        </p>
      ) : (
        <p className="text-municipal-gray">הקלידו מילת חיפוש בדף הבית.</p>
      )}

      <ul role="list" className="mt-6 space-y-2">
        {suggestions.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg border border-municipal-border px-4 py-3 text-municipal-gray transition-colors hover:border-municipal-accent hover:bg-municipal-blue-muted hover:text-municipal-blue"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
