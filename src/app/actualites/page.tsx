import PageShell from "@/components/PageShell";
import type { NewsItem } from "@/lib/municipal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import newsData from "../../../content/news.json";

export const metadata: Metadata = {
  title: "חדשות | עיריית עפולה",
};

export default function ActualitesPage() {
  const newsItems = newsData as NewsItem[];

  return (
    <PageShell
      title="חדשות"
      description="עדכונים, אירועים ופרויקטים עירוניים בעפולה."
      backHref="/"
    >
      <ul role="list" className="space-y-6">
        {newsItems.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/actualites/${item.slug}`}
              className="news-card flex gap-4 overflow-hidden rounded-xl border border-municipal-border bg-municipal-white sm:gap-6"
            >
              <div className="relative h-24 w-32 shrink-0 sm:h-28 sm:w-40">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center py-3 pe-4">
                <span className="text-xs font-semibold uppercase text-municipal-blue-light">
                  {item.category}
                </span>
                <h2 className="mt-1 line-clamp-2 font-semibold text-municipal-text">
                  {item.title}
                </h2>
                <time className="mt-1 text-xs text-municipal-gray-light">{item.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
