import { Star, Heart, Github, Users, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StarCTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated star */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 border-2 border-accent pulse-glow">
              <Star className="w-12 h-12 text-accent fill-accent" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            If ScrollStamp Saved You Time,
            <br />
            <span className="gradient-accent bg-clip-text text-transparent">Show Some Love!</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stars help other developers discover this tool. Your support means the world to an indie developer! Share it with your friends too!
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Star className="w-5 h-5 text-accent" />
                <span>Open</span>
              </div>
              <p className="text-sm text-muted-foreground">Source</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Users className="w-5 h-5 text-primary" />
                <span>Free</span>
              </div>
              <p className="text-sm text-muted-foreground">Forever</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <GitFork className="w-5 h-5 text-primary" />
                <span>MIT</span>
              </div>
              <p className="text-sm text-muted-foreground">License</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="text-xl px-10 py-8 bg-gradient-to-r from-accent to-orange-500 hover:opacity-90 transition-all pulse-glow group"
            asChild
          >
            <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
              <Star className="w-6 h-6 mr-2 group-hover:fill-current transition-all" />
              Star on GitHub
              <Heart className="w-5 h-5 ml-2 text-white/70" />
            </a>
          </Button>

          {/* Secondary link */}
          <div className="mt-6">
            <a 
              href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
