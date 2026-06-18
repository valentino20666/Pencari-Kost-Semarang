# 🏠 KosHub - Web Pencari Kos Interaktif

Aplikasi web modern untuk mencari dan menemukan kos yang sesuai dengan kebutuhan dan budget Anda. Dibangun dengan HTML5, CSS3, dan JavaScript vanilla dengan desain yang menarik dan responsif.

## ✨ Fitur Utama

### 1. **Search dan Filter Canggih**
   - Pencarian berdasarkan nama kos, lokasi, dan fasilitas
   - Filter berdasarkan harga maksimal
   - Filter berdasarkan jenis kamar
   - Filter berdasarkan fasilitas spesifik
   - Reset filter dengan mudah

### 2. **Tampilan Kos yang Menarik**
   - Kartu kos dengan gradient yang eye-catching
   - Menampilkan informasi singkat (harga, lokasi, fasilitas)
   - Rating bintang untuk setiap kos
   - Hover effect yang smooth

### 3. **Modal Detail Lengkap**
   - Tampilan detail kos yang komprehensif
   - Semua fasilitas dengan ikon yang jelas
   - Rating dan ulasan
   - Tombol kontak langsung ke pemilik

### 4. **Responsive Design**
   - Tampilan sempurna di desktop, tablet, dan mobile
   - Navigation yang user-friendly
   - Modal yang responsif

### 5. **UI/UX Modern**
   - Gradient warna yang menarik (Indigo, Pink, Amber)
   - Animasi smooth untuk interaksi
   - Icons dari Font Awesome
   - Loading state yang jelas

## 📁 Struktur File

```
KosHub/
├── index.html         # File HTML utama
├── style.css         # Styling dan desain
├── script.js         # Logika aplikasi
├── data-contoh.js    # Contoh data kos
└── README.md         # File ini
```

## 🚀 Cara Menggunakan

### 1. **Membuka Aplikasi**
   - Buka file `index.html` di browser Anda
   - Atau gunakan Live Server di VS Code (Install ekstensi Live Server)

### 2. **Menambahkan Data Kos**
   
   **Opsi A: Menambah Data Satu Per Satu**
   ```javascript
   // Di dalam file script.js, di dalam array kosData, tambahkan:
   {
       id: 1,
       nama: "Kos Nyaman Depok",
       lokasi: "Depok",
       harga: 500000,
       jenis: "Kamar Mandi Bersama",
       fasilitas: ["WiFi", "AC", "Lemari"],
       deskripsi: "Kos yang nyaman dan bersih",
       rating: 4.5,
       kontak: "+62 812-3456-7890"
   }
   ```

   **Opsi B: Menggunakan Fungsi JavaScript (dari Console Browser)**
   ```javascript
   tambahKos({
       id: 1,
       nama: "Kos Premium Jakarta",
       lokasi: "Jakarta",
       harga: 1500000,
       jenis: "Studio",
       fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Dapur"],
       deskripsi: "Kos studio modern dengan fasilitas lengkap",
       rating: 4.8,
       kontak: "+62 812-1111-2222"
   });
   ```

### 3. **Menggunakan Fitur Pencarian**
   - Ketik di kotak pencarian di bagian hero
   - Atau gunakan filter di bawah
   - Klik "Cari" atau filter akan otomatis update hasil
   - Reset Filter untuk menghapus semua filter

### 4. **Lihat Detail Kos**
   - Klik kartu kos atau tombol "Lihat Detail"
   - Modal akan menampilkan informasi lengkap
   - Klik "Hubungi" untuk menghubungi pemilik
   - Klik "Tutup" atau area luar modal untuk menutup

## 🎨 Palet Warna

| Warna | Kode | Penggunaan |
|-------|------|-----------|
| Primary (Indigo) | #6366f1 | Header, tombol utama |
| Secondary (Pink) | #ec4899 | Accent, hover effects |
| Tertiary (Amber) | #f59e0b | Warning, reset button |
| Success (Green) | #10b981 | Status positif |
| Light BG | #f8fafc | Background utama |
| Dark BG | #0f172a | Footer |

## 🔧 Struktur Data Kos

Setiap kos harus memiliki struktur data berikut:

```javascript
{
    id: number,                    // ID unik
    nama: string,                  // Nama kos
    lokasi: string,                // Lokasi (Depok, Jakarta, Bogor, Tangerang)
    harga: number,                 // Harga dalam Rupiah
    jenis: string,                 // Jenis kamar
    fasilitas: array,              // Array fasilitas
    deskripsi: string,             // Deskripsi singkat
    rating: number,                // Rating 1-5
    kontak: string                 // Nomor telepon/WhatsApp
}
```

## 📋 Fasilitas yang Tersedia

- WiFi
- AC (Air Conditioning)
- Lemari
- Kamar Mandi Pribadi
- Dapur
- Tempat Parkir
- Ruang Tamu
- Keamanan 24 Jam
- Meja Belajar
- TV Bersama
- Balkon
- Ventilasi Baik
- Atau tambah fasilitas custom sesuai kebutuhan

## 🎯 Jenis Kamar

- Kamar Mandi Pribadi
- Kamar Mandi Bersama
- Studio

## 💡 Tips Penggunaan

1. **Untuk Development**
   - Gunakan Live Server di VS Code untuk live reload
   - Buka Developer Console (F12) untuk debugging
   - Gunakan fungsi `tambahKos()` dari console untuk testing cepat

2. **Untuk Menambah Data Massal**
   - Edit file `data-contoh.js`
   - Copy semua data dari array `kosDataContoh`
   - Paste ke dalam array `kosData` di `script.js`

3. **Customize Warna**
   - Edit CSS variables di `style.css` bagian `:root`
   - Ganti nilai hex code sesuai keinginan
   - Semua warna akan otomatis terupdate

4. **Tambah Fasilitas Baru**
   - Di `script.js`, cari object `icons` dalam function `showModal()`
   - Tambahkan pasangan fasilitas dan icon:
     ```javascript
     'Nama Fasilitas': 'fa-icon-name'
     ```

## 🌐 Font Awesome Icons

Project menggunakan Font Awesome 6.4.0. Cek [Font Awesome Icons](https://fontawesome.com/icons) untuk list icon yang tersedia.

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 480px - 768px
- Mobile: < 480px

## 🔐 Fitur Keamanan

- Input validation untuk pencarian
- XSS protection melalui innerHTML yang aman
- Modal locking untuk mencegah interaksi multiple modal

## 🚦 Status Development

- ✅ UI/UX Design selesai
- ✅ Filter dan search functionality
- ✅ Modal detail kos
- ✅ Responsive design
- ⏳ Data sample (masih kosong, siap untuk diisi)
- ⏳ Backend integration (opsional)
- ⏳ Database connection (opsional)

## 🤝 Cara Kontribusi

1. Tambahkan data kos ke array `kosData`
2. Customize warna sesuai brand Anda
3. Tambahkan fasilitas baru sesuai kebutuhan
4. Improve UI/UX dengan ide Anda sendiri

## 📝 Catatan Penting

- Data kos saat ini kosong dan siap untuk diisi
- Aplikasi berjalan full client-side (tidak perlu backend)
- Refresh halaman akan reset data (jika belum tersimpan ke localStorage)
- Semua data disimpan di JavaScript array

## 🎓 Cocok Untuk

- Portfolio project
- Learning purpose (HTML, CSS, JavaScript)
- Prototype aplikasi kos yang lebih besar
- Contoh implementasi filter dan search
- Training dan workshop

## 📞 Kontak & Support

Jika ada pertanyaan atau saran, silakan hubungi:
- Email: info@koshub.com
- Phone: +62 812-3456-7890

---

**Dibuat dengan ❤️ untuk memudahkan pencarian kos Anda**

**Selamat menggunakan KosHub! 🚀**
