import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      profile TEXT NOT NULL,
      age INTEGER NOT NULL
    )
  `);

  return db;
}
