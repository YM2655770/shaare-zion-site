import Link from "next/link";
import LyricsView from "@/components/LyricsView";
import { samplePiyut } from "@/lib/piyoutim";

export const metadata = {
  title: "שירת הבקשות | שיר חדש",
  description: "אוסף בקשות ותפילות לפי המסורת.",
};

const bakachotList = [
  { title: "אלי חזקי", slug: "eli-hazki", makam: "ראסט" },
  { title: "שמע קולי", slug: "shema-koli", makam: "ביאתי" },
  { title: "למנצח", slug: "lamenatzeah", makam: "חיג'אז" },
];

export default function BakashotPage() {
  return (
    <section className="px-4 pb-20 pt-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs text-gold">שירת הבקשות</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          בקשות ותפילות
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted">
          שירי בקשה ותחינות לפי המסורת הספרדית והמזרחית.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bakachotList.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.slug === "eli-hazki" ? "/piyut/example" : "#"}
                className="card-hover block rounded-xl border border-border bg-surface/50 px-5 py-4"
              >
                <p className="text-lg text-gold">{item.title}</p>
                <p className="mt-1 text-xs text-muted">מקאם {item.makam}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <LyricsView piyut={samplePiyut} />
        </div>
      </div>
    </section>
  );
}
