import { Star, Download, MessageSquare, Globe, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "ChatGPT", color: "from-emerald-400 to-teal-500" },
  { name: "Claude", color: "from-orange-400 to-amber-500" },
  { name: "Gemini", color: "from-blue-400 to-indigo-500" },
  { name: "Perplexity", color: "from-cyan-400 to-teal-500" },
  { name: "Grok", color: "from-slate-200 to-zinc-400" },
  { name: "DeepSeek", color: "from-blue-500 to-sky-400" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 dot-grid">
      {/* Subtle fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background pointer-events-none" />
      
      {/* Developer spot light glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo container */}
          <div className="mb-6 animate-fade-in-up flex justify-center">
            <div className="relative p-4 rounded-2xl bg-card border border-border/80 shadow-md floating">
              <img 
                src="/favicon.png" 
                alt="ScrollStamp Logo" 
                className="w-14 h-14 object-contain"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-10 -z-10" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs font-semibold mb-6 animate-fade-in-up animation-delay-100 text-muted-foreground shadow-sm">
            <span>v2.1 Hybrid Release</span>
            <span className="text-border">•</span>
            <span>Chrome Extension</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
            Never Lose Your Place
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-indigo-400">
              In AI Conversations
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300 leading-relaxed">
            A developer-focused bookmarking tool for AI chats and code sessions. 
            Pin critical instructions. Return instantly with one click.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="text-sm font-semibold px-8 py-6 bg-primary text-primary-foreground hover:opacity-90 shadow-lg border border-primary/20"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/archive/refs/heads/v2.1-hybrid.zip" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Get ScrollStamp Free
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm font-semibold px-8 py-6 border-border hover:bg-muted/40 transition-all bg-background/50"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Star className="w-4 h-4 mr-2 text-amber-500 fill-amber-500" />
                Star on GitHub
              </a>
            </Button>
          </div>

          {/* Platform badges */}
          <div className="animate-fade-in-up animation-delay-500 bg-card/30 border border-border/40 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-4">
              Works seamlessly with
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {platforms.map((platform) => (
                <div 
                  key={platform.name}
                  className="px-3.5 py-1.5 rounded-lg border border-border/80 bg-background/60 text-xs font-semibold hover:border-primary/50 transition-colors cursor-default"
                >
                  <span className={`bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mode indicators */}
          <div className="flex justify-center gap-8 mt-10 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AI Chat Mode</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <Globe className="w-3.5 h-3.5" />
              <span>Scroll Mode (Any Site)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
