"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { artikelList } from "@/lib/data/artikel";
import { kategoriList } from "@/lib/data/kategori";
import ArtikelCard from "@/components/ui/ArtikelCard";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export default function ArtikelListContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("kategori") || "semua";
  const initialQuery = searchParams.get("q") || "";

  const [selectedKategori, setSelectedKategori] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const cat = searchParams.get("kategori");
    if (cat) {
      setSelectedKategori(cat);
      setCurrentPage(1);
    }
    const q = searchParams.get("q");
    if (q !== null) {
      setSearchQuery(q);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Filtering logic
  const filteredArtikel = useMemo(() => {
    return artikelList.filter((item) => {
      const matchKategori =
        selectedKategori === "semua" || item.kategori === selectedKategori;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.judul.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchKategori && matchSearch;
    });
  }, [selectedKategori, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArtikel.length / ITEMS_PER_PAGE) || 1;
  const paginatedArtikel = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArtikel.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArtikel, currentPage]);

  const handleCategoryChange = (slug: string) => {
    setSelectedKategori(slug);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setSelectedKategori("semua");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="py-10 sm:py-16 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-health-textMain">
            Pustaka Artikel Kesehatan
          </h1>
          <p className="text-sm sm:text-base text-health-textMuted mt-2">
            Jelajahi panduan medis komprehensif, pola hidup sehat, dan rekomendasi para praktisi
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-emerald-100/80 shadow-soft mb-8 space-y-4">
          {/* Search Input Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Cari berdasarkan judul, gejala, atau kata kunci (contoh: air putih, diabetes, stres)..."
              className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-health-primary focus:ring-2 focus:ring-emerald-100 transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Category Chips / Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
            <button
              onClick={() => handleCategoryChange("semua")}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0",
                selectedKategori === "semua"
                  ? "bg-health-primary text-white shadow-soft"
                  : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-health-primaryDark"
              )}
            >
              Semua Kategori
            </button>

            {kategoriList.map((kat) => {
              const isSelected = selectedKategori === kat.slug;
              return (
                <button
                  key={kat.slug}
                  onClick={() => handleCategoryChange(kat.slug)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0",
                    isSelected
                      ? "bg-health-primary text-white shadow-soft"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-health-primaryDark"
                  )}
                >
                  {kat.nama}
                </button>
              );
            })}
          </div>

          {/* Result Count & Reset Button */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs sm:text-sm text-health-textMuted">
            <div className="flex items-center gap-1.5 font-medium">
              <SlidersHorizontal className="w-4 h-4 text-health-primary" />
              <span>
                Menampilkan <strong className="text-health-textMain">{filteredArtikel.length}</strong> artikel ditemukan
              </span>
            </div>

            {(selectedKategori !== "semua" || searchQuery) && (
              <button
                onClick={handleResetFilter}
                className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filter</span>
              </button>
            )}
          </div>
        </div>

        {/* Article Grid */}
        {paginatedArtikel.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {paginatedArtikel.map((artikel) => (
                <ArtikelCard key={artikel.id} artikel={artikel} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                <div className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-slate-700">
                  Halaman {currentPage} dari {totalPages}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-md mx-auto my-12">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-health-primary flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-health-textMain mb-1">
              Tidak Ada Artikel Ditemukan
            </h3>
            <p className="text-sm text-health-textMuted mb-5">
              Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={handleResetFilter}
              className="px-4 py-2 rounded-xl bg-health-primary text-white text-sm font-semibold shadow-xs hover:bg-health-primaryDark transition-colors"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
