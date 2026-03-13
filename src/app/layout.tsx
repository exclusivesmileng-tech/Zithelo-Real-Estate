import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zithelo Real Estate | Modern Living in Lagos",
  description: "Zithelo Real Estate develops thoughtfully designed properties in prime Lagos locations, focused on long-term value, quality living, and architectural integrity.",
  keywords: ["real estate", "Lagos", "property", "development", "Ikeja", "Yaba", "modern living"],
  openGraph: {
    title: "Zithelo Real Estate | Modern Living in Lagos",
    description: "Thoughtfully designed properties in prime Lagos locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
