import Link from "next/link";
import { getMaqamBySlug, maqams } from "@/lib/piyoutim";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return maqams.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const maqam = getMaqamBySlug(slug);
  return {
    title: maqam ? `מקאם ${maqam.label} | שיר חדש` : "מקאמים | שיר חדש",
  };
}

export default async function MaqamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const maqam = getMaqamBySlug(slug);
  if (!maqam) notFound();

  return (
    <section className="px-4 pb-20 pt-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs text-gold">מקאמים</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          מקאם {maqam.label}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted">
          פיוטים המסווגים לפי המקאם {maqam.label}.
        </p>

        <div className="mt-10 rounded-xl border border-border bg-surface/50 p-8 text-center">
          <p className="text-sm text-muted">רפרטואר {maqam.label} יתווסף בקרוב.</p>
          <Link href="/piyut/example" className="mt-4 inline-block text-sm text-gold hover:underline">
            לדוגמה: אלי חזקי (ראסט) ←
          </Link>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-xs text-muted">מקאמים נוספים</p>
          <div className="flex flex-wrap gap-2">
            {maqams
              .filter((m) => m.slug !== slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/maqams/${m.slug}`}
                  className="badge-pill rounded-full px-4 py-1.5 text-xs"
                >
                  {m.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
