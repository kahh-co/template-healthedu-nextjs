import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  UserCheck,
  ChevronRight,
  ArrowLeft,
  Share2,
} from "lucide-react";
import {
  artikelList,
  getArtikelBySlug,
  getArtikelTerkait,
} from "@/lib/data/artikel";
import CategoryBadge from "@/components/ui/CategoryBadge";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import ArtikelCard from "@/components/ui/ArtikelCard";
import ShareButtons from "./ShareButtons";
import { formatTanggalIndo } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return artikelList.map((artikel) => ({
    slug: artikel.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const artikel = getArtikelBySlug(params.slug);
  if (!artikel) return { title: "Artikel Tidak Ditemukan — SehatInfo" };

  return {
    title: `${artikel.judul} — SehatInfo`,
    description: artikel.excerpt,
  };
}

export default function DetailArtikelPage({ params }: PageProps) {
  const artikel = getArtikelBySlug(params.slug);

  if (!artikel) {
    notFound();
  }

  const artikelTerkait = getArtikelTerkait(artikel.slug, artikel.kategori, 3);

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-health-textMuted mb-6 flex-wrap">
          <Link href="/" className="hover:text-health-primary transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/artikel" className="hover:text-health-primary transition-colors">
            Artikel
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-health-textMain font-medium truncate max-w-[200px] sm:max-w-xs">
            {artikel.judul}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-health-primary hover:text-health-primaryDark mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Artikel</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <CategoryBadge slug={artikel.kategori} isLink={true} size="md" />
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-health-textMain leading-tight mb-5">
            {artikel.judul}
          </h1>

          {/* Meta Info & Author */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs sm:text-sm text-health-textMuted">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-health-primary font-bold shrink-0">
                <UserCheck className="w-5 h-5 text-health-primaryDark" />
              </div>
              <div>
                <p className="font-semibold text-health-textMain">
                  {artikel.penulis?.nama || "Tim Medis SehatInfo"}
                </p>
                <p className="text-xs text-slate-500">
                  {artikel.penulis?.gelar || "Peninjau Medis"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-health-primary" />
                {formatTanggalIndo(artikel.tanggalTerbit)}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-health-primary" />
                {artikel.waktuBaca} menit baca
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-10 shadow-soft border border-emerald-100">
          <Image
            src={artikel.gambar}
            alt={artikel.judul}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Excerpt Lead Paragraph */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border-l-4 border-health-primary mb-8 text-slate-700 font-medium text-base sm:text-lg leading-relaxed italic">
          &ldquo;{artikel.excerpt}&rdquo;
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none mb-10 space-y-5 text-health-textMain font-body text-base sm:text-lg leading-relaxed">
          {artikel.isi.split("\n\n").map((block, idx) => {
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="font-heading font-bold text-xl sm:text-2xl text-health-textMain pt-4 pb-1 border-b border-emerald-50"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("- ") || block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("3. ") || block.startsWith("4. ") || block.startsWith("5. ")) {
              const lines = block.split("\n");
              return (
                <ul key={idx} className="space-y-2.5 my-3 pl-4 list-disc list-inside bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                  {lines.map((l, lIdx) => (
                    <li key={lIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {l.replace(/^[-\d.]+\s*/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {block}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-4 pb-6 border-t border-slate-100">
          <span className="text-xs font-semibold text-health-textMuted mr-1">
            Topik Terkait:
          </span>
          {artikel.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 text-xs font-medium rounded-full transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Buttons Component */}
        <div className="py-6 border-y border-slate-100 my-6">
          <ShareButtons title={artikel.judul} slug={artikel.slug} />
        </div>

        {/* Medical Disclaimer Box */}
        <div className="my-8">
          <DisclaimerBox />
        </div>

        {/* Related Articles Section */}
        {artikelTerkait.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-health-textMain mb-6">
              Artikel Terkait yang Mungkin Anda Sukai
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artikelTerkait.map((item) => (
                <ArtikelCard key={item.id} artikel={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
