export interface Imagem {
	url: string;
	alt: string;
}

export interface Botao {
	label: string;
	url: string;
	target: "_self" | "_blank";
}

export interface HomePageData {
	id: number;
	slug: string;
	titulo: string;
	descricao: string;
	imagem: string;
	atualizado_em: Date;
	criado_em: Date;
}

export interface HeroData {
	titulo: string;
	subtitulo: string;
	imagens: Imagem[];
	texto: string;
	botao: Botao
}

export interface TileData {
  id: number;
  imagens: ImageData;
  titulo: string;
  texto: string;
  botao: Botao;
  inverter: boolean;
}