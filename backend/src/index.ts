import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(bodyParser.json())
    app.listen(3000)
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")
}).catch(error => console.log(error))
