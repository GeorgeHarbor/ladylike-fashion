import Collection from "@/components/Collection";
import FitFinder from "@/components/FitFinder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <FitFinder />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
