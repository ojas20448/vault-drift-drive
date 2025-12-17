import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VehicleSelector } from "@/components/VehicleSelector";
import { BrandCarousel } from "@/components/BrandCarousel";
import { BestSellers } from "@/components/BestSellers";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VehicleSelector />
        <BrandCarousel />
        <BestSellers />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
