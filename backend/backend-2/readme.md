## Express + TypeScript + MySQL + CRUD (Create, Read, Delete)

Pada bagian ini kita akan belajar:
- Cara connect ke MySQL
- Cara mengambil data (GET)
- Cara menambah data (POST / CREATE)
- Cara menghapus data (DELETE)
- Struktur folder yang rapi
- Penjelasan detail tiap bagian

---

## 1. Install Dependensi

```bash
npm install express mysql2
npm install -D typescript ts-node @types/node @types/express nodemon dotenv
```

---

## 2. File `.env` (Info Database)

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=passwordmu
DB_NAME=nama_database
DB_PORT=3306
PORT=3000
```

---

## 3. Struktur Folder Project

```txt
project/
│ .env
│ package.json
│ .gitignore
│ tsconfig.json
└── src/
    │ server.ts
    ├── db.ts
    └── routes/
        └── user.route.ts
```

---

## 4. File `db.ts` (Koneksi Database)

```ts
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

// test connection
db.getConnection()
  .then(() => console.log("MySQL Connected"))
  .catch((err) => console.error("MySQL Error:", err));
```

---

## 5. File `user.route.ts` (Semua Endpoint CRUD)

```ts
import { Router, Request, Response } from "express";
import { db } from "../db";

const router = Router();

/* 
  GET /users
  Mengambil semua data user
*/
router.get("/", async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database query error" });
  }
});

/* 
  POST /users
  Menambah user baru (CREATE)
  body: { "name": "Bintang" }
*/
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name wajib diisi" });
    }

    const [result]: any = await db.query(
      "INSERT INTO users (name) VALUES (?)",
      [name]
    );

    res.status(201).json({
      message: "User created",
      userId: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: "Database insert error" });
  }
});

/* 
  DELETE /users/:id
  Menghapus user berdasarkan ID
*/
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result]: any = await db.query(
      "DELETE FROM users WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User tidak ditemukan" });
    }

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: "Database delete error" });
  }
});

export default router;
```

---

## 6. File `server.ts` (Main Server)

```ts
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// daftar route
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
```

---

## 7. Script di package.json

```json
"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

## 8. Contoh Query untuk Membuat Table MySQL

Pastikan kamu punya tabel `users`:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```

---

## 9. Cara Menguji Endpoint (coba di postman/thunder client)

### GET semua user
```bash
curl http://localhost:3000/users
```

### CREATE user
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Bintang"}'
```

### DELETE user
```bash
curl -X DELETE http://localhost:3000/users/1
```

---

## Penjelasan

### ➤ `db.ts`
Membuat *connection pool* ke MySQL.

### ➤ `user.route.ts`
Berisi logika program agar file `server.ts` tetap bersih dan rapi.

- **GET** → mengambil semua data
- **POST** → menambah data
- **DELETE** → menghapus berdasarkan ID
