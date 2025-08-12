import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();
console.log("host:",process.env.DB_HOST);
console.log("port:",process.env.DB_PORT);
console.log("user:",process.env.DB_USER);
console.log("database:",process.env.DB_DATABASE);
console.log("synchronize:", process.env.POSTGRES_SYNC);
console.log("logging:", process.env.POSTGRES_LOGGING);
console.log("password:", process.env.DB_PASSWORD ? "******" : "not set");


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_DATABASE,
  synchronize: !!process.env.POSTGRES_SYNC,
  logging: !!process.env.POSTGRES_LOGGING,
  entities: ["build/entity/*.js", "build/entity/**/*.js"],
  migrations: ["build/migrations/*.js"],
  subscribers: ["build/subscriber/**/*.js"],
})