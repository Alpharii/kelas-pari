// Quiz
// 1 — Data Transaksi & Total Harga
// Deskripsi:
// Diberikan array berisi daftar transaksi berikut:

// let transaksi = [
//   { nama: "Keyboard", harga: 200000, qty: 2 },
//   { nama: "Mouse", harga: 100000, qty: 3 },
//   { nama: "Monitor", harga: 1500000, qty: 1 }
// ];


// Instruksi:
// Buat fungsi hitungTotal(transaksi) yang:
// Mengembalikan total seluruh pembelian (harga * qty tiap produk).
// Tampilkan total harga di console.

// Output yang diharapkan:
// Total belanja: 2,200,000


// (Gunakan reduce() atau looping biasa — bebas)


// 2 — Filter dan Sortir Data Siswa
// Deskripsi:
// Diberikan data berikut:

// let siswa = [
//   { nama: "Budi", nilai: 85 },
//   { nama: "Ani", nilai: 70 },
//   { nama: "Siti", nilai: 90 },
//   { nama: "Tono", nilai: 65 }
// ];


// Instruksi:
// Buat fungsi saringDanUrutkan(data) yang:
// Mengembalikan array siswa yang nilainya ≥ 75.
// Hasil disusun urut dari nilai tertinggi ke terendah.
// Cetak hasilnya ke console dengan format:

// Siti - 90
// Budi - 85
// Ani - 70 :x: (tidak ditampilkan karena < 75)


// Output yang diharapkan:

// Siti - 90
// Budi - 85



// 3 — Nested Object dan Function
// Deskripsi:
// Diberikan data perusahaan berikut:

// let perusahaan = {
//   nama: "PT Inovasi Teknologi",
//   karyawan: [
//     { nama: "Kenzo", gaji: 5000000 },
//     { nama: "Oom", gaji: 4500000 },
//     { nama: "Idris", gaji: 6000000 }
//   ],
//   hitungTotalGaji: function() {
//     // tulis logika di sini
//   }
// };


// Instruksi:
// Lengkapi fungsi hitungTotalGaji() agar:
// Mengembalikan total seluruh gaji karyawan.

// Tampilkan hasil dengan format:
// Total gaji semua karyawan: 15,500,000
 
// 4 — Gabungkan Dua Array of Object
// Deskripsi:
// Diberikan dua array data pelanggan:

// let pelangganBaru = [
//   { id: 1, nama: "Bintang" },
//   { id: 2, nama: "Kalam" }
// ];

// let pelangganLama = [
//   { id: 3, nama: "Rudi" },
//   { id: 4, nama: "Dewi" }
// ];


// Instruksi:
// Buat fungsi gabungPelanggan(arr1, arr2) yang:
// Mengembalikan array gabungan dari keduanya.
// Setelah digabung, tambahkan properti baru status: "aktif" ke setiap pelanggan.
// Cetak hasil akhir.

// Output yang diharapkan:
// [
//   { id: 1, nama: "Bintang", status: "aktif" },
//   { id: 2, nama: "Kalam", status: "aktif" },
//   { id: 3, nama: "Rudi", status: "aktif" },
//   { id: 4, nama: "Dewi", status: "aktif" }
// ]


// 5 — Ranking Nilai Ujian
// Deskripsi:
// Diberikan array nilai ujian:

// let nilaiUjian = [
//   { nama: "Kenzo", nilai: [80, 85, 90] },
//   { nama: "Oom", nilai: [60, 70, 65] },
//   { nama: "Idris", nilai: [88, 90, 92] }
// ];


// Instruksi:
// Buat fungsi ranking(nilaiUjian) yang:
// Menghitung rata-rata setiap siswa.
// Mengurutkan siswa dari rata-rata tertinggi ke terendah.

// Menampilkan hasil dalam format:
// Idris - Rata-rata: 90.00
// Kenzo - Rata-rata: 85.00
// Oom - Rata-rata: 65.00
// 6 — Data Sekolah & Nilai Siswa (Nested Object + Array)
// Deskripsi:
// Diberikan data sekolah berikut:

// let sekolah = {
//   nama: "SMK Negeri 2 Palembang",
//   kelas: [
//     {
//       nama: "X RPL 1",
//       siswa: [
//         { nama: "Bintang", nilai: 85 },
//         { nama: "Rafi", nilai: 90 },
//         { nama: "Zahra", nilai: 78 }
//       ]
//     },
//     {
//       nama: "X RPL 2",
//       siswa: [
//         { nama: "Adit", nilai: 88 },
//         { nama: "Lia", nilai: 95 },
//         { nama: "Rina", nilai: 92 }
//       ]
//     }
//   ]
// }


// Instruksi:
// Buat fungsi rataRataKelas(sekolah) yang:
// Menghitung rata-rata nilai tiap kelas.

// Menampilkan hasil dengan format:
// X RPL 1 - Rata-rata: 84.33
// X RPL 2 - Rata-rata: 91.67


// Hitung juga rata-rata seluruh sekolah, dan tampilkan:
// Rata-rata seluruh sekolah: 88.00

// Output yang diharapkan:
// X RPL 1 - Rata-rata: 84.33
// X RPL 2 - Rata-rata: 91.67
// Rata-rata seluruh sekolah: 88.00



// 7 — Data Perusahaan & Proyek (Array of Nested Object)
// Deskripsi:
// Diberikan data perusahaan berikut:

// let perusahaan = [
//   {
//     nama: "PT Teknologi Nusantara",
//     proyek: [
//       { nama: "Sistem Absensi", status: "selesai", biaya: 50000000 },
//       { nama: "Aplikasi Kasir", status: "proses", biaya: 30000000 }
//     ]
//   },
//   {
//     nama: "PT Inovasi Maju",
//     proyek: [
//       { nama: "Website E-Commerce", status: "selesai", biaya: 80000000 },
//       { nama: "Mobile Banking", status: "selesai", biaya: 100000000 }
//     ]
//   }
// ]


// Instruksi:
// Buat fungsi laporanProyek(data) yang:
// Menampilkan daftar semua proyek yang status-nya "selesai".
// Menampilkan total biaya dari proyek-proyek selesai.

// Format tampilan:
// PT Teknologi Nusantara - Sistem Absensi (Rp50,000,000)
// PT Inovasi Maju - Website E-Commerce (Rp80,000,000)
// PT Inovasi Maju - Mobile Banking (Rp100,000,000)

// Total biaya proyek selesai: Rp230,000,000