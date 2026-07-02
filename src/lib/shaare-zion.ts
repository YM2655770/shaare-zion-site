import type { LucideIcon } from "lucide-react";
import { BookOpen, Calendar, HeartHandshake, Phone } from "lucide-react";

export const heroNavLinks = [
  { href: "/administrations", label: "Administration" },
  { href: "/communaute", label: "Community" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/prochains", label: "Upcoming Events" },
  { href: "/communaute", label: "Community" },
  { href: "/soutenir", label: "Donate" },
  { href: "/rabbanim", label: "Rabbis" },
  { href: "/media", label: "Media" },
] as const;

export const secondaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/prochains", label: "Upcoming" },
  { href: "/evenements", label: "Events" },
  { href: "/communaute", label: "Community" },
  { href: "/shaare-zion", label: "Shaare Zion" },
  { href: "/soutenir", label: "Support" },
  { href: "/rabbanim", label: "Rabbis" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/prochains", label: "Events" },
  { href: "/communaute", label: "Community" },
  { href: "/rabbanim", label: "Rabbis" },
  { href: "/media", label: "Media" },
  { href: "/soutenir", label: "Donate" },
] as const;

export const footerExploreLinks = [
  { href: "/", label: "Home" },
  { href: "/prochains", label: "Upcoming Events" },
  { href: "/evenements", label: "Calendar" },
  { href: "/communaute", label: "Community Life" },
  { href: "/media", label: "Media & Gallery" },
] as const;

export const footerCommunityLinks = [
  { href: "/rabbanim", label: "Rabbis & Education" },
  { href: "/administrations", label: "Administration" },
  { href: "/soutenir", label: "Donate" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const footerLegalLinks = [
  { href: "/legal", label: "Legal Notice" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/accessibility", label: "Accessibility" },
] as const;

export type ActionCard = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const actionCards: ActionCard[] = [
  {
    href: "/prochains",
    title: "Upcoming Events & Services",
    description: "View the calendar of services, holidays, and community celebrations.",
    icon: Calendar,
  },
  {
    href: "/soutenir",
    title: "Donate / Support",
    description: "Support the life of our kehilla and our educational programs.",
    icon: HeartHandshake,
  },
  {
    href: "/rabbanim",
    title: "Rabbi Archives & Education",
    description: "Access teachings, archives, and resources from our community.",
    icon: BookOpen,
  },
  {
    href: "/contact",
    title: "Contact Us",
    description: "Reach our team with any questions or requests for information.",
    icon: Phone,
  },
];

export type CommunityArticle = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date?: string;
  featured?: boolean;
};

export const communityArticles: CommunityArticle[] = [
  {
    slug: "shabbat-speakers",
    title: "Exceptional Shabbat Speaker Series",
    excerpt:
      "We welcome distinguished speakers at the Joe and Celia Esses Dome. All are welcome.",
    image: "/images/shaare-zion-interior.png",
    date: "June 15, 2024",
    featured: true,
  },
  {
    slug: "legacy-video",
    title: "Legacy Tribute Video — 80th Anniversary",
    excerpt:
      "A new video honoring our founders and rabbis on the congregation's 80th anniversary.",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80",
    date: "June 8, 2024",
  },
  {
    slug: "youth-program",
    title: "New Youth Program",
    excerpt:
      "Activities, education, and engagement for the whole family — explore this year's program.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    date: "June 1, 2024",
  },
];

export const historyStats = [
  { value: "1945", label: "Year founded" },
  { value: "2000+", label: "Active members" },
  { value: "15+", label: "Community programs" },
] as const;

export const historyParagraphs = [
  "Founded in 1945, Congregation Shaare Zion has become one of the most vibrant Sephardic communities in Brooklyn. Our synagogue, with its distinctive architecture and iconic dome, has been a gathering place for prayer, study, and community engagement for more than seven decades.",
  "We welcome every generation with educational programs, meaningful services, and a rich communal life — faithful to our traditions and open to the future.",
] as const;

export const congregationInfo = {
  name: "Congregation Shaare Zion",
  hebrewName: 'ק"ק שערי ציון',
  tagline: "A legacy of faith, history, and tradition at the heart of Brooklyn.",
  shortDescription:
    "A Sephardic community united by Torah, prayer, and commitment since 1945.",
  address: "2030 Ocean Parkway, Brooklyn, NY 11223",
  phone: "(718) 998-6800",
  email: "info@cszny.org",
  connectEmail: "ShaareZionConnect@gmail.com",
  logo: "/images/shaare-zion-logo.png",
  heroImage: "/images/shaare-zion-hero.png",
  heroInteriorImage: "/images/shaare-zion-interior.png",
  historyImage: "/images/shaare-zion-exterior.png",
};

export const footerColumns = [
  {
    title: "Explore",
    links: footerExploreLinks,
  },
  {
    title: "Community",
    links: footerCommunityLinks,
  },
] as const;

export const socialLinks = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
] as const;
