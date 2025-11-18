## Cara Membuat Server Express + TypeScript + MySQL + ENV

1. **Install Dependensi**

```bash
npm install express mysql2
npm install -D typescript ts-node @types/node @types/express nodemon dotenv
```

2. **Buat File `.env`**

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nama_database
DB_PORT=3306
PORT=3000
```

3. **Update tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```

4. **Struktur Folder**

```txt
project/
│ .env
│ package.json
│ tsconfig.json
└── src/
    │ server.ts
    └── db.ts
```

5. **File `db.ts` – Koneksi ke MySQL**

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

6. **File `server.ts`**

```ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// contoh endpoint get users
app.get("/users", async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database query error" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
```

7. **Scripts di package.json**

```json
"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

8. **Menjalankan Server**

Mode development:

```bash
npm run dev
```

Build TypeScript:

```bash
npm run build
```

Jalankan hasil build:

```bash
npm start
```
