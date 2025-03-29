'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <main className="relative h-[304px] md:h-[680px] flex flex-col justify-center md:px-20">
      {/* Imagem de fundo */}
      <Image
        src="/images/hero-03.jpg"
        alt="Imagem de fundo da clínica"
        fill
        priority
        className="absolute object-cover -z-50 inset-0 transition-opacity duration-1000"
      />

      {/* Bloco com o texto e botão */}
      <div className="hidden md:flex flex-col gap-6 w-[530px] bg-[#F4F1F0C4] rounded-[8px] shadow-lg px-8 py-10">
        <h2 className="font-semibold text-[40px] leading-[48px] text-[#8F7D5E]">
          Bem-estar e beleza em perfeita sintonia
        </h2>
        <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
          A beleza verdadeira nasce do equilíbrio entre corpo e mente. Descubra nossos serviços personalizados.
        </p>
        <Link
          href="https://wa.me/5551998717896?text=Olá,%20vim%20pelo%20site!%20Gostaria%20de%20agendar%20um%20horário%20para%20atendimento."
          target="_blank"
        >
          <button className="inline-flex items-center justify-center rounded-sm text-sm font-medium bg-[#4D4D4D] text-[#F7F1E7] hover:bg-[#4D4D4D]/90 h-12 py-3 px-12 transition-colors">
            Agende seu horário
          </button>
        </Link>
      </div>
    </main>
  );
}
