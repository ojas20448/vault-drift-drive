import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RotatingLogo } from "@/components/RotatingLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Account = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder - will integrate with Shopify customer accounts
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Coming Soon",
        description: "Customer accounts will be available after Shopify integration.",
      });
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder - will integrate with Shopify customer accounts
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sign Up Coming Soon",
        description: "Customer accounts will be available after Shopify integration.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="section-padding">
          <div className="container-rev max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-foreground text-center mb-8">
              MY <span className="text-primary">ACCOUNT</span>
            </h1>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full btn-primary h-11"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    <button
                      type="button"
                      className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Forgot your password?
                    </button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          type="text"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          type="text"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full btn-primary h-11"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By creating an account, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RotatingLogo />
    </div>
  );
};

export default Account;
