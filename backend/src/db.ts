import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "10.255.255.254",
  database: "MyInvest",
  password: "1234",
  port: 5432
})

export async function testConnection(): Promise<void> {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão bem sucedida! Hora atual:", res.rows[0]);
  } catch (err) {
    console.log("Erro na conexão:", err);
  }
}

testConnection();