import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Apple,
  Activity,
  Brain,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import {
  kategoriList,
  getKategoriBySlug,
} from "@/lib/data/kategori";
import { getArtikelByKategori } from "@/lib/data/artikel";
import ArtikelCard from "@/components/ui/ArtikelCard";

interface PageProps {
  params: {
    slug: string;
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Apple: <Apple className="w-8 h-8 text-emerald-600" />,
  Activity: <Activity className="w-8 h-8 text-sky-600" />,
  Brain: <Brain className="w-8 h-8 text-purple-600" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-amber-600" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-rose-600" />,
  Sparkles: <Sparkles className="w-8 h-8 text-teal-600" />,
};

export function generateStaticParams() {
  return kategoriList.map((kat) => ({
    slug: kat.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const kategori = getKategoriBySlug(params.slug);
  if (!kategori) return { title: "Kategori Tidak Ditemukan — SehatInfo" };

  return {
    title: `Topik ${kategori.nama} — SehatInfo`,
    description: kategori.deskripsi,
  };
}

export default function KategoriDetailPage({ params }: PageProps) {
  const kategori = getKategoriBySlug(params.slug);

  if (!kategori) {
    notFound();
  }

  const artikelInKategori = getArtikelByKategori(kategori.slug);

  return (
    <div className="py-10 sm:py-16 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-health-textMuted mb-6 flex-wrap">
          <Link href="/" className="hover:text-health-primary transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/#kategori" className="hover:text-health-primary transition-colors">
            Kategori
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-health-textMain font-medium">{kategori.nama}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/#kategori"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-health-primary hover:text-health-primaryDark mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Lihat Semua Kategori</span>
        </Link>

        {/* Category Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-soft mb-12 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-start gap-4 sm:gap-6">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${kategori.warnaBg}`}
            >
              {iconMap[kategori.ikon] || (
                <Sparkles className="w-8 h-8 text-emerald-600" />
              )}
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-health-primaryDark mb-2">
                Topik Kesehatan Terpilih
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-health-textMain">
                {kategori.nama}
              </h1>
              <p className="text-sm sm:text-base text-health-textMuted mt-2 max-w-2xl leading-relaxed">
                {kategori.deskripsi}
              </p>
            </div>
          </div>

          <div className="shrink-0 bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-2xl text-center self-stretch md:self-auto">
            <span className="block text-2xl font-extrabold font-heading text-health-primary">
              {artikelInKategori.length}
            </span>
            <span className="text-xs text-health-textMuted font-medium">
              Artikel Tersedia
            </span>
          </div>
        </div>

        {/* Articles List */}
        {artikelInKategori.length > 0 ? (
          <div>
            <h2 className="font-heading font-bold text-xl text-health-textMain mb-6">
              Daftar Artikel Topik {kategori.nama}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {artikelInKategori.map((artikel) => (
                <ArtikelCard key={artikel.id} artikel={artikel} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-health-textMuted text-sm">
              Belum ada artikel untuk kategori ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
