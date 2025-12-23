import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-rev">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            THE<span className="text-primary">REV</span>BLOG
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Latest news, tips, and automotive insights
          </p>
          
          <div className="text-center py-20 border border-border rounded-lg bg-card">
            <p className="text-muted-foreground text-lg">Coming soon...</p>
            <p className="text-muted-foreground mt-2">Stay tuned for exciting automotive content!</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
