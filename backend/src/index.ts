import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import userRouter from "./router/userRouter"
const { PORT = 3000 } = process.env;

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(bodyParser.json())
    app.use("/api", userRouter)
    app.listen(PORT)
    console.log(`Express server has started on port ${PORT}. Open http://localhost:${PORT}/users to see results`)
}).catch(error => console.log(error))
