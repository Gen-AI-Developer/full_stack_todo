import { db, Todo } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rows = await db.select().from(Todo);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const { title, completed, description, createAt, updateAt } =
      await request.json();
    const row = await db
      .insert(Todo)
      .values({ title, completed, description, createAt, updateAt })
      .returning();
    return NextResponse.json(row, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function PUT(request: Request) {
  try {
    const { id, title, completed, description, updateAt } =
      await request.json();
    const row = await db
      .update(Todo)
      .set({ title, completed, description, updateAt })
      .where(eq(Todo.id, id))
      .returning();
    return NextResponse.json(row, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const row = await db.delete(Todo).where(eq(Todo.id, id)).returning();
    return NextResponse.json(row, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
