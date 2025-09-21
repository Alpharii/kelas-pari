# Pertemuan 3: Array & Looping

Membahas beberapa konsep dasar JavaScript seperti **looping, array multidimensi, while loop, manipulasi array, dan manipulasi string**.

---

## 1. Looping (Perulangan)

Contoh kode:
```js
let nama = "kalam"

// looping maju
for(let i = 0; i < nama.length; i++){
    console.log(nama[i])
}

// looping mundur
for(let i = nama.length - 1; i >= 0; i--){
    console.log(nama[i])
}
```

### Penjelasan:
- `for` digunakan untuk melakukan perulangan dengan inisialisasi, kondisi, dan increment/decrement.
- `nama.length` memberikan panjang string (jumlah karakter).
- `nama[i]` digunakan untuk mengambil karakter berdasarkan **index**.
- Index pada string/array selalu mulai dari **0**.

---

## 2. Array Multidimensi

Contoh kode:
```js
let arr = [["abc", "def"], ["hij", "klm"], ["zzz", "yyy", "xxx", "091"]]

// akses elemen
console.log(arr[0][0][0]) // 'a'

// looping
for(let i = 0; i < arr.length; i++){
    console.log("arr ke:", i, arr[i])
    for(let j = 0; j < arr[i].length; j++){
        console.log("arr(i) ke:", j, arr[i][j])
    }
}
```

### Penjelasan:
- Array bisa berisi **array lagi**, disebut array multidimensi.
- `arr[0]` → ambil array pertama.
- `arr[0][0]` → ambil elemen pertama dari array pertama.
- `arr[0][0][0]` → ambil karakter pertama dari string `"abc"`.
- Nested loop (for di dalam for) digunakan untuk membaca semua data di dalam array multidimensi.

---

## 3. While Loop

Contoh kode:
```js
let count = 1

while(count <= 3){
    console.log("Hitung: " + count)
    count++
}
```

### Penjelasan:
- `while` akan terus berjalan selama kondisi bernilai `true`.
- Cocok digunakan jika jumlah perulangan belum pasti.

Contoh infinite loop:
```js
let isTrue = true
let count = 1

while(isTrue === true){
    console.log("Hitung: " + count)
    count++
    if(count > 5){
        isTrue = false
    }
}
```
Jika kondisi tidak diubah, loop akan berjalan **selamanya**.

---

## 4. Manipulasi Array

Contoh kode:
```js
const lists = ["1", "2", "3"]

lists.push("4")  // menambahkan di akhir
console.log(lists)

lists.pop()      // menghapus dari akhir
console.log(lists)

console.log(lists.join(",")) // gabung jadi string "1,2,3"
```

### Penjelasan:
- `push()` → menambahkan elemen ke **akhir array**.
- `pop()` → menghapus elemen dari **akhir array**.
- `join(separator)` → menggabungkan array menjadi string.

---

## 5. Manipulasi String

Contoh kode:
```js
let nama = "kalam"

// split string jadi array
console.log(nama.split("")) 
// hasil: ["k", "a", "l", "a", "m"]

let namaAsal = "abcabcabc"
console.log(namaAsal.split("a"))
// hasil: ["", "bc", "bc", "bc"]
```

### Penjelasan:
- `split("")` → memecah string jadi array per karakter.
- `split("a")` → memecah string berdasarkan huruf `a`.

---

## Ringkasan

1. **Looping for** → bisa maju (`i++`) atau mundur (`i--`).  
2. **Array multidimensi** → gunakan nested loop untuk akses data.  
3. **While loop** → berjalan selama kondisi bernilai true, hati-hati infinite loop.  
4. **Array method**:  
   - `push()` → tambah data.  
   - `pop()` → hapus data terakhir.  
   - `join()` → gabungkan array jadi string.  
5. **String method**:  
   - `.split()` → pecah string jadi array.  
   - `.length` → panjang string/array.  
   - `nama[i]` → akses karakter berdasarkan index.  

---