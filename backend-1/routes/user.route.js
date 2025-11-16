import { Router } from "express";
import { getUsers, createUser } from "../controller/userController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
