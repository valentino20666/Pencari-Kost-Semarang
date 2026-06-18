// Contoh Data Kos yang sudah diisi
// Copy semua data di bawah ini ke dalam array kosData di file script.js

const kosDataContoh = [
    {
        id: 1,
        nama: "Kos Nyaman Depok",
        lokasi: "Depok",
        harga: 500000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "AC", "Lemari", "Meja Belajar"],
        deskripsi: "Kos yang nyaman dan bersih, dekat dengan universitas dan pusat perbelanjaan. Cocok untuk mahasiswa/mahasiswi.",
        rating: 4.5,
        kontak: "+62 812-3456-7890"
    },
    {
        id: 2,
        nama: "Kos Premium Jakarta",
        lokasi: "Jakarta",
        harga: 1500000,
        jenis: "Kamar Mandi Pribadi",
        fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Dapur", "Tempat Parkir"],
        deskripsi: "Kos studio modern dengan fasilitas lengkap, lokasi strategis di pusat kota. Ideal untuk profesional muda.",
        rating: 4.8,
        kontak: "+62 812-1111-2222"
    },
    {
        id: 3,
        nama: "Kos Terjangkau Bogor",
        lokasi: "Bogor",
        harga: 400000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "Lemari", "Ruang Tamu"],
        deskripsi: "Kos ekonomis dengan suasana homey. Lingkungan yang aman dan tenang, sempurna untuk siswa/i.",
        rating: 4.2,
        kontak: "+62 812-3333-4444"
    },
    {
        id: 4,
        nama: "Kos Modern Tangerang",
        lokasi: "Tangerang",
        harga: 1000000,
        jenis: "Studio",
        fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Dapur", "Ruang Tamu", "Keamanan 24 Jam"],
        deskripsi: "Studio modern dengan desain minimalis, lokasi dekat dengan area komersial dan transportasi umum.",
        rating: 4.6,
        kontak: "+62 812-5555-6666"
    },
    {
        id: 5,
        nama: "Kos Eksklusif Depok",
        lokasi: "Depok",
        harga: 800000,
        jenis: "Kamar Mandi Pribadi",
        fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Lemari", "Balkon"],
        deskripsi: "Kos dengan standar ekslusif, dilengkapi balkon pribadi untuk rileks. Fasilitas premium dengan harga kompetitif.",
        rating: 4.7,
        kontak: "+62 812-7777-8888"
    },
    {
        id: 6,
        nama: "Kos Ramah Jakarta",
        lokasi: "Jakarta",
        harga: 750000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "AC", "Ruang Tamu", "Dapur", "TV Bersama"],
        deskripsi: "Kos yang ramah dengan komunitas penghuni yang solid. Sering diadakan acara kebersamaan dan gathering.",
        rating: 4.3,
        kontak: "+62 812-9999-0000"
    },
    {
        id: 7,
        nama: "Kos Berkualitas Bogor",
        lokasi: "Bogor",
        harga: 600000,
        jenis: "Kamar Mandi Pribadi",
        fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Lemari Besar"],
        deskripsi: "Kos berkualitas dengan manajemen yang profesional dan layanan kebersihan yang terjaga.",
        rating: 4.4,
        kontak: "+62 812-1122-3344"
    },
    {
        id: 8,
        nama: "Kos Sejahtera Tangerang",
        lokasi: "Tangerang",
        harga: 550000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "Lemari", "Ventilasi Baik"],
        deskripsi: "Kos yang terjangkau dan nyaman dengan lokasi strategis dekat transportasi publik.",
        rating: 4.1,
        kontak: "+62 812-5544-6677"
    }
];

/* 
CARA MENGGUNAKAN:

1. Buka file script.js
2. Cari array kosData yang berada di bagian awal file
3. Hapus comment jika ada, atau copy semua data dari kosDataContoh di atas
4. Paste ke dalam array kosData di script.js

Contoh format setelah menambahkan data:

const kosData = [
    {
        id: 1,
        nama: "Kos Nyaman Depok",
        lokasi: "Depok",
        harga: 500000,
        jenis: "Kamar Mandi Bersama",
        fasilitas: ["WiFi", "AC", "Lemari", "Meja Belajar"],
        deskripsi: "Deskripsi kos...",
        rating: 4.5,
        kontak: "+62 812-3456-7890"
    },
    // ... kos lainnya
];

PENJELASAN FIELD:
- id: Nomor unik untuk setiap kos
- nama: Nama kos
- lokasi: Kota/wilayah kos
- harga: Harga sewa per bulan (dalam Rupiah)
- jenis: Jenis kamar (Kamar Mandi Pribadi, Kamar Mandi Bersama, atau Studio)
- fasilitas: Array dari fasilitas yang tersedia
- deskripsi: Deskripsi singkat tentang kos
- rating: Rating dari 1-5 bintang
- kontak: Nomor telepon/WhatsApp pemilik kos

FASILITAS YANG TERSEDIA:
- WiFi
- AC
- Lemari
- Kamar Mandi Pribadi
- Dapur
- Tempat Parkir
- Ruang Tamu
- Keamanan 24 Jam
- Meja Belajar
- TV Bersama
- Balkon
- dll (bisa tambah sendiri sesuai kebutuhan)
*/
