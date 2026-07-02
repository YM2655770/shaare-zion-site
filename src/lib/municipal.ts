export type Language = "he" | "en" | "ru";

export const languages: { code: Language; label: string }[] = [
  { code: "he", label: "HE" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export const mainNavLinks = [
  { href: "/mairie", label: "העירייה" },
  { href: "/services", label: "שירותים מקוונים" },
  { href: "/education", label: "חינוך" },
  { href: "/culture-sport", label: "תרבות וספורט" },
  { href: "/actualites", label: "חדשות" },
  { href: "/vivre-a-afula", label: "לחיות בעפולה" },
] as const;

export const bentoServices = [
  {
    href: "/services/arnona",
    label: "תשלום ארנונה",
    description: "תשלום מקוון, חשבוניות ויתרות",
    icon: "receipt" as const,
    featured: true,
  },
  {
    href: "/services/inscription-scolaire",
    label: "רישום לבית ספר",
    description: "גנים, יסודי וחטיבות",
    icon: "graduation-cap" as const,
    featured: true,
  },
  {
    href: "/services/106",
    label: "דיווח 106",
    description: "מפגעים ותשתיות עירוניות",
    icon: "alert-triangle" as const,
    featured: false,
  },
  {
    href: "/services/permis-construire",
    label: "היתר בנייה",
    description: "הגשה ומעקב בקשות",
    icon: "building-2" as const,
    featured: false,
  },
  {
    href: "/services/ordures",
    label: "פינוי אשפה",
    description: "לוחות איסוף ומיחזור",
    icon: "trash-2" as const,
    featured: false,
  },
  {
    href: "/services/bibliotheques",
    label: "ספריות",
    description: "השאלת ספרים ואירועים",
    icon: "book-open" as const,
    featured: false,
  },
  {
    href: "/services/parking",
    label: "חניה עירונית",
    description: "תווים, תשלום וקנסות",
    icon: "car" as const,
    featured: false,
  },
] as const;

export const heroCtas = [
  {
    href: "/services/arnona",
    label: "תשלום ארנונה",
    icon: "receipt" as const,
  },
  {
    href: "/services/inscription-scolaire",
    label: "רישום לבית ספר",
    icon: "graduation-cap" as const,
  },
  {
    href: "/services/permis-construire",
    label: "היתר בנייה",
    icon: "building-2" as const,
  },
] as const;

export const dailyServices = [
  {
    href: "/services/106",
    label: "דיווח 106",
    icon: "alert-triangle" as const,
  },
  {
    href: "/services/ordures",
    label: "פינוי אשפה",
    icon: "trash-2" as const,
  },
  {
    href: "/services/bibliotheques",
    label: "ספריות",
    icon: "book-open" as const,
  },
  {
    href: "/services/parking",
    label: "חניה עירונית",
    icon: "car" as const,
  },
] as const;

export const footerQuickLinks = [
  { href: "/services", label: "שירותים מקוונים" },
  { href: "/services/arnona", label: "ארנונה" },
  { href: "/services/106", label: "106" },
  { href: "/education", label: "חינוך" },
  { href: "/services/permis-construire", label: "היתרי בנייה" },
] as const;

export const footerLegalLinks = [
  { href: "/accessibilite", label: "נגישות" },
  { href: "/confidentialite", label: "פרטיות" },
  { href: "/mentions-legales", label: "מידע משפטי" },
  { href: "/plan-du-site", label: "מפת אתר" },
] as const;

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
};

