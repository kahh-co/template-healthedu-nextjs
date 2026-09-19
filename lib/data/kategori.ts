export interface Kategori {
  slug: string;
  nama: string;
  deskripsi: string;
  ikon: string;
  warnaBadge: string;
  warnaBg: string;
  warnaText: string;
}

export const kategoriList: Kategori[] = [
  {
    slug: "nutrisi-gizi",
    nama: "Nutrisi & Gizi",
    deskripsi: "Panduan lengkap makanan bergizi, pola diet seimbang, vitamin, dan asupan harian tubuh.",
    ikon: "Apple",
    warnaBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    warnaBg: "bg-emerald-50",
    warnaText: "text-emerald-700",
  },
  {
    slug: "olahraga-kebugaran",
    nama: "Olahraga & Kebugaran",
    deskripsi: "Rekomendasi latihan fisik, kebugaran kardio, pembentukan otot, dan peregangan sehat.",
    ikon: "Activity",
    warnaBadge: "bg-sky-100 text-sky-800 border-sky-300",
    warnaBg: "bg-sky-50",
    warnaText: "text-sky-700",
  },
  {
    slug: "kesehatan-mental",
    nama: "Kesehatan Mental",
    deskripsi: "Edukasi manajemen stres, kecemasan, kesehatan emosional, mindfulness, dan istirahat berkualitas.",
    ikon: "Brain",
    warnaBadge: "bg-purple-100 text-purple-800 border-purple-300",
    warnaBg: "bg-purple-50",
    warnaText: "text-purple-700",
  },
  {
    slug: "penyakit-pencegahan",
    nama: "Penyakit & Pencegahan",
    deskripsi: "Mengenal gejala awal penyakit umum, pencegahan dini, vaksinasi, dan penanganan pertama.",
    ikon: "ShieldCheck",
    warnaBadge: "bg-amber-100 text-amber-800 border-amber-300",
    warnaBg: "bg-amber-50",
    warnaText: "text-amber-700",
  },
  {
    slug: "ibu-anak",
    nama: "Ibu & Anak",
    deskripsi: "Informasi tumbuh kembang balita, imunisasi anak, nutrisi ibu hamil dan menyusui.",
    ikon: "HeartPulse",
    warnaBadge: "bg-rose-100 text-rose-800 border-rose-300",
    warnaBg: "bg-rose-50",
    warnaText: "text-rose-700",
  },
  {
    slug: "gaya-hidup-sehat",
    nama: "Gaya Hidup Sehat",
    deskripsi: "Kebiasaan hidup bersih, tidur berkualitas, detoksifikasi gadget, dan ergonomi kerja.",
    ikon: "Sparkles",
    warnaBadge: "bg-teal-100 text-teal-800 border-teal-300",
    warnaBg: "bg-teal-50",
    warnaText: "text-teal-700",
  },
];

export function getKategoriBySlug(slug: string): Kategori | undefined {
  return kategoriList.find((k) => k.slug === slug);
}
