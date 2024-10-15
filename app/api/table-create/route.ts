import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await sql`CREATE TABLE IF NOT EXISTS fullstacktodo (
            ID SERIAL PRIMARY KEY,
            Title VARCHAR(255) NOT NULL,
            Description VARCHAR(255) NOT NULL,
            IsCompleted BOOLEAN DEFAULT FALSE
        )`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
