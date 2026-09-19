import React from "react";
import Link from "next/link";
import {
  Apple,
  Activity,
  Brain,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import { kategoriList } from "@/lib/data/kategori";
import { getArtikelByKategori } from "@/lib/data/artikel";

// Map string icon name to Lucide component
const iconMap: Record<string, React.ReactNode> = {
  Apple: <Apple className="w-6 h-6 text-emerald-600" />,
  Activity: <Activity className="w-6 h-6 text-sky-600" />,
  Brain: <Brain className="w-6 h-6 text-purple-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-teal-600" />,
};

export default function SectionKategori() {
  return (
    <section id="kategori" className="py-14 sm:py-20 bg-health-bg/60 border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-health-primaryDark text-xs font-semibold mb-2">
            <LayoutGrid className="w-3.5 h-3.5 text-health-primary" />
            <span>Kategori Pilihan</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-health-textMain">
            Jelajahi Berdasarkan Topik Kesehatan
          </h2>
          <p className="text-sm sm:text-base text-health-textMuted mt-2">
            Pilih topik kesehatan yang relevan untuk kebutuhan Anda dan keluarga
          </p>
        </div>

        {/* 6 Category Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kategoriList.map((kat) => {
            const artikelCount = getArtikelByKategori(kat.slug).length;

            return (
              <Link
                key={kat.slug}
                href={`/kategori/${kat.slug}`}
                className="group p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${kat.warnaBg}`}
                    >
                      {iconMap[kat.ikon] || <Sparkles className="w-6 h-6 text-emerald-600" />}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
                      {artikelCount} Artikel
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-health-textMain group-hover:text-health-primaryDark transition-colors">
                    {kat.nama}
                  </h3>
                  <p className="text-xs sm:text-sm text-health-textMuted mt-1.5 line-clamp-2 leading-relaxed">
                    {kat.deskripsi}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-health-primary">
                  <span>Lihat Topik</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
