'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { endpoints } from '@/lib/api';

export default function NovaPagina() {
  const router = useRouter();
  const [slug, setSlug] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const criarPagina = async () => {
    setErro('');
    setSucesso('');

    if (!slug.trim() || !titulo.trim()) {
      setErro('Slug e título são obrigatórios.');
      return;
    }

    const res = await fetch(`${endpoints.api}/paginas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, titulo, descricao, imagem }),
    });

    const result = await res.json();

    if (!res.ok) {
      setErro(result.error || 'Erro ao criar página.');
      return;
    }

    setSucesso('Página criada com sucesso!');
    setTimeout(() => {
      router.push('/admin');
    }, 1000);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Criar Nova Página</h1>

      <label className="block mb-4">
        <span className="font-medium">Slug</span>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="ex: home, sobre, contato"
        />
      </label>

      <label className="block mb-4">
        <span className="font-medium">Título</span>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        <span className="font-medium">Descrição</span>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          rows={4}
        />
      </label>

      <label className="block mb-6">
        <span className="font-medium">URL da Imagem</span>
        <input
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <div className="flex gap-4">
        <button
          onClick={criarPagina}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Criar Página
        </button>

        <button
          onClick={() => router.push('/admin')}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
      </div>

      {erro && <p className="text-red-600 mt-3">{erro}</p>}
      {sucesso && <p className="text-green-600 mt-3">{sucesso}</p>}
    </main>
  );
}
