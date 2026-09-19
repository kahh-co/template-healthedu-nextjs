import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { getArtikelUnggulan } from "@/lib/data/artikel";
import ArtikelCard from "@/components/ui/ArtikelCard";

export default function ArtikelUnggulan() {
  const unggulanList = getArtikelUnggulan().slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-health-primaryDark text-xs font-semibold mb-2">
              <Flame className="w-3.5 h-3.5 text-health-primary" />
              <span>Rekomendasi Redaksi</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-health-textMain">
              Artikel Kesehatan Unggulan
            </h2>
            <p className="text-sm sm:text-base text-health-textMuted mt-1">
              Topik kesehatan yang paling banyak dibaca dan disarankan untuk Anda
            </p>
          </div>

          <Link
            href="/artikel"
            className="inline-flex items-center gap-1 text-sm font-semibold text-health-primary hover:text-health-primaryDark transition-colors group"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {unggulanList.map((artikel, idx) => (
            <ArtikelCard key={artikel.id} artikel={artikel} priority={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
