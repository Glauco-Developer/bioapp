import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image
               className="dark:invert"
               src="/images/logo.webp"
               alt="Logo"
               width={150}
               height={20}
               priority
            />
          </Link>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-600 transition-colors duration-200" >Início</Link>
          <Link href="/sobre" className="hover:text-pink-600 transition-colors duration-200" >Sobre nós</Link>
          <Link href="/servicos" className="hover:text-pink-600 transition-colors duration-200" >Serviços</Link>
          <Link href="/galeria" className="hover:text-pink-600 transition-colors duration-200" >Galeria de fotos</Link>
          <Link href="/contato" className="hover:text-pink-600 transition-colors duration-200" >Contato</Link>
        </nav>
      </div>
    </header>
  );
}
