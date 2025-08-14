import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import userRouter from "./router/userRouter"

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(bodyParser.json())
    app.use("/api", userRouter)
    app.listen(3000)
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
}).catch(error => console.log(error))
