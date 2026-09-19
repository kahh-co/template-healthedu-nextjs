import React from "react";
import Link from "next/link";
import { HeartPulse, Instagram, Twitter, Youtube, Linkedin, Heart } from "lucide-react";
import { kategoriList } from "@/lib/data/kategori";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-health-primary flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Sehat<span className="text-emerald-400">Info</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Media edukasi kesehatan publik tepercaya yang menyajikan informasi medis, gizi, pola hidup, dan kebugaran dengan gaya bahasa yang mudah dipahami setiap keluarga Indonesia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-health-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-health-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-health-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-health-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-emerald-400 transition-colors">
                  Semua Artikel
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/tentang#kontak" className="hover:text-emerald-400 transition-colors">
                  Hubungi Redaksi
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Topik Populer
            </h4>
            <ul className="space-y-2.5 text-sm">
              {kategoriList.slice(0, 4).map((kat) => (
                <li key={kat.slug}>
                  <Link
                    href={`/kategori/${kat.slug}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {kat.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency & Disclaimer */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base">
              Darurat Medis
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-rose-400 mb-1">
                Kondisi Darurat?
              </p>
              <p>
                Segera hubungi ambulans dan layanan tanggap darurat medis nasional di nomor <span className="font-bold text-white">119</span> atau kunjungi IGD rumah sakit terdekat.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} SehatInfo — Template Edukasi Kesehatan Publik.
          </p>
          <p className="flex items-center gap-1 text-slate-500">
            Dibuat untuk masyarakat sadar sehat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
