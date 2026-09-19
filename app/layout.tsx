import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BannerDarurat from "@/components/sections/BannerDarurat";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SehatInfo — Portal Edukasi & Informasi Kesehatan Publik",
  description:
    "Portal terpercaya edukasi kesehatan keluarga: artikel medis awam, tips nutrisi seimbang, kebugaran jasmani, kesehatan mental, dan gaya hidup sehat.",
  keywords: [
    "kesehatan",
    "edukasi kesehatan",
    "tips sehat",
    "nutrisi gizi",
    "kebugaran",
    "kesehatan mental",
    "pencegahan penyakit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${nunito.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-health-textMain antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <BannerDarurat />
        <Footer />
      </body>
    </html>
  );
}
