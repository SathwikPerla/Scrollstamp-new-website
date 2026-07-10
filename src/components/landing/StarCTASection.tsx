import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StarCTASection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-border/40">
      {/* Subtle fade backdrop */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="container px-4 mx-auto relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle star container */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border shadow-sm">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Save Time Redoing AI Steps?
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-indigo-400">
              Support ScrollStamp on GitHub
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            As an open-source utility, your support helps other developers discover this project. Fork it to contribute or save your own copy!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="text-sm font-semibold px-8 py-6 bg-primary text-primary-foreground hover:opacity-90 transition-all group"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Fork Repository
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
