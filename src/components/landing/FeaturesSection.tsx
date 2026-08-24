import { useState } from "react";
import { cn } from "@/lib/utils";

// Custom Handcrafted Vector SVG Graphics (No AI-template generic icon boxes)

function AiModeHeaderGraphic() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ai-bg-grad)" />
      <path d="M16 6L18.8 12.2L25 15L18.8 17.8L16 24L13.2 17.8L7 15L13.2 12.2L16 6Z" fill="url(#ai-sparkle-grad)" />
      <path d="M23 21L24.2 23.8L27 25L24.2 26.2L23 29L21.8 26.2L19 25L21.8 23.8L23 21Z" fill="#93C5FD" />
      <path d="M9 20L9.9 22.1L12 23L9.9 23.9L9 26L8.1 23.9L6 23L8.1 22.1L9 20Z" fill="#A5B4FC" opacity="0.9" />
      <defs>
        <linearGradient id="ai-bg-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E3A8A" stopOpacity="0.6" />
          <stop offset="1" stopColor="#1E1B4B" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="ai-sparkle-grad" x1="7" y1="6" x2="25" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ScrollModeHeaderGraphic() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#scroll-bg-grad)" />
      <rect x="6" y="6" width="20" height="20" rx="4" stroke="url(#scroll-frame-grad)" strokeWidth="1.8" fill="none" />
      <line x1="6" y1="11" x2="26" y2="11" stroke="url(#scroll-frame-grad)" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="10" cy="8.5" r="1.2" fill="#E9D5FF" />
      <circle cx="13.5" cy="8.5" r="1.2" fill="#C084FC" />
      <circle cx="17" cy="8.5" r="1.2" fill="#A855F7" />
      <rect x="10" y="14" width="9" height="2" rx="1" fill="#E9D5FF" />
      <rect x="10" y="18" width="12" height="2" rx="1" fill="#C084FC" opacity="0.7" />
      <circle cx="21" cy="15" r="2.5" fill="#34D399" />
      <defs>
        <linearGradient id="scroll-bg-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4C1D95" stopOpacity="0.6" />
          <stop offset="1" stopColor="#311042" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="scroll-frame-grad" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C084FC" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Feature Micro Graphics
function CheckpointsGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="22" height="20" rx="4" fill="#083344" fillOpacity="0.5" stroke="#06B6D4" strokeWidth="1.5" />
      <path d="M6 8H14" stroke="#67E8F9" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 13H17" stroke="#67E8F9" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.6" />
      <path d="M6 18H11" stroke="#67E8F9" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M17 3V12L19.5 10L22 12V3H17Z" fill="#22D3EE" />
    </svg>
  );
}

function SmartDetectionGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="22" height="22" rx="5" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 2" />
      <rect x="6" y="6" width="14" height="14" rx="3" fill="#1E1B4B" fillOpacity="0.8" stroke="#6366F1" strokeWidth="1.5" />
      <path d="M10 13L12 15L16 9.5" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StorageGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="20" height="7" rx="2.5" fill="#1E3A8A" fillOpacity="0.5" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="3" y="15" width="20" height="7" rx="2.5" fill="#1E3A8A" fillOpacity="0.5" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="7" cy="7.5" r="1.5" fill="#60A5FA" />
      <circle cx="7" cy="18.5" r="1.5" fill="#60A5FA" />
      <path d="M16 7.5H19" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18.5H19" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HudGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="22" height="10" rx="5" fill="#0C4A6E" fillOpacity="0.7" stroke="#0EA5E9" strokeWidth="1.5" />
      <circle cx="7" cy="13" r="2.2" fill="#38BDF8" />
      <rect x="11.5" y="11.5" width="8" height="3" rx="1.5" fill="#BAE6FD" />
    </svg>
  );
}

function UniversalWebGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="9.5" stroke="#A855F7" strokeWidth="1.5" strokeOpacity="0.8" fill="#3B0764" fillOpacity="0.3" />
      <ellipse cx="13" cy="13" rx="4.5" ry="9.5" stroke="#C084FC" strokeWidth="1.2" />
      <line x1="3.5" y1="13" x2="22.5" y2="13" stroke="#E9D5FF" strokeWidth="1.2" />
    </svg>
  );
}

function PixelAccurateGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="8.5" stroke="#10B981" strokeWidth="1.5" fill="#064E3B" fillOpacity="0.4" />
      <circle cx="13" cy="13" r="3.5" fill="#34D399" />
      <line x1="13" y1="2" x2="13" y2="7" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="19" x2="13" y2="24" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="13" x2="7" y2="13" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="13" x2="24" y2="13" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ContextSnippetsGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="20" height="18" rx="4" fill="#134E4A" fillOpacity="0.5" stroke="#14B8A6" strokeWidth="1.5" />
      <path d="M7 9H19" stroke="#5EEAD4" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7" y="12.5" width="12" height="5" rx="1.5" fill="#2DD4BF" fillOpacity="0.4" />
      <path d="M9 15H17" stroke="#CCFBF1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VisualPinGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2C9.13401 2 6 5.13401 6 9C6 14.25 13 24 13 24C13 24 20 14.25 20 9C20 5.13401 16.866 2 13 2Z" fill="#5B21B6" fillOpacity="0.5" stroke="#8B5CF6" strokeWidth="1.5" />
      <circle cx="13" cy="9" r="3" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1.5" />
    </svg>
  );
}

function OneClickGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3.5V21.5L13 16.5L20 21.5V3.5H6Z" fill="#78350F" fillOpacity="0.5" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="5.5" fill="#B45309" stroke="#FBBF24" strokeWidth="1.5" />
      <path d="M14.8 17L16.3 18.5L19.2 15.5" stroke="#FEF3C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VisualFeedbackGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="9.5" fill="#064E3B" fillOpacity="0.5" stroke="#10B981" strokeWidth="1.5" />
      <path d="M8.5 13L11.5 16L17.5 9.5" stroke="#6EE7B7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditableTitlesGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="20" height="14" rx="3.5" fill="#1E3A8A" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M7 13H13" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.5 9L19 11.5L14 16.5H11.5V14L16.5 9Z" fill="#2563FF" stroke="#BFDBFE" strokeWidth="1.2" />
    </svg>
  );
}

function LocalPrivacyGraphic() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3L4 7.5V13C4 18 8 22.2 13 23.5C18 22.2 22 18 22 13V7.5L13 3Z" fill="#4C1D95" fillOpacity="0.5" stroke="#A855F7" strokeWidth="1.5" />
      <rect x="10" y="12" width="6" height="5" rx="1" fill="#F3E8FF" />
      <path d="M11 12V10C11 8.9 11.9 8 13 8C14.1 8 15 8.9 15 10V12" stroke="#F3E8FF" strokeWidth="1.5" />
    </svg>
  );
}

const modes = [
  {
    id: "ai",
    name: "AI Chat Mode",
    version: "v2",
    HeaderGraphic: AiModeHeaderGraphic,
    activeBtn: "bg-gradient-to-r from-[#2563FF] to-[#3B82F6] text-white shadow-sm",
    badgeStyle: "bg-blue-500/15 border-blue-500/30 text-blue-400",
    description: "Message-level DOM tracking designed specifically for AI conversations",
    features: [
      { 
        Graphic: CheckpointsGraphic, 
        title: "Message Checkpoints", 
        badge: "DOM Level",
        desc: "Save specific AI responses, not just scroll positions",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
      },
      { 
        Graphic: SmartDetectionGraphic, 
        title: "Smart Detection", 
        badge: "Auto Boundaries",
        desc: "Automatically identifies message boundaries across models",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
      },
      { 
        Graphic: StorageGraphic, 
        title: "Persistent Storage", 
        badge: "IndexedDB Local",
        desc: "Bookmarks survive page refreshes and session restarts",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30"
      },
      { 
        Graphic: HudGraphic, 
        title: "Visual HUD Feedback", 
        badge: "Live Overlay",
        desc: "Clear indicator badges attached to saved messages",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-sky-500/10 text-sky-300 border-sky-500/30"
      },
    ]
  },
  {
    id: "scroll",
    name: "Scroll Mode",
    version: "v1",
    HeaderGraphic: ScrollModeHeaderGraphic,
    activeBtn: "bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white shadow-sm",
    badgeStyle: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    description: "Position-based bookmarking that works across any website or doc",
    features: [
      { 
        Graphic: UniversalWebGraphic, 
        title: "Universal Web Support", 
        badge: "All Domains",
        desc: "Works on blogs, articles, API docs, and code repos",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/30"
      },
      { 
        Graphic: PixelAccurateGraphic, 
        title: "Pixel-Accurate Positioning", 
        badge: "Y: ±0px",
        desc: "Returns to exact pixel scroll coordinates",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
      },
      { 
        Graphic: ContextSnippetsGraphic, 
        title: "Context Snippets", 
        badge: "Text Preview",
        desc: "Saves text previews for rapid identification",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-teal-500/10 text-teal-300 border-teal-500/30"
      },
      { 
        Graphic: VisualPinGraphic, 
        title: "Visual Pin Marker", 
        badge: "Inline Flag",
        desc: "See exactly where you left off reading",
        cardBorder: "hover:border-white/[0.12]",
        badgeStyle: "bg-violet-500/10 text-violet-300 border-violet-500/30"
      },
    ]
  }
];

const coreFeatures = [
  { 
    Graphic: OneClickGraphic, 
    title: "One-Click Bookmarking", 
    badge: "1-Click Pin",
    desc: "Pin important prompts & responses instantly",
    cardBorder: "hover:border-white/[0.12]",
    badgeStyle: "bg-amber-500/10 text-amber-300 border-amber-500/30" 
  },
  { 
    Graphic: VisualFeedbackGraphic, 
    title: "Visual Feedback", 
    badge: "Status Toast",
    desc: "Clear confirmation when checkpoints save",
    cardBorder: "hover:border-white/[0.12]",
    badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" 
  },
  { 
    Graphic: EditableTitlesGraphic, 
    title: "Editable Titles", 
    badge: "Custom Labels",
    desc: "Rename bookmarks for easy project indexing",
    cardBorder: "hover:border-white/[0.12]",
    badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30" 
  },
  { 
    Graphic: LocalPrivacyGraphic, 
    title: "100% Local Privacy", 
    badge: "0 KB Egress",
    desc: "All data stays stored inside your browser",
    cardBorder: "hover:border-white/[0.12]",
    badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/30" 
  },
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

          {/* Mode Segmented Switch */}
          <div className="flex justify-center mb-10">
            <div className="p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex gap-2 shadow-inner">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-3",
                    activeMode === mode.id
                      ? mode.activeBtn
                      : "text-[#A7ADBE] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <mode.HeaderGraphic />
                  <span>{mode.name}</span>
                  <span className="text-[9px] font-mono uppercase bg-black/30 px-1.5 py-0.5 rounded text-white/90 border border-white/10">
                    {mode.version}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Detail Card */}
          <div className="apple-glass rounded-2xl p-7 md:p-9 mb-14 border border-white/[0.1] relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className={cn(
              "absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[110px] pointer-events-none transition-all duration-500 opacity-30",
              currentMode.id === "ai" ? "bg-blue-600" : "bg-purple-600"
            )} />

            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.08] relative z-10">
              <div className="shrink-0 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <currentMode.HeaderGraphic />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">{currentMode.name}</h3>
                  <span className="text-[9px] font-mono uppercase bg-white/[0.08] border border-white/[0.12] px-2 py-0.5 rounded-full text-white/80 font-medium">
                    {currentMode.version}
                  </span>
                </div>
                <p className="text-xs text-[#A7ADBE] mt-0.5">{currentMode.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 relative z-10">
              {currentMode.features.map((feature) => (
                <div 
                  key={feature.title}
                  className={cn(
                    "group flex items-start gap-4 p-4.5 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300",
                    feature.cardBorder
                  )}
                >
                  <div className="shrink-0 mt-0.5 p-1 rounded-lg bg-black/40 border border-white/10 group-hover:scale-105 transition-transform duration-200">
                    <feature.Graphic />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-xs text-white group-hover:text-white transition-colors truncate">{feature.title}</h4>
                      <span className={cn("text-[9px] font-mono px-1.5 py-0.2 rounded border shrink-0 font-medium", feature.badgeStyle)}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A7ADBE] leading-relaxed">{feature.desc}</p>
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
                className={cn(
                  "group apple-glass apple-glass-hover rounded-xl p-5 border border-white/[0.06] flex flex-col justify-between transition-all duration-300",
                  feature.cardBorder
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="shrink-0 p-1 rounded-lg bg-black/40 border border-white/10 group-hover:scale-105 transition-transform duration-200">
                      <feature.Graphic />
                    </div>
                    <span className={cn("text-[8.5px] font-mono px-1.5 py-0.2 rounded border font-medium", feature.badgeStyle)}>
                      {feature.badge}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs text-white mb-1 group-hover:text-white transition-colors">{feature.title}</h4>
                  <p className="text-[11px] text-[#A7ADBE] leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


