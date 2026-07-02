import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Congregation Shaare Zion | Brooklyn, NY",
  description:
    "Shaare Zion — a historic community institution. Services, events, education, and communal life in Brooklyn since 1945.",
  openGraph: {
    title: "Congregation Shaare Zion",
    description: "Heritage. Community. Permanence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${display.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-sans text-foreground">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
