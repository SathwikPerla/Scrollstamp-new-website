import { Star, Download, MessageSquare, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "ChatGPT", color: "from-emerald-400 to-teal-500" },
  { name: "Claude", color: "from-orange-400 to-amber-500" },
  { name: "Gemini", color: "from-blue-400 to-cyan-500" },
  { name: "Perplexity", color: "from-violet-400 to-purple-500" },
  { name: "Grok", color: "from-slate-400 to-zinc-500" },
  { name: "DeepSeek", color: "from-indigo-400 to-blue-500" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-delayed" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl glass glow mb-6 floating">
              <img 
                src="/favicon.png" 
                alt="ScrollStamp Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6 animate-fade-in-up animation-delay-100">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>v2.1 Hybrid</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Chrome Extension</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Never Lose Your
            <br />
            <span className="gradient-text">Place Again</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Smart bookmarking for AI conversations and web content. 
            Pin important moments. Return instantly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-opacity glow"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download Extension
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 glass border-accent/50 hover:bg-accent/10 hover:border-accent transition-all pulse-glow"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Star className="w-5 h-5 mr-2 text-accent" />
                Star on GitHub
              </a>
            </Button>
          </div>

          {/* Platform badges */}
          <div className="animate-fade-in-up animation-delay-500">
            <p className="text-sm text-muted-foreground mb-4">Works seamlessly with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className="px-4 py-2 rounded-full glass text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mode indicators */}
          <div className="flex justify-center gap-6 mt-10 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>AI Chat Mode</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-accent" />
              <span>Scroll Mode</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
