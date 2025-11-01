import { Request, Response } from "express";
import StockService from "../service/stockService";

export class StockController {
  static async getStockInfo(req: Request, res: Response) {
    console.log(req)
    const { ticker } = req.body;
    const stockService = new StockService();

    try {
      const stockData = await stockService.fetchStockData(ticker.toUpperCase());
      return res.json(stockData);
    } catch (error) {
      console.error("Error fetching stock data:", error.message);
      return res.status(500).json({message: "Erro ao buscar informações do ativo."})
    }
  }
  static async getAllStockTickers(req: Request, res: Response){
    const stockService = new StockService();
    try {
      const stockData = await stockService.fetchStockTickers();
      return res.json(stockData);
    } catch (error){
      console.error("Error fetching stock data:", error.message);
      return res.status(500).json({message: "Error ao buscar informações "})
    }
  }
  
}
