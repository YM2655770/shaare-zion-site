"use client";

import { congregationInfo } from "@/lib/shaare-zion";
import { motion } from "framer-motion";

export default function EditorialHeritage() {
  return (
    <section aria-labelledby="heritage-quote" className="relative overflow-hidden bg-parchment-deep">
      <div className="pattern-marble pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="editorial-container relative py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="editorial-frame mx-auto max-w-[900px] px-8 py-16 text-center sm:px-14 sm:py-20"
        >
          <p className="text-[10px] font-light tracking-[0.35em] text-gold uppercase">Héritage</p>

          <blockquote id="heritage-quote">
            <p className="font-serif mt-8 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.45] font-light text-brown-dark">
              &ldquo;Une communauté sépharade unie par la Torah, la prière et l&apos;engagement
              depuis 1945.&rdquo;
            </p>
          </blockquote>

          <div className="mx-auto mt-10 flex items-center justify-center gap-4" aria-hidden>
            <span className="h-px w-12 bg-gold/50" />
            <span className="font-serif text-sm tracking-[0.2em] text-brown-muted uppercase">
              {congregationInfo.hebrewName}
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
