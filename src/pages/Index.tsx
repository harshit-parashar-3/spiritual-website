import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import SpiritualProducts from "@/components/SpiritualProducts";
import PujaBooking from "@/components/PujaBooking";
import Dashamahavidya from "@/components/Dashamahavidya";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <VideoGallery language={language} />
        <SpiritualProducts language={language} />
        <PujaBooking language={language} />
        <Dashamahavidya language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
