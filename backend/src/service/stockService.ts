import Brapi from 'brapi';

// Vamos criar a instância do brapi fora da classe, para que tenhamos apenas uma
// Algo como singleton pattern
const client = new Brapi({
  apiKey: process.env.BRAPI_API_KEY,
});

export default class StockService {
  async fetchStockData(ticker: string) {
    try {
      const stockData = await client.quote.retrieve(ticker);
      const stockInfo = stockData.results[0];
      if (!stockInfo) {
        throw new Error("Ativo não encontrado");
      }

      return {
        symbol: stockInfo.symbol,
        longName: stockInfo.longName,
        regularMarketPrice: stockInfo.regularMarketPrice,
        regularMarketChangePercent: stockInfo.regularMarketChangePercent,
        marketCap: stockInfo.marketCap,
        dividendYield: stockInfo.dividendsData
      };
    } catch (error) {
      console.error(`Brapi API error for ticker: ${ticker}:`, error.message);
      throw new Error("Não foi possível obter os dados do ativo na API externa.");
    }
  }
  async fetchStockTickers() {
    try {
      const stockData = await client.quote.list();
      if(!stockData){
        throw new Error("Erro ao capturar os ativos");

      }
      return stockData;
    } catch (error) {
      console.error(`Brapi API error for obtain all tickers:`, error.message);
      throw new Error("Não foi possível obter os dados dos ativos na API externa.");
    }
  }
}
