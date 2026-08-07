import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Philosophy from "@/components/sections/philosophy";
import Services from "@/components/sections/services";
import Faq from "@/components/sections/faq";
import Credentials from "@/components/sections/credentials";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <Faq />
      <Credentials />
      <Testimonials />
      <Contact />
    </>
  );
}
