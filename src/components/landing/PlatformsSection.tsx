import { Globe, AlertTriangle, ShieldAlert, Bot, Sparkles, Brain, Search, Zap, MessageSquare } from "lucide-react";

const platforms = [
  { 
    name: "ChatGPT", 
    icon: MessageSquare,
    color: "from-green-400 to-emerald-600"
  },
  { 
    name: "Claude", 
    icon: Brain,
    color: "from-orange-400 to-amber-600"
  },
  { 
    name: "Gemini", 
    icon: Sparkles,
    color: "from-blue-400 to-indigo-600"
  },
  { 
    name: "Perplexity", 
    icon: Search,
    color: "from-cyan-400 to-teal-600"
  },
  { 
    name: "Grok", 
    icon: Zap,
    color: "from-purple-400 to-violet-600"
  },
  { 
    name: "DeepSeek", 
    icon: Bot,
    color: "from-pink-400 to-rose-600"
  },
];

export function PlatformsSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Works With Your <span className="gradient-text">Favorite AI Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Seamless integration with all major AI chat platforms.
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-default group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>

          {/* Universal Badge */}
          <div className="glass rounded-xl p-6 text-center mb-6 border-primary/20 glow">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Works on ALL Websites</h3>
            </div>
            <p className="text-muted-foreground">
              Scroll Mode works on any webpage - blogs, documentation, articles, and more.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="space-y-3">
            <div className="glass rounded-lg p-4 border-amber-500/20">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-400">Protected Websites</p>
                  <p className="text-sm text-muted-foreground">
                    Some sites with restricted editors, embedded tools, or custom scroll containers may have limited bookmark support. The bookmark will be saved, but automatic scroll-to-position may not work on these protected pages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4" />
              <span>Note: PDF files are not currently supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
