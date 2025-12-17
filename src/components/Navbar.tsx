import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const aestheticsItems = [
  "Body Kits", "Spoilers & Wings", "Carbon Fiber Parts", "Grilles", 
  "Side Skirts", "Diffusers", "Mirror Caps", "Exhaust Tips"
];

const performanceItems = [
  "Air Intakes", "Exhaust Systems", "ECU Tuning", "Suspension", 
  "Brake Kits", "Turbo Kits", "Intercoolers", "Performance Filters"
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container-rev">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-3xl text-foreground tracking-wider">
              THE<span className="text-primary">REV</span>VAULT
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="nav-link font-medium">Home</a>
            
            {/* Aesthetics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("aesthetics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link font-medium flex items-center gap-1">
                Aesthetics <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "aesthetics" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-2xl p-4 animate-fade-in">
                  {aestheticsItems.map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Performance Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("performance")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link font-medium flex items-center gap-1">
                Performance <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "performance" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-2xl p-4 animate-fade-in">
                  {performanceItems.map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="block py-2 px-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="nav-link font-medium">T&C</a>
            <a href="#" className="nav-link font-medium">Privacy</a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground font-medium py-2">Home</a>
              <div>
                <p className="text-primary font-medium mb-2">Aesthetics</p>
                {aestheticsItems.slice(0, 4).map((item) => (
                  <a key={item} href="#" className="block py-1.5 pl-4 text-muted-foreground">{item}</a>
                ))}
              </div>
              <div>
                <p className="text-primary font-medium mb-2">Performance</p>
                {performanceItems.slice(0, 4).map((item) => (
                  <a key={item} href="#" className="block py-1.5 pl-4 text-muted-foreground">{item}</a>
                ))}
              </div>
              <a href="#" className="text-foreground font-medium py-2">T&C</a>
              <a href="#" className="text-foreground font-medium py-2">Privacy</a>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">Login</Button>
                <Button variant="ghost" size="icon"><Search className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon"><ShoppingCart className="w-5 h-5" /></Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
