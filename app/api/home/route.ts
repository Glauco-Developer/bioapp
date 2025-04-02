import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM home LIMIT 1");

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: "Nenhum dado encontrado." }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    return NextResponse.json({ error: "Erro ao conectar com o banco de dados." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Título e conteúdo são obrigatórios." }, { status: 400 });
    }

    await db.query(
      `INSERT INTO home (id, title, content)
       VALUES (1, ?, ?)
       ON DUPLICATE KEY UPDATE title = ?, content = ?`,
      [title, content, title, content]
    );

    return NextResponse.json({ message: "Home atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    return NextResponse.json({ error: "Erro ao conectar com o banco de dados." }, { status: 500 });
  }
}
