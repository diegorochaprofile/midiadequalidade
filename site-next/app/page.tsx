import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Differential } from "@/components/sections/Differential";
import { Cases } from "@/components/sections/Cases";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Method />
        <Differential />
        <Cases />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
