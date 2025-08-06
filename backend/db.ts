import dotenv from "dotenv";
import { Pool } from "pg";
import cron from "node-cron";

// Carregar informações do .env
dotenv.config();

console.log("🔄 Loading environment variables...");
console.log("user:", process.env.DB_USER);
console.log("host:", process.env.DB_HOST);
console.log("database:", process.env.DB_NAME);
console.log("port:", process.env.DB_PORT);
console.log("password:", process.env.DB_PASSWORD ? "********" : "not set");


// Configuração da connection pool do postgresql
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Verificar de forma assíncrona a conexão com o PostgreSQL
async function verificarConexao(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log("✅ Connected to PostgreSQL database");
    client.release();
  }
  catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
}

verificarConexao();
export default pool;