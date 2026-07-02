"use client";

import { communityArticles } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EditorialJournal() {
  return (
    <section aria-labelledby="journal-heading" className="relative bg-brown-dark py-24 text-parchment sm:py-32">
      <div className="pattern-arch pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />

      <div className="editorial-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-parchment/12 pb-10"
        >
          <p className="text-[10px] font-light tracking-[0.35em] text-gold uppercase">Journal</p>
          <h2
            id="journal-heading"
            className="font-serif mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light"
          >
            Actualités de la Communauté
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" aria-hidden />
        </motion.div>

        <div className="mt-0 flex flex-col">
          {communityArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-parchment/10 py-14 last:border-b-0 sm:py-16"
            >
              <Link
                href={`/actualites/${article.slug}`}
                className="group flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16"
              >
                <div
                  className={`relative aspect-5/3 w-full overflow-hidden lg:w-[42%] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="grayscale-photo object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 border border-parchment/10" aria-hidden />
                </div>

                <div className={`flex flex-1 flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-[10px] font-light tracking-[0.3em] text-gold/80 uppercase">
                    {String(i + 1).padStart(2, "0")} — Communauté
                  </p>
                  <h3 className="font-serif mt-4 text-[clamp(1.35rem,2.2vw,1.85rem)] leading-snug font-light transition-colors group-hover:text-gold">
                    {article.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-[1.9] font-extralight text-parchment/65">
                    {article.excerpt}
                  </p>
                  <span className="editorial-link editorial-link-on-dark mt-8 group-hover:text-gold">
                    Lire
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="editorial-bar-top mt-4 border-parchment/12">
        <div className="editorial-container">
          <div className="h-px bg-parchment/12" aria-hidden />
        </div>
      </div>
    </section>
  );
}
