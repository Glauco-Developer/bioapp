'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TileData } from '@/types/global';

export default function Tile({ data: tileData }: { data: TileData }) { 
    return (
        <section className={`flex flex-col lg:h-[816px] ${tileData.inverter ? 'xl:flex-row-reverse' : 'xl:grid xl:grid-cols-2'} overflow-hidden`}>
            <div className="w-full h-full">
                <Image
                    src={tileData.imagens}
                    alt={tileData.alt_imagem_conteudo_01}
                    width={720}
                    height={816}
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div className="bg-slate-100 flex items-center py-8 xl:py-0 w-full">
                <div className="flex flex-col gap-6 xl:px-20 px-6 w-full">
                    <Image
                        src={tileData.imagem_conteudo_02}
                        alt={tileData.alt_imagem_conteudo_02}
                        width={492}
                        height={62}
                        className="object-cover lg:w-full h-full"
                    />
                    <h2>{tileData.titulo_conteudo}</h2>
                    <p>{tileData.texto_conteudo}</p>
                    <Link href="/sobre">
                        <button>{tileData.texto_cta}</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
