import { useState, useEffect } from "react";
import { Star, Menu, X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Install", href: "#install" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-border/80 py-3" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center border border-border">
              <img src="/favicon.png" alt="ScrollStamp" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-bold text-lg tracking-tight">ScrollStamp</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              size="sm" 
              variant="outline"
              className="font-medium gap-1.5 border-border hover:bg-muted/50"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <span className="text-muted-foreground">•</span>
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                size="sm" 
                variant="outline"
                className="w-full justify-center gap-1.5"
                asChild
              >
                <a href="https://github.com/SathwikPerla/ScrollStamp" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span>Star on GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
