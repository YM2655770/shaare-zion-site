import HomeCalendar from "@/components/home/HomeCalendar";
import HomeHero from "@/components/home/HomeHero";
import HomeHistory from "@/components/home/HomeHistory";
import HomeNews from "@/components/home/HomeNews";
import { getHebrewCalendarData } from "@/lib/hebrew-calendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Congregation Shaare Zion",
  description:
    "Welcome to Shaare Zion — your community home. A legacy of faith, history, and tradition at the heart of Brooklyn.",
};

export default async function HomePage() {
  const calendarData = await getHebrewCalendarData();

  return (
    <>
      <HomeHero />
      <HomeHistory />
      <HomeCalendar data={calendarData} />
      <HomeNews />
    </>
  );
}
