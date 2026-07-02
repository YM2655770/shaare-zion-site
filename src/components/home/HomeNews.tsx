import { communityArticles } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";

export default function HomeNews() {
  const featured = communityArticles.find((a) => a.featured) ?? communityArticles[0];
  const others = communityArticles.filter((a) => a.slug !== featured.slug);

  return (
    <section aria-labelledby="news-heading" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-[10px] font-light tracking-[0.3em] text-gold uppercase">
            Community Life
          </p>
          <h2
            id="news-heading"
            className="font-serif mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-light text-brown-dark"
          >
            Community News
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:gap-10">
          <article className="group lg:w-[58%]">
            <Link href={`/actualites/${featured.slug}`}>
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown-dark/75 via-brown-dark/20 to-transparent" />
                <h3 className="font-serif absolute inset-x-0 bottom-0 px-6 py-6 text-xl leading-snug font-light text-white sm:text-2xl">
                  {featured.title}
                </h3>
              </div>
            </Link>
          </article>

          <div className="flex flex-1 flex-col gap-8">
            {others.map((article) => (
              <article key={article.slug} className="group flex gap-5 border-b border-line pb-8 last:border-b-0 last:pb-0">
                <Link href={`/actualites/${article.slug}`} className="flex gap-5">
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden sm:h-28 sm:w-36">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="144px"
                    />
                  </div>
                  <div className="min-w-0">
                    {article.date && (
                      <p className="text-[10px] font-light tracking-[0.15em] text-brown-muted uppercase">
                        {article.date}
                      </p>
                    )}
                    <h3 className="font-serif mt-2 text-base leading-snug font-medium text-brown-dark transition-colors group-hover:text-brown">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
