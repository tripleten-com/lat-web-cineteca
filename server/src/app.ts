import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { createUser } from "./controllers/users.js";
import { errorHandler } from "./middleware/error-handler.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT ?? 3001;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión a MongoDB", err));

app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? "http://localhost:3000" }));
app.use(express.json());

app.post("/signup", createUser);

app.use((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
