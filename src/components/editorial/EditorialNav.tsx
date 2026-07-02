"use client";

import { congregationInfo, mainNavLinks } from "@/lib/shaare-zion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function EditorialNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 editorial-bar transition-colors duration-500",
          scrolled ? "bg-parchment/97 backdrop-blur-sm" : "bg-parchment/90 backdrop-blur-[2px]",
        )}
      >
        <div className="editorial-container">
          {/* Ligne 1 — identité + recherche */}
          <div className="flex items-center justify-between py-4 lg:py-5">
            <Link href="/" className="group shrink-0" onClick={() => setOpen(false)}>
              <p className="font-serif text-[10px] tracking-[0.35em] text-gold uppercase">
                {congregationInfo.hebrewName}
              </p>
              <p className="font-serif mt-0.5 text-base leading-none font-light tracking-[0.14em] text-brown-dark uppercase transition-colors group-hover:text-gold lg:text-lg">
                Shaare Zion
              </p>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/search"
                className="hidden items-center gap-2 text-[10px] font-light tracking-[0.2em] text-brown uppercase transition-colors hover:text-gold sm:inline-flex"
              >
                Rechercher
                <span aria-hidden className="text-gold">
                  →
                </span>
              </Link>

              <button
                type="button"
                className="p-1 text-brown lg:hidden"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" strokeWidth={1.25} /> : <Menu className="h-5 w-5" strokeWidth={1.25} />}
              </button>
            </div>
          </div>

          {/* Ligne 2 — navigation centrée, une seule rangée */}
          <nav
            aria-label="Menu principal"
            className="hidden border-t border-line/70 py-3.5 lg:block"
          >
            <ul role="list" className="flex items-center justify-center gap-x-7 xl:gap-x-9">
              {mainNavLinks.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={cn(
                      "whitespace-nowrap text-[10px] font-light tracking-[0.16em] uppercase transition-colors duration-300",
                      pathname === link.href
                        ? "text-gold"
                        : "text-brown-muted hover:text-brown",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="editorial-container">
          <div className="editorial-rule-gold" aria-hidden />
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Menu mobile"
              className="overflow-hidden border-t border-line/70 bg-parchment lg:hidden"
            >
              <ul role="list" className="editorial-container space-y-0 py-2">
                {mainNavLinks.map((link) => (
                  <li key={link.href} className="border-b border-line/50 last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-3.5 text-[11px] font-light tracking-[0.18em] uppercase",
                        pathname === link.href ? "text-gold" : "text-brown",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line/50">
                  <Link
                    href="/search"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-3.5 text-[11px] font-light tracking-[0.18em] text-brown uppercase"
                  >
                    Rechercher
                    <span aria-hidden className="text-gold">
                      →
                    </span>
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Espaceur — hauteur adaptée à 1 ou 2 lignes */}
      <div className="h-[72px] lg:h-[108px]" aria-hidden />
    </>
  );
}
