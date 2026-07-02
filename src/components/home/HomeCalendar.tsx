import type { HebrewCalendarData } from "@/lib/hebrew-calendar";
import Link from "next/link";

type HomeCalendarProps = {
  data: HebrewCalendarData;
};

export default function HomeCalendar({ data }: HomeCalendarProps) {
  const [weekday, ...rest] = data.gregorianDate.split(", ");
  const monthDayYear = rest.join(", ");

  return (
    <section aria-label="Hebrew calendar" className="border-y border-line bg-parchment-deep py-12 sm:py-14">
      <aside className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <p className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-snug font-normal italic text-brown-dark">
          {weekday},
          <br />
          {monthDayYear}
        </p>
        <p className="mt-3 text-[clamp(1.1rem,2.5vw,1.35rem)] font-medium tracking-wide text-brown">
          {data.hebrewDate}
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-gold/50" aria-hidden />

        <ul role="list" className="mt-8 space-y-6">
          {data.events.map((event) => (
            <li key={`${event.label}-${event.detail}`}>
              <p className="font-serif text-[clamp(1.15rem,2.2vw,1.4rem)] leading-snug text-brown-dark">
                {event.label}
              </p>
              <p className="mt-1.5 text-[clamp(0.95rem,1.8vw,1.1rem)] font-light text-muted-foreground">
                {event.detail}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href="/prochains"
          className="mt-8 inline-block text-xs font-light tracking-[0.2em] text-gold uppercase transition-colors hover:text-brown sm:text-sm"
        >
          View Calendar →
        </Link>
      </aside>
    </section>
  );
}
