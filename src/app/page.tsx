import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import { Works } from "@/components/Works";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { HeroParallax } from "@/components/ui/HeroParalax";
import { products } from "@/data";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Navbar name='About' href='/about' />
      <HomeBanner/>


      <Works/>
      {/* <HeroParallax products={products} /> */}
    </main>
  );
}
