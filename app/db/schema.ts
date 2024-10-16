import { sql } from "@vercel/postgres";
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
export const db = drizzle(sql);
export const Todo = pgTable("fullstacktodo", {
  id: serial("id").primaryKey().notNull(),
  title: text("text").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false),
  createAt: timestamp("createAt").defaultNow(),
  updateAt: timestamp("updateAt"),
});
