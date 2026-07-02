import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center bg-municipal-white px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-municipal-accent">404</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-municipal-blue">
        העמוד לא נמצא
      </h1>
      <p className="mt-3 max-w-md text-municipal-gray-light">
        הדף שחיפשתם אינו קיים או הוסר. נסו לחזור לדף הבית או לחפש שירות.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-municipal-blue px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-municipal-blue-light"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
