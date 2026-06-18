# 🚀 Quick Start Guide - KosHub

## Langkah 1: Buka Aplikasi
1. Klik kanan pada file `index.html`
2. Pilih "Open with Live Server"
3. Browser akan otomatis membuka aplikasi di `http://localhost:5500`

## Langkah 2: Tambahkan Data Kos Pertama Anda

### Cara Cepat (dari Console Browser):

1. Buka Developer Console: Tekan `F12` atau `Right-click > Inspect`
2. Pergi ke tab `Console`
3. Copy-paste perintah ini:

```javascript
tambahKos({
    id: 1,
    nama: "Kos Depok Nyaman",
    lokasi: "Depok",
    harga: 500000,
    jenis: "Kamar Mandi Bersama",
    fasilitas: ["WiFi", "AC", "Lemari"],
    deskripsi: "Kos yang bagus untuk mahasiswa",
    rating: 4.5,
    kontak: "+62 812-1234-5678"
});
```

4. Tekan `Enter` - voila! Kos sudah muncul di halaman

### Cara Permanent (Edit File):

1. Buka file `script.js` dengan VS Code
2. Cari baris yang berisi `const kosData = [` (baris ~7)
3. Ubah menjadi:

```javascript
const kosData = [
    {
        id: 1,
        nama: "Kos Depok Nyaman",
        lokasi: "Depok",
        harga: 500000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "AC", "Lemari"],
        deskripsi: "Kos yang bagus untuk mahasiswa",
        rating: 4.5,
        kontak: "+62 812-1234-5678"
    },
    {
        id: 2,
        nama: "Kos Jakarta Premium",
        lokasi: "Jakarta",
        harga: 1500000,
        jenis: "Studio",
        fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Dapur"],
        deskripsi: "Kos mewah di pusat kota",
        rating: 4.8,
        kontak: "+62 812-9876-5432"
    }
];
```

4. Simpan file (Ctrl+S)
5. Refresh browser (F5) - data sudah tersimpan!

## Langkah 3: Test Fitur Search & Filter

### Search:
- Ketik di kotak search di bagian atas
- Coba ketik "Depok", "WiFi", atau "500000"
- Hasil akan otomatis update

### Filter:
- Pilih "Depok" di dropdown Lokasi
- Pilih "Rp 500.000" di dropdown Harga
- Hasil akan otomatis filter

### Reset:
- Klik tombol "Reset Filter" untuk kembali ke awal

## Langkah 4: Lihat Detail Kos
- Klik kartu kos atau tombol "Lihat Detail"
- Modal akan menampilkan info lengkap
- Klik "Hubungi" untuk kontak pemilik
- Klik "Tutup" untuk menutup modal

---

## 📚 Referensi Cepat

### Template Data Kos:
```javascript
{
    id: number,                    // 1, 2, 3, ...
    nama: "Nama Kos",              // Text
    lokasi: "Depok",               // Depok, Jakarta, Bogor, Tangerang
    harga: 500000,                 // Angka dalam Rupiah
    jenis: "Kamar Mandi Bersama",  // Pribadi, Bersama, atau Studio
    fasilitas: ["WiFi", "AC"],     // Array of strings
    deskripsi: "Deskripsi singkat", // 1-2 kalimat
    rating: 4.5,                   // 1.0 - 5.0
    kontak: "+62 812-1234-5678"    // Nomor telepon
}
```

### Fasilitas Populer:
WiFi, AC, Lemari, Kamar Mandi Pribadi, Dapur, Tempat Parkir, Ruang Tamu, Keamanan 24 Jam, Meja Belajar, TV Bersama, Balkon

### Lokasi Tersedia:
- Depok
- Jakarta  
- Bogor
- Tangerang

---

## 💡 Trik Profesional

**Bulk Add Data (Cara Cepat Tambah Banyak):**

Buka Console dan jalankan:

```javascript
const kosDataBanyak = [
    { id: 1, nama: "Kos 1", lokasi: "Depok", harga: 500000, jenis: "Kamar Mandi Bersama", fasilitas: ["WiFi"], deskripsi: "...", rating: 4.5, kontak: "+62 812-1234-5678" },
    { id: 2, nama: "Kos 2", lokasi: "Jakarta", harga: 1000000, jenis: "Studio", fasilitas: ["WiFi", "AC"], deskripsi: "...", rating: 4.7, kontak: "+62 812-2222-3333" }
];

kosDataBanyak.forEach(kos => tambahKos(kos));
```

---

## ✅ Checklist Pertama Kali:

- [ ] Buka `index.html` dengan Live Server
- [ ] Lihat halaman loaded dengan baik
- [ ] Tambahkan 1 data kos dari Console
- [ ] Verifikasi data muncul di halaman
- [ ] Test search dengan nama kos
- [ ] Test filter dengan lokasi
- [ ] Klik kartu untuk lihat detail
- [ ] Edit `script.js` dan tambah data permanent
- [ ] Refresh dan verifikasi data masih ada
- [ ] Customize warna (opsional)

---

## 🆘 Troubleshooting

**Q: Data tidak muncul setelah refresh**
A: Data dari Console tidak tersimpan. Anda harus edit `script.js` untuk permanent.

**Q: Styling tidak muncul dengan benar**
A: Pastikan `style.css` ada di folder yang sama dengan `index.html`.

**Q: Live Server tidak bekerja**
A: Install ekstensi "Live Server" dari VS Code Extensions.

**Q: Filter tidak bekerja**
A: Pastikan data sudah ditambahkan dan field data sesuai dengan filter options.

---

**Selamat! Anda sudah siap menggunakan KosHub! 🎉**

Untuk dokumentasi lengkap, baca file `KOSHUB_README.md`
