import { Globe, AlertTriangle } from "lucide-react";

const platforms = [
  { 
    name: "ChatGPT", 
    gradient: "from-emerald-400 to-teal-500",
    letter: "G"
  },
  { 
    name: "Claude", 
    gradient: "from-orange-400 to-amber-500",
    letter: "C"
  },
  { 
    name: "Gemini", 
    gradient: "from-blue-400 to-cyan-500",
    letter: "G"
  },
  { 
    name: "Perplexity", 
    gradient: "from-violet-400 to-purple-500",
    letter: "P"
  },
  { 
    name: "Grok", 
    gradient: "from-slate-400 to-zinc-500",
    letter: "X"
  },
  { 
    name: "DeepSeek", 
    gradient: "from-indigo-400 to-blue-500",
    letter: "D"
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl font-bold text-white">{platform.letter}</span>
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

          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="w-4 h-4" />
            <span>Note: PDF files are not currently supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
