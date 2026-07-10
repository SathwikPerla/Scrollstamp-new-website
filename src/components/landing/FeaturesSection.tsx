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
    <section className="py-24 relative border-t border-border/40" id="features">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Two Modes, One Extension
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you are deep in an AI conversation or reading developer documentation, 
              ScrollStamp adapts to your workflow.
            </p>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted/60 border border-border p-1 rounded-xl flex gap-1 shadow-sm">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2",
                    activeMode === mode.id
                      ? "bg-card text-foreground shadow-sm border border-border/50"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <mode.icon className="w-4 h-4" />
                  <span>{mode.name}</span>
                  <span className="text-[10px] opacity-75 font-mono uppercase bg-muted px-1.5 py-0.5 rounded">
                    {mode.version}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Content */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-border/60">
              <div className="flex items-center gap-3.5">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center border",
                  currentMode.id === "ai" 
                    ? "bg-primary/10 border-primary/20 text-primary" 
                    : "bg-accent/10 border-accent/20 text-accent"
                )}>
                  <currentMode.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{currentMode.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{currentMode.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {currentMode.features.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-background/30 hover:bg-background/80 transition-colors"
                >
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border",
                    currentMode.id === "ai" 
                      ? "bg-primary/10 border-primary/20 text-primary" 
                      : "bg-accent/10 border-accent/20 text-accent"
                  )}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="text-center mb-8">
            <h3 className="text-xs uppercase tracking-widest font-extrabold text-muted-foreground">
              Core Capabilities
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card/40 border border-border/80 rounded-xl p-6 hover:border-border transition-all hover:translate-y-[-2px] shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1.5 text-foreground">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
