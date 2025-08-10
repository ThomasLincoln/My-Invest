// Esse arquivo é responsável por fazer o setup do express.js server
// Aplicar rotas e iniciar o servidor

// === Dependências ===
import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { User } from "./entity/User.entity";
import "reflect-metadata";
import { error } from "console";
dotenv.config();

const app = express();
app.use(express.json());
// Falta error handler
const { PORT = 3000 } = process.env;
// Faltam as rotas do usuário

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
})

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT)
    });
    console.log("Data source has been initialized");
  })
  .catch((error) => console.log(error));