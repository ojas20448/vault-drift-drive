const brands = [
  { name: "Vorsteiner", logo: "VORSTEINER" },
  { name: "Akrapovič", logo: "AKRAPOVIČ" },
  { name: "BBS", logo: "BBS" },
  { name: "HKS", logo: "HKS" },
  { name: "Brembo", logo: "BREMBO" },
  { name: "KW", logo: "KW" },
  { name: "Eventuri", logo: "EVENTURI" },
  { name: "Armytrix", logo: "ARMYTRIX" },
  { name: "IPE", logo: "IPE" },
  { name: "Capristo", logo: "CAPRISTO" },
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
        {/* First Row - Moving Left */}
        <div className="flex gap-16 animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 bg-card/50 border border-border/50 rounded-lg min-w-[180px] hover:border-primary/50 transition-colors"
            >
              <span className="font-display text-2xl text-muted-foreground hover:text-foreground transition-colors">
                {brand.logo}
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
