'use client';
import { HomePageData, TileData } from '@/types/global';
import { useEffect, useState } from 'react';
import Tile from '@/components/Tile';
import Hero from '@/components/Hero';


export default function Home() {
  const [pageData, setData] = useState<HomePageData | null>(null);
  const [tiles, setTiles] = useState<TileData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/home');
        const data = await response.json();
        setData(data.home);
        setTiles(data.tiles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <main>
      {!pageData ? 
        <div>Carregando</div> :
        <div>
          <h1>Título: {pageData.titulo}</h1>
          <h2>Criado em: {new Date(pageData.criado_em).toLocaleDateString()}</h2>
        </div>
      }
      {/* <Hero data={pageData}></Hero> */}
      {!tiles ?
        <div>Carregando</div> :
        tiles.map((tile: TileData) => <Tile key={tile.id} data={tile}></Tile>)}
    </main>
  );
}
