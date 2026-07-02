import type { NewsItem } from "@/lib/municipal";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsGrid({ newsItems }: { newsItems: NewsItem[] }) {

  return (
    <section aria-labelledby="news-heading" className="bg-municipal-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="news-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-municipal-blue sm:text-[28px] sm:leading-9"
          >
            חדשות
          </h2>
          <Link
            href="/actualites"
            className="flex items-center gap-1 text-[15px] font-medium text-municipal-accent transition-colors hover:text-municipal-blue-light"
          >
            הכל
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul
          role="list"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {newsItems.map((item) => (
            <li key={item.slug}>
              <article className="news-card group overflow-hidden rounded-xl border border-municipal-border bg-municipal-white">
                <Link href={`/actualites/${item.slug}`} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-municipal-blue-muted px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-municipal-blue-light">
                      {item.category}
                    </span>
                    <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-municipal-text group-hover:text-municipal-blue">
                      {item.title}
                    </h3>
                    <time className="mt-2 block text-[13px] text-municipal-gray-light">
                      {item.date}
                    </time>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
