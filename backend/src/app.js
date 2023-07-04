import express from "express";
import CrudRoutes from "./routes/crud.routes.js"

const app = express();

app.set("port", 5000);

app.use(express.json());

app.use("/api/crud", CrudRoutes);

export default app;