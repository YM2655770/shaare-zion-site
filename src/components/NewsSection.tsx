import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsItem } from "@/lib/municipal";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection({ newsItems }: { newsItems: NewsItem[] }) {
  const [featured, ...rest] = newsItems;

  return (
    <section aria-labelledby="news-heading" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="secondary" className="mb-4">
              חדשות
            </Badge>
            <h2
              id="news-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              מה קורה בעיר
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/actualites">
              כל החדשות
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {featured && (
            <article className="lg:col-span-7">
              <Link href={`/actualites/${featured.slug}`} className="group block h-full">
                <Card className="interactive-scale h-full overflow-hidden border-border/60 p-0 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                    <Image
                      src={featured.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <Badge className="mb-3 bg-white/90 text-primary">{featured.category}</Badge>
                      <CardTitle className="text-2xl text-white sm:text-3xl">{featured.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm text-white/80">
                        {featured.date}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((item) => (
              <article key={item.slug}>
                <Link href={`/actualites/${item.slug}`} className="group block h-full">
                  <Card className="interactive-scale h-full overflow-hidden border-border/60 p-0 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-full flex-col sm:flex-row lg:flex-col">
                      <div className="relative h-40 shrink-0 overflow-hidden sm:w-40 lg:h-44 lg:w-full">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="200px"
                        />
                      </div>
                      <CardHeader className="gap-2 p-5">
                        <Badge variant="default" className="w-fit">
                          {item.category}
                        </Badge>
                        <CardTitle className="line-clamp-2 text-base">{item.title}</CardTitle>
                        <CardDescription className="text-xs">{item.date}</CardDescription>
                      </CardHeader>
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
