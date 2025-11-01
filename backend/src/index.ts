import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors";
import { AppDataSource } from "./data-source"
import userRouter from "./router/userRouter"
import { errorHandler } from "./middleware/ErrorMiddleware";
import * as cookieParser from "cookie-parser";
import stockRouter from "./router/stockRouter";

const { PORT = 3000 } = process.env;

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(cookieParser());
    app.use(cors({ origin: "http://localhost:5173" }));
    app.use(errorHandler);
    app.use("/api", userRouter)
    app.use("/stock", stockRouter)
    app.listen(PORT)
    console.log(`Express server has started on port ${PORT}. Open http://localhost:${PORT}/users to see results`)
}).catch(error => console.log(error))
