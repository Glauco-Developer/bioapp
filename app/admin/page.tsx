'use client';

import { useEffect, useState } from 'react';
import { endpoints } from '@/lib/api';
import type { Pagina } from '@/types/global';
import Link from 'next/link';

export default function AdminPage() {
	const [paginas, setPaginas] = useState<Pagina[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${endpoints.api}/paginas`)
			.then(res => res.json())
			.then((data) => {
				if (Array.isArray(data)) {
					setPaginas(data);
				} else {
					console.error('Erro: resposta inesperada', data);
					setPaginas([]);
				}
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Carregando páginas...</p>;

	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold mb-4">Admin - Adicionar Nova Página</h1>
			<Link
				href="/admin/nova"
				className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
			>
				+ Nova Página
			</Link>

			{paginas.length !== 0 && 
				<div>
					<h1 className="text-2xl font-bold mb-4">Admin - Todas as Páginas</h1>        
						<ul className="space-y-3">
							{paginas.map((pagina) => (
								<li key={pagina.id} className="border p-4 rounded shadow-sm">
									<h2 className="font-semibold text-lg">{pagina.titulo}</h2>
									<p className="text-sm text-gray-600">Slug: {pagina.slug}</p>
									<Link href={`/admin/${pagina.slug}`} className="mt-2 inline-block text-blue-600 hover:underline">Editar página
									</Link>
									<br/>
									<Link href={`/${pagina.slug}`} className="inline-block mt-4 text-blue-600 hover:underline">Ver Página</Link>
								</li>
							))}
					</ul>
				</div>
			}

		</main>
	);
}
