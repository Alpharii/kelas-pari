Penjelasan Materi JavaScript
membahas beberapa konsep dasar JavaScript seperti scope, operator logika, string manipulation, dan konversi tipe data.

1. Scope (Cakupan Variabel)
Contoh kode:
```js
let temp = ""
if(true){
    let nama = "bintang"
}

console.log(nama)
```

Penjelasan:

let memiliki block scope, artinya variabel hanya dapat diakses di dalam {} tempat variabel itu dibuat.

Pada contoh di atas, variabel nama hanya berlaku di dalam blok if(true).
Jika mencoba mengakses nama di luar blok, akan terjadi error: ReferenceError.

2. Operator Logika
a. && (AND)
```js
let input = 2;
if(input > 0 && input % 2 === 0){
console.log("input adalah positif dan bilangan genap");
}
```

Kondisi hanya true jika kedua syarat benar.

input > 0 → cek apakah positif

input % 2 === 0 → cek apakah genap

Jika keduanya benar → akan menampilkan pesan.

b. || (OR)
```js
if(input > 0 || input % 2 === 0){
console.log("input adalah positif atau bilangan genap");
}
```

Kondisi true jika salah satu atau keduanya benar.

Cocok untuk membuat syarat lebih fleksibel.

3. Manipulasi String
```js
let str = "abc";
str += "abc"; // hasil: "abcabc"

const length = str.length; // panjang string
console.log('panjang str= ' + length);

const hurufPertama = str[5]; // ambil karakter ke-6 (index mulai dari 0)
console.log(hurufPertama);

console.log(str);

if(str === "abcaba"){
console.log("input adalah abcabc");
}
```

+= digunakan untuk menambah string.

.length untuk mendapatkan panjang string.

str[index] untuk mengambil karakter berdasarkan posisi.

Perbandingan string (===) sensitif terhadap urutan huruf.

4. Konversi Tipe Data
```js
let angka = 12345;
angka = String(angka); // ubah number → string

const angkalen = angka.length; // panjang string
console.log(angka.length);

angka = Number(angka); // ubah kembali ke number
angka += 1;

console.log(angka = ${angka} panjang = ${angkalen});
```

String() → ubah angka menjadi string.

Number() → ubah string menjadi angka.

.length hanya bisa digunakan pada string atau array.

Ringkasan
let memiliki block scope → variabel hanya bisa digunakan di dalam bloknya.

&& → kedua kondisi harus benar.

|| → minimal satu kondisi benar.

String bisa dimanipulasi dengan +=, .length, dan indeks.

Bisa mengubah tipe data dengan String() dan Number().

