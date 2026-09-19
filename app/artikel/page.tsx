import React, { Suspense } from "react";
import ArtikelListContent from "./ArtikelListContent";

export const metadata = {
  title: "Daftar Artikel Kesehatan — SehatInfo",
  description:
    "Kumpulan artikel edukasi kesehatan terkini meliputi nutrisi, kebugaran, pola tidur, psikologi, dan pencegahan penyakit.",
};

export default function ArtikelPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-health-textMuted">Memuat artikel...</div>}>
      <ArtikelListContent />
    </Suspense>
  );
}
