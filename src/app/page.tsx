import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-white text-black scroll-smooth">
      <header className="flex fixed top-0 justify-between w-full"> 
        <div className="p-4"><Image src={"/logo.png"} width={50} height={50} alt="logo"/></div>
        <nav>
          <ul className="flex font-bold">
            <li className="p-4"><a href="#home">Home</a></li>
            <li className="p-4"><a href="sobre">Sobre</a></li>
            <li className="p-4"><a href="contatos">Contatos</a></li>
            <li className="p-4"><a href="encontre">Encontre-nos</a></li>
          </ul>
        </nav>
      </header>
      <section id="home" className="flex items-center justify-center bg-red-500 h-screen">
        <h1 className="text-4x flex">Procurando aventuras?</h1>
      </section>
      <section id="sobre" className="flex items-center justify-center bg-red-500 h-screen">
        <h1 className="text-4x flex">Sobre</h1>
      </section>
      <section id="contatos" className="flex items-center justify-center bg-red-500 h-screen">
        <h1 className="text-4x flex">Contatos</h1>
      </section>
      <section id="encontre" className="flex items-center justify-center bg-red-500 h-screen">
        <h1 className="text-4x flex">Encontre</h1>
      </section>
    </main>
  );
}
