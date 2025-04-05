import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { slug, title, description, image } = await request.json();

  try {
    const [result] = await db.query(
      `INSERT INTO pages (slug, title, description, image) VALUES (?, ?, ?, ?)`,
      [slug, title, description, image]
    );

    return NextResponse.json({ success: true, pageId: result.insertId });
  } catch (error) {
    console.error('Erro ao criar página:', error);
    return NextResponse.json({ error: 'Erro ao criar página.' }, { status: 500 });
  }
}
