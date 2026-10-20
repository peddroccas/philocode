import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/sections/JsonLd";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-canvas focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <AnnouncementBar />
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
      <JsonLd />
      <RevealObserver />
    </>
  );
}
