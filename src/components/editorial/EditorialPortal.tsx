"use client";

import { actionCards } from "@/lib/shaare-zion";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EditorialPortal() {
  return (
    <section aria-labelledby="portal-heading" className="relative bg-parchment">
      <div className="pattern-marble pointer-events-none absolute inset-0 opacity-35" aria-hidden />

      <div className="editorial-container relative py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-light tracking-[0.35em] text-gold uppercase">Portail</p>
            <h2
              id="portal-heading"
              className="font-serif mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-none font-light text-brown-dark"
            >
              Accès essentiels
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.9] font-extralight text-muted-foreground">
            Quatre voies vers la vie de notre kehilla — offices, générosité, savoir et contact.
          </p>
        </motion.div>

        <ul role="list" className="mt-2">
          {actionCards.map((card, i) => (
            <motion.li
              key={card.href}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-frame-t group"
              style={{ marginInlineStart: i % 2 === 1 ? "clamp(0px, 6vw, 100px)" : "0" }}
            >
              <Link
                href={card.href}
                className="flex items-center justify-between gap-8 py-9 sm:py-11"
              >
                <span className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-serif w-10 text-2xl font-light text-gold/70 transition-colors group-hover:text-gold sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[clamp(1.2rem,2.4vw,1.7rem)] font-light leading-snug text-brown transition-colors group-hover:text-brown-dark">
                    {card.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 text-lg text-gold/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-gold"
                >
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="editorial-bar-top">
        <div className="editorial-container">
          <div className="editorial-rule-gold" aria-hidden />
        </div>
      </div>
    </section>
  );
}
