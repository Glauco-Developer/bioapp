export const dynamic = 'force-dynamic';

import { endpoints } from '@/lib/api';
import { notFound } from 'next/navigation';
import type { Pagina } from '@/types/global';
import Image from 'next/image';

export default async function PaginaDinamica({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const res = await fetch(`${endpoints.api}/paginas/${slug}`, { cache: 'no-store' });

  if (!res.ok) return notFound();

  const data: Pagina = await res.json();

  return (
    <main>
      <h1>{data.titulo}</h1>
      <p>{data.descricao}</p>

      {data.imagem?.startsWith('http') && (
        <Image
          src={data.imagem}
          alt={`Imagem da página ${slug}`}
          width={800}
          height={400}
        />
      )}
    </main>
  );
}
