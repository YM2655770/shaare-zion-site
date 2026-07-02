import { adminNavLinks } from "@/lib/shaare-zion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[55vh] min-h-[400px] w-full overflow-hidden sm:h-[58vh] sm:min-h-[440px] lg:h-[62vh] lg:min-h-[480px]"
    >
      {/* Image de fond — couvre tout le rectangle */}
      <div className="absolute inset-0 size-full">
        <Image
          src="/images/shaare-zion-hero.png"
          alt="Façade de la synagogue Shaare Zion à Brooklyn"
          fill
          priority
          className="size-full object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="absolute end-6 top-5 z-10 sm:end-10 sm:top-6 lg:end-12">
        <nav
          aria-label="Liens administratifs"
          className="flex flex-wrap items-center justify-end gap-3 sm:gap-5"
        >
          {adminNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-semibold tracking-wide text-white/90 transition-colors hover:text-gold sm:text-sm",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="font-serif text-[26px] font-light leading-[1.25] tracking-tight text-white sm:text-[32px] lg:text-[38px]"
          >
            Bienvenue à Shaare Zion, votre foyer communautaire
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/85 sm:text-base">
            Une communauté sépharade unie par la Torah, la prière et l&apos;engagement
            depuis 1945 — au cœur de Brooklyn.
          </p>
        </div>
      </div>
    </section>
  );
}
