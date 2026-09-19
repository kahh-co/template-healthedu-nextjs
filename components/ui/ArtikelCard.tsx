"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Artikel } from "@/lib/data/artikel";
import CategoryBadge from "./CategoryBadge";
import { formatTanggalIndo } from "@/lib/utils";

interface ArtikelCardProps {
  artikel: Artikel;
  priority?: boolean;
}

export default function ArtikelCard({ artikel, priority = false }: ArtikelCardProps) {
  const [imgError, setImgError] = useState(false);

  // Fallback image using SVG data URL or clean placeholder
  const fallbackImg =
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80";

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-emerald-100/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      {/* Thumbnail Container */}
      <Link href={`/artikel/${artikel.slug}`} className="relative aspect-[16/10] overflow-hidden bg-emerald-50/50 block">
        <Image
          src={imgError ? fallbackImg : artikel.gambar}
          alt={artikel.judul}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 z-10">
          <CategoryBadge slug={artikel.kategori} isLink={false} />
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-health-textMuted mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-health-primary" />
              {formatTanggalIndo(artikel.tanggalTerbit)}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-health-primary" />
              {artikel.waktuBaca} mnt baca
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-health-textMain text-lg sm:text-xl leading-snug line-clamp-2 group-hover:text-health-primaryDark transition-colors duration-200 mb-2.5">
            <Link href={`/artikel/${artikel.slug}`} className="hover:underline focus:outline-none">
              {artikel.judul}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="font-body text-sm text-health-textMuted line-clamp-3 leading-relaxed mb-4">
            {artikel.excerpt}
          </p>
        </div>

        {/* Footer info & CTA link */}
        <div className="pt-4 border-t border-emerald-50 flex items-center justify-between mt-auto text-xs sm:text-sm">
          <span className="text-health-textMuted font-medium truncate max-w-[170px]">
            {artikel.penulis?.nama || "Tim Medis SehatInfo"}
          </span>
          <Link
            href={`/artikel/${artikel.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-health-primaryDark group-hover:text-health-primary transition-colors duration-200"
          >
            <span>Baca</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
