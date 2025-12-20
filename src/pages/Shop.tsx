import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { RotatingLogo } from "@/components/RotatingLogo";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Grid3X3, LayoutList, SlidersHorizontal, X } from "lucide-react";

// Placeholder products - will be replaced with Shopify data
const DEMO_PRODUCTS = [
  { id: "1", name: "Carbon Fiber Spoiler", brand: "REVVAULT", price: 899, image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=400", category: "Exterior", isNew: true },
  { id: "2", name: "Performance Air Intake", brand: "K&N", price: 349, originalPrice: 429, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400", category: "Engine" },
  { id: "3", name: "LED Headlight Kit", brand: "OSRAM", price: 599, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400", category: "Lighting", isNew: true },
  { id: "4", name: "Coilover Suspension Kit", brand: "KW", price: 2499, originalPrice: 2899, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400", category: "Suspension" },
  { id: "5", name: "Forged Alloy Wheels", brand: "BBS", price: 3200, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400", category: "Wheels" },
  { id: "6", name: "Sport Exhaust System", brand: "AKRAPOVIC", price: 4500, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400", category: "Exhaust", isNew: true },
  { id: "7", name: "Racing Bucket Seats", brand: "RECARO", price: 1899, originalPrice: 2199, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400", category: "Interior" },
  { id: "8", name: "Carbon Hood", brand: "SEIBON", price: 1599, image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400", category: "Exterior" },
];

const Shop = () => {
  const [gridView, setGridView] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = DEMO_PRODUCTS.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : 1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding pb-8">
          <div className="container-rev">
            <h1 className="text-4xl md:text-6xl font-display text-foreground mb-4">
              SHOP <span className="text-primary">PARTS</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Premium automotive parts and accessories for your build. Quality guaranteed.
            </p>
          </div>
        </section>

        {/* Toolbar */}
        <section className="px-4 md:px-8 pb-6">
          <div className="container-rev">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-muted-foreground text-sm">
                  {sortedProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                <div className="hidden md:flex items-center gap-1 border border-border rounded-md p-1">
                  <Button
                    variant={gridView === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setGridView("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={gridView === "list" ? "secondary" : "ghost"}
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setGridView("list")}
                  >
                    <LayoutList className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 md:px-8 pb-16">
          <div className="container-rev">
            <div className="flex gap-8">
              {/* Desktop Filters */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                />
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div
                  className={
                    gridView === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "flex flex-col gap-4"
                  }
                >
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      brand={product.brand}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      category={product.category}
                      isNew={product.isNew}
                      layout={gridView}
                    />
                  ))}
                </div>

                {sortedProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSelectedCategory(null);
                        setPriceRange([0, 5000]);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Filters Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-card border-r border-border p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">FILTERS</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowMobileFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>
        </div>
      )}

      <Footer />
      <FloatingContact />
      <RotatingLogo />
    </div>
  );
};

export default Shop;
