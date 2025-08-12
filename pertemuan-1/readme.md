1. Deklarasi Variabel (let dan const)
Di JavaScript, untuk menyimpan data kita pakai variabel.

let → nilainya bisa diubah setelah dibuat.
const → nilainya tidak bisa diubah setelah dibuat.

Contoh:
```js
let umur = 18;    // bisa diubah
umur = 19;        // ini valid

const nama = "Bintang";  
// nama = "Andi"; // ❌ error, karena const tidak bisa diubah
```

2. Tipe Data
Tipe data yang dipakai di contoh ini:

String → teks, ditulis di antara "..." atau '...'
Number → angka, bisa bilangan bulat atau desimal
Boolean → true atau false (benar/salah)

Contoh:
```js
const nama = "bintang"; // String
const umur = 18;        // Number
const pelajar = true;   // Boolean
```

3. Output di Console
JavaScript punya console.log() untuk menampilkan data di terminal/console.

Ada 2 cara menggabungkan teks dan variabel:

- Concatenation (tanda +)
```js
console.log("Hai nama saya " + nama + " umur saya " + umur + " saya berasal dari " + asal);
```

- Template Literals (pakai backtick ` dan ${}) → lebih rapi
```js
console.log(`Hai nama saya ${nama} umur saya ${umur} saya berasal dari ${asal}`);
```

4. Operator Matematika
+ → penjumlahan
- → pengurangan
* → perkalian
/ → pembagian
% → modulus (sisa hasil bagi)

Contoh:
```js
const angka1 = 10;
const angka2 = 3;
console.log(angka1 + angka2); // 13
console.log(angka1 % angka2); // 1 → sisa dari 10 ÷ 3 adalah 1
```

5. Konversi Tipe Data (Type Conversion)
Kadang kita dapat data dalam bentuk string, padahal ingin memprosesnya sebagai angka.

Number("3") → mengubah string "3" menjadi angka 3
String(3) → mengubah angka 3 menjadi string "3"
Contoh:
```js
let angka = "3";
console.log(angka + 1); // "31" (string + number → digabungkan sebagai teks)

angka = Number(angka);
console.log(angka + 1); // 4 (karena sudah jadi number)
```

6. Modulus untuk Cek Ganjil/Genap
Modulus (%) sangat berguna untuk menentukan bilangan ganjil/genap.

Bilangan genap → angka % 2 === 0
Bilangan ganjil → angka % 2 === 1

Contoh:
```js
const input = 11;
const modulus = input % 2; // sisa pembagian 11 ÷ 2 → 1
console.log(modulus); // 1

const isSamaDengan0 = modulus === 0;
console.log(isSamaDengan0); // false (karena 1 bukan 0 → berarti ganjil)
```

7. Percabangan (If/Else)
Percabangan digunakan untuk menjalankan kode hanya jika kondisi tertentu terpenuhi.

Struktur dasar:
```js
if (kondisi) {
    // kode ini dijalankan jika kondisi benar
} else {
    // kode ini dijalankan jika kondisi salah
}
```

Contoh cek ganjil/genap:
```js
if (input % 2 === 0) {
    console.log("Angka genap");
} else {
    console.log("Angka ganjil");
}
```

Ringkasan Materi Permetuan 1 

- Buat variabel nama, umur, asal dengan const.
- Cetak teks gabungan menggunakan template literal dan concatenation.
- Pahami operasi matematika dan modulus.
- Lakukan konversi tipe data jika perlu (Number() dan String()).
- Pakai modulus untuk cek ganjil/genap.
- Gunakan if/else untuk memutuskan aksi berdasarkan hasil pengecekan.


Quiz Materi 1

```js
// 1. Apakah Angka Positif?
// Buat fungsi yang mengembalikan: (inputnya 1)

// "Positif" jika lebih dari 0
// "Negatif" jika kurang dari 0
// "Nol" jika sama dengan 



// 2. Lebih Besar atau Sama
// Buat fungsi yang membandingkan dua angka: (inputnya 2)

// Jika angka pertama lebih besar atau sama dengan angka kedua tampilkan angka pertama lebih besar
// dll
```