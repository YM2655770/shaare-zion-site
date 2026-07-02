export const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/bakashot", label: "שירת הבקשות" },
] as const;

export const holidayLinks = [
  { slug: "rosh-hashana", label: "ראש השנה" },
  { slug: "yom-kippur", label: "יום כיפור" },
  { slug: "sukkot", label: "סוכות" },
  { slug: "pesach", label: "פסח" },
  { slug: "simchot", label: "פיוטים לשמחות" },
] as const;

export const maqamLinks = [
  { slug: "bayati", label: "ביאתי" },
  { slug: "rast", label: "ראסט" },
  { slug: "hijaz", label: "חיג'אז" },
  { slug: "saba", label: "סבא" },
  { slug: "sigah", label: "סיגה" },
] as const;
