import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import type { Pagina } from '@/types/global';
import { RowDataPacket } from 'mysql2';

export async function GET() {
  const [rows] = await db.query<Pagina[] & RowDataPacket[]>('SELECT id, titulo, slug FROM paginas');
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, titulo, descricao, imagem } = body;

  if (!slug?.trim() || !titulo?.trim()) {
    return NextResponse.json({ error: 'Slug e título são obrigatórios.' }, { status: 400 });
  }

  const [existing] = await db.query<RowDataPacket[]>(
    'SELECT id FROM paginas WHERE slug = ?',
    [slug]
  );

  if (existing.length) {
    return NextResponse.json({ error: 'Já existe uma página com esse slug.' }, { status: 409 });
  }

  await db.query(
    'INSERT INTO paginas (slug, titulo, descricao, imagem) VALUES (?, ?, ?, ?)',
    [slug.trim(), titulo.trim(), descricao?.trim() || '', imagem?.trim() || '']
  );

  return NextResponse.json({ message: 'Página criada com sucesso.' });
}