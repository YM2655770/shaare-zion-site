import { rabbiMessage } from "@/lib/shaare-zion";
import Image from "next/image";

export default function RabbiMessage() {
  return (
    <section
      aria-labelledby="rabbi-heading"
      className="bg-muted/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid md:grid-cols-[280px_1fr]">
            <div className="relative aspect-square md:aspect-auto md:min-h-[320px]">
              <Image
                src={rabbiMessage.image}
                alt={`Portrait — ${rabbiMessage.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>

            <blockquote className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                {rabbiMessage.title}
              </p>
              <p
                id="rabbi-heading"
                className="font-serif mt-6 text-xl leading-relaxed text-navy sm:text-2xl sm:leading-relaxed"
              >
                &ldquo;{rabbiMessage.quote}&rdquo;
              </p>
              <footer className="mt-6 font-sans text-sm font-medium text-muted-foreground">
                — {rabbiMessage.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
