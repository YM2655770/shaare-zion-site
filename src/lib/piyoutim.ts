export type Holiday = {
  slug: string;
  label: string;
};

export type Maqam = {
  slug: string;
  label: string;
};

export type Piyut = {
  slug: string;
  title: string;
  makam: string;
  makamSlug: string;
  occasion: string;
  author?: string;
  lyrics: string[];
};

export const holidays: Holiday[] = [
  { slug: "rosh-hashana", label: "ראש השנה" },
  { slug: "yom-kippur", label: "יום כיפור" },
  { slug: "sukkot", label: "סוכות" },
  { slug: "pesach", label: "פסח" },
  { slug: "simchot", label: "פיוטים לשמחות" },
];

export const maqams: Maqam[] = [
  { slug: "bayati", label: "ביאתי" },
  { slug: "rast", label: "ראסט" },
  { slug: "hijaz", label: "חיג'אז" },
  { slug: "saba", label: "סבא" },
  { slug: "sigah", label: "סיגה" },
];

export const samplePiyut: Piyut = {
  slug: "eli-hazki",
  title: "אלי חזקי",
  makam: "ראסט",
  makamSlug: "rast",
  occasion: "שבת",
  author: "ר' ישראל נג'ארה",
  lyrics: [
    "אלי חזקי ואור עיני",
    "אלי חיי ורום נפשי",
    "אלי מחסי ומנוס לי",
    "אלי נגינתי ושירי",
    "אלי זמרתי ושבחי",
    "אלי תפילתי ותחינתי",
  ],
};

export const currentHoliday = holidays.find((h) => h.slug === "pesach")!;
export const currentMaqam = maqams.find((m) => m.slug === "rast")!;

export function getHolidayBySlug(slug: string) {
  return holidays.find((h) => h.slug === slug);
}

export function getMaqamBySlug(slug: string) {
  return maqams.find((m) => m.slug === slug);
}
