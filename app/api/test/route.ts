import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SHOW DATABASES;");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    return NextResponse.json({ error: "Erro ao conectar com o banco de dados." }, { status: 500 });
  }
}
