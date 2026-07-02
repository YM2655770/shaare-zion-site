"use client";

import { Button } from "@/components/ui/button";
import { congregationInfo, navLinks } from "@/lib/shaare-zion";
import { cn } from "@/lib/utils";
import { HeartHandshake, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${congregationInfo.name} — Accueil`}>
          <Image
            src="/images/shaare-zion-logo.svg"
            alt=""
            width={48}
            height={48}
            className="h-10 w-10 sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden font-serif text-sm font-semibold leading-tight text-navy sm:block">
            Shaare Zion
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-navy-light",
                pathname === link.href ? "text-gold" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden bg-gold text-navy hover:bg-gold/90 sm:inline-flex"
            asChild
          >
            <Link href="/soutenir">
              <HeartHandshake className="h-4 w-4" aria-hidden />
              Dons
            </Link>
          </Button>

          <button
            type="button"
            className="rounded-lg p-2 text-navy lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-cream px-4 py-4 lg:hidden">
          <nav aria-label="Navigation mobile">
            <ul role="list" className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium",
                      pathname === link.href ? "bg-muted text-navy" : "text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full bg-gold text-navy hover:bg-gold/90" asChild>
              <Link href="/soutenir">
                <HeartHandshake className="h-4 w-4" aria-hidden />
                Faire un don
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
