import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VehicleSelector } from "@/components/VehicleSelector";
import { BrandCarousel } from "@/components/BrandCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { RotatingLogo } from "@/components/RotatingLogo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VehicleSelector />
        <BrandCarousel />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <RotatingLogo />
    </div>
  );
};

export default Index;
