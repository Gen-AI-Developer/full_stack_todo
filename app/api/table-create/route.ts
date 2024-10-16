import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await sql`CREATE TABLE IF NOT EXISTS fullstacktodo (
                id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(256) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP
        )`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
