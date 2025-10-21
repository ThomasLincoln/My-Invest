import { Request, Response } from "express";
import StockService from "../service/stockService";

export default class StockController {
  async getStockInfo(req: Request, res: Response) {
    const { ticker } = req.params;
    const stockService = new StockService();

    try {
      const stockData = await stockService.fetchStockData(ticker.toUpperCase());
      return res.json(stockData);
    } catch (error) {
      console.error("Error fetching stock data:", error.message);
      return res.status(500).json({message: "Erro ao buscar informações do ativo."})
    }
  }
}
