"use client";

import { congregationInfo } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EditorialHero() {
  return (
    <section aria-labelledby="editorial-hero" className="relative overflow-hidden bg-parchment">
      <div className="pattern-arch pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="editorial-container relative flex min-h-[calc(100vh-108px)] flex-col pb-16 pt-10 lg:flex-row lg:items-stretch lg:pb-20 lg:pt-12">
        <div className="relative z-10 flex flex-col justify-center lg:w-[52%] lg:pe-16">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] font-light tracking-[0.35em] text-brown-muted uppercase"
          >
            Brooklyn, New York — Est. 1945
          </motion.p>

          <motion.h1
            id="editorial-hero"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif mt-8 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-light tracking-tight text-brown-dark"
          >
            Bienvenue à
            <br />
            <em className="font-normal not-italic text-gold">Shaare Zion</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-24 origin-left bg-gold"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-10 max-w-md text-base leading-[1.85] font-extralight text-muted-foreground"
          >
            Votre foyer communautaire. Une congrégation sépharade unie par la Torah,
            la prière et l&apos;engagement — un héritage vivant au cœur de Brooklyn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-14"
          >
            <Link href="/communaute" className="editorial-link">
              Découvrir la communauté
              <span aria-hidden className="font-serif text-lg text-gold">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 lg:mt-0 lg:w-[48%]"
        >
          <div className="editorial-frame-l relative ms-auto aspect-3/4 w-full max-w-[520px] lg:absolute lg:end-0 lg:top-1/2 lg:w-[115%] lg:max-w-none lg:-translate-y-1/2">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={congregationInfo.heroImage}
                alt="Architecture de la synagogue Shaare Zion"
                fill
                priority
                className="grayscale-photo object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brown-dark/55 via-transparent to-transparent" />
            </div>

            <p className="absolute start-0 bottom-0 bg-brown-dark/85 px-4 py-3 text-[9px] font-light tracking-[0.25em] text-parchment uppercase">
              Façade — Ocean Parkway
            </p>
          </div>
        </motion.div>
      </div>

      <div className="editorial-bar-top">
        <div className="editorial-container py-0">
          <div className="editorial-rule" aria-hidden />
        </div>
      </div>
    </section>
  );
}
