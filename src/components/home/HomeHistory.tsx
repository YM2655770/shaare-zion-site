import {
  congregationInfo,
  historyParagraphs,
  historyStats,
} from "@/lib/shaare-zion";
import Image from "next/image";

function StatBlock({
  icon: Icon,
  value,
  label,
  className,
}: {
  icon: (typeof historyStats)[number]["icon"];
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Icon
        className="mx-auto h-9 w-9 text-gold md:h-7 md:w-7 md:mx-0"
        strokeWidth={1.25}
        aria-hidden
      />
      <p className="font-serif mt-2 text-xl font-light text-brown-dark min-[400px]:text-2xl md:mt-3 md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-light leading-snug tracking-wide text-brown-muted min-[400px]:text-[11px] md:text-start">
        {label}
      </p>
    </div>
  );
}

export default function HomeHistory() {
  return (
    <section aria-labelledby="history-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={congregationInfo.historyImage}
              alt="Exterior of Shaare Zion synagogue"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            className="absolute -end-3 -bottom-3 bg-brown px-4 py-3 text-[10px] font-light tracking-[0.2em] text-parchment uppercase"
            aria-hidden
          >
            Brooklyn, NY
          </div>
        </div>

        <div>
          <p className="text-[10px] font-light tracking-[0.3em] text-gold uppercase">
            Our History
          </p>
          <h2
            id="history-heading"
            className="font-serif mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-light text-brown-dark"
          >
            A legacy of faith
            <br />
            &amp; community
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" aria-hidden />

          {historyParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-8 text-sm leading-[1.9] font-light text-muted-foreground first:mt-8 [&:not(:first-child)]:mt-4"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-12 border-t border-line pt-10">
            <div className="grid grid-cols-3 place-items-center gap-x-4 gap-y-6 md:flex md:flex-wrap md:items-start md:justify-start md:gap-10 md:place-items-start">
              {historyStats.map((stat) => (
                <StatBlock
                  key={stat.label}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  className="flex w-full flex-col items-center text-center md:w-auto md:items-start md:text-start"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
