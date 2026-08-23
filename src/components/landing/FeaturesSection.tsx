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
    color: "#2563FF",
    description: "Message-level DOM tracking designed specifically for AI conversations",
    features: [
      { icon: Bookmark, title: "Message Checkpoints", desc: "Save specific AI responses, not just scroll positions" },
      { icon: Zap, title: "Smart Detection", desc: "Automatically identifies message boundaries across models" },
      { icon: Database, title: "Persistent Storage", desc: "Bookmarks survive page refreshes and session restarts" },
      { icon: Eye, title: "Visual HUD Feedback", desc: "Clear indicator badges attached to saved messages" },
    ]
  },
  {
    id: "scroll",
    name: "Scroll Mode",
    version: "v1",
    icon: Globe,
    color: "#8B5CF6",
    description: "Position-based bookmarking that works across any website or doc",
    features: [
      { icon: MousePointer, title: "Universal Web Support", desc: "Works on blogs, articles, API docs, and code repos" },
      { icon: Navigation, title: "Pixel-Accurate Positioning", desc: "Returns to exact pixel scroll coordinates" },
      { icon: Database, title: "Context Snippets", desc: "Saves text previews for rapid identification" },
      { icon: Eye, title: "Visual Pin Marker", desc: "See exactly where you left off reading" },
    ]
  }
];

const coreFeatures = [
  { icon: MousePointer, title: "One-Click Bookmarking", desc: "Pin important prompts & responses instantly" },
  { icon: Eye, title: "Visual Feedback", desc: "Clear confirmation when checkpoints save" },
  { icon: Edit3, title: "Editable Titles", desc: "Rename bookmarks for easy project indexing" },
  { icon: Shield, title: "100% Local Privacy", desc: "All data stays stored inside your browser" },
];

export function FeaturesSection() {
  const [activeMode, setActiveMode] = useState("ai");
  const currentMode = modes.find(m => m.id === activeMode)!;

  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#05060B]" id="features">
      <div className="container relative z-10 px-4 mx-auto max-w-5xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Two Modes, One Seamless Extension
            </h2>
            <p className="text-base text-[#A7ADBE] max-w-lg mx-auto">
              Whether you are deep in an AI chat session or reading technical docs, ScrollStamp adapts to your workflow.
            </p>
          </div>

          {/* Mode Segmented Switch (Apple/Linear Style) */}
          <div className="flex justify-center mb-10">
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex gap-1.5 shadow-inner">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2.5",
                    activeMode === mode.id
                      ? "bg-[#2563FF] text-white shadow-[0_4px_20px_rgba(37,99,255,0.4)]"
                      : "text-[#A7ADBE] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <mode.icon className="w-3.5 h-3.5" />
                  <span>{mode.name}</span>
                  <span className="text-[9px] font-mono uppercase bg-black/20 px-1.5 py-0.5 rounded text-white/80">
                    {mode.version}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Detail Card */}
          <div className="apple-glass rounded-2xl p-7 md:p-9 mb-14 border border-white/[0.1] relative">
            <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#3B82FF]">
                <currentMode.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{currentMode.name}</h3>
                <p className="text-xs text-[#A7ADBE] mt-0.5">{currentMode.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {currentMode.features.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center shrink-0 text-[#3B82FF] mt-0.5">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-white">{feature.title}</h4>
                    <p className="text-[11px] text-[#A7ADBE] mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="apple-glass apple-glass-hover rounded-xl p-5 border border-white/[0.06]"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-3 text-[#3B82FF]">
                  <feature.icon className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-xs text-white mb-1">{feature.title}</h4>
                <p className="text-[11px] text-[#A7ADBE] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
