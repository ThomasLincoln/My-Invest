import { Router } from "express";
import StockController from "../controller/StockController";
import { authMiddleware } from "../middleware/authMiddleware";

const stockRouter = Router();
stockRouter.get("/")