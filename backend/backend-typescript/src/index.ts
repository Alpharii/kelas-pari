import express from "express";
import { db } from "./config/db";
import userRouter from "./routes/user.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// test connection
db.getConnection()
  .then(() => console.log("MySQL Connected"))
  .catch((err) => console.error("MySQL Error:", err));

// daftar route
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});