import express from "express";
import router from "./routes/user.route.js";

const app = express();
const port = 3000;

app.use(express.json());

// Routing
app.use("/user", router);

app.get("/halo", (req, res) => {
    console.log("/halo sedang di get");
    res.send("halo");
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
