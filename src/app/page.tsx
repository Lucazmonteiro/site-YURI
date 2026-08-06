import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Philosophy from "@/components/sections/philosophy";
import Services from "@/components/sections/services";
import AntiSmoking from "@/components/sections/anti-smoking";
import Credentials from "@/components/sections/credentials";
import Contact from "@/components/sections/contact";
import CtaBanner from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <AntiSmoking />
      <Credentials />
      <Contact />
      <CtaBanner />
    </>
  );
}
