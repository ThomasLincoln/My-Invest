// Esse arquivo é responsável por fazer o setup do express.js server
// Aplicar rotas e iniciar o servidor

// === Dependências ===
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/error.middleware";
import { userRouter } from "./routes/user.routes";
import "reflect-metadata";
dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler)
const { PORT = 3000 } = process.env;
app.use("/auth", userRouter);

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