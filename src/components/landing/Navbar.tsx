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
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Install", href: "#install" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pt-3 sm:pt-4 px-4">
      <nav 
        className={cn(
          "pointer-events-auto max-w-5xl mx-auto rounded-2xl transition-all duration-300 border",
          isScrolled 
            ? "bg-[#090a0f]/80 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2.5 px-4 sm:px-5" 
            : "bg-transparent border-transparent py-3 px-2 sm:px-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group transition-transform active:scale-98"
          >
            <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center shadow-inner group-hover:border-white/[0.2] transition-colors">
              <img src="/favicon.png" alt="ScrollStamp" className="w-4 h-4 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
                ScrollStamp
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/50 tracking-wider">
                v2.1
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Apple/Linear style floating items) */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 shadow-inner">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-white/60 hover:text-white px-3 py-1.5 rounded-full transition-all duration-150 hover:bg-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              size="sm" 
              variant="outline"
              className="h-8 px-3 text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.1] text-white/80 hover:text-white rounded-lg transition-all shadow-sm group"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp" target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Star</span>
                <span className="text-white/20 mx-1">•</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/[0.06] rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-white/[0.08] space-y-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-white/70 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-white/[0.06]">
              <Button 
                size="sm" 
                variant="outline"
                className="w-full justify-center text-xs h-9 bg-white/[0.04] border-white/[0.1] text-white/80 hover:text-white"
                asChild
              >
                <a href="https://github.com/SathwikPerla/ScrollStamp" target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-1.5" />
                  <span>Star on GitHub</span>
                  <Star className="w-3 h-3 ml-1.5 fill-amber-400 text-amber-400" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
