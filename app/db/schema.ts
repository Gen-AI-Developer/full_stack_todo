import { sql } from "@vercel/postgres";
import {
  boolean,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
export const db = drizzle(sql);

export const Todo = pgTable("fullstacktodo", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  completed: boolean("completed").default(false),
  createAt: timestamp("createat").defaultNow(),
  updateAt: timestamp("updateat"),
});
