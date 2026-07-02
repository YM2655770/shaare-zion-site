import LyricsView from "@/components/LyricsView";
import { samplePiyut } from "@/lib/piyoutim";

export const metadata = {
  title: `${samplePiyut.title} | Piyoutim Lyrics`,
  description: samplePiyut.lyrics.join(" "),
};

export default function PiyutExamplePage() {
  return (
    <section className="px-4 pb-20 pt-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <LyricsView piyut={samplePiyut} />
      </div>
    </section>
  );
}
