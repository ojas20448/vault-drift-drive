import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Vorsteiner VRS Carbon Front Splitter - BMW M3/M4",
    brand: "Vorsteiner",
    price: 185000,
    originalPrice: 220000,
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=600&fit=crop",
    category: "Aesthetics",
    isNew: true,
  },
  {
    name: "Akrapovič Evolution Titanium Exhaust - Porsche 911",
    brand: "Akrapovič",
    price: 450000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    category: "Performance",
  },
  {
    name: "Eventuri Carbon Air Intake - Mercedes AMG",
    brand: "Eventuri",
    price: 125000,
    originalPrice: 145000,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop",
    category: "Performance",
    isNew: true,
  },
  {
    name: "BBS FI-R Forged Wheels 20\" - Set of 4",
    brand: "BBS",
    price: 380000,
    image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=600&h=600&fit=crop",
    category: "Aesthetics",
  },
  {
    name: "KW Clubsport 3-Way Coilovers - Audi RS6",
    brand: "KW Suspension",
    price: 295000,
    originalPrice: 350000,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop",
    category: "Performance",
  },
  {
    name: "Carbon Fiber GT Wing - Universal Fit",
    brand: "APR Performance",
    price: 165000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop",
    category: "Aesthetics",
    isNew: true,
  },
  {
    name: "Brembo GT Big Brake Kit - Front 6-Piston",
    brand: "Brembo",
    price: 485000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop",
    category: "Performance",
  },
  {
    name: "Full Carbon Fiber Hood - BMW F80 M3",
    brand: "Seibon",
    price: 195000,
    originalPrice: 240000,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&h=600&fit=crop",
    category: "Aesthetics",
  },
];

export const BestSellers = () => {
  return (
    <section className="section-padding">
      <div className="container-rev">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Curated Selection
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-2">
              BEST <span className="text-primary">SELLERS</span>
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-muted-foreground hover:text-foreground">
            View All Products <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
