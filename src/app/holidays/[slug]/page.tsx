import Link from "next/link";
import { getHolidayBySlug, holidays } from "@/lib/piyoutim";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return holidays.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  return {
    title: holiday ? `${holiday.label} | שיר חדש` : "חגים ומועדים | שיר חדש",
  };
}

export default async function HolidayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) notFound();

  return (
    <section className="px-4 pb-20 pt-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs text-gold">חגים ומועדים</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          {holiday.label}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted">
          פיוטים וליטורגיה הקשורים ל{holiday.label}.
        </p>

        <div className="mt-10 rounded-xl border border-border bg-surface/50 p-8 text-center">
          <p className="text-sm text-muted">תוכן לחג זה יתווסף בקרוב.</p>
          <Link href="/piyut/example" className="mt-4 inline-block text-sm text-gold hover:underline">
            לדוגמת פיוט ←
          </Link>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-xs text-muted">חגים נוספים</p>
          <div className="flex flex-wrap gap-2">
            {holidays
              .filter((h) => h.slug !== slug)
              .map((h) => (
                <Link
                  key={h.slug}
                  href={`/holidays/${h.slug}`}
                  className="badge-pill rounded-full px-4 py-1.5 text-xs"
                >
                  {h.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
