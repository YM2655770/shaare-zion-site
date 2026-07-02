import { actionCards, congregationInfo } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "./HomeNav";

export default function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={congregationInfo.heroInteriorImage}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[0.82]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brown-dark/50 via-brown-dark/30 to-brown-dark/70" />
      </div>

      <HomeNav />

      <div className="relative z-10">
        <div className="flex flex-col items-center px-6 pt-28 pb-6 text-center sm:min-h-[min(88vh,780px)] sm:justify-center sm:px-10 sm:pt-24 sm:pb-36">
          <h1
            id="home-hero-title"
            className="font-serif max-w-4xl text-[clamp(2.25rem,5.5vw,3.75rem)] leading-snug font-light text-white"
          >
            Welcome to Shaare Zion,
            <br />
            your community home
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed font-light text-white/85 sm:mt-6 sm:text-lg">
            {congregationInfo.tagline}
          </p>
        </div>

        <div className="relative -mt-8 px-8 pb-20 sm:-mt-28 sm:px-10 sm:pb-24 lg:px-12">
          <div className="mx-auto mt-12 grid w-full max-w-xs grid-cols-2 gap-3 sm:mt-0 sm:max-w-6xl sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {actionCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href} className="group">
                  <article className="flex h-full flex-col bg-white px-3 py-3.5 shadow-[0_6px_24px_rgba(44,31,20,0.1)] transition-shadow duration-300 group-hover:shadow-[0_10px_32px_rgba(44,31,20,0.14)] sm:px-6 sm:py-7 sm:shadow-[0_8px_30px_rgba(44,31,20,0.12)] sm:group-hover:shadow-[0_12px_40px_rgba(44,31,20,0.16)]">
                    <Icon
                      className="h-5 w-5 text-brown sm:h-7 sm:w-7"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <h2 className="font-serif mt-2 text-[12px] leading-tight font-medium text-brown-dark sm:mt-5 sm:text-base sm:leading-snug">
                      {card.title}
                    </h2>
                    <p className="mt-1.5 line-clamp-3 flex-1 text-[10px] leading-snug text-muted-foreground sm:mt-3 sm:line-clamp-none sm:text-xs sm:leading-relaxed">
                      {card.description}
                    </p>
                    <span className="mt-2 inline-block w-fit bg-gold px-2.5 py-1.5 text-[8px] font-light tracking-[0.16em] text-brown-dark uppercase transition-opacity group-hover:opacity-90 sm:mt-5 sm:px-4 sm:py-2.5 sm:text-[10px] sm:tracking-[0.2em]">
                      Discover &gt;
                    </span>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
