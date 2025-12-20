import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ProductFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const CATEGORIES = [
  "Exterior",
  "Interior",
  "Engine",
  "Exhaust",
  "Suspension",
  "Wheels",
  "Lighting",
  "Electronics",
];

export const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-display text-foreground mb-4">CATEGORIES</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="all-categories"
              checked={selectedCategory === null}
              onCheckedChange={() => onCategoryChange(null)}
            />
            <Label
              htmlFor="all-categories"
              className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            >
              All Categories
            </Label>
          </div>
          {CATEGORIES.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategory === category}
                onCheckedChange={(checked) =>
                  onCategoryChange(checked ? category : null)
                }
              />
              <Label
                htmlFor={category}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-display text-foreground mb-4">PRICE RANGE</h3>
        <div className="px-2">
          <Slider
            value={[priceRange[0], priceRange[1]]}
            onValueChange={(values) => onPriceRangeChange([values[0], values[1]])}
            max={5000}
            min={0}
            step={50}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-display text-foreground mb-4">AVAILABILITY</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" defaultChecked />
            <Label
              htmlFor="in-stock"
              className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            >
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" />
            <Label
              htmlFor="on-sale"
              className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            >
              On Sale
            </Label>
          </div>
        </div>
      </div>

      {/* Brands - placeholder for Shopify integration */}
      <div>
        <h3 className="text-lg font-display text-foreground mb-4">BRANDS</h3>
        <div className="space-y-3">
          {["REVVAULT", "K&N", "BBS", "RECARO", "AKRAPOVIC"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <Label
                htmlFor={brand}
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
