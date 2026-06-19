// Data Kos untuk UNDIP Tembalang
const kosData = [
    {
        id: 1,
        nama: "Kos Sirojudin Asri",
        lokasi: "Sirojudin",
        alamat: "Jalan Sirojudin No. 12, Tembalang",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Sirojudin%20No.%2012%20Tembalang&z=16",
        harga: 850000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "Laundry"],
        deskripsi: "Kos nyaman dekat UNDIP FISIP dan FH, cocok untuk mahasiswa wanita dengan layanan lengkap.",
        rating: 4.6,
        ulasan: 62,
        whatsapp: "+6281234567890",
        kontak: "+62 812-3456-7890",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "3 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "7 menit", motor: "3 menit" },
            { nama: "FT UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FEB UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FK UNDIP", jalanKaki: "18 menit", motor: "10 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 2,
        nama: "Kos Sirojudin Ceria",
        lokasi: "Sirojudin",
        alamat: "Perumahan Sirojudin Indah Blok B5",
        mapsUrl: "https://maps.google.com/maps?q=Perumahan%20Sirojudin%20Indah%20Blok%20B5%20Tembalang&z=16",
        harga: 780000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "WiFi", "Laundry"],
        deskripsi: "Kos campuran modern, akses mudah ke UNDIP dan pusat kuliner Tembalang.",
        rating: 4.4,
        ulasan: 48,
        whatsapp: "+6281345678901",
        kontak: "+62 813-4567-8901",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "5 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "9 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 3,
        nama: "Kos Sirojudin Harmoni",
        lokasi: "Sirojudin",
        alamat: "Jalan Sirojudin Raya No. 8",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Sirojudin%20Raya%20No.%208%20Tembalang&z=16",
        harga: 820000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria dekat UNDIP dengan keamanan 24 jam dan fasilitas laundry penuh.",
        rating: 4.5,
        ulasan: 55,
        whatsapp: "+6281456789012",
        kontak: "+62 814-5678-9012",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "4 menit", motor: "3 menit" },
            { nama: "FH UNDIP", jalanKaki: "8 menit", motor: "4 menit" },
            { nama: "FT UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FEB UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FK UNDIP", jalanKaki: "19 menit", motor: "10 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 4,
        nama: "Kos Sigawe Residence",
        lokasi: "Sigawe",
        alamat: "Jalan Sigawe No. 2, Tembalang",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Sigawe%20No.%202%20Tembalang&z=16",
        harga: 900000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "Laundry"],
        deskripsi: "Kos campuran premium di Sigawe dekat kampus dan fasilitas umum.",
        rating: 4.7,
        ulasan: 70,
        whatsapp: "+6281567890123",
        kontak: "+62 815-6789-0123",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 5,
        nama: "Kos Sigawe Sejuk",
        lokasi: "Sigawe",
        alamat: "Kompleks Sigawe Indah No. 10",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Sigawe%20Indah%20No.%2010%20Tembalang&z=16",
        harga: 820000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita asri dengan akses cepat ke transportasi dan area kuliner Tembalang.",
        rating: 4.3,
        ulasan: 48,
        whatsapp: "+6281678901234",
        kontak: "+62 816-7890-1234",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "24 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 6,
        nama: "Kos Sigawe Hijau",
        lokasi: "Sigawe",
        alamat: "Gg. Sigawe 3 No. 4",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Sigawe%203%20No.%204%20Tembalang&z=16",
        harga: 760000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria modern dengan akses cepat ke UNDIP dan sarana transportasi.",
        rating: 4.5,
        ulasan: 53,
        whatsapp: "+6281789012345",
        kontak: "+62 817-8901-2345",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 7,
        nama: "Kos Banjarsari Friendly",
        lokasi: "Banjarsari",
        alamat: "Jalan Banjarsari No. 18",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Banjarsari%20No.%2018%20Tembalang&z=16",
        harga: 790000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos strategis di Banjarsari dengan suasana hangat dan aman.",
        rating: 4.2,
        ulasan: 38,
        whatsapp: "+6281890123456",
        kontak: "+62 818-9012-3456",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "8 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FEB UNDIP", jalanKaki: "20 menit", motor: "11 menit" },
            { nama: "FK UNDIP", jalanKaki: "23 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 8,
        nama: "Kos Banjarsari Modern",
        lokasi: "Banjarsari",
        alamat: "Kompleks Banjarsari Sejahtera No. 5",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Banjarsari%20Sejahtera%20No.%205%20Tembalang&z=16",
        harga: 880000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita elegan dengan akses cepat ke UNDIP dan pusat belanja kecil.",
        rating: 4.8,
        ulasan: 76,
        whatsapp: "+6281901234567",
        kontak: "+62 819-0123-4567",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 9,
        nama: "Kos Banjarsari Aman",
        lokasi: "Banjarsari",
        alamat: "Gg. Banjarsari 7 No. 11",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Banjarsari%207%20No.%2011%20Tembalang&z=16",
        harga: 800000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria dengan keamanan CCTV 24 jam dan lingkungan yang tenang.",
        rating: 4.3,
        ulasan: 44,
        whatsapp: "+6281912345678",
        kontak: "+62 819-1234-5678",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "8 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FEB UNDIP", jalanKaki: "20 menit", motor: "11 menit" },
            { nama: "FK UNDIP", jalanKaki: "23 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 10,
        nama: "Kos Gondang Nyaman",
        lokasi: "Gondang",
        alamat: "Jalan Gondang No. 22",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Gondang%20No.%2022%20Tembalang&z=16",
        harga: 820000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran tenang di Gondang dengan lingkungan hijau dan dekat akses bus kampus.",
        rating: 4.1,
        ulasan: 35,
        whatsapp: "+6281923456789",
        kontak: "+62 819-2345-6789",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "5 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "9 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "13 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "16 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "19 menit", motor: "11 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 11,
        nama: "Kos Gondang Asri",
        lokasi: "Gondang",
        alamat: "Kompleks Gondang Indah No. 3",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Gondang%20Indah%20No.%203%20Tembalang&z=16",
        harga: 860000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita nyaman dengan desain minimalis dan pelayanan ramah.",
        rating: 4.6,
        ulasan: 67,
        whatsapp: "+6281934567890",
        kontak: "+62 819-3456-7890",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "21 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 12,
        nama: "Kos Gondang Ringan",
        lokasi: "Gondang",
        alamat: "Gg. Gondang Permai No. 6",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Gondang%20Permai%20No.%206%20Tembalang&z=16",
        harga: 780000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria modern dengan akses cepat ke UNDIP dan sarana transportasi.",
        rating: 4.3,
        ulasan: 41,
        whatsapp: "+6281945678901",
        kontak: "+62 819-4567-8901",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 13,
        nama: "Kos Mulawarman Smart",
        lokasi: "Mulawarman",
        alamat: "Jalan Mulawarman No. 1",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Mulawarman%20No.%201%20Tembalang&z=16",
        harga: 830000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran dengan desain minimalis dan akses mudah ke UNDIP dan kampus lain.",
        rating: 4.4,
        ulasan: 52,
        whatsapp: "+6281956789012",
        kontak: "+62 819-5678-9012",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "5 menit", motor: "3 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 14,
        nama: "Kos Mulawarman Ceria",
        lokasi: "Mulawarman",
        alamat: "Kompleks Mulawarman No. 7",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Mulawarman%20No.%207%20Tembalang&z=16",
        harga: 770000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita di Mulawarman dekat kedai dan transportasi kampus.",
        rating: 4.5,
        ulasan: 49,
        whatsapp: "+6281967890123",
        kontak: "+62 819-6789-0123",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FEB UNDIP", jalanKaki: "20 menit", motor: "11 menit" },
            { nama: "FK UNDIP", jalanKaki: "24 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 15,
        nama: "Kos Mulawarman Kahyangan",
        lokasi: "Mulawarman",
        alamat: "Gg. Mulawarman No. 3",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Mulawarman%20No.%203%20Tembalang&z=16",
        harga: 810000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria dengan suasana tenang dan layanan keamanan 24 jam.",
        rating: 4.4,
        ulasan: 57,
        whatsapp: "+6281978901234",
        kontak: "+62 819-7890-1234",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 16,
        nama: "Kos Banyumanik Santai",
        lokasi: "Banyumanik",
        alamat: "Jalan Banyumanik No. 20",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Banyumanik%20No.%2020%20Tembalang&z=16",
        harga: 880000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran elegan dekat UNDIP dan terminal transportasi Banyumanik.",
        rating: 4.7,
        ulasan: 63,
        whatsapp: "+6281989012345",
        kontak: "+62 819-8901-2345",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "21 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 17,
        nama: "Kos Banyumanik Cerdas",
        lokasi: "Banyumanik",
        alamat: "Kompleks Banyumanik No. 6",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Banyumanik%20No.%206%20Tembalang&z=16",
        harga: 820000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita minimalis dengan lingkungan aman dan fasilitas premium.",
        rating: 4.5,
        ulasan: 61,
        whatsapp: "+6281990123456",
        kontak: "+62 819-9012-3456",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 18,
        nama: "Kos Banyumanik Nyaman",
        lokasi: "Banyumanik",
        alamat: "Gg. Banyumanik 4 No. 9",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Banyumanik%204%20No.%209%20Tembalang&z=16",
        harga: 760000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria ramah dengan lingkungan yang nyaman dan layanan terbaik.",
        rating: 4.3,
        ulasan: 42,
        whatsapp: "+6282001234567",
        kontak: "+62 820-0123-4567",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "23 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 19,
        nama: "Kos Baskoro Cerah",
        lokasi: "Baskoro",
        alamat: "Jalan Baskoro No. 5",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Baskoro%20No.%205%20Tembalang&z=16",
        harga: 840000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran modern dengan akses mudah menuju semua fakultas UNDIP.",
        rating: 4.5,
        ulasan: 58,
        whatsapp: "+6282012345678",
        kontak: "+62 820-1234-5678",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 20,
        nama: "Kos Baskoro Tenang",
        lokasi: "Baskoro",
        alamat: "Kompleks Baskoro Hijau No. 4",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Baskoro%20Hijau%20No.%204%20Tembalang&z=16",
        harga: 810000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita minimalis, aman, dan nyaman untuk mahasiswa UNDIP.",
        rating: 4.6,
        ulasan: 65,
        whatsapp: "+6282023456789",
        kontak: "+62 820-2345-6789",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 21,
        nama: "Kos Baskoro Prima",
        lokasi: "Baskoro",
        alamat: "Gg. Baskoro 1 No. 7",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Baskoro%201%20No.%207%20Tembalang&z=16",
        harga: 770000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria dengan fasilitas lengkap dan ruangan nyaman untuk belajar.",
        rating: 4.2,
        ulasan: 40,
        whatsapp: "+6282034567890",
        kontak: "+62 820-3456-7890",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "8 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "23 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 22,
        nama: "Kos Ngesrep Harmoni",
        lokasi: "Ngesrep",
        alamat: "Jalan Ngesrep Timur No. 9",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Ngesrep%20Timur%20No.%209%20Tembalang&z=16",
        harga: 830000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran yang tenang dekat jalan utama dan fasilitas UNDIP.",
        rating: 4.3,
        ulasan: 46,
        whatsapp: "+6282045678901",
        kontak: "+62 820-4567-8901",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 23,
        nama: "Kos Ngesrep Manis",
        lokasi: "Ngesrep",
        alamat: "Kompleks Ngesrep Gold No. 2",
        mapsUrl: "https://maps.google.com/maps?q=Kompleks%20Ngesrep%20Gold%20No.%202%20Tembalang&z=16",
        harga: 780000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita simpel dengan biaya inklusif dan akses mudah ke fakultas.",
        rating: 4.6,
        ulasan: 60,
        whatsapp: "+6282056789012",
        kontak: "+62 820-5678-9012",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 24,
        nama: "Kos Ngesrep Respati",
        lokasi: "Ngesrep",
        alamat: "Gg. Ngesrep 6 No. 12",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Ngesrep%206%20No.%2012%20Tembalang&z=16",
        harga: 760000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria ramah dengan lingkungan yang nyaman dan layanan terbaik.",
        rating: 4.3,
        ulasan: 43,
        whatsapp: "+6282067890123",
        kontak: "+62 820-6789-0123",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 25,
        nama: "Kos Sumurboto Asri",
        lokasi: "Sumurboto",
        alamat: "Jalan Sumurboto No. 14",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Sumurboto%20No.%2014%20Tembalang&z=16",
        harga: 840000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran dekat UNDIP dengan nuansa modern dan fasilitas lengkap.",
        rating: 4.5,
        ulasan: 54,
        whatsapp: "+6282078901234",
        kontak: "+62 820-7890-1234",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 26,
        nama: "Kos Sumurboto Ikhlas",
        lokasi: "Sumurboto",
        alamat: "Perum Sumurboto No. 8",
        mapsUrl: "https://maps.google.com/maps?q=Perum%20Sumurboto%20No.%208%20Tembalang&z=16",
        harga: 780000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita dekat kampus dengan akses cepat ke jalan utama dan makanan.",
        rating: 4.5,
        ulasan: 59,
        whatsapp: "+6282089012345",
        kontak: "+62 820-8901-2345",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 27,
        nama: "Kos Sumurboto Hebat",
        lokasi: "Sumurboto",
        alamat: "Gg. Sumurboto 2 No. 10",
        mapsUrl: "https://maps.google.com/maps?q=Gg.%20Sumurboto%202%20No.%2010%20Tembalang&z=16",
        harga: 760000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria fungsional dengan harga terjangkau dan lingkungan nyaman.",
        rating: 4.2,
        ulasan: 39,
        whatsapp: "+6282090123456",
        kontak: "+62 820-9012-3456",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "8 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "12 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "16 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "19 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "23 menit", motor: "13 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 28,
        nama: "Kos Baskoro Indah",
        lokasi: "Area Lain Tembalang",
        alamat: "Jalan Kebon Agung No. 13",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Kebon%20Agung%20No.%2013%20Tembalang&z=16",
        harga: 800000,
        jenis: "Kos Campuran",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "CCTV"],
        deskripsi: "Kos campuran strategis dekat area perumahan dan akses kampus UNDIP.",
        rating: 4.4,
        ulasan: 47,
        whatsapp: "+6282101234567",
        kontak: "+62 821-0123-4567",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "6 menit", motor: "4 menit" },
            { nama: "FH UNDIP", jalanKaki: "10 menit", motor: "5 menit" },
            { nama: "FT UNDIP", jalanKaki: "14 menit", motor: "7 menit" },
            { nama: "FEB UNDIP", jalanKaki: "17 menit", motor: "9 menit" },
            { nama: "FK UNDIP", jalanKaki: "20 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 29,
        nama: "Kos Mulawarman Baru",
        lokasi: "Area Lain Tembalang",
        alamat: "Jalan Jagal No. 15",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Jagal%20No.%2015%20Tembalang&z=16",
        harga: 770000,
        jenis: "Khusus Wanita",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "WiFi", "Parkir", "Laundry"],
        deskripsi: "Kos wanita modern dengan konsep minimalis dan harga terjangkau.",
        rating: 4.3,
        ulasan: 42,
        whatsapp: "+6282112345678",
        kontak: "+62 821-1234-5678",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    },
    {
        id: 30,
        nama: "Kos Ngesrep Ceria",
        lokasi: "Area Lain Tembalang",
        alamat: "Jalan Beringin No. 4",
        mapsUrl: "https://maps.google.com/maps?q=Jalan%20Beringin%20No.%204%20Tembalang&z=16",
        harga: 790000,
        jenis: "Khusus Pria",
        fasilitas: ["AC", "Kamar Mandi dalam", "Dapur", "Parkir", "CCTV", "WiFi"],
        deskripsi: "Kos pria praktis dengan akses mudah ke kampus dan pusat perbelanjaan.",
        rating: 4.2,
        ulasan: 37,
        whatsapp: "+6282123456789",
        kontak: "+62 821-2345-6789",
        fakultas: [
            { nama: "FISIP UNDIP", jalanKaki: "7 menit", motor: "5 menit" },
            { nama: "FH UNDIP", jalanKaki: "11 menit", motor: "6 menit" },
            { nama: "FT UNDIP", jalanKaki: "15 menit", motor: "8 menit" },
            { nama: "FEB UNDIP", jalanKaki: "18 menit", motor: "10 menit" },
            { nama: "FK UNDIP", jalanKaki: "22 menit", motor: "12 menit" }
        ],
        pembayaran: ["Setiap bulan", "Setiap 3 bulan", "Setiap semester", "Setiap tahun"],
        biayaTermasuk: ["Token listrik", "Air", "WiFi"],
        aturan: ["Kos 24 jam", "Boleh membawa teman/tamu menginap", "Boleh membawa hewan"],
    }
];

// Pastikan semua kos memiliki field alamat database tambahan dan foto kamar
kosData.forEach(kos => {
    if (!kos.nama_kos) kos.nama_kos = kos.nama;
    if (!kos.daerah) kos.daerah = kos.lokasi;
    if (!kos.kecamatan) kos.kecamatan = "Tembalang";
    if (!kos.kota) kos.kota = "Semarang";
    if (!kos.image) kos.image = `https://picsum.photos/seed/kos${kos.id}/640/420`;
});

// State
let filteredData = [];
let savedKosIds = new Set();
const savedKosKey = 'koshubSavedKos';
let currentFilter = {
    lokasi: '',
    harga: '',
    fasilitas: '',
    jenisKamar: '',
    search: ''
};

function loadSavedKos() {
    try {
        const saved = JSON.parse(localStorage.getItem(savedKosKey) || '[]');
        savedKosIds = new Set(Array.isArray(saved) ? saved : []);
    } catch (error) {
        savedKosIds = new Set();
    }
}

function saveSavedKos() {
    localStorage.setItem(savedKosKey, JSON.stringify([...savedKosIds]));
}

function isSaved(kosId) {
    return savedKosIds.has(kosId);
}

function toggleKeep(kosId) {
    if (isSaved(kosId)) {
        savedKosIds.delete(kosId);
    } else {
        savedKosIds.add(kosId);
    }
    saveSavedKos();
    displayResults();
    displaySaved();
    const modal = document.getElementById('kosModal');
    if (modal.style.display === 'block') {
        showModal(kosId);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadSavedKos();
    applyFilters();
    displaySaved();
});

// Search Function
function searchKos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    currentFilter.search = searchInput;
    applyFilters();
}

// Set filter based on area tags in the lokasi section
function setAreaFilter(area) {
    document.getElementById('filterLokasi').value = area;
    applyFilters();
}

// Apply Filters
function applyFilters() {
    currentFilter.lokasi = document.getElementById('filterLokasi').value;
    currentFilter.harga = document.getElementById('filterHarga').value;
    currentFilter.fasilitas = document.getElementById('filterFasilitas').value;
    currentFilter.jenisKamar = document.getElementById('filterJenisKamar').value;

    filteredData = kosData.filter(kos => {
        if (currentFilter.lokasi && kos.lokasi !== currentFilter.lokasi) {
            return false;
        }

        if (currentFilter.harga && kos.harga > parseInt(currentFilter.harga, 10)) {
            return false;
        }

        if (currentFilter.fasilitas) {
            const hasFacility = kos.fasilitas.some(f => f.toLowerCase() === currentFilter.fasilitas.toLowerCase());
            if (!hasFacility) {
                return false;
            }
        }

        if (currentFilter.jenisKamar && kos.jenis !== currentFilter.jenisKamar) {
            return false;
        }

        if (currentFilter.search) {
            const searchStr = currentFilter.search;
            return kos.nama_kos.toLowerCase().includes(searchStr) ||
                   kos.nama.toLowerCase().includes(searchStr) ||
                   kos.daerah.toLowerCase().includes(searchStr) ||
                   kos.kecamatan.toLowerCase().includes(searchStr) ||
                   kos.kota.toLowerCase().includes(searchStr) ||
                   kos.lokasi.toLowerCase().includes(searchStr) ||
                   kos.alamat.toLowerCase().includes(searchStr) ||
                   kos.deskripsi.toLowerCase().includes(searchStr) ||
                   kos.fasilitas.some(f => f.toLowerCase().includes(searchStr)) ||
                   kos.jenis.toLowerCase().includes(searchStr);
        }

        return true;
    });

    displayResults();
}

// Display Results
function displayResults() {
    const resultCount = document.getElementById('resultCount');
    const kosGrid = document.getElementById('kosGrid');

    resultCount.textContent = filteredData.length;

    if (filteredData.length === 0) {
        kosGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>Tidak ada kos yang sesuai dengan pencarian Anda</p>
            </div>
        `;
        return;
    }

    kosGrid.innerHTML = filteredData.map(kos => `
        <div class="kos-card" onclick="showModal(${kos.id})">
            <button class="btn-keep ${isSaved(kos.id) ? 'saved' : ''}"
                    onclick="event.stopPropagation(); toggleKeep(${kos.id})">
                <i class="fas fa-bookmark"></i>
                ${isSaved(kos.id) ? 'Tersimpan' : 'Simpan'}
            </button>
            <div class="kos-image">
                <img src="${kos.image}" alt="Foto kamar ${kos.nama}">
            </div>
            <div class="kos-body">
                <h3 class="kos-title">${kos.nama}</h3>
                <div class="kos-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${kos.lokasi}</span>
                </div>
                <div class="kos-price">Rp ${formatHarga(kos.harga)}</div>
                <div class="kos-features">
                    ${kos.fasilitas.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('')}
                    ${kos.fasilitas.length > 3 ? `<span class="feature-tag">+${kos.fasilitas.length - 3}</span>` : ''}
                </div>
                <p class="kos-description">${kos.deskripsi}</p>
                <div class="kos-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${kos.rating}</span>
                    </div>
                    <button class="btn-detail" onclick="event.stopPropagation(); showModal(${kos.id})">
                        Lihat Detail
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function displaySaved() {
    const savedGrid = document.getElementById('savedGrid');
    const savedCount = document.getElementById('savedCount');
    const compareBtn = document.getElementById('compareBtn');
    const savedKos = kosData.filter(kos => isSaved(kos.id));

    savedCount.textContent = savedKos.length;

    if (savedKos.length === 0) {
        savedGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>Belum ada kos yang disimpan. Klik ikon simpan pada kos yang menarik.</p>
            </div>
        `;
        compareBtn.style.display = 'none';
        return;
    }

    if (savedKos.length >= 2) {
        compareBtn.style.display = 'inline-block';
    } else {
        compareBtn.style.display = 'none';
    }

    savedGrid.innerHTML = savedKos.map(kos => `
        <div class="saved-card" onclick="showModal(${kos.id})">
            <h4>${kos.nama}</h4>
            <p>${kos.lokasi} • Rp ${formatHarga(kos.harga)}</p>
            <button onclick="event.stopPropagation(); toggleKeep(${kos.id})">Hapus Simpanan</button>
        </div>
    `).join('');
}

// Show Modal
function showModal(kosId) {
    const kos = kosData.find(k => k.id === kosId);
    if (!kos) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${kos.image}" alt="Foto kamar ${kos.nama}">
        </div>
        <h2 class="modal-detail-title">${kos.nama}</h2>
        <p class="modal-location"><i class="fas fa-map-marker-alt"></i> ${kos.lokasi} - ${kos.daerah}, ${kos.kecamatan}, ${kos.kota}</p>
        <p class="modal-address"><strong>Alamat:</strong> ${kos.alamat}</p>
        <a class="modal-map-link" href="${kos.mapsUrl}" target="_blank" rel="noreferrer">
            <i class="fas fa-location-arrow"></i> Lihat di Google Maps
        </a>
        <div class="modal-detail-price">Rp ${formatHarga(kos.harga)}/bulan</div>

        <div class="modal-detail-section">
            <h3>Jenis Kos</h3>
            <p>${kos.jenis}</p>
        </div>

        <div class="modal-detail-section">
            <h3>Deskripsi</h3>
            <p>${kos.deskripsi}</p>
        </div>

        <div class="modal-detail-section">
            <h3>Fasilitas</h3>
            <div class="modal-facilities">
                ${kos.fasilitas.map(f => `
                    <div class="modal-facility-item">
                        <i class="fas fa-check"></i>
                        <span>${f}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-detail-section">
            <h3>Rating & Ulasan</h3>
            <div class="rating-summary">
                <div class="rating-stars">${renderStars(kos.rating)}</div>
                <span>${kos.rating.toFixed(1)}/5 • ${kos.ulasan} ulasan</span>
            </div>
        </div>

        <div class="modal-detail-section">
            <h3>Jarak ke Fakultas UNDIP</h3>
            <div class="faculty-grid">
                ${kos.fakultas.map(f => `
                    <div class="faculty-item">
                        <strong>${f.nama}</strong>
                        <span>${f.jalanKaki} berjalan kaki</span>
                        <span>${f.motor} naik motor</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-detail-section">
            <h3>Pembayaran</h3>
            <ul class="payment-list">
                ${kos.pembayaran.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-detail-section">
            <h3>Biaya Termasuk</h3>
            <ul class="payment-list">
                ${kos.biayaTermasuk.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-detail-section">
            <h3>Aturan Kos</h3>
            <ul class="payment-list">
                ${kos.aturan.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-detail-section">
            <h3>Kontak Pemilik</h3>
            <p>${kos.kontak}</p>
        </div>

        <div class="modal-buttons">
            <button class="btn-keep-modal ${isSaved(kos.id) ? 'saved' : ''}" onclick="toggleKeep(${kos.id})">
                <i class="fas fa-bookmark"></i>
                ${isSaved(kos.id) ? 'Tersimpan' : 'Simpan'}
            </button>
            <button class="btn-contact" onclick="hubungiPemilik('${kos.whatsapp}')">
                <i class="fab fa-whatsapp"></i> Hubungi via WhatsApp
            </button>
            <button class="btn-cancel" onclick="closeModal()">
                Tutup
            </button>
        </div>
    `;

    document.getElementById('kosModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('kosModal').style.display = 'none';
}

// Reset Filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterLokasi').value = '';
    document.getElementById('filterHarga').value = '';
    document.getElementById('filterFasilitas').value = '';
    document.getElementById('filterJenisKamar').value = '';
    
    currentFilter = {
        lokasi: '',
        harga: '',
        fasilitas: '',
        jenisKamar: '',
        search: ''
    };

    filteredData = [];
    applyFilters();
}

// Format Harga
function formatHarga(harga) {
    return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Contact Owner
function hubungiPemilik(nomor) {
    const cleanNumber = nomor.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let output = '';
    for (let i = 0; i < fullStars; i++) {
        output += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        output += '<i class="fas fa-star-half-alt"></i>';
    }
    return output;
}

// ==================== FITUR PERBANDINGAN KOS ====================

let selectedForCompare = new Set();
const compareKey = 'koshubCompareSelection';

function loadCompareSelection() {
    try {
        const saved = JSON.parse(localStorage.getItem(compareKey) || '[]');
        selectedForCompare = new Set(Array.isArray(saved) ? saved.map(Number) : []);
    } catch (error) {
        selectedForCompare = new Set();
    }
}

function saveCompareSelection() {
    localStorage.setItem(compareKey, JSON.stringify([...selectedForCompare]));
}

function updateCompareModalActions() {
    const compareBtn = document.querySelector('.btn-compare-show');
    if (!compareBtn) return;
    compareBtn.innerHTML = `<i class="fas fa-balance-scale"></i> Tampilkan Perbandingan (${selectedForCompare.size})`;
    compareBtn.disabled = selectedForCompare.size < 2;
}

function renderCompareSelection() {
    const compareBody = document.getElementById('compareBody');
    const savedKos = kosData.filter(kos => isSaved(kos.id));

    let html = `
        <h2>Pilih Kos untuk Dibandingkan</h2>
        <p style="color: #64748b; margin-bottom: 1rem;">Pilih 2-4 kos untuk dibandingkan (maksimal 4 kos)</p>
        <div class="compare-selection-grid">
    `;

    savedKos.forEach(kos => {
        const isSelected = selectedForCompare.has(kos.id);
        html += `
            <div class="compare-selection-card ${isSelected ? 'selected' : ''}">
                <input type="checkbox" 
                       id="select-${kos.id}" 
                       ${isSelected ? 'checked' : ''}
                       onchange="toggleCompareSelection(${kos.id})">
                <label for="select-${kos.id}">
                    <img src="${kos.image}" alt="${kos.nama}">
                    <h4>${kos.nama}</h4>
                    <p>${kos.lokasi}</p>
                    <p style="font-weight: bold; color: var(--primary-color);">Rp ${formatHarga(kos.harga)}</p>
                </label>
            </div>
        `;
    });

    html += `
        </div>
        <div class="compare-buttons">
            <button class="btn-compare-show" 
                    onclick="showComparison()"
                    ${selectedForCompare.size < 2 ? 'disabled' : ''}>
                <i class="fas fa-balance-scale"></i> Tampilkan Perbandingan (${selectedForCompare.size})
            </button>
            <button class="btn-cancel" onclick="closeCompareModal()">
                Tutup
            </button>
        </div>
    `;

    compareBody.innerHTML = html;
}

function toggleCompareSelection(kosId) {
    if (selectedForCompare.has(kosId)) {
        selectedForCompare.delete(kosId);
    } else {
        if (selectedForCompare.size < 4) {
            selectedForCompare.add(kosId);
        } else {
            alert('Maksimal bandingkan 4 kos sekaligus');
            return;
        }
    }
    saveCompareSelection();
    displaySaved();
    if (document.getElementById('compareModal').style.display === 'block') {
        renderCompareSelection();
    }
}

function openCompareModal() {
    const savedKos = kosData.filter(kos => isSaved(kos.id));
    
    if (savedKos.length === 0) {
        alert('Tidak ada kos yang disimpan untuk dibandingkan');
        return;
    }

    renderCompareSelection();
    document.getElementById('compareModal').style.display = 'block';
}

function showComparison() {
    if (selectedForCompare.size < 2) {
        alert('Pilih minimal 2 kos untuk dibandingkan');
        return;
    }

    const selectedKos = kosData.filter(kos => selectedForCompare.has(kos.id));
    const compareBody = document.getElementById('compareBody');

    let html = `
        <button class="btn-back" onclick="openCompareModal()">
            <i class="fas fa-arrow-left"></i> Kembali ke Pilihan
        </button>
        <h2>Perbandingan Kos</h2>
        <div class="compare-table-wrapper">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Aspek</th>
                        ${selectedKos.map(kos => `<th>${kos.nama}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="compare-label"><strong>Lokasi</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.lokasi}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Jenis Kos</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.jenis}</td>`).join('')}
                    </tr>
                    <tr class="compare-highlight">
                        <td class="compare-label"><strong>Harga</strong></td>
                        ${selectedKos.map(kos => `<td>Rp ${formatHarga(kos.harga)}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Rating</strong></td>
                        ${selectedKos.map(kos => `<td>${renderStars(kos.rating)} ${kos.rating}/5</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Jumlah Ulasan</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.ulasan} ulasan</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Fasilitas</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.fasilitas.join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Biaya Termasuk</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.biayaTermasuk.join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Jarak FISIP UNDIP</strong></td>
                        ${selectedKos.map(kos => {
                            const fisip = kos.fakultas.find(f => f.nama === 'FISIP UNDIP');
                            return `<td>${fisip ? fisip.jalanKaki + ' (jalan), ' + fisip.motor + ' (motor)' : 'N/A'}</td>`;
                        }).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Jarak FH UNDIP</strong></td>
                        ${selectedKos.map(kos => {
                            const fh = kos.fakultas.find(f => f.nama === 'FH UNDIP');
                            return `<td>${fh ? fh.jalanKaki + ' (jalan), ' + fh.motor + ' (motor)' : 'N/A'}</td>`;
                        }).join('')}
                    </tr>
                    <tr>
                        <td class="compare-label"><strong>Deskripsi</strong></td>
                        ${selectedKos.map(kos => `<td>${kos.deskripsi}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="compare-cards">
    `;

    selectedKos.forEach(kos => {
        html += `
            <div class="compare-detail-card">
                <img src="${kos.image}" alt="${kos.nama}">
                <h3>${kos.nama}</h3>
                <p class="compare-price">Rp ${formatHarga(kos.harga)}/bulan</p>
                <p>${kos.lokasi}</p>
                <button class="btn-detail" onclick="showModal(${kos.id})">Lihat Detail Lengkap</button>
                <button class="btn-contact" onclick="hubungiPemilik('${kos.whatsapp}')">
                    <i class="fab fa-whatsapp"></i> Hubungi
                </button>
            </div>
        `;
    });

    html += `
        </div>
        <div class="compare-buttons" style="margin-top: 2rem;">
            <button class="btn-back" onclick="openCompareModal()">
                <i class="fas fa-arrow-left"></i> Ubah Pilihan
            </button>
            <button class="btn-cancel" onclick="closeCompareModal()">
                Tutup
            </button>
        </div>
    `;

    compareBody.innerHTML = html;
}

function closeCompareModal() {
    document.getElementById('compareModal').style.display = 'none';
    selectedForCompare.clear();
    saveCompareSelection();
}

// Close compare modal ketika klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('kosModal');
    const compareModal = document.getElementById('compareModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === compareModal) {
        compareModal.style.display = 'none';
    }
};

// Load compare selection saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadCompareSelection();
});
