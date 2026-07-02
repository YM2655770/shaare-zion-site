import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  backHref?: string;
  backLabel?: string;
};

export default function PageShell({
  title,
  description,
  children,
  backHref = "/",
  backLabel = "חזרה לדף הבית",
}: PageShellProps) {
  return (
    <section className="bg-municipal-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-municipal-accent transition-colors hover:text-municipal-blue-light"
        >
          <ArrowRight className="h-4 w-4" aria-hidden />
          {backLabel}
        </Link>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold text-municipal-blue sm:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base leading-relaxed text-municipal-gray sm:text-lg">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

type ServiceContent = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  ctaLabel: string;
  ctaHref: string;
};

export function ServicePageContent({ service }: { service: ServiceContent }) {
  const isExternal = service.ctaHref.startsWith("tel:") || service.ctaHref.startsWith("http");

  return (
    <>
      <p className="text-base leading-relaxed text-municipal-gray sm:text-lg">{service.summary}</p>

      <div className="mt-8 rounded-2xl border border-municipal-border bg-municipal-gray-muted p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-municipal-blue">שלבים</h2>
        <ol className="mt-4 space-y-3">
          {service.steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-municipal-gray">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-municipal-blue-muted text-sm font-semibold text-municipal-blue"
                aria-hidden
              >
                {index + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {service.ctaHref !== "#" && (
        <a
          href={service.ctaHref}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-municipal-blue px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-municipal-blue-light"
        >
          {service.ctaLabel}
        </a>
      )}
    </>
  );
}

export function SectionLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul role="list" className="mt-6 space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block rounded-lg border border-municipal-border px-4 py-3 text-municipal-gray transition-colors hover:border-municipal-accent hover:bg-municipal-blue-muted hover:text-municipal-blue"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
