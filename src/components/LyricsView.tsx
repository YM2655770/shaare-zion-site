import Link from "next/link";
import type { Piyut } from "@/lib/piyoutim";

type LyricsViewProps = {
  piyut: Piyut;
  compact?: boolean;
};

export default function LyricsView({ piyut, compact = false }: LyricsViewProps) {
  return (
    <article
      className={`mx-auto w-full rounded-2xl border border-border bg-surface/60 ${
        compact ? "max-w-md px-6 py-8" : "max-w-2xl px-6 py-10 sm:px-10 sm:py-12"
      }`}
    >
      <header className="text-center">
        <h1
          className={`font-[family-name:var(--font-display)] font-bold leading-tight text-gold ${
            compact ? "text-3xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {piyut.title}
        </h1>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <MetadataBadge
            href={`/maqams/${piyut.makamSlug}`}
            label={`מקאם: ${piyut.makam}`}
          />
          <MetadataBadge
            href={`/holidays/pesach`}
            label={`חג/אירוע: ${piyut.occasion}`}
          />
        </div>
      </header>

      <div
        className={`lyrics-text mt-10 space-y-5 text-center text-foreground ${
          compact ? "text-lg" : "text-xl sm:text-2xl"
        }`}
        aria-label="מילות הפיוט"
      >
        {piyut.lyrics.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function MetadataBadge({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="badge-pill rounded-full px-3.5 py-1.5 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {label}
    </Link>
  );
}
