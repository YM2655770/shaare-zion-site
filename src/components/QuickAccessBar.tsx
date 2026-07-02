"use client";

import { quickAccessLinks } from "@/lib/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QuickAccessBar() {
  return (
    <section
      aria-label="גישה מהירה לשירותים"
      className="border-b border-border/60 bg-card/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {quickAccessLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="shrink-0"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group flex min-w-[120px] flex-col items-center gap-2 rounded-2xl border border-border/70 bg-background px-4 py-3",
                    "transition-all duration-200 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5",
                  )}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-center text-xs font-semibold leading-tight text-foreground sm:text-sm">
                    {item.label}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
