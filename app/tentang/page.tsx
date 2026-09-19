import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Tentang SehatInfo — Media Edukasi Kesehatan Publik",
  description:
    "Mengenal visi, misi, dan tim di balik SehatInfo: menghadirkan informasi medis akurat, mudah dipahami, dan dapat diakses seluruh masyarakat.",
};

const NILAI_UTAMA = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    title: "1. Akurat & Berbasis Bukti",
    desc: "Setiap artikel disusun mengacu pada jurnal medis terkini, pedoman resmi Kemenkes RI, dan standar WHO.",
  },
  {
    icon: <Award className="w-8 h-8 text-teal-600" />,
    title: "2. Terpercaya & Ditinjau Praktisi",
    desc: "Materi dipelajari dan diperiksa oleh dokter, nutrisionis, dan profesional medis sebelum diterbitkan.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-sky-600" />,
    title: "3. Ramah & Mudah Dipahami",
    desc: "Kami menerjemahkan istilah medis rumit menjadi bahasa sehari-hari yang nyaman dicerna seluruh anggota keluarga.",
  },
];

const TIM_REDAKSI = [
  {
    nama: "dr. Andini Saraswati",
    peran: "Pemimpin Redaksi Medis",
    bidang: "Dokter Umum & Edukator Publik",
    foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    nama: "dr. Farhan Malik, Sp.JP",
    peran: "Konsultan Kardiovaskular",
    bidang: "Spesialis Jantung & Pembuluh Darah",
    foto: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    nama: "dr. Citra Lestari, Sp.A",
    peran: "Konsultan Pediatrik",
    bidang: "Spesialis Kesehatan Anak & Tumbuh Kembang",
    foto: "https://images.unsplash.com/photo-1594824813586-3023fb2758ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    nama: "Nurul Hidayah, S.Gz",
    peran: "Editor Nutrisi & Dietetika",
    bidang: "Ahli Gizi Klinis Terdaftar",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TentangPage() {
  return (
    <div className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-health-primaryDark text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-health-primary" />
            <span>Misi Literasi Sehat Indonesia</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-health-textMain tracking-tight">
            Mendedikasikan Pengetahuan untuk Kesehatan Bangsa
          </h1>
          <p className="text-base sm:text-lg text-health-textMuted mt-4 leading-relaxed">
            SehatInfo hadir sebagai jembatan informasi medis yang transparan, bebas hoaks, dan dapat diakses dengan mudah oleh seluruh lapisan masyarakat Indonesia.
          </p>
        </div>

        {/* Visual & Visi-Misi Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                alt="Diskusi Redaksi Kesehatan SehatInfo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-health-textMain mb-3">
                Visi Kami
              </h2>
              <p className="text-sm sm:text-base text-health-textMuted leading-relaxed">
                Menciptakan masyarakat Indonesia yang berdaya dalam menjaga kesehatan mandiri melalui literasi kesehatan yang bermutu tinggi, preventif, dan berbasis data ilmiah.
              </p>
            </div>

            <div className="pt-2">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-health-textMain mb-3">
                Misi Utama
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-health-textMuted">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-health-primary shrink-0 mt-0.5" />
                  <span>Menyajikan konten kesehatan terkini yang diverifikasi oleh praktisi medis berlisensi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-health-primary shrink-0 mt-0.5" />
                  <span>Memberantas misinformasi dan mitos pengobatan alternatif berbahaya di ruang publik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-health-primary shrink-0 mt-0.5" />
                  <span>Mendorong kebiasaan preventif daripada kuratif lewat edukasi nutrisi dan aktivitas fisik.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nilai-Nilai Utama */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-health-textMain">
              Tiga Nilai Inti Redaksi
            </h2>
            <p className="text-sm text-health-textMuted mt-1">
              Prinsip integritas yang mendasari setiap artikel yang kami rilis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {NILAI_UTAMA.map((nilai, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 flex flex-col items-start transition-transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center mb-5">
                  {nilai.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-health-textMain mb-2">
                  {nilai.title}
                </h3>
                <p className="text-sm text-health-textMuted leading-relaxed">
                  {nilai.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dewan Redaksi Medis */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-health-textMain">
              Dewan Redaksi & Kontributor
            </h2>
            <p className="text-sm text-health-textMuted mt-1">
              Didukung oleh dokter spesialis, dokter umum, dan ahli gizi bersertifikat
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIM_REDAKSI.map((anggota, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-emerald-100 p-5 shadow-soft text-center group hover:border-emerald-300 transition-all"
              >
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-emerald-100">
                  <Image
                    src={anggota.foto}
                    alt={anggota.nama}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="112px"
                  />
                </div>
                <h3 className="font-heading font-bold text-base text-health-textMain">
                  {anggota.nama}
                </h3>
                <p className="text-xs font-semibold text-health-primaryDark mt-0.5">
                  {anggota.peran}
                </p>
                <p className="text-xs text-health-textMuted mt-1">
                  {anggota.bidang}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kotak Kontak & Saran */}
        <section id="kontak" className="bg-emerald-50/60 rounded-3xl p-8 sm:p-12 border border-emerald-200/80 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-heading font-extrabold text-2xl text-health-textMain">
                Hubungi Redaksi
              </h3>
              <p className="text-sm text-health-textMuted leading-relaxed">
                Punya pertanyaan seputar konten, usulan topik artikel baru, atau ingin berkolaborasi? Tim redaksi kami siap mendengar Anda.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-health-primary" />
                  <span className="font-medium">redaksi@sehatinfo.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-health-primary" />
                  <span>Jakarta Selatan, DKI Jakarta</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-health-primary" />
                  <span>Senin - Jumat: 09.00 - 17.00 WIB</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-soft border border-emerald-100">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Disclaimer Box */}
        <DisclaimerBox />
      </div>
    </div>
  );
}
