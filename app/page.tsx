import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center">
      <Hero />
      <div className="md:w-[97%] mt-5 w-full bg-white p-2 shadow-lg rounded-sm">
        <h2 className="my-2 text-2xl font-bold">Nuevos productos</h2>
        <div className="grid grid-cols-5 gap-4">
          <Link href={`/products/campera-jean`}>
            <div className="bg-green-500 h-[20rem]">Campera de Jean</div>
          </Link>
          <Link href={`/products/caampera-brown`}>
            <div className="bg-green-500 h-[20rem]">Campera Brown</div>
          </Link>
          <Link href={`/products/hoddie-black`}>
            <div className="bg-green-500 h-[20rem]">Hoodie Black</div>
          </Link>
          <Link href={`/products/jean-baggy`}>
            <div className="bg-green-500 h-[20rem]">Jean Baggy </div>
          </Link>
          <Link href={`/products/sorongo-alfa-omega`}>
            <div className="bg-green-500 h-[20rem]">Sorongo Alfa/Omega</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
