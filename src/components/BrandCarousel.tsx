const brands = [
  { 
    name: "Vorsteiner", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vorsteiner_logo.svg/200px-Vorsteiner_logo.svg.png",
    fallback: "VORSTEINER"
  },
  { 
    name: "Akrapovič", 
    logo: "https://www.akrapovic.com/images/akrapovic-logo.svg",
    fallback: "AKRAPOVIČ"
  },
  { 
    name: "BBS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BBS_Motorsport_logo.svg/200px-BBS_Motorsport_logo.svg.png",
    fallback: "BBS"
  },
  { 
    name: "HKS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HKS_Company_Logo.svg/200px-HKS_Company_Logo.svg.png",
    fallback: "HKS"
  },
  { 
    name: "Brembo", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Brembo_logo.svg/200px-Brembo_logo.svg.png",
    fallback: "BREMBO"
  },
  { 
    name: "KW Suspension", 
    logo: "https://www.kwsuspensions.net/media/image/80/g0/73/kw-logo.png",
    fallback: "KW"
  },
  { 
    name: "Eventuri", 
    logo: "https://eventuri.net/wp-content/uploads/2020/03/eventuri-logo-white.png",
    fallback: "EVENTURI"
  },
  { 
    name: "Armytrix", 
    logo: "https://www.armytrix.com/images/logo.png",
    fallback: "ARMYTRIX"
  },
  { 
    name: "iPE", 
    logo: "https://www.ipe-exhaust.com/wp-content/uploads/2021/03/ipe-logo.png",
    fallback: "IPE"
  },
  { 
    name: "Capristo", 
    logo: "https://www.capristo.de/wp-content/uploads/2021/01/capristo-logo.svg",
    fallback: "CAPRISTO"
  },
];

export const BrandCarousel = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container-rev mb-8">
        <p className="text-center text-muted-foreground uppercase tracking-widest text-sm">
          Brands We Import
        </p>
      </div>

      <div className="relative">
        {/* Marquee Row */}
        <div className="flex gap-16 animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 flex items-center justify-center px-8 py-6 bg-card/50 border border-border/50 rounded-lg min-w-[180px] h-[80px] hover:border-primary/50 transition-colors"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-10 max-w-[140px] object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'block';
                }}
              />
              <span 
                className="font-display text-xl text-muted-foreground hover:text-foreground transition-colors hidden"
              >
                {brand.fallback}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};