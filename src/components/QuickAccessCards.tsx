import Link from "next/link";
import { holidayLinks, maqamLinks } from "@/lib/navigation";
import { currentHoliday, currentMaqam } from "@/lib/piyoutim";

const cards = [
  {
    title: "שירת הבקשות",
    subtitle: "בקשות ותפילות",
    href: "/bakashot",
    icon: "✦",
  },
  {
    title: "החג הנוכחי",
    subtitle: currentHoliday.label,
    href: `/holidays/${currentHoliday.slug}`,
    icon: "☽",
  },
  {
    title: "מקאם הרגע",
    subtitle: currentMaqam.label,
    href: `/maqams/${currentMaqam.slug}`,
    icon: "♪",
  },
];

export default function QuickAccessCards() {
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="card-hover group rounded-xl border border-border bg-surface/50 p-6 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <span className="text-2xl text-gold/80 transition-colors group-hover:text-gold">
            {card.icon}
          </span>
          <h2 className="mt-3 text-base font-semibold text-foreground">{card.title}</h2>
          <p className="mt-1.5 text-sm text-muted">{card.subtitle}</p>
        </Link>
      ))}
    </div>
  );
}
