import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ArtikelUnggulan from "@/components/sections/ArtikelUnggulan";
import SectionKategori from "@/components/sections/SectionKategori";
import TipsHarian from "@/components/sections/TipsHarian";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Users, BookOpen, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Artikel Unggulan */}
      <ArtikelUnggulan />

      {/* 3. Section Kategori */}
      <SectionKategori />

      {/* 4. Tips Kesehatan Harian */}
      <TipsHarian />

      {/* 5. Trust & Community Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-emerald-50/50 border-t border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-600/30 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Komitmen Literasi Kesehatan Terbuka</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  Kesehatan Berkualitas Dimulai Dari Pengetahuan yang Tepat
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Semua materi edukasi disajikan secara cuma-cuma untuk mendorong masyarakat Indonesia yang lebih sadar gizi, aktif bergerak, dan tanggap terhadap kesehatan mental.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">Bebas Iklan Menyesatkan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">Referensi Terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">Bahasa Mudah Dipahami</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 items-stretch lg:items-end justify-center">
                <Link
                  href="/artikel"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-md transition-all text-center"
                >
                  <BookOpen className="w-4 h-4 text-health-primary" />
                  <span>Jelajahi Semua Artikel</span>
                </Link>
                <Link
                  href="/tentang"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700/50 hover:bg-emerald-700/80 text-white border border-emerald-500/50 text-sm font-medium transition-all text-center"
                >
                  <span>Tentang Tim Redaksi</span>
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
