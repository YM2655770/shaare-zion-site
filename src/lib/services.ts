import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BookOpen,
  Building2,
  CalendarClock,
  Car,
  FileCheck,
  GraduationCap,
  HandCoins,
  Megaphone,
  Receipt,
  Trash2,
} from "lucide-react";

export type ServiceIcon =
  | "receipt"
  | "alert-triangle"
  | "graduation-cap"
  | "building-2"
  | "trash-2"
  | "book-open"
  | "car";

export type ServicePriority = "primary" | "secondary";

export type ServiceItem = {
  href: string;
  label: string;
  description: string;
  icon: ServiceIcon;
  priority: ServicePriority;
  gridClass: string;
};

export type QuickLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type CityEvent = {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
};

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  receipt: Receipt,
  "alert-triangle": AlertTriangle,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  "trash-2": Trash2,
  "book-open": BookOpen,
  car: Car,
};

export const quickAccessLinks: QuickLink[] = [
  { href: "/services/arnona", label: "תשלום ארנונה", icon: Receipt },
  { href: "/services/106", label: "מוקד 106", icon: AlertTriangle },
  { href: "/services/inscription-scolaire", label: "רישום לבית ספר", icon: GraduationCap },
  { href: "/services", label: "שירותים מקוונים", icon: FileCheck },
  { href: "/rendez-vous", label: "זימון תורים", icon: CalendarClock },
  { href: "/subventions", label: "תמיכות", icon: HandCoins },
  { href: "/appels-offres", label: "מכרזים", icon: Megaphone },
];

export const serviceGridItems: ServiceItem[] = [
  {
    href: "/services/arnona",
    label: "תשלום ארנונה",
    description: "תשלום מקוון, חשבוניות ויתרות.",
    icon: "receipt",
    priority: "primary",
    gridClass: "sm:col-span-2 sm:row-span-2",
  },
  {
    href: "/services/106",
    label: "דיווח 106",
    description: "דיווח על תאורה, ניקיון ותשתיות.",
    icon: "alert-triangle",
    priority: "primary",
    gridClass: "sm:col-span-2 sm:row-span-2",
  },
  {
    href: "/services/inscription-scolaire",
    label: "רישום לבית ספר",
    description: "גנים, יסודי וחטיבות.",
    icon: "graduation-cap",
    priority: "secondary",
    gridClass: "sm:col-span-2 lg:col-span-1",
  },
  {
    href: "/services/permis-construire",
    label: "היתר בנייה",
    description: "הגשה ומעקב בקשות.",
    icon: "building-2",
    priority: "secondary",
    gridClass: "sm:col-span-1",
  },
  {
    href: "/services/ordures",
    label: "פינוי אשפה",
    description: "לוחות איסוף ומיחזור.",
    icon: "trash-2",
    priority: "secondary",
    gridClass: "sm:col-span-1",
  },
  {
    href: "/services/bibliotheques",
    label: "ספריות",
    description: "השאלת ספרים ואירועים.",
    icon: "book-open",
    priority: "secondary",
    gridClass: "sm:col-span-1",
  },
  {
    href: "/services/parking",
    label: "חניה עירונית",
    description: "תווים, תשלום וקנסות.",
    icon: "car",
    priority: "secondary",
    gridClass: "sm:col-span-1",
  },
];

export const navLinks = [
  { href: "/mairie", label: "העירייה" },
  { href: "/services", label: "שירותים מקוונים" },
  { href: "/education", label: "חינוך" },
  { href: "/culture-sport", label: "תרבות וספורט" },
  { href: "/actualites", label: "חדשות" },
  { href: "/vivre-a-afula", label: "לחיות בעפולה" },
] as const;

export type NavLink = (typeof navLinks)[number];

export const cityEvents: CityEvent[] = [
  {
    slug: "concert-park",
    title: "ערב מוזיקה בפארק העירוני",
    date: "20 ביוני 2026 · 19:00",
    location: "פארק העמק",
    category: "תרבות",
  },
  {
    slug: "marche-producteurs",
    title: "שוקחקלאים בעמק יזרעאל",
    date: "22 ביוני 2026 · 09:00",
    location: "כיכר העיר",
    category: "קהילה",
  },
  {
    slug: "atelier-enfants",
    title: "סדנת יצירה לילדים",
    date: "25 ביוני 2026 · 16:30",
    location: "ספרייה העירונית",
    category: "משפחות",
  },
];
