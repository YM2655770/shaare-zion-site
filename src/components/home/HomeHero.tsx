import { actionCards, congregationInfo } from "@/lib/shaare-zion";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "./HomeNav";

export default function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="relative">
      <div className="relative h-[min(88vh,780px)] w-full overflow-hidden">
        <Image
          src={congregationInfo.heroInteriorImage}
          alt="Interior of Shaare Zion synagogue"
          fill
          priority
          className="object-cover object-center brightness-[0.82]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brown-dark/50 via-brown-dark/30 to-brown-dark/70" />

        <HomeNav />

        <div className="relative flex h-full flex-col items-center justify-center px-6 pt-24 pb-36 text-center sm:px-10">
          <h1
            id="home-hero-title"
            className="font-serif max-w-4xl text-[clamp(2.25rem,5.5vw,3.75rem)] leading-snug font-light text-white"
          >
            Welcome to Shaare Zion,
            <br />
            your community home
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed font-light text-white/85 sm:text-lg">
            {congregationInfo.tagline}
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-24 px-6 sm:-mt-28 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {actionCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href} className="group">
                <article className="flex h-full flex-col bg-white px-6 py-7 shadow-[0_8px_30px_rgba(44,31,20,0.12)] transition-shadow duration-300 group-hover:shadow-[0_12px_40px_rgba(44,31,20,0.16)]">
                  <Icon className="h-7 w-7 text-brown" strokeWidth={1.25} aria-hidden />
                  <h2 className="font-serif mt-5 text-base leading-snug font-medium text-brown-dark">
                    {card.title}
                  </h2>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-block w-fit bg-gold px-4 py-2.5 text-[10px] font-light tracking-[0.2em] text-brown-dark uppercase transition-opacity group-hover:opacity-90">
                    Discover &gt;
                  </span>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
