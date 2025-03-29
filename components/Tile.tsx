'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      id="about-dra"
      className="flex flex-col xl:grid xl:grid-cols-2 lg:h-[816px] overflow-hidden"
    >
      {/* Imagem da doutora */}
      <div className="w-full h-full max-h-[800px]">
        <Image
          src="/images/aboutStephanie.jpg"
          alt="Dra. Luana"
          width={720}
          height={816}
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Texto + botão */}
      <div className="bg-slate-100 flex items-center py-8 xl:py-0 w-full h-full">
        <div className="flex flex-col gap-6 xl:px-20 px-6 w-full">
          {/* Logo ou texto decorativo opcional */}
          <Image
            src="/images/image.svg" // pode ser um texto em SVG, ou removido se não tiver
            alt=""
            width={492}
            height={62}
            className="object-cover lg:w-full"
          />

          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Conheça a trajetória de vida e carreira profissional inspiradora da Dra. Luana.
          </span>

          <Link href="/sobre">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium bg-[#4D4D4D] text-[#F7F1E7] hover:bg-[#4D4D4D]/90 h-12 py-3 px-12 w-full lg:w-fit transition-colors">
              Leia mais sobre a Dra. Luana
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
