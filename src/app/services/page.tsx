import PageShell from "@/components/PageShell";
import { getAllServices } from "@/lib/municipal-services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "שירותים מקוונים | עיריית עפולה",
};

export default function ServicesIndexPage() {
  const services = getAllServices();

  return (
    <PageShell
      title="שירותים מקוונים"
      description="כל השירותים הדיגיטליים של עיריית עפולה — ביצוע תשלומים, הגשת בקשות ומעקב סטטוס."
      backHref="/"
    >
      <ul role="list" className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="block rounded-2xl border border-municipal-border p-5 transition-colors hover:border-municipal-accent hover:bg-municipal-blue-muted"
            >
              <h2 className="text-lg font-semibold text-municipal-blue">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-municipal-gray-light">
                {service.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
