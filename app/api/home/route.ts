import { db } from "@/lib/db";
import { HomePageData, TileData } from '@/types/global';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [homeRows] = await db.query("SELECT * FROM home LIMIT 1");
    const home = (homeRows as HomePageData[])[0];

    if (!home) {
      return NextResponse.json({ error: "Nenhum dado encontrado." }, { status: 404 });
    }

    const [tileRows] = await db.query("SELECT * FROM tiles WHERE pagina_id = ?", [home.id]);
    const tiles = tileRows as TileData[];

    return NextResponse.json({ home, tiles });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    return NextResponse.json({ error: "Erro ao conectar com o banco de dados." }, { status: 500 });
  }
}