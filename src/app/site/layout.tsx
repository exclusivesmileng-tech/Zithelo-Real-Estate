import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zithelo Real Estate | Smart Homes in Lagos",
  description: "Zithelo Real Estate develops intelligent smart homes in prime Lagos locations. Experience the future of living with integrated home automation, security, and modern luxury.",
  keywords: ["smart homes", "real estate", "Lagos", "property", "development", "Ikeja", "Yaba", "home automation", "intelligent living"],
  openGraph: {
    title: "Zithelo Real Estate | Smart Homes in Lagos",
    description: "Smart homes in prime Lagos locations. Intelligent living for the modern homeowner.",
    type: "website",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
