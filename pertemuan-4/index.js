// // Function (Fungsi)
// // Fungsi digunakan untuk mengelompokkan kode agar dapat digunakan kembali.
// // Fungsi dapat menerima parameter dan mengembalikan nilai (return).

// // Contoh kode:
// // function tambah(a, b){
// //     return a + b
// // }

// // let hasil = tambah(2, 3)
// // console.log(hasil) // 5

// // Penjelasan:
// // function tambah(a, b) mendefinisikan fungsi dengan dua parameter.
// // return digunakan untuk mengembalikan nilai dari fungsi.
// // Fungsi dapat dipanggil berulang kali dengan argumen berbeda.

// // ---

// // Function Expression
// // Selain menggunakan function, kita juga bisa menyimpan fungsi ke dalam variabel.

// // Contoh kode:
// // const kali = function(a, b){
// //     return a * b
// // }

// // console.log(kali(4, 5)) // 20


// // Penjelasan:
// // Fungsi ini anonim (tanpa nama) dan disimpan di variabel kali.
// // Cocok digunakan untuk callback atau fungsi singkat.

// // ---

// // Arrow Function
// // Arrow function adalah cara lebih ringkas untuk menulis fungsi.

// // // Contoh kode:
// // const kurang = (a, b) => a - b
// // console.log(kurang(10, 3)) // 7


// // Penjelasan:
// // Tidak perlu menulis function.
// // Jika hanya 1 baris dan langsung return, tidak perlu {} dan return.

// // --- 

// // Object (Objek)
// // Objek digunakan untuk menyimpan data dalam bentuk key-value pair.
// // Data di dalam objek bisa berupa string, number, array, bahkan function.

// // Contoh kode:
// // let orang = {
// //     nama: {
// //         namaDepan: "kenzo",
// //         namaBelakang: "belakang",
// //     },
// //     umur: 18,
// //     hobi: ["coding", "gaming"],
// //     sapa: function(){
// //         console.log(`Halo, nama saya ${this.nama.namaDepan} ${this.nama.namaBelakang}`)
// //     },
// // }

// // console.log(orang.nama.namaDepan)   // akses properti
// // orang.sapa()              // panggil method


// // Penjelasan:
// // Objek didefinisikan menggunakan {}.
// // Properti memiliki bentuk key: value.
// // this mengacu pada objek tempat method dipanggil.

// // ---

// // Akses dan Modifikasi Properti
// // Kita bisa mengakses atau mengubah properti objek dengan dua cara: dot notation dan bracket notation.

// // Contoh kode:
// // let mobil = {
// //     merk: "Toyota",
// //     warna: "Merah"
// // }

// // // akses properti
// // console.log(mobil.merk)     // "Toyota"
// // console.log(mobil["warna"]) // "Merah"

// // // ubah properti
// // mobil.warna = "Hitam"
// // mobil.tahun = 2020

// // console.log(mobil)


// // Penjelasan:
// // obj.key → cara umum untuk akses properti.
// // obj["key"] → digunakan jika nama key disimpan dalam variabel.

// // ---

// // Looping pada Object
// // Gunakan for...in untuk membaca semua isi object.

// // Contoh kode:
// // let buah = {
// //     nama: "Apel",
// //     warna: "Merah",
// //     harga: 5000
// // }

// // for(let key in buah){
// //     console.log(key + ": " + buah[key])
// // }


// // Penjelasan:
// // for...in membaca semua properti dalam objek.
// // buah[key] digunakan agar dapat diakses dinamis berdasarkan nama properti.

// // ---

// // Object di Dalam Array
// // Objek sering digunakan di dalam array, misalnya untuk daftar data.

// // Contoh kode:
// let siswa = [
//     { nama: "Idris", umur: 19 },
//     { nama: "Oom", umur: 17 },
//     { nama: "Kenzo", umur: 18 },
//     100
// ]

// for(let i = 0; i < siswa.length; i++){
//     if(siswa[i].nama !== undefined || siswa[i].umur !== undefined){
//         console.log(`${siswa[i].nama} berumur ${siswa[i].umur}`)
//     } else{
//         return "data invalid"
//     }
// }


// // Penjelasan:
// // Setiap elemen array adalah objek dengan properti nama dan umur.
// // Umum digunakan dalam data JSON dari API.
 
// // Object di Dalam Object (Nested Object)
// // Kita juga bisa menyimpan objek di dalam objek lain.

// // Contoh kode:
// let perusahaan = {
//     nama: "PT Maju Jaya",
//     alamat: {
//         jalan: "Jl. Merdeka No.1",
//         kota: "Jakarta",
//         kodePos: 12345
//     },
//     kontak: {
//         email: "info@majubersama.com",
//         telepon: "08123456789"
//     }
// }

// console.log(perusahaan.alamat.kota) // "Jakarta"
// console.log(perusahaan.kontak.email)

// // Penjelasan:
// // Gunakan titik berantai seperti obj.a.b.c untuk mengakses properti dalam objek bersarang.

// // ---

// // Menghapus Properti
// // Gunakan delete untuk menghapus properti dari objek.

// // Contoh kode:
// // let user = {
// //     username: "bintang",
// //     password: "12345",
// //     aktif: true
// // }

// // delete user.password


// // Penjelasan:
// // delete obj.key menghapus properti dari objek.

// // ---

// // Menyalin Objek
// // Untuk menyalin objek tanpa mengubah aslinya, gunakan spread operator atau Object.assign().

// // Contoh kode:
let produk = { nama: "Laptop", harga: 8000000 }
let salinan = { ...produk }

salinan.harga = 7500000

console.log('tes')

console.log(produk)  // 8000000 (tidak berubah)
console.log(salinan) // 7500000

console.log("produk 2",produk)


// // Penjelasan:
// // Spread operator (...obj) membuat salinan shallow copy dari objek.
// // Berguna untuk mencegah data asli ikut berubah.
// // Contoh Penggunaan Object Sehari-hari
// // Berikut beberapa contoh penggunaan objek di dunia nyata JavaScript:

// a. Data Pengguna Aplikasi
let user2 = {
    id: 101,
    nama: "Kalam",
    email: "kalam@example.com",
    status: "aktif"
}

console.log("Selamat datang, " + user2.nama)


// b. Menyimpan Data Produk
let produks = {
    id: "P001",
    nama: "Kopi Arabica",
    harga: 25000,
    stok: 30,
    deskripsi: "Kopi pilihan dari Aceh Gayo"
}

console.log(`Produks: ${produks.nama} (Rp${produks.harga})`)


// // c. Data Koordinat Lokasi
// let lokasi = {
//     latitude: -6.200000,
//     longitude: 106.816666
// }

// console.log(`Koordinat: ${lokasi.latitude}, ${lokasi.longitude}`)


// d. Konfigurasi Aplikasi
let config = {
    theme: "dark",
    language: "id",
    notifications: true
}

if(config.theme === "dark"){
    console.log("Mode gelap diaktifkan.")
}


// // e. Simulasi Transaksi Online
// let transaksi = {
//     id: "TX12345",
//     user: { nama: "Bintang", saldo: 500000 },
//     produk: { nama: "Keyboard", harga: 150000 },
//     bayar: function(){
//         if(this.user.saldo >= this.produk.harga){
//             this.user.saldo -= this.produk.harga
//             console.log("Pembayaran berhasil! Sisa saldo:", this.user.saldo)
//         } else {
//             console.log("Saldo tidak cukup!")
//         }
//     }
// }

// transaksi.bayar()


// // ---

// // Ringkasan
// // Object menyimpan data dalam bentuk key-value.
// // Bisa berisi string, number, array, atau function.
// // Dapat diakses dan dimodifikasi dengan . atau [].
// // Cocok digunakan untuk menyimpan data kompleks seperti pengguna, produk, transaksi, dll.
// // Gunakan for...in untuk membaca semua properti.
// // Gunakan delete untuk menghapus properti.
// // Gunakan spread operator ... untuk menyalin objek.