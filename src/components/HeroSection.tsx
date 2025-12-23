import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container-rev relative z-10 pt-20 flex justify-start">
        <div className="max-w-3xl text-left">
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-wide mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            UNLEASH YOUR
            <br />
            <span className="text-gradient-red">MACHINE'S</span>
            <br />
            TRUE POTENTIAL
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Premium aesthetic and performance upgrades for luxury and sports vehicles. 
            Transform your ride with world-class imported parts.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="btn-primary text-base px-8">
              Shop Now <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-white text-base px-8">
              <Play className="w-5 h-5 mr-2" /> Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">100+</p>
              <p className="text-muted-foreground text-sm">Products</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-foreground">10+</p>
              <p className="text-muted-foreground text-sm">Brands</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-foreground">200+</p>
              <p className="text-muted-foreground text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
