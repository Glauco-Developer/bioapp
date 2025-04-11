import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import type { Pagina } from '@/types/global';
import { RowDataPacket } from 'mysql2';

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  const [rows] = await db.query<Pagina[] & RowDataPacket[]>(
    'SELECT * FROM paginas WHERE slug = ?',
    [slug]
  );

  if (!rows.length) {
    return NextResponse.json({ error: 'Página não encontrada' }, { status: 404 });
  }

  return NextResponse.json(rows[0]);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const body = await req.json();
  const { titulo, descricao, imagem } = body;

  if (!titulo?.trim() || !descricao?.trim()) {
    return NextResponse.json(
      { error: 'Título e descrição são obrigatórios.' },
      { status: 400 }
    );
  }

  await db.query(
    'UPDATE paginas SET titulo = ?, descricao = ?, imagem = ?, atualizado_em = NOW() WHERE slug = ?',
    [titulo, descricao, imagem, params.slug]
  );

  return NextResponse.json({ message: 'Página atualizada com sucesso' });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await db.query('DELETE FROM paginas WHERE slug = ?', [params.slug]);
  return NextResponse.json({ message: 'Página deletada com sucesso' });
}
