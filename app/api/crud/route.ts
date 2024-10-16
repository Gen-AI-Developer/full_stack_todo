import { db, Todo } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const rows = await db.select().from(Todo);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function POST(request: NextRequest) {
  try {
    const { title, completed, description, updateAt } = await request.json();

    // Log the updateAt value to debug
    console.log("Received updateAt:", updateAt);

    // Validate required fields
    if (!title || !description) {
      throw new Error("Title and description are required.");
    }

    // Ensure updateAt is in a valid format
    const updateAtValue = updateAt ? new Date(updateAt) : new Date();
    if (isNaN(updateAtValue.getTime())) {
      throw new Error("Invalid updateAt value. Please provide a valid date.");
    }

    const row = await db
      .insert(Todo)
      .values({
        title,
        completed: completed ?? false,
        description,
        updateAt: updateAtValue,
      })
      .returning();

    return NextResponse.json(row, { status: 200 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
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
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const row = await db.delete(Todo).where(eq(Todo.id, id)).returning();
    return NextResponse.json(row, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
