"use client";

import { actionCards } from "@/lib/shaare-zion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ActionCards() {
  return (
    <section
      aria-labelledby="cards-heading"
      className="relative z-10 -mt-20 px-6 pb-16 pt-0 sm:-mt-24 sm:px-10 sm:pb-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="cards-heading" className="sr-only">
          Informations clés
        </h2>

        <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {actionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.li
                key={card.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <Link href={card.href} className="group block h-full">
                  <article className="shaare-card flex h-[148px] flex-col overflow-hidden border border-transparent shadow-md sm:h-[156px]">
                    <div className="flex flex-1 flex-col items-center justify-center px-5 pt-5 text-center">
                      <Icon className="h-8 w-8 text-brown" strokeWidth={1.25} aria-hidden />
                      <h3 className="font-serif mt-4 text-[13px] font-medium leading-snug text-brown sm:text-[14px]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="shaare-card-foot flex items-center justify-end px-4 py-2.5">
                      <ArrowRight
                        className="h-4 w-4 text-brown/45 transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                        aria-hidden
                      />
                    </div>
                  </article>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
