import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export const ProductCard = ({ name, brand, price, originalPrice, image, category, isNew }: ProductCardProps) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden card-hover">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-foreground text-background text-xs font-bold rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="w-9 h-9 rounded-full">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full btn-primary">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
          {brand}
        </p>
        <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{category}</p>
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl text-foreground">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
