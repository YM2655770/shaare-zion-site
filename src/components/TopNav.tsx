"use client";

import { congregationInfo, mainNavLinks } from "@/lib/shaare-zion";
import { cn } from "@/lib/utils";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5 sm:px-10 lg:px-12">
          <Link href="/" className="shrink-0" aria-label={`${congregationInfo.name} — Accueil`}>
            <Image
              src="/images/shaare-zion-logo.svg"
              alt="Congrégation Shaare Zion"
              width={200}
              height={64}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          <div className="flex items-center gap-5 lg:gap-8">
            <nav aria-label="Menu principal" className="hidden items-center gap-6 lg:flex">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-medium tracking-wide transition-colors hover:text-gold",
                    pathname === link.href ? "text-brown" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <form onSubmit={handleSearch} className="hidden items-center sm:flex" role="search">
              <label htmlFor="top-search" className="sr-only">
                Rechercher
              </label>
              <div className="flex items-center rounded-full border border-border bg-cream px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                <input
                  id="top-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher…"
                  className="ms-2 w-24 bg-transparent text-xs outline-none placeholder:text-muted-foreground lg:w-32"
                />
              </div>
            </form>

            <button
              type="button"
              className="rounded-lg p-2 text-brown lg:hidden"
              aria-label={open ? "Fermer" : "Menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-white px-6 py-4 lg:hidden" aria-label="Menu mobile">
            <ul role="list" className="space-y-1">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px] sm:h-[64px]" aria-hidden />
    </>
  );
}
