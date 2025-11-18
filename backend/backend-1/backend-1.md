## Express.js Dasar

### 1. Apa itu Express.js?
Express.js adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dan REST API dengan cepat dan efisien. 

Fungsi Express.js:
- Menangani **request (permintaan)** dan **response (respon)** dari client.
- Membuat **routing** (jalur/endpoint API).
- Menambahkan **middleware** (fungsi tambahan seperti autentikasi, logging, parsing body JSON, dll).

---

### 2. Instalasi Express.js

#### Langkah 1 — Inisialisasi Project Node.js
Buat folder baru untuk project:
```bash
mkdir belajar-express
cd belajar-express
```

Inisialisasi `package.json`:
```bash
npm init -y
```

#### Langkah 2 — Install Express.js
```bash
npm install express
```

---

## 3. Membuat Server Pertama

Buat file `index.js` dan isi dengan kode berikut:

```js
const express = require("express");
const app = express(); // membuat instance aplikasi Express
const PORT = 3000;

// route dasar
app.get("/", (req, res) => {
res.send("Hello Express!");
});

// jalankan server
app.listen(PORT, () => {
console.log(`Server berjalan di http://localhost:${PORT}`);
});
```

### Penjelasan:
1. **`const express = require("express")`**
   → Mengimpor library Express.js.

2. **`const app = express()`**  
   → Membuat aplikasi server menggunakan Express.

3. **`app.get("/", callback)`**  
   → Membuat *route handler* untuk menangani **HTTP GET request** di URL root `/`.

   Callback itu memiliki dua parameter penting:
   - **`req` (request):** berisi data permintaan dari client, seperti query, parameter URL, dan body.
   - **`res` (response):** digunakan untuk mengirim respon kembali ke client.

   Contoh:  
   - Client membuka `http://localhost:3000`
   - Express menangani `GET /`
   - Server merespons `"Hello Express!"`

4. **`app.listen(PORT, callback)`**  
   → Menyalakan server agar siap menerima request.

---

## 3.5 Mengenal `req` dan `res` Lebih Dalam

### `req` (Request)
Objek yang menyimpan informasi tentang permintaan dari client.
Contohnya:
- `req.query` → parameter dari URL, misalnya `/users?name=budi`
- `req.params` → parameter dinamis dari path, misalnya `/users/:id`
- `req.body` → data JSON yang dikirim lewat method POST/PUT
- `req.method` → method HTTP (GET, POST, PUT, DELETE)
- `req.url` → URL yang diminta

### `res` (Response)
Objek yang digunakan untuk mengirim balasan ke client.
Contohnya:
- `res.send("pesan")` → kirim teks biasa
- `res.json({ message: "ok" })` → kirim JSON
- `res.status(404)` → ubah status HTTP sebelum mengirim respon

---

### 4. Setup Routing Dasar

Routing digunakan untuk menentukan endpoint mana yang menangani permintaan tertentu (GET, POST, PUT, DELETE).
Untuk sementara akan dicontohkan request dan response dengan hard code (bukan dari database) :

```js
const express = require("express");
const app = express();

app.use(express.json());

// GET — ambil data
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Bintang" }]);
});

// POST — tambah data
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User berhasil ditambahkan",
    data: user,
  });
});

// PUT — ubah data
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  res.json({
    message: `User dengan id ${id} berhasil diperbarui`,
    data: updated,
  });
});

// DELETE — hapus data
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User dengan id ${id} berhasil dihapus`,
  });
});

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
```

### Penjelasan:
- `app.get()` → menangani permintaan GET
- `app.post()` → menangani permintaan POST (biasanya untuk menambah data)
- `app.put()` → menangani permintaan PUT (update data)
- `app.delete()` → menangani permintaan DELETE (hapus data)


---

### 5. Struktur Folder Disarankan
Agar projectnya lebih teratur, disarankan untuk menggunakan struktur seperti ini:

```
belajar-express/
│
├── index.js
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
└── package.json
```

Contoh isi `routes/users.js`:
```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Daftar user"));
router.post("/", (req, res) => res.send("Tambah user"));

module.exports = router;
```

Lalu impor di `index.js`:
```js
const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
```

---

## 6. Membuat REST API CRUD Dasar

Tambahkan dukungan JSON agar server bisa menerima dan mengirim data format JSON.

```js
const express = require("express");
const app = express();
const PORT = 3000;

// middleware untuk parsing JSON body
app.use(express.json());

// Data sementara (dummy)
let users = [
  { id: 1, name: "Budi" },
  { id: 2, name: "Siti" },
];

// --- READ semua user ---
app.get("/users", (req, res) => {
  res.json(users);
});

// --- READ user by ID ---
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  res.json(user);
});

// --- CREATE user baru ---
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// --- UPDATE user ---
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  user.name = req.body.name;
  res.json(user);
});

// --- DELETE user ---
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "User berhasil dihapus" });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
```

### Penjelasan per route:
| Method | Endpoint | Keterangan | Contoh Response |
|:--|:--|:--|:--|
| GET | `/users` | Ambil semua user | `[{"id":1,"name":"Budi"},...]` |
| GET | `/users/:id` | Ambil 1 user berdasarkan ID | `{"id":1,"name":"Budi"}` |
| POST | `/users` | Tambah user baru | `{"id":3,"name":"Andi"}` |
| PUT | `/users/:id` | Update nama user tertentu | `{"id":2,"name":"Siti Baru"}` |
| DELETE | `/users/:id` | Hapus user tertentu | `{"message":"User berhasil dihapus"}` |

---

### 7. Testing API dengan Postman
Gunakan **Postman** atau **Thunder Client (VSCode Extension)** untuk mengetes endpoint:
- `GET /users` → Lihat semua user  
- `POST /users` → Tambah user  
- `PUT /users/:id` → Ubah user  
- `DELETE /users/:id` → Hapus user  

---

### 8. Kesimpulan
- Express.js mempermudah pembuatan server dan API.  
- Gunakan middleware seperti `express.json()` untuk parsing body request.  
- Pisahkan routing dan controller agar project mudah dikembangkan.  
- Gunakan tools seperti **nodemon** untuk hot-reload saat development (`npm install -D nodemon`).  

---

### 9. Bonus: Jalankan Otomatis dengan Nodemon
Tambahkan script di `package.json`:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Lalu jalankan:
```bash
npm run dev
```


## Penjelasan per Route

#### 1. GET `/users`
- **Tujuan:** Mengambil semua data user yang ada di dalam array `users`.
- **Cara kerja:** Server membaca isi array `users` dan mengembalikannya dalam format JSON.  
- **Contoh respons:**
  ```js
  [
    { "id": 1, "name": "Budi" },
    { "id": 2, "name": "Siti" }
  ]
  ```

#### 2. GET `/users/:id`
- **Tujuan:** Mengambil data satu user berdasarkan ID yang dikirim di URL.
- **Cara kerja:**  
  Express menangkap parameter `:id` dari URL menggunakan `req.params.id`.  
  Server mencari user yang sesuai di array `users`.  
  Jika ditemukan, datanya dikirim kembali dalam format JSON.  
  Jika tidak ditemukan, server mengirim status `404` dengan pesan error.
- **Contoh respons sukses:**
    ```js
  { "id": 1, "name": "Budi" }
    ```
- **Contoh respons gagal:**
    ```js
  { "message": "User tidak ditemukan" }
    ```

