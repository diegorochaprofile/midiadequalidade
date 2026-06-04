import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Differential } from "@/components/sections/Differential";
import { Cases } from "@/components/sections/Cases";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoMarquee />
      <Services />
      <Method />
      <Differential />
      <Cases />
      <FinalCTA />
    </main>
  );
}
