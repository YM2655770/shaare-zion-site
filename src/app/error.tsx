"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center bg-municipal-white px-4 py-16 text-center sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-municipal-blue">
        אירעה שגיאה
      </h1>
      <p className="mt-3 max-w-md text-municipal-gray-light">
        משהו השתבש בטעינת העמוד. נסו שוב או חזרו לדף הבית.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[44px] items-center rounded-full bg-municipal-blue px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-municipal-blue-light"
        >
          ניסיון חוזר
        </button>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center rounded-full border border-municipal-border px-6 py-3 text-[15px] font-semibold text-municipal-blue transition-colors hover:bg-municipal-blue-muted"
        >
          דף הבית
        </Link>
      </div>
    </section>
  );
}
