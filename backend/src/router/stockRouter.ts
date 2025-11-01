import { Router } from "express";
import { StockController } from "../controller/StockController";

const stockRouter = Router();
stockRouter.get("/getStockInfo", StockController.getStockInfo);
stockRouter.get("/getAllStocksPage", StockController.getAllStockTickers);

export default stockRouter;