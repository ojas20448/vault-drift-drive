import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { RotatingLogo } from "@/components/RotatingLogo";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

// Placeholder - will be replaced with Shopify cart
const DEMO_CART_ITEMS = [
  {
    id: "1",
    name: "Carbon Fiber Spoiler",
    brand: "REVVAULT",
    price: 899,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=200",
  },
  {
    id: "2",
    name: "Performance Air Intake",
    brand: "K&N",
    price: 349,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200",
  },
];

const Cart = () => {
  const [items, setItems] = useState(DEMO_CART_ITEMS);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="section-padding">
          <div className="container-rev">
            <h1 className="text-4xl md:text-6xl font-display text-foreground mb-8">
              YOUR <span className="text-primary">CART</span>
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
                <Link to="/shop">
                  <Button className="btn-primary">
                    Continue Shopping
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-card border border-border rounded-xl"
                    >
                      <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-primary font-medium uppercase">{item.brand}</p>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <span className="font-display text-lg text-foreground">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                    <h2 className="text-xl font-display text-foreground mb-6">ORDER SUMMARY</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>${subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                      </div>
                      {shipping === 0 && (
                        <p className="text-xs text-primary">Free shipping on orders over $500!</p>
                      )}
                      <div className="border-t border-border pt-3 flex justify-between text-foreground font-medium">
                        <span>Total</span>
                        <span className="font-display text-2xl">${total.toLocaleString()}</span>
                      </div>
                    </div>

                    <Button className="w-full btn-primary h-12 mb-3">
                      Proceed to Checkout
                    </Button>
                    <Link to="/shop" className="block">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <RotatingLogo />
    </div>
  );
};

export default Cart;
