# Petunjuk & Catatan Proyek — template-healthedu

## Ringkasan

Portal edukasi & informasi kesehatan publik berbahasa Indonesia dengan nama **"SehatInfo"**.
Situs statis dibangun dengan **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS 3**.

## Tech Stack

- **Next.js** 14.2.15 (App Router, SSR/SSG)
- **React** 18.3
- **TypeScript** 5
- **Tailwind CSS** 3.4 (dengan `tailwind.config.ts` tema kustom)
- **lucide-react** (ikon), **clsx** + **tailwind-merge** + **class-variance-authority** (utilitas `cn()`)
- Font: **Nunito** (heading) & **DM Sans** (body) via `next/font/google`

## Perintah

```bash
npm install          # install dependencies
npm run dev          # dev server (http://localhost:3000)
npm run build        # build produksi
npm run start        # jalankan build produksi
npm run lint         # eslint (next lint)
```

## Struktur Folder

```
app/
├── layout.tsx              # Root layout: Navbar, main, BannerDarurat, Footer, metadata
├── page.tsx                # Halaman beranda (Hero, Artikel Unggulan, Kategori, Tips, CTA)
├── globals.css             # Styling global + Tailwind
├── artikel/
│   ├── page.tsx            # Daftar artikel
│   ├── ArtikelListContent.tsx
│   └── [slug]/page.tsx     # Detail artikel + ShareButtons.tsx
├── kategori/[slug]/page.tsx
└── tentang/
    ├── page.tsx            # Halaman tentang
    └── ContactForm.tsx     # Form kontak (client component)
components/
├── layout/        # Navbar.tsx, Footer.tsx
├── sections/      # HeroSection, ArtikelUnggulan, SectionKategori, TipsHarian, BannerDarurat
└── ui/            # ArtikelCard, CategoryBadge, DisclaimerBox
lib/
├── utils.ts               # cn(), formatTanggalIndo(), calculateReadTime()
└── data/
    ├── artikel.ts         # Interface Artikel + data artikelList
    └── kategori.ts        # Interface Kategori + data kategoriList + getKategoriBySlug()
```

## Rute Halaman

- `/` — Beranda
- `/artikel` — Daftar semua artikel
- `/artikel/[slug]` — Detail artikel
- `/kategori/[slug]` — Artikel per kategori
- `/tentang` — Tentang tim redaksi + form kontak

## Konvensi & Catatan Penting

1. **Konten = data statis.** Seluruh artikel dan kategori berada di `lib/data/artikel.ts` dan `lib/data/kategori.ts`. Tidak ada CMS/database. Tambah artikel = tambah objek baru pada `artikelList`.

2. **Model data `Artikel`** (`lib/data/artikel.ts:1`):
   - `slug` unik dipakai untuk rute detail & kategori.
   - `isi` mendukung teks Markdown dasar (`### ` heading) dan dirender di halaman `[slug]`.
   - `unggulan: boolean` menandai artikel yang tampil di section "Artikel Unggulan".
   - `kategori` diisi dengan `slug` dari `kategoriList` (mis. `nutrisi-gizi`).

3. **Model data `Kategori`** (`lib/data/kategori.ts:1`):
   - `ikon` memakai nama ikon dari lucide-react.
   - `warnaBadge`, `warnaBg`, `warnaText` berisi kelas Tailwind (varian warna per kategori).

4. **Tema warna kustom** didefinisikan di `tailwind.config.ts` di bawah blok `health` (mis. `bg-health-primary`, `text-health-textMain`). Warna utama: emerald/teal (#10B981).

5. **Font** tersedia lewat kelas `font-heading` dan `font-body` (CSS variables `--font-nunito`, `--font-dm-sans`).

6. **Konfigurasi gambar** (`next.config.mjs`): `unoptimized: true` sehingga gambar tidak diproses oleh next/image di build; remote pattern hanya `images.unsplash.com`.

7. **Import path** memakai alias `@/*` yang merujuk ke root project (lihat `tsconfig.json`).

8. **Bahasa antarmuka:** seluruh konten & UI berbahasa Indonesia (`lang="id"`).

9. **Disclaimer:** materi bersifat edukatif; terdapat komponen `DisclaimerBox` (tampil di halaman artikel) dan `BannerDarurat` di layout.

## Cara Menambah/Mengedit Konten

- **Artikel:** buka `lib/data/artikel.ts`, duplikasi salah satu objek yang ada, ubah `slug`, `judul`, `excerpt`, `isi`, `kategori`, `tanggalTerbit`, dll.
- **Kategori:** buka `lib/data/kategori.ts`, tambahkan objek baru pada `kategoriList`. Pastikan `slug` sesuai yang dipakai field `kategori` di artikel.
- Pastikan `slug` artikel tidak duplikat (dipakai sebagai URL).