import { communityArticles, textSnippets } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";

export default function CommunityNews() {
  return (
    <section aria-labelledby="news-heading" className="bg-cream px-6 pb-24 pt-4 sm:px-10 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2
          id="news-heading"
          className="font-serif text-center text-2xl font-light tracking-tight text-brown sm:text-[26px]"
        >
          Actualités de la Communauté
        </h2>

        <ul
          role="list"
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {communityArticles.map((article) => (
            <li key={article.slug}>
              <article className="group">
                <Link href={`/actualites/${article.slug}`}>
                  <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-sm bg-white shadow-sm">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-brown">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <ul role="list" className="mt-16 grid gap-8 border-t border-border/80 pt-12 sm:grid-cols-2 sm:gap-10">
          {textSnippets.map((item) => (
            <li key={item.title}>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
