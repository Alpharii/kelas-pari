// 4. Gabung String
// Buat fungsi yang menerima dua string dan menggabungkannya.
// Tampilkan juga panjang string hasil gabungan.
// Test case & output yang diharapkan:
// str1 = "halo", str2 = "dunia" → Gabungan: halodunia, Panjang: 9
// str1 = "a", str2 = "b"         → Gabungan: ab, Panjang: 2
// str1 = "123", str2 = "456"     → Gabungan: 123456, Panjang: 6

const str1 = "a"
const str2 = "b"

const str3 = str1 + str2
console.log(str3, "panjang:", str3.length)

// 5. Konversi Number → String → Number
// Buat fungsi yang menerima angka:
// - Ubah menjadi string, tampilkan panjangnya
// - Ubah kembali ke angka, tambahkan 1, tampilkan hasilnya
// Test case & output yang diharapkan:
// angka = 7        → Panjang string: 1, Hasil setelah +1: 8
// angka = 1000     → Panjang string: 4, Hasil setelah +1: 1001
// angka = 987654   → Panjang string: 6, Hasil setelah +1: 987655

let angka = 987654
const panjang = String(angka).length

const angkaBaru = angka + 1

console.log("panjang string:", panjang, "hasil setelah +1:", angkaBaru)


// 2. Cek Positif dan Genap
// Buat fungsi yang menerima angka dan mengembalikan:
// - "Positif dan genap" jika lebih dari 0 dan habis dibagi 2
// - "Positif" jika lebih dari 0
// - "Negatif" jika kurang dari 0
// - "Nol" jika sama dengan 0
// Test case & output yang diharapkan:
// input = -3  → Negatif
// input = 0   → Nol
// input = 7   → Positif
// input = 8   → Positif dan genap

const input = 8

if(input < 0){
    console.log("negatif")
} else if (input === 0){
    console.log("nol")
} else if(input > 0 && input % 2 === 0){
    console.log("positif & genap")
} else {
    console.log("positif")
}
