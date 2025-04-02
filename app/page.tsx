'use client';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Tile from '../components/Tile'

interface HomeDados {
  slug: string;
  url: string;
  imagem_hero_01: string;
  alt_imagem_hero_01: string;
  imagem_hero_02: string;
  alt_imagem_hero_02: string;
  imagem_hero_03: string;
  alt_imagem_hero_03: string;
  imagem_conteudo_01: string;
  alt_imagem_conteudo_01: string;
  titulo_conteudo: string;
  subtitulo_conteudo: string;
  texto_conteudo: string;
  atualizado_em: string;
  criado_em: string;
  id: number;
}

export default function Home() {
  const [dados, setDados] = useState<HomeDados | null>(null);

  useEffect(() => {
      fetch('api/home')
      .then(response => response.json())
      .then((dados: HomeDados) => setDados(dados));
  }, []);

  if(!dados) return <div>Carregando...</div>;

  return (
    <div>
      Dados
      {dados.slug}
      {dados.criado_em}
        <Hero dados={dados} />
        <Tile />
    </div>
  );
}
