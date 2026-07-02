"use client";

import SiteLogo from "@/components/SiteLogo";
import { congregationInfo, footerLegalLinks, footerNavLinks } from "@/lib/shaare-zion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-parchment">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center gap-6 lg:min-h-[80px]">
          <SiteLogo
            variant="footer"
            className="lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2"
          />

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:gap-x-10"
          >
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-light tracking-wide text-parchment/60 transition-colors hover:text-gold sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-1 text-center text-[13px] font-light text-parchment/55 lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:items-end lg:text-end">
            <a href={`mailto:${congregationInfo.email}`} className="hover:text-gold">
              {congregationInfo.email}
            </a>
            <a href={`tel:${congregationInfo.phone.replace(/\D/g, "")}`} className="hover:text-gold">
              {congregationInfo.phone}
            </a>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-3 border-t border-parchment/10 pt-5 sm:flex-row sm:justify-between">
          <p className="text-[10px] font-light text-parchment/35 sm:text-start">
            © {new Date().getFullYear()} {congregationInfo.name}
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-light text-parchment/35 hover:text-parchment/55"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
