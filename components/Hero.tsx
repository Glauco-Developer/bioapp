'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HeroData } from '@/types/global';

export default function Hero(data: HeroData) {
	return (
		<section className="relative h-[304px] md:h-[680px] flex flex-col justify-center md:px-20">
			{data.imagem_hero_01 && (
				<Image 
					src={data.imagem_hero_01} 
					alt={data.alt_imagem_hero_01} 
					fill 
					priority 
					className="absolute object-cover -z-50"
				/>
			)}

			<div className="container">
				<div className="hidden md:flex flex-col gap-6 w-[530px] bg-[#F4F1F0C4] rounded-[8px] shadow-lg px-8 py-10">
					<h2 className="font-semibold text-[40px] text-[#8F7D5E]">
						{data.titulo_conteudo}
					</h2>

					<p className="text-[#4D4D4D] text-[20px]">
						{data.subtitulo_conteudo}
					</p>

					<p className="text-[#4D4D4D] text-[16px]">
						{data.texto_conteudo}
					</p>

					{data.url && (
						<Link href={data.url} target="_blank">
							<button className="inline-flex items-center justify-center rounded-sm text-sm font-medium bg-[#4D4D4D] text-[#F7F1E7] hover:bg-[#4D4D4D]/90 h-12 py-3 px-12 transition-colors">
								Agende seu horário
							</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
