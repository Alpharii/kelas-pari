## Cara Menggunakan Express TypeScript

1. Inisialisasi Project

```bash
npm init -yc
```

2. Install Dependensi

```bash
npm install express
npm install -D typescript ts-node @types/node @types/express nodemon
```

3. Inisialisasi TypeScript

```bash
npx tsc --init
```

4. Contoh tsconfig.json

```js
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

5. Struktur Folder

```
your-project/
│ package.json
│ tsconfig.json
└───src/
    │ server.ts
    └── routes/
```

6. File server.ts

```js
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello dari TypeScript + Express!");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
```

7. Tambah Script di package.json

```js
"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

8. Menjalankan Server

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm start
```
