import { pool } from "./db";

interface User {
  user_id: number,
  first_name: string,
  last_name: string,
  email: string,
  password_hash: string,
}

export async function getUsers(): Promise<User[]> {
  const result = await pool.query<User>("SELECT * FROM users");
  return result.rows;
}