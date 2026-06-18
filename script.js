// Data Kos - Struktur contoh yang bisa diisi nanti
const kosData = [
    // {
    //     id: 1,
    //     nama: "Kos Nyaman Depok",
    //     lokasi: "Depok",
    //     harga: 500000,
    //     jenis: "Kamar Mandi Pribadi",
    //     fasilitas: ["WiFi", "AC", "Lemari"],
    //     deskripsi: "Kos yang nyaman dan bersih dekat dengan universitas",
    //     rating: 4.5,
    //     kontak: "+62 812-3456-7890"
    // },
];

// State
let filteredData = [];
let currentFilter = {
    lokasi: '',
    harga: '',
    fasilitas: '',
    jenisKamar: '',
    search: ''
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('KosHub loaded. Struktur data kosong, siap untuk ditambahkan data kos.');
});

// Search Function
function searchKos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    currentFilter.search = searchInput;
    applyFilters();
}

// Apply Filters
function applyFilters() {
    currentFilter.lokasi = document.getElementById('filterLokasi').value;
    currentFilter.harga = document.getElementById('filterHarga').value;
    currentFilter.fasilitas = document.getElementById('filterFasilitas').value;
    currentFilter.jenisKamar = document.getElementById('filterJenisKamar').value;

    filteredData = kosData.filter(kos => {
        // Filter lokasi
        if (currentFilter.lokasi && kos.lokasi.toLowerCase() !== currentFilter.lokasi.toLowerCase()) {
            return false;
        }

        // Filter harga
        if (currentFilter.harga && kos.harga > parseInt(currentFilter.harga)) {
            return false;
        }

        // Filter fasilitas
        if (currentFilter.fasilitas) {
            const hasFacility = kos.fasilitas.some(f => 
                f.toLowerCase().includes(currentFilter.fasilitas.toLowerCase())
            );
            if (!hasFacility) {
                return false;
            }
        }

        // Filter jenis kamar
        if (currentFilter.jenisKamar) {
            const jenisMap = {
                '1': 'pribadi',
                '2': 'bersama',
                '3': 'studio'
            };
            if (!kos.jenis.toLowerCase().includes(jenisMap[currentFilter.jenisKamar])) {
                return false;
            }
        }

        // Filter search
        if (currentFilter.search) {
            const searchStr = currentFilter.search;
            return kos.nama.toLowerCase().includes(searchStr) ||
                   kos.lokasi.toLowerCase().includes(searchStr) ||
                   kos.deskripsi.toLowerCase().includes(searchStr) ||
                   kos.fasilitas.some(f => f.toLowerCase().includes(searchStr));
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
            <div class="kos-image">
                <i class="fas fa-home"></i>
            </div>
            <div class="kos-body">
                <h3 class="kos-title">${kos.nama}</h3>
                <div class="kos-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${kos.lokasi}</span>
                </div>
                <div class="kos-price">Rp ${formatHarga(kos.harga)}</div>
                <div class="kos-features">
                    ${kos.fasilitas.slice(0, 3).map(f => `
                        <span class="feature-tag">${f}</span>
                    `).join('')}
                    ${kos.fasilitas.length > 3 ? `
                        <span class="feature-tag">+${kos.fasilitas.length - 3}</span>
                    ` : ''}
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

// Show Modal
function showModal(kosId) {
    const kos = kosData.find(k => k.id === kosId);
    if (!kos) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2 class="modal-detail-title">${kos.nama}</h2>
        <p style="color: #64748b; margin-bottom: 10px;">
            <i class="fas fa-map-marker-alt"></i> ${kos.lokasi}
        </p>
        <div class="modal-detail-price">Rp ${formatHarga(kos.harga)}/bulan</div>

        <div class="modal-detail-section">
            <h3>Tipe Kamar</h3>
            <p>${kos.jenis}</p>
        </div>

        <div class="modal-detail-section">
            <h3>Deskripsi</h3>
            <p>${kos.deskripsi}</p>
        </div>

        <div class="modal-detail-section">
            <h3>Fasilitas</h3>
            <div class="modal-facilities">
                ${kos.fasilitas.map((f, index) => {
                    const icons = {
                        'WiFi': 'fa-wifi',
                        'AC': 'fa-wind',
                        'Lemari': 'fa-cabinet',
                        'Kamar Mandi Pribadi': 'fa-shower',
                        'Dapur': 'fa-utensils',
                        'Tempat Parkir': 'fa-car',
                        'Ruang Tamu': 'fa-couch',
                        'Keamanan 24 Jam': 'fa-shield-alt'
                    };
                    const iconClass = icons[f] || 'fa-check';
                    return `
                        <div class="modal-facility-item">
                            <i class="fas ${iconClass}"></i>
                            <span>${f}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="modal-detail-section">
            <h3>Rating</h3>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="color: #f59e0b;">
                    ${Array(Math.floor(kos.rating)).fill('<i class="fas fa-star"></i>').join('')}
                    ${kos.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                </div>
                <span style="font-weight: 700;">${kos.rating}/5</span>
            </div>
        </div>

        <div class="modal-detail-section">
            <h3>Kontak Pemilik</h3>
            <p>${kos.kontak}</p>
        </div>

        <div class="modal-buttons">
            <button class="btn-contact" onclick="hubungiPemilik('${kos.kontak}')">
                <i class="fas fa-phone"></i> Hubungi
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
    displayResults();
}

// Format Harga
function formatHarga(harga) {
    return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Contact Owner
function hubungiPemilik(nomor) {
    // Bisa menggunakan WhatsApp API atau hanya menampilkan nomor
    alert(`Hubungi pemilik kos di: ${nomor}\n\nAnda bisa menghubungi langsung atau mengirim WhatsApp.`);
}

// Close modal ketika klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('kosModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Tambah Kos (Fungsi untuk testing)
function tambahKos(kosObject) {
    kosData.push(kosObject);
    applyFilters();
}

// Contoh cara menambahkan data:
// tambahKos({
//     id: kosData.length + 1,
//     nama: "Kos Premium Jakarta",
//     lokasi: "Jakarta",
//     harga: 1500000,
//     jenis: "Studio",
//     fasilitas: ["WiFi", "AC", "Kamar Mandi Pribadi", "Dapur"],
//     deskripsi: "Kos studio modern dengan fasilitas lengkap",
//     rating: 4.8,
//     kontak: "+62 812-1111-2222"
// });
