import { momentCards } from "@/lib/shaare-zion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EnCeMoment() {
  return (
    <section aria-labelledby="moment-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center sm:text-start">
          <h2
            id="moment-heading"
            className="font-serif text-2xl font-semibold text-navy sm:text-3xl"
          >
            En ce moment
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Horaires, calendrier et événements — l&apos;essentiel en un coup d&apos;œil.
          </p>
        </div>

        <ul role="list" className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {momentCards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif mt-5 text-lg font-semibold text-navy">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <ArrowRight
                    className="mt-4 h-4 w-4 text-gold transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
