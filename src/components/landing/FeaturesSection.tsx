import { useState } from "react";
import { 
  MessageSquare, 
  Globe, 
  Bookmark, 
  Eye, 
  Edit3, 
  Shield, 
  Zap, 
  Database,
  MousePointer,
  Navigation
} from "lucide-react";
import { cn } from "@/lib/utils";

const modes = [
  {
    id: "ai",
    name: "AI Chat Mode",
    version: "v2",
    icon: MessageSquare,
    color: "primary",
    description: "Message-level bookmarking designed specifically for AI conversations",
    features: [
      { icon: Bookmark, title: "Message Bookmarks", desc: "Save specific AI responses, not just scroll positions" },
      { icon: Zap, title: "Smart Detection", desc: "Automatically identifies message boundaries" },
      { icon: Database, title: "Persistent Storage", desc: "Bookmarks survive page refreshes and sessions" },
      { icon: Eye, title: "Visual Feedback", desc: "Clear indicators for saved messages" },
    ]
  },
  {
    id: "scroll",
    name: "Scroll Mode",
    version: "v1",
    icon: Globe,
    color: "accent",
    description: "Position-based bookmarking that works on any website",
    features: [
      { icon: MousePointer, title: "Any Website", desc: "Works on blogs, docs, articles, and more" },
      { icon: Navigation, title: "Precise Position", desc: "Returns to exact scroll location" },
      { icon: Database, title: "Context Preview", desc: "Saves text snippet for easy identification" },
      { icon: Eye, title: "Visual Marker", desc: "See exactly where you left off" },
    ]
  }
];

const coreFeatures = [
  { icon: MousePointer, title: "One-Click Bookmarking", desc: "Pin important content instantly" },
  { icon: Eye, title: "Visual Feedback", desc: "Clear confirmation when bookmarks are saved" },
  { icon: Edit3, title: "Editable Titles", desc: "Rename bookmarks for easy organization" },
  { icon: Shield, title: "Robust Error Handling", desc: "Graceful fallbacks and clear error messages" },
];

export function FeaturesSection() {
  const [activeMode, setActiveMode] = useState("ai");
  const currentMode = modes.find(m => m.id === activeMode)!;

  return (
    <section className="py-24 relative" id="features">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two Modes, <span className="gradient-text">One Extension</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're deep in an AI conversation or reading a long article, 
              ScrollStamp has you covered.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-1.5 flex gap-2">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2",
                    activeMode === mode.id
                      ? mode.id === "ai" 
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <mode.icon className="w-4 h-4" />
                  {mode.name}
                  <span className="text-xs opacity-70">({mode.version})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Content */}
          <div className="glass rounded-2xl p-8 md:p-12 mb-16 glow">
            <div className="flex items-center gap-3 mb-6">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                currentMode.id === "ai" ? "bg-primary/10" : "bg-accent/10"
              )}>
                <currentMode.icon className={cn(
                  "w-6 h-6",
                  currentMode.id === "ai" ? "text-primary" : "text-accent"
                )} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{currentMode.name}</h3>
                <p className="text-muted-foreground">{currentMode.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentMode.features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    currentMode.id === "ai" ? "bg-primary/10" : "bg-accent/10"
                  )}>
                    <feature.icon className={cn(
                      "w-5 h-5",
                      currentMode.id === "ai" ? "text-primary" : "text-accent"
                    )} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Core Features</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
