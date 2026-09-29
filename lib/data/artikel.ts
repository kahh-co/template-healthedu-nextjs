export interface Artikel {
  id: string;
  slug: string;
  judul: string;
  excerpt: string;
  isi: string;
  gambar: string;
  kategori: string;
  tanggalTerbit: string;
  waktuBaca: number;
  unggulan: boolean;
  tags: string[];
  penulis?: {
    nama: string;
    gelar: string;
  };
}

export const artikelList: Artikel[] = [
  {
    id: "1",
    slug: "manfaat-minum-air-putih",
    judul: "8 Manfaat Minum Air Putih yang Perlu Kamu Tahu untuk Kesehatan Optimal",
    excerpt: "Air putih adalah fondasi utama kerja organ tubuh manusia. Memenuhi hidrasi harian mendukung konsentrasi, metabolisme, dan daya tahan tubuh.",
    isi: `Tubuh manusia terdiri dari sekitar 60% cairan. Setiap sel, jaringan, dan organ memerlukan air agar dapat berfungsi sebagaimana mestinya. Sayangnya, banyak orang sering mengabaikan asupan hidrasi harian hingga muncul tanda-tanda dehidrasi ringan.

 1. Menjaga Konsentrasi dan Fungsi Kognitif
Penelitian menunjukkan bahwa kehilangan cairan tubuh sebanyak 1-2% saja sudah dapat memicu penurunan konsentrasi, sakit kepala ringan, serta penurunan daya ingat jangka pendek.

 2. Membantu Metabolisme dan Kontrol Berat Badan
Minum segelas air putih sebelum makan dapat memberikan rasa kenyang alami dan merangsang proses pembakaran kalori tubuh secara optimal.

 3. Menjaga Elastisitas dan Kesehatan Kulit
Kekurangan air membuat kulit tampak kusam, kering, dan lebih rentan terhadap iritasi. Hidrasi cukup membantu membuang racun metabolik melalui keringat dan urine.

 4. Mendukung Fungsi Ginjal
Ginjal membutuhkan cairan yang cukup untuk menyaring zat sisa dari darah dan membuangnya melalui urine. Kurang minum air dalam jangka panjang berisiko memicu batu ginjal.

 Tips Praktis Memenuhi Kebutuhan Air:
- Siapkan botol minum berukuran 1 liter di meja kerja Anda.
- Minum 1 gelas air hangat begitu bangun di pagi hari.
- Tambahkan irisan lemon atau mentimun (infused water) bila menyukai sensasi segar alami.`,
    gambar: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=1200&q=80",
    kategori: "gaya-hidup-sehat",
    tanggalTerbit: "2026-09-10T08:00:00Z",
    waktuBaca: 4,
    unggulan: true,
    tags: ["air putih", "hidrasi", "gaya hidup", "metabolisme"],
    penulis: {
      nama: "dr. Andini Saraswati",
      gelar: "Dokter Umum & Edukator Kesehatan",
    },
  },
  {
    id: "2",
    slug: "panduan-gizi-seimbang-isi-piringku",
    judul: "Memahami Konsep 'Isi Piringku': Panduan Porsi Nutrisi Sehat Harian",
    excerpt: "Lupakan metode 4 Sehat 5 Sempurna yang usang. Kemenkes RI kini menganjurkan pedoman 'Isi Piringku' untuk komposisi gizi seimbang.",
    isi: `Kementerian Kesehatan Republik Indonesia telah memperbarui panduan nutrisi harian melalui pedoman 'Isi Piringku'. Pedoman ini memberikan gambaran visual konkret tentang porsi makanan sekali santap untuk mencegah obesitas dan penyakit metabolik.

### Komposisi Ideal Satu Piring Makan:
1. **Makanan Pokok (2/3 dari 1/2 piring):** Karbohidrat kompleks seperti nasi merah, jagung, ubi, atau oat yang kaya serat.
2. **Lauk-Pauk (1/3 dari 1/2 piring):** Sumber protein hewani dan nabati seperti ikan, telur, tahu, tempe, atau dada ayam tanpa kulit.
3. **Sayuran (2/3 dari 1/2 piring lainnya):** Sayuran hijau, wortel, brokoli, atau bayam sebagai sumber serat, vitamin, dan antioksidan.
4. **Buah-buahan (1/3 dari 1/2 piring lainnya):** Pepaya, pisang, apel, jeruk, atau semangka.

### Jangan Lupa 4 Pilar Tambahan:
- Batasi konsumsi GGL (Gula 4 sdm, Garam 1 sdt, Lemak 5 sdm per hari).
- Cuci tangan pakai sabun dengan air mengalir sebelum makan.
- Lakukan aktivitas fisik ringan minimal 30 menit sehari.
- Minum air putih minimal 8 gelas setiap hari.`,
    gambar: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    kategori: "nutrisi-gizi",
    tanggalTerbit: "2026-09-08T09:30:00Z",
    waktuBaca: 5,
    unggulan: true,
    tags: ["isi piringku", "nutrisi", "diet seimbang", "kemenkes"],
    penulis: {
      nama: "Nurul Hidayah, S.Gz",
      gelar: "Ahli Gizi Klinis",
    },
  },
  {
    id: "3",
    slug: "mengatasi-stres-kerja-burnout",
    judul: "Kenali Tanda Burnout di Tempat Kerja dan Cara Mengatasinya",
    excerpt: "Kelelahan emosional dan mental yang dibiarkan dapat merusak produktivitas dan memicu gangguan kecemasan serius. Simak langkah pemulihannya.",
    isi: `Burnout bukan sekadar rasa lelah biasa setelah lembur semalam. Organisasi Kesehatan Dunia (WHO) mengklasifikasikan burnout sebagai sindrom stres kronis di tempat kerja yang belum berhasil dikelola dengan baik.

### Gejala Utama Burnout:
- **Kelelahan Ekstrem:** Merasa kehabisan energi secara terus-menerus bahkan setelah libur akhir pekan.
- **Sinisme dan Jarak Emosional:** Hilangnya antusiasme terhadap proyek atau rekan kerja, merasa apa yang dikerjakan sia-sia.
- **Penurunan Efikasi Profesional:** Merasa tidak kompeten, sulit mengambil keputusan, dan rentan melakukan kesalahan sepele.

### Strategi Pemulihan Bertahap:
1. **Buat Batasan Kerja yang Jelas:** Hindari memeriksa email kantor atau grup obrolan setelah jam kerja berakhir.
2. **Terapkan Teknik Pomodoro:** Bekerja fokus selama 25 menit diselingi rehat 5 menit untuk relaksasi mata dan pikiran.
3. **Praktikkan Mindfulness & Olah Napas:** Latihan pernapasan 4-7-8 selama 5 menit saat rasa panik atau beban tugas mulai terasa menumpuk.
4. **Konsultasikan ke Profesional:** Jika rasa hampa dan lelah berlangsung lebih dari 1 bulan, jangan ragu berbicara dengan psikolog.`,
    gambar: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    kategori: "kesehatan-mental",
    tanggalTerbit: "2026-09-05T14:15:00Z",
    waktuBaca: 6,
    unggulan: true,
    tags: ["kesehatan mental", "burnout", "stres kerja", "mindfulness"],
    penulis: {
      nama: "Rian Prasetyo, M.Psi",
      gelar: "Psikolog Klinis",
    },
  },
  {
    id: "4",
    slug: "pencegahan-hipertensi-usia-muda",
    judul: "Hipertensi Mengintai Usia Muda: Faktor Risiko dan Cara Pencegahannya",
    excerpt: "Tekanan darah tinggi sering disebut 'silent killer' karena kerap tidak bergejala hingga terjadi komplikasi jantung atau stroke.",
    isi: `Banyak anak muda menganggap tekanan darah tinggi hanya dialami oleh lansia. Data terkini menunjukkan prevalensi hipertensi usia 20–39 tahun kian meningkat akibat pola makan tinggi natrium dan gaya hidup sedentari.

### Faktor Pemicu Hipertensi di Usia Muda:
- Konsumsi junk food, mi instan, dan makanan olahan tinggi garam.
- Kebiasaan merokok serta konsumsi minuman beralkohol.
- Kurang tidur dan tingkat stres berkepanjangan.
- Kurangnya aktivitas kardiovaskular teratur.

### Langkah Pencegahan Efektif:
1. **Rutin Cek Tekanan Darah:** Periksa tensi darah minimal 6 bulan sekali. Nilai normal adalah di bawah 120/80 mmHg.
2. **Pola Makan DASH (Dietary Approaches to Stop Hypertension):** Perbanyak buah, sayuran, biji-bijian, dan batasi garam maksimal 1 sendok teh per hari.
3. **Olahraga Aerobik Teratur:** Luangkan jalan cepat, lari santai, atau bersepeda minimal 150 menit per minggu.`,
    gambar: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    kategori: "penyakit-pencegahan",
    tanggalTerbit: "2026-09-03T11:00:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["hipertensi", "jantung", "tekanan darah", "pencegahan"],
    penulis: {
      nama: "dr. Farhan Malik, Sp.JP",
      gelar: "Spesialis Jantung & Pembuluh Darah",
    },
  },
  {
    id: "5",
    slug: "panduan-olahraga-pemula-di-rumah",
    judul: "Panduan Olahraga Ringan di Rumah untuk Pemula Tanpa Alat",
    excerpt: "Mulai gaya hidup aktif tanpa harus ke gym. Latihan beban tubuh selama 20 menit sehari mampu meningkatkan kebugaran kardiovaskular.",
    isi: `Memulai kebiasaan berolahraga sering kali terhambat alasan tidak memiliki alat atau waktu pergi ke tempat kebugaran. Padahal, latihan beban tubuh (calisthenics ringan) di rumah sangat efektif membakar kalori dan memperkuat otot inti.

### Rangkaian Gerakan Pemula (Sirkuit 15-20 Menit):
1. **Jumping Jacks (30 detik):** Pemanasan ritmik untuk menaikkan detak jantung dan melenturkan sendi.
2. **Bodyweight Squats (12 repetisi):** Menguatkan otot paha, bokong, dan pinggul. Pastikan lutut tidak melebihi ujung jari kaki saat turun.
3. **Wall Push-Up atau Knee Push-Up (10 repetisi):** Melatih otot dada, bahu, dan trisep tanpa membebani pergelangan tangan berlebih.
4. **Plank (20-30 detik):** Memperkuat otot perut dan punggung bawah untuk postur tubuh yang tegak.
5. **Glute Bridge (12 repetisi):** Sangat baik untuk meregangkan panggul yang kaku akibat terlalu lama duduk.

Lakukan 3 putaran sirkuit di atas dengan istirahat 1 menit di antara putaran, 3 sampai 4 kali seminggu.`,
    gambar: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    kategori: "olahraga-kebugaran",
    tanggalTerbit: "2026-08-28T07:45:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["olahraga", "kebugaran", "pemula", "workout rumah"],
    penulis: {
      nama: "Bagas Wicaksono, CPT",
      gelar: "Pelatih Kebugaran Bersertifikat",
    },
  },
  {
    id: "6",
    slug: "nutrisi-emas-1000-hari-pertama-kehidupan",
    judul: "Pentingnya Nutrisi pada 1000 Hari Pertama Kehidupan Anak",
    excerpt: "Periode sejak dalam kandungan hingga anak berusia dua tahun menentukan perkembangan otak, fisik, dan imunitas anak di masa depan.",
    isi: `Periode 1000 Hari Pertama Kehidupan (HPK) dihitung dari hari pertama kehamilan (270 hari) hingga anak mencapai usia 2 tahun (730 hari). Periode ini kerap disebut 'jendela kesempatan emas' karena pertumbuhan otak berlangsung paling pesat sepanjang hidup manusia.

### Tahapan Kunci Pemenuhan Nutrisi:
- **Masa Kehamilan (Trimester 1-3):** Ibu memerlukan asupan asam folat untuk mencegah cacat tabung saraf, zat besi untuk mencegah anemia, kalsium, serta asam lemak omega-3 (DHA).
- **Usia 0–6 Bulan (ASI Eksklusif):** ASI mengandung antibodi terlengkap dan komposisi enzim yang ideal bagi pencernaan bayi.
- **Usia 6–24 Bulan (MPASI Berkualitas):** Makanan pendamping ASI harus kaya protein hewani (telur, hati ayam, ikan kembung) untuk mencegah stunting secara efektif.

### Pantau Tumbuh Kembang:
Bawa si kecil ke Posyandu atau faskes terdekat setiap bulan untuk menimbang berat badan, mengukur tinggi badan, dan melengkapi jadwal imunisasi dasar wajib.`,
    gambar: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80",
    kategori: "ibu-anak",
    tanggalTerbit: "2026-08-25T10:00:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["ibu dan anak", "stunting", "1000 HPK", "gizi anak", "ASI"],
    penulis: {
      nama: "dr. Citra Lestari, Sp.A",
      gelar: "Spesialis Anak",
    },
  },
  {
    id: "7",
    slug: "tips-tidur-nyenyak-sleep-hygiene",
    judul: "Trik 'Sleep Hygiene' untuk Tidur Nyenyak dan Bangun Lebih Segar",
    excerpt: "Sulit memejamkan mata di malam hari? Pelajari cara menata kamar dan kebiasaan sebelum tidur agar insomnia lekas teratasi.",
    isi: `Kualitas tidur berbanding lurus dengan daya tahan imun, kestabilan emosi, dan produktivitas harian. Istilah 'sleep hygiene' mengacu pada rangkaian kebiasaan sehat yang mendukung proses tubuh memasuki fase tidur lelap (deep sleep).

### Langkah Menata Kebiasaan Tidur yang Baik:
1. **Matikan Layar Ponsel 1 Jam Sebelum Tidur:** Cahaya biru (blue light) menekan produksi melatonin, hormon alami penginduksi rasa kantuk.
2. **Jadwal Tidur Konsisten:** Bangun dan tidur pada jam yang sama setiap hari, termasuk di akhir pekan.
3. **Atur Suhu dan Pencahayaan Kamar:** Suhu ruangan yang sejuk (20-23°C) dan kamar yang gelap total mempermudah tubuh masuk ke siklus REM.
4. **Hindari Kafein Setelah Pukul 14.00:** Kafein memiliki waktu paruh hingga 6 jam di dalam tubuh manusia.
5. **Gunakan Tempat Tidur Hanya untuk Tidur:** Hindari bekerja dengan laptop di atas kasur agar otak tidak mengasosiasikan kasur dengan stres pekerjaan.`,
    gambar: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80",
    kategori: "gaya-hidup-sehat",
    tanggalTerbit: "2026-08-20T13:00:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["tidur", "sleep hygiene", "insomnia", "relaksasi"],
    penulis: {
      nama: "dr. Andini Saraswati",
      gelar: "Dokter Umum & Edukator Kesehatan",
    },
  },
  {
    id: "8",
    slug: "sarapan-sehat-energi-maksimal",
    judul: "5 Kombinasi Menu Sarapan Sehat yang Memberi Energi Sepanjang Hari",
    excerpt: "Menu sarapan tinggi gula sederhana justru memicu kantuk di pagi hari. Pilih kombinasi karbohidrat kompleks dan protein tinggi.",
    isi: `Banyak orang melewatkan sarapan atau justru mengonsumsi sarapan yang didominasi gula dan tepung olahan, seperti donat manis atau lontong berlebihan. Hal ini mengakibatkan lonjakan gula darah mendadak yang disusul oleh 'sugar crash' 1-2 jam kemudian.

### 5 Pilihan Menu Sarapan Praktis:
- **Oatmeal dengan Pisang dan Biji Chia:** Mengandung beta-glukan yang menurunkan kolesterol serta memberi rasa kenyang awet.
- **Telur Rebus / Orak-Arik dengan Roti Gandum & Tomat:** Sumber protein murni dan likopen antioksidan.
- **Smoothie Hijau Bayam, Nanas, dan Susu Kedelai:** Kaya magnesium dan enzim pencernaan alami.
- **Yogurt Yunani (Greek Yogurt) dengan Madu dan Almond:** Tinggi probiotik untuk kesehatan usus serta lemak baik.
- **Nasi Merah dengan Orek Tempe dan Sayur Bening:** Pilihan tradisional lokal dengan kandungan serat dan protein nabati tinggi.`,
    gambar: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
    kategori: "nutrisi-gizi",
    tanggalTerbit: "2026-08-15T08:10:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["sarapan", "nutrisi", "energi", "resep sehat"],
    penulis: {
      nama: "Nurul Hidayah, S.Gz",
      gelar: "Ahli Gizi Klinis",
    },
  },
  {
    id: "9",
    slug: "gejala-diabetes-tipe-2-usia-produktif",
    judul: "Gejala Diabetes Tipe 2 yang Sering Disepelekan dan Cara Mencegahnya",
    excerpt: "Kerap haus, sering buang air kecil di malam hari, dan luka lama sembuh adalah alarm awal gula darah tinggi.",
    isi: `Diabetes melitus tipe 2 kini semakin banyak didiagnosis pada usia 20-an hingga 30-an tahun. Sifatnya yang berkembang perlahan sering kali membuat penderita tidak menyadari lonjakan kadar glukosa dalam darahnya hingga timbul komplikasi.

### Gejala Klasik 3P:
1. **Poliuria:** Frekuensi berkemih yang meningkat tajam, terutama saat malam hari.
2. **Polidipsia:** Rasa haus yang tidak kunjung reda meskipun sudah banyak minum.
3. **Polifagia:** Cepat merasa lapar akibat sel tubuh kekurangan suplai glukosa yang tertahan di pembuluh darah.

### Gejala Tambahan yang Perlu Diwaspadai:
- Penurunan berat badan drastis tanpa diet.
- Penglihatan buram atau kabur sewaktu-waktu.
- Kesemutan atau baal pada ujung jari kaki dan tangan.
- Luka goresan kecil yang memerlukan waktu berminggu-minggu untuk sembuh.

### Tips Pencegahan:
Rutin lakukan tes gula darah puasa (GDP) dan HbA1c setahun sekali, kurangi minuman berpemanis dalam kemasan (boba, teh kemasan manis), serta perbanyak jalan kaki harian.`,
    gambar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    kategori: "penyakit-pencegahan",
    tanggalTerbit: "2026-08-10T11:20:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["diabetes", "gula darah", "pencegahan", "penyakit"],
    penulis: {
      nama: "dr. Andini Saraswati",
      gelar: "Dokter Umum & Edukator Kesehatan",
    },
  },
  {
    id: "10",
    slug: "kesehatan-mental-anak-remaja",
    judul: "Mendengarkan Tanpa Menghakimi: Cara Mendukung Kesehatan Mental Remaja",
    excerpt: "Masa transisi pubertas dan dinamika media sosial menghadirkan tantangan emosional tersendiri bagi anak remaja.",
    isi: `Tekanan akademik, pencarian jati diri, perundungan di sekolah, dan paparan ekspektasi palsu media sosial dapat memicu kecemasan hebat bagi remaja. Peran orang tua dan pendidik bukan menghakimi, melainkan menjadi tempat berlabuh yang aman.

### Tanda-Tanda Remaja Mengalami Beban Mental:
- Menarik diri dari pergaulan keluarga dan teman sebaya.
- Perubahan drastis pada pola makan atau pola tidur.
- Prestasi sekolah menurun mendadak.
- Mudah tersulut amarah atau tampak putus asa berlarut-larut.

### Tips Komunikasi Empatik untuk Orang Tua:
- Dengarkan dengan penuh perhatian tanpa langsung memotong atau membandingkan dengan masa lalu Anda.
- Validasi perasaan mereka: *"Ayah/Ibu paham kamu lagi merasa kewalahan saat ini."*
- Batasi 'screen time' bersama dan ciptakan momen kegiatan tanpa gawai di akhir pekan.`,
    gambar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    kategori: "kesehatan-mental",
    tanggalTerbit: "2026-08-05T15:30:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["parenting", "remaja", "kesehatan mental", "keluarga"],
    penulis: {
      nama: "Rian Prasetyo, M.Psi",
      gelar: "Psikolog Klinis",
    },
  },
  {
    id: "11",
    slug: "jadwal-imunisasi-dasar-bayi-lengkap",
    judul: "Jadwal Lengkap Imunisasi Dasar Bayi Menurut Rekomendasi IDAI",
    excerpt: "Vaksin melindungi si kecil dari penyakit menular berbahaya seperti polio, campak, difteri, dan hepatitis B.",
    isi: `Ikatan Dokter Anak Indonesia (IDAI) secara berkala memperbarui jadwal imunisasi guna memberikan perlindungan maksimal bagi anak sejak usia baru lahir. Imunisasi bekerja merangsang sistem kekebalan tubuh memproduksi antibodi spesifik tanpa harus sakit terlebih dahulu.

### Rangkuman Vaksin Dasar Wajib:
- **0 Bulan (Saat Lahir):** Hepatitis B (HB0) dosis pertama dan vaksin polio oral.
- **1 Bulan:** Vaksin BCG untuk mencegah tuberkulosis berat (TBC milier dan meningitis TBC).
- **2, 3, 4 Bulan:** Vaksin kombinasi DTP-HB-Hib dan polio tetes/suntik untuk mencegah difteri, tetanus, batuk rejan, hepatitis B, dan pneumonia Hib.
- **9 Bulan:** Vaksin Campak-Rubella (MR) dosis awal.
- **18 Bulan:** Booster DTP-HB-Hib dan Campak lanjutan untuk memelihara kadar antibodi jangka panjang.

### Jangan Takut Efek Samping Ringan:
Demam ringan atau kemerahan di area bekas suntikan merupakan respon wajar sistem imun. Kompres hangat dan pemberian parasetamol sesuai anjuran dokter sudah cukup meredakan ketidaknyamanan tersebut.`,
    gambar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    kategori: "ibu-anak",
    tanggalTerbit: "2026-07-30T09:00:00Z",
    waktuBaca: 6,
    unggulan: false,
    tags: ["imunisasi", "vaksin anak", "IDAI", "kesehatan bayi"],
    penulis: {
      nama: "dr. Citra Lestari, Sp.A",
      gelar: "Spesialis Anak",
    },
  },
  {
    id: "12",
    slug: "postur-ergonomis-cegah-sakit-punggung",
    judul: "Postur Ergonomis Saat Duduk Bekerja: Solusi Cegah Sakit Pinggang",
    excerpt: "Duduk membungkuk di depan komputer selama berjam-jam memberi beban berlebih pada tulang belakang dan bantalan cakram.",
    isi: `Sindrom 'Text Neck' dan nyeri punggung bawah (low back pain) merupakan keluhan terbanyak pekerja kantoran masa kini. Mengatur posisi meja dan kursi kerja secara ergonomis dapat meminimalkan ketegangan otot hingga 70%.

### Panduan Setup Meja Kerja Ergonomis:
1. **Posisi Monitor:** Layar sejajar lurus dengan mata, sehingga leher tidak perlu menunduk atau mendongak. Jarak layar berkisar 50-70 cm (sepanjang rentangan lengan).
2. **Posisi Duduk:** Punggung bersandar penuh pada sandaran kursi dengan lekukan pinggang ditopang bantal kecil (lumbar support).
3. **Kaki Menapak Rata di Lantai:** Sudut lutut membentuk 90 derajat. Gunakan footrest bila kaki menggantung.
4. **Sudut Siku:** Lengan bawah dan pergelangan tangan rileks membentuk sudut 90-100 derajat terhadap meja kerja.

### Terapkan Aturan 20-20-20:
Setiap 20 menit, alihkan pandangan sejauh 20 kaki (6 meter) selama 20 detik. Sempatkan berdiri dan meregangkan pinggul setiap 1 jam sekali.`,
    gambar: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1200&q=80",
    kategori: "gaya-hidup-sehat",
    tanggalTerbit: "2026-07-22T13:40:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["ergonomi", "sakit punggung", "postur", "kesehatan kerja"],
    penulis: {
      nama: "Bagas Wicaksono, CPT",
      gelar: "Pelatih Kebugaran Bersertifikat",
    },
  },
  {
    id: "13",
    slug: "mitos-dan-fakta-diet-karbohidrat",
    judul: "Mitos vs Fakta Diet Karbohidrat: Apakah Nasi Benar-Benar Bikin Gemuk?",
    excerpt: "Sering dituduh sebagai biang keladi kenaikan berat badan, apakah kita perlu memusuhi karbohidrat sepenuhnya?",
    isi: `Dalam tren diet modern, karbohidrat kerap dianggap sebagai 'musuh utama'. Banyak orang memangkas total konsumsi karbohidrat tanpa memahami bahwa glukosa adalah bahan bakar primer bagi sel otak dan otot.

### Mitos 1: Karbohidrat Pasti Bikin Gemuk
**Faktanya:** Penambahan lemak tubuh terjadi akibat surplus kalori total (kalori masuk lebih banyak dari kalori keluar), bukan semata-mata karena karbohidrat. Karbohidrat kompleks seperti nasi merah, kentang rebus, dan ubi justru kaya serat yang mengenyangkan.

### Mitos 2: Tidak Boleh Makan Karbohidrat Malam Hari
**Faktanya:** Jam makan tidak mengubah metabolisme karbohidrat menjadi lemak secara instan. Yang perlu dijaga adalah porsi dan jenis makanan yang disantap menjelang tidur.

### Pilihlah Karbohidrat yang Tepat:
Batasi karbohidrat sederhana terproses tinggi (sirup fruktosa, roti tawar putih kemasan, kue manis) dan gantilah dengan biji-bijian utuh (whole grains) yang memiliki indeks glikemik rendah.`,
    gambar: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    kategori: "nutrisi-gizi",
    tanggalTerbit: "2026-07-15T10:15:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["diet", "karbohidrat", "mitos fakta", "nutrisi"],
    penulis: {
      nama: "Nurul Hidayah, S.Gz",
      gelar: "Ahli Gizi Klinis",
    },
  },
  {
    id: "14",
    slug: "tips-jalan-kaki-10-ribu-langkah",
    judul: "Manfaat Nyata Jalan Kaki 10.000 Langkah Sehari untuk Jantung & Mood",
    excerpt: "Aktivitas sederhana berbiaya nol rupiah yang terbukti ampuh membakar kalori, menurunkan tekanan darah, dan menyegarkan pikiran.",
    isi: `Jalan kaki adalah salah satu bentuk olahraga aerobik dengan risiko cedera paling rendah namun memberikan dampak kesehatan yang luar biasa bagi tubuh manusia dari segala usia.

### Manfaat Utama Rutin Berjalan Kaki:
- **Kesehatan Kardiovaskular:** Menstimulasi aliran darah dan membantu menurunkan kadar kolesterol jahat (LDL).
- **Manajemen Berat Badan:** Berjalan 10.000 langkah membakar sekitar 300-400 kalori tergantung bobot tubuh dan kecepatan langkah.
- **Rilis Hormon Endorfin:** Jalan kaki di ruang terbuka hijau meredakan rasa cemas dan memperbaiki kualitas suasana hati.
- **Kekuatan Tulang dan Sendi:** Mencegah pengeroposan tulang dini (osteoporosis) pada orang dewasa.

### Cara Praktis Mencapai Target Langkah:
- Pilih tangga biasa daripada eskalator atau lift untuk jarak 1-2 lantai.
- Turun dari angkutan umum satu halte lebih awal dan lanjutkan dengan jalan kaki.
- Gunakan fitur pedometer pada ponsel pintar untuk memantau progres harian.`,
    gambar: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
    kategori: "olahraga-kebugaran",
    tanggalTerbit: "2026-07-10T07:20:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["jalan kaki", "kardio", "10000 langkah", "kesehatan jantung"],
    penulis: {
      nama: "Bagas Wicaksono, CPT",
      gelar: "Pelatih Kebugaran Bersertifikat",
    },
  },
  {
    id: "15",
    slug: "mengenal-gejala-depresi-klinis",
    judul: "Mengenal Perbedaan Kesedihan Biasa dan Depresi Klinis",
    excerpt: "Kesedihan adalah emosi alami manusia, namun depresi klinis adalah kondisi medis serius yang membutuhkan pertolongan profesional.",
    isi: `Merasa sedih atau berduka adalah reaksi wajar saat seseorang menghadapi kehilangan, kegagalan, atau kesulitan hidup. Namun, bila perasaan sedih itu berlangsung intens lebih dari dua minggu dan mengganggu aktivitas dasar sehari-hari, hal itu patut diwaspadai sebagai gejala depresi.

### Ciri Khas Depresi Klinis:
1. **Anhedonia:** Hilangnya ketertarikan atau kenikmatan pada hobi dan aktivitas yang sebelumnya sangat disukai.
2. **Gangguan Nafsu Makan:** Kehilangan selera makan secara drastis atau sebaliknya makan berlebihan tanpa kendali.
3. **Perasaan Bersalah yang Tidak Realistis:** Merasa diri tidak berharga, membebani orang lain, dan menyalahkan diri secara ekstrem.
4. **Pikiran Berulang Terkait Kematian:** Munculnya ide atau keinginan untuk mengakhiri hidup.

### Jangan Ragu Mencari Bantuan:
Depresi bukanlah tanda kelemahan iman atau karakter seseorang. Depresi adalah gangguan kesehatan mental yang dapat ditangani melalui psikoterapi, konseling, dan bila diperlukan terapi medis dari psikiater. Hubungi hotline kesehatan jiwa Kementerian Kesehatan atau layanan konsultasi terdekat.`,
    gambar: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80",
    kategori: "kesehatan-mental",
    tanggalTerbit: "2026-07-02T16:00:00Z",
    waktuBaca: 5,
    unggulan: false,
    tags: ["depresi", "kesehatan jiwa", "psikologi", "konseling"],
    penulis: {
      nama: "Rian Prasetyo, M.Psi",
      gelar: "Psikolog Klinis",
    },
  },
  {
    id: "16",
    slug: "pertolongan-pertama-luka-bakar-ringan",
    judul: "Langkah Benar Pertolongan Pertama pada Luka Bakar Ringan di Rumah",
    excerpt: "Jangan oleskan pasta gigi atau kecap! Simak panduan medis pertolongan pertama pada luka bakar derajat satu.",
    isi: `Luka bakar ringan akibat terkena cipratan minyak panas, air mendidih, atau knalpot motor kerap terjadi di lingkungan rumah. Sayangnya, masih banyak mitos berbahaya seperti mengoleskan pasta gigi, mentega, atau tepung ke area luka.

### Yang Harus Dilakukan Segera:
1. **Alirkan Air Bersih Suhu Ruang:** Alirkan air kran mengalir selama 15-20 menit pada area luka bakar. Hal ini penting untuk menurunkan suhu jaringan kulit dan membatasi kerusakan sel.
2. **Lepaskan Benda di Sekitar Luka:** Segera lepaskan jam tangan, cincin, atau pakaian ketat sebelum terjadi pembengkakan.
3. **Tutup dengan Kasa Steril Lembap:** Lindungi area luka menggunakan kasa steril bersih yang tidak lengket.
4. **Oleskan Salep Khusus Luka Bakar:** Bila tersedia, gunakan salep antibiotik atau gel aloe vera murni untuk melembapkan.

### Yang Dilarang Keras:
- Jangan gunakan air es atau kompres es batu karena dapat menyebabkan radang dingin (frostbite) dan merusak jaringan kulit lebih dalam.
- Jangan memecahkan gelembung luka bakar (blister) karena lapisan kulit tersebut adalah pelindung alami dari infeksi bakteri.
- Segera bawa ke IGD atau faskes terdekat bila luka bakar mengenai area wajah, sendi utama, atau area luka lebih besar dari telapak tangan.`,
    gambar: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80",
    kategori: "penyakit-pencegahan",
    tanggalTerbit: "2026-06-28T14:30:00Z",
    waktuBaca: 4,
    unggulan: false,
    tags: ["luka bakar", "pertolongan pertama", "P3K", "edukasi medis"],
    penulis: {
      nama: "dr. Andini Saraswati",
      gelar: "Dokter Umum & Edukator Kesehatan",
    },
  },
];

export function getArtikelBySlug(slug: string): Artikel | undefined {
  return artikelList.find((a) => a.slug === slug);
}

export function getArtikelUnggulan(): Artikel[] {
  return artikelList.filter((a) => a.unggulan);
}

export function getArtikelByKategori(kategoriSlug: string): Artikel[] {
  return artikelList.filter((a) => a.kategori === kategoriSlug);
}

export function getArtikelTerkait(currentSlug: string, kategoriSlug: string, limit = 3): Artikel[] {
  return artikelList
    .filter((a) => a.slug !== currentSlug && a.kategori === kategoriSlug)
    .slice(0, limit);
}
