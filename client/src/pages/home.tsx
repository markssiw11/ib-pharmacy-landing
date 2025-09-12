import { Contact } from "@/components/sections/contact";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Platforms } from "@/components/sections/platforms";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Platforms />
        <Features />
        <Contact />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
