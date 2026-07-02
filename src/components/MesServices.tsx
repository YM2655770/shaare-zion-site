import { dailyServices } from "@/lib/municipal";
import {
  AlertTriangle,
  BookOpen,
  Car,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<(typeof dailyServices)[number]["icon"], LucideIcon> = {
  "alert-triangle": AlertTriangle,
  "trash-2": Trash2,
  "book-open": BookOpen,
  car: Car,
};

export default function MesServices() {
  return (
    <section aria-labelledby="services-heading" className="bg-municipal-gray-muted px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2
            id="services-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-municipal-blue sm:text-[28px] sm:leading-9"
          >
            השירותים שלי ליום-יום
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-municipal-gray-light">
            גישה מהירה לדרישות הנפוצות ביותר
          </p>
        </header>

        <ul
          role="list"
          className="mt-10 grid grid-cols-2 gap-8 sm:mt-12 lg:grid-cols-4 lg:gap-12"
        >
          {dailyServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="service-icon-tile group flex flex-col items-center gap-3 rounded-xl p-4 text-center"
                >
                  <span
                    className="service-icon-circle flex h-14 w-14 items-center justify-center rounded-xl bg-municipal-blue-muted text-municipal-blue transition-colors sm:h-16 sm:w-16"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
                  </span>
                  <span className="service-icon-label text-[15px] font-medium text-municipal-text transition-colors">
                    {service.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
