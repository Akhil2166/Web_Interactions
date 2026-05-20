import { Hero } from "@/components/sections/Hero";
import { ShowcaseGrid } from "@/components/sections/ShowcaseGrid";
import { CategoryPills } from "@/components/sections/CategoryPills";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShowcaseGrid />
      <CategoryPills />
      <About />
      <Marquee />
      <Testimonials />
      <Footer />
    </main>
  );
}
