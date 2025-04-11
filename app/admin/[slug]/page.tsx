'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { endpoints } from '@/lib/api';
import type { Pagina } from '@/types/global';

export default function EditarPagina() {
  const { slug } = useParams() as { slug: string };
  const router = useRouter();

  const [data, setData] = useState<Pagina | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${endpoints.api}/paginas/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const salvar = async () => {
    setError('');
    setMessage('');

    if (!data?.titulo?.trim() || !data?.descricao?.trim()) {
      setError('Título e descrição são obrigatórios.');
      return;
    }

    const res = await fetch(`${endpoints.api}/paginas/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo: data.titulo,
        descricao: data.descricao,
        imagem: data.imagem,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      setError(result.error || 'Erro ao salvar');
      return;
    }

    setMessage(result.message || 'Salvo com sucesso!');
  };

  const deletar = async () => {
    if (!confirm('Tem certeza que deseja excluir esta página?')) return;

    await fetch(`${endpoints.api}/paginas/${slug}`, { method: 'DELETE' });
    router.push('/admin'); // volta pro painel
  };

  if (loading) return <p>Carregando dados da página...</p>;
  if (!data) return <p>Página não encontrada.</p>;

  const camposValidos = data.titulo?.trim() && data.descricao?.trim();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editando: {data.titulo}</h1>

      <label className="block mb-4">
        <span className="block font-medium mb-1">Título</span>
        <input
          type="text"
          value={data.titulo}
          onChange={(e) => setData({ ...data, titulo: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-4">
        <span className="block font-medium mb-1">Descrição</span>
        <textarea
          value={data.descricao}
          onChange={(e) => setData({ ...data, descricao: e.target.value })}
          className="w-full border p-2 rounded"
          rows={4}
        />
      </label>

      <label className="block mb-4">
        <span className="block font-medium mb-1">URL da Imagem</span>
        <input
          type="text"
          value={data.imagem}
          onChange={(e) => setData({ ...data, imagem: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </label>

      <div className="flex gap-4 mt-6">
        <button
          onClick={salvar}
          disabled={!camposValidos}
          className={`px-4 py-2 rounded text-white ${
            camposValidos ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Salvar Alterações
        </button>
        <button
          onClick={deletar}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Deletar Página
        </button>
      </div>

      {message && <p className="mt-4 text-green-700 font-medium">{message}</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </main>
  );
}