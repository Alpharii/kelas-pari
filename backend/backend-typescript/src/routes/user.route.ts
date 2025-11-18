import { Request, Response, Router } from "express";
import { db } from "../config/db";

const userRouter = Router()

userRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query("SELECT * FROM users"); //5 detik
    res.json(rows); //jalan
  } catch (err) {
    res.status(500).json({ error: "Database query error" });
  }
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database query error" });
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Name dan password wajib diisi" });
    }

    const [result]: any = await db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password],
    );

    res.status(201).json({
      message: "User created",
      userId: result.insertId,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Database insert error" });
  }
});


export default userRouter;
