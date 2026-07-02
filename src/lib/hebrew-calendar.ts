export type CalendarEventKind = "parashat" | "candles" | "havdalah" | "holiday" | "other";

export type CalendarEvent = {
  label: string;
  detail: string;
  kind: CalendarEventKind;
};

export type HebrewCalendarData = {
  gregorianDate: string;
  hebrewDate: string;
  events: CalendarEvent[];
};

type HebcalConverter = {
  hebrew: string;
  hy: number;
  hm: string;
  hd: number;
};

type HebcalItem = {
  title: string;
  date: string;
  category: string;
  memo?: string;
};

type HebcalShabbat = {
  title: string;
  items: HebcalItem[];
};

const BROOKLYN_LAT = 40.598;
const BROOKLYN_LNG = -73.974;
const TZ = "America/New_York";

const WEEKDAY_ONLY = /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday),/i;

function formatGregorian(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  });
}

function formatHebrewDate(data: HebcalConverter): string {
  return `${data.hd} ${data.hm} ${data.hy}`;
}

function formatItemDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: TZ,
  });
}

function formatItemTime(isoDate: string): string {
  const d = new Date(isoDate);
  const date = d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone: TZ,
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: TZ,
  });
  return `${date}, ${time.toLowerCase()}`;
}

function isNoiseItem(item: HebcalItem): boolean {
  const title = item.title.trim();
  if (!title) return true;
  if (title.includes("Hebcal")) return true;
  if (/\d+°/.test(title)) return true;
  if (WEEKDAY_ONLY.test(title)) return true;
  return false;
}

function mapShabbatItems(items: HebcalItem[]): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const seen = new Set<string>();

  for (const item of items) {
    if (isNoiseItem(item)) continue;

    let event: CalendarEvent | null = null;

    if (item.category === "parashat") {
      event = { label: item.title, detail: formatItemDate(item.date), kind: "parashat" };
    } else if (item.category === "candles") {
      event = { label: "Candle Lighting", detail: formatItemTime(item.date), kind: "candles" };
    } else if (item.category === "havdalah") {
      event = {
        label: "Havdalah",
        detail: `Motzei Shabbat, ${formatItemTime(item.date)}`,
        kind: "havdalah",
      };
    } else if (item.category === "holiday" || item.category === "fast") {
      event = { label: item.title, detail: formatItemDate(item.date), kind: "holiday" };
    }

    if (event && !seen.has(event.label)) {
      seen.add(event.label);
      events.push(event);
    }
  }

  return events;
}

export async function getHebrewCalendarData(): Promise<HebrewCalendarData> {
  const now = new Date();
  const dateParam = now.toISOString().split("T")[0];

  try {
    const [converterRes, shabbatRes] = await Promise.all([
      fetch(`https://www.hebcal.com/converter?cfg=json&date=${dateParam}&g2h=1`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://www.hebcal.com/shabbat?cfg=json&latitude=${BROOKLYN_LAT}&longitude=${BROOKLYN_LNG}&tzid=${TZ}&M=on`,
        { next: { revalidate: 3600 } },
      ),
    ]);

    const converter = (await converterRes.json()) as HebcalConverter;
    const shabbat = (await shabbatRes.json()) as HebcalShabbat;

    const events = mapShabbatItems(shabbat.items ?? []);

    // Add upcoming fast/holiday from shabbat items if present
    for (const item of shabbat.items ?? []) {
      if (item.category === "fast" && !isNoiseItem(item)) {
        const exists = events.some((e) => e.label === item.title);
        if (!exists) {
          events.push({ label: item.title, detail: formatItemDate(item.date), kind: "holiday" });
        }
      }
    }

    return {
      gregorianDate: formatGregorian(now),
      hebrewDate: formatHebrewDate(converter),
      events: events.slice(0, 4),
    };
  } catch {
    return {
      gregorianDate: formatGregorian(now),
      hebrewDate: "—",
      events: [{ label: "Shabbat Schedule", detail: "View the full calendar for times", kind: "other" }],
    };
  }
}
