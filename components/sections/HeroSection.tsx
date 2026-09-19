import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-health-bg via-emerald-50/40 to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Soft background decor glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-teal-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-health-primaryDark text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-health-primary" />
              <span>Pusat Literasi & Edukasi Kesehatan Tepercaya</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-health-textMain tracking-tight leading-[1.18]">
              Wujudkan Hidup Lebih Sehat dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-health-primary to-teal-700">
                Informasi Medis Akurat
              </span>{" "}
              & Mudah Dipahami
            </h1>

            {/* Subheading / Tagline */}
            <p className="font-body text-base sm:text-lg text-health-textMuted max-w-xl leading-relaxed">
              Temukan ratusan tips nutrisi, panduan kebugaran jasmani, kesehatan mental, serta pertolongan pertama yang dirangkum dari sumber ilmiah terverifikasi.
            </p>

            {/* Key benefits list */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-health-primary" />
                Bahasa Ramah Awam
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-health-primary" />
                Ditinjau Praktisi Medis
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-health-primary" />
                100% Akses Terbuka
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/artikel"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-health-primary hover:bg-health-primaryDark text-white font-semibold text-sm sm:text-base shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4" />
                <span>Baca Artikel</span>
              </Link>
              <Link
                href="/#kategori"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-health-textMain border border-emerald-200 font-semibold text-sm sm:text-base shadow-xs hover:border-emerald-300 transition-all duration-200"
              >
                <span>Lihat Kategori</span>
                <ArrowRight className="w-4 h-4 text-health-primary" />
              </Link>
            </div>
          </div>

          {/* Right Image / Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rounded image frame with soft shadow */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Tenaga Medis Edukasi Kesehatan"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-card border border-emerald-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-health-primary font-bold">
                  98%
                </div>
                <div>
                  <p className="text-xs text-health-textMuted font-medium">Kepuasan Pembaca</p>
                  <p className="text-sm font-bold text-health-textMain font-heading">Artikel Teruji & Jelas</p>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-emerald-100 items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <p className="text-xs font-semibold text-health-textMain">Update Rutin Setiap Pekan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
