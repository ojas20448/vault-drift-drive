import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { RotatingLogo } from "@/components/RotatingLogo";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, Minus, Plus, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Placeholder - will be replaced with Shopify data
const DEMO_PRODUCT = {
  id: "1",
  name: "Carbon Fiber Spoiler",
  brand: "REVVAULT",
  price: 899,
  originalPrice: 1099,
  description: "Premium carbon fiber rear spoiler designed for maximum downforce and style. Hand-crafted from aerospace-grade carbon fiber with a UV-resistant clear coat finish.",
  images: [
    "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
  ],
  category: "Exterior",
  specs: [
    { label: "Material", value: "3K Carbon Fiber" },
    { label: "Weight", value: "4.5 kg" },
    { label: "Finish", value: "Gloss UV Clear Coat" },
    { label: "Fitment", value: "Universal" },
  ],
  features: [
    "Aerospace-grade carbon fiber construction",
    "UV-resistant clear coat finish",
    "Lightweight yet extremely durable",
    "Easy bolt-on installation",
    "Increases downforce by up to 50%",
  ],
  rating: 4.8,
  reviews: 124,
  inStock: true,
};

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // In production, fetch product by id from Shopify
  const product = DEMO_PRODUCT;

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} saved to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Breadcrumb */}
        <section className="px-4 md:px-8 py-4">
          <div className="container-rev">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="px-4 md:px-8 pb-16">
          <div className="container-rev">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-card rounded-lg overflow-hidden border border-border">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
                    {product.brand}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-display text-foreground mb-4">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="text-sm font-medium text-primary">
                        Save ${product.originalPrice - product.price}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Quantity:</span>
                    <div className="flex items-center border border-border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      className="flex-1 btn-primary h-12"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12"
                      onClick={handleAddToWishlist}
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                  <div className="flex flex-col items-center text-center">
                    <Truck className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">2 Year Warranty</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <RotateCcw className="w-6 h-6 text-primary mb-2" />
                    <span className="text-xs text-muted-foreground">30-Day Returns</span>
                  </div>
                </div>

                {/* Specs */}
                <div>
                  <h3 className="text-lg font-display text-foreground mb-4">SPECIFICATIONS</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-b border-border/50"
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="text-foreground font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-display text-foreground mb-4">FEATURES</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <RotatingLogo />
    </div>
  );
};

export default ProductDetail;
