import PageShell from "@/components/PageShell";
import type { NewsItem } from "@/lib/municipal";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import newsData from "../../../../content/news.json";

type Props = {
  params: Promise<{ slug: string }>;
};

function getNewsBySlug(slug: string): NewsItem | undefined {
  return (newsData as NewsItem[]).find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return (newsData as NewsItem[]).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "כתבה לא נמצאה" };
  return {
    title: `${article.title} | עיריית עפולה`,
  };
}

export default async function ActualitePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  return (
    <PageShell title={article.title} backHref="/actualites" backLabel="כל החדשות">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
      <div className="flex items-center gap-3 text-sm text-municipal-gray-light">
        <span className="rounded-full bg-municipal-blue-muted px-2.5 py-0.5 text-xs font-semibold text-municipal-blue-light">
          {article.category}
        </span>
        <time>{article.date}</time>
      </div>
      <p className="mt-6 leading-relaxed text-municipal-gray">
        תוכן הכתבה יפורסם בקרוב. לפרטים נוספים, צרו קשר עם לשכת הדוברות של עיריית עפולה.
      </p>
    </PageShell>
  );
}
