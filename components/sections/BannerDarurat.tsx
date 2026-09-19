import React from "react";
import Link from "next/link";
import { PhoneCall, AlertTriangle, ShieldCheck } from "lucide-react";

export default function BannerDarurat() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-rose-700 text-white py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-yellow-300" />
          </div>
          <div>
            <p className="font-heading font-bold text-sm sm:text-base tracking-wide flex items-center gap-2 justify-center sm:justify-start">
              <span>Darurat Medis?</span>
              <span className="hidden sm:inline text-rose-200 font-normal">|</span>
              <span className="font-normal text-xs sm:text-sm text-rose-100">
                Layanan Ambulans & Penanganan Gawat Darurat Indonesia (SPGDT)
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:119"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-rose-600 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span>Panggil 119</span>
          </a>
          <Link
            href="/artikel/pertolongan-pertama-luka-bakar-ringan"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Panduan P3K</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
