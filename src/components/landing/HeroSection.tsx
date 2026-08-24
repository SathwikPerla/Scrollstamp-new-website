import { useState, useEffect } from "react";
import { Star, MessageSquare, Globe, Eye, Chrome, Bookmark, ArrowUpRight, Check, Hash, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const platforms = [
  { name: "ChatGPT", dot: "bg-[#10a37f]" },
  { name: "Claude", dot: "bg-[#da7756]" },
  { name: "Gemini", dot: "bg-[#4a88f7]" },
  { name: "Perplexity", dot: "bg-[#22b8cf]" },
  { name: "Grok", dot: "bg-slate-300" },
  { name: "DeepSeek", dot: "bg-[#3b82f6]" },
];

export function HeroSection() {
  const [visits, setVisits] = useState<number | null>(null);
  const [downloads, setDownloads] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    // Only increment visits count once per page load session
    const hasVisited = sessionStorage.getItem("scrollstamp_visited");
    const visitUrl = hasVisited 
      ? "https://api.counterapi.dev/v1/scrollstamp/visits/" 
      : "https://api.counterapi.dev/v1/scrollstamp/visits/up";

    fetch(visitUrl)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === "number") {
          setVisits(data.count);
          if (!hasVisited) {
            sessionStorage.setItem("scrollstamp_visited", "true");
          }
        }
      })
      .catch(() => {});

    // Fetch initial downloads count
    fetch("https://api.counterapi.dev/v1/scrollstamp/downloads/")
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === "number") {
          setDownloads(data.count);
        } else {
          setDownloads(0);
        }
      })
      .catch(() => {
        setDownloads(0);
      });
  }, []);

  const handleDownloadClick = () => {
    fetch("https://api.counterapi.dev/v1/scrollstamp/downloads/up")
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === "number") {
          setDownloads(data.count);
        }
      })
      .catch(() => {});
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/[0.06]">
      {/* Background Architectural Grid & Subtle Radial Glow (Restrained) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-500/10 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 mx-auto max-w-6xl">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-medium text-white/70 shadow-sm backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-white/90">v2.1 Hybrid</span>
            <span className="text-white/20">|</span>
            <span className="text-white/60">Chrome Extension for Deep AI Sessions</span>
          </div>
        </div>

        {/* Hero Title & Subheading - Apple & Linear Precision Typography */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-white leading-[1.08] mb-6">
            Never lose your place in an{" "}
            <span className="text-white/40 italic font-serif">AI conversation.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-normal">
            Bookmark exact prompt instructions, code generations, and architectural decisions inside long threads. Return instantly with one click.
          </p>
        </div>

        {/* Primary CTAs & Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <Button 
            size="lg" 
            className="h-12 px-7 text-sm font-semibold bg-white text-black hover:bg-white/90 rounded-xl transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)] active:scale-98 group"
            asChild
          >
            <a 
              href="https://chromewebstore.google.com/detail/scrollstamp/hlnolmjmfgdbaidlgkmfdpnajpemimcb" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
            >
              <Chrome className="w-4 h-4 mr-2 text-black/80 group-hover:scale-105 transition-transform" />
              <span>Add to Chrome</span>
              <span className="text-[10px] font-mono ml-2 py-0.5 px-1.5 rounded bg-black/10 text-black/70">Free</span>
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-6 text-sm font-medium bg-white/[0.03] hover:bg-white/[0.07] border-white/[0.1] text-white/90 hover:text-white rounded-xl transition-all active:scale-98"
            asChild
          >
            <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
              <Star className="w-3.5 h-3.5 mr-2 fill-amber-400/90 text-amber-400" />
              <span>Star on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-50" />
            </a>
          </Button>
        </div>

        {/* Telemetry Stats Bar - Minimal Linear Badge */}
        {(visits !== null || downloads !== null) && (
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-4 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-white/50">
              {visits !== null && (
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-sky-400" />
                  <span className="text-white/40">Visits:</span>
                  <span className="text-white/80 font-semibold">{visits.toLocaleString()}</span>
                </span>
              )}
              {visits !== null && downloads !== null && (
                <span className="text-white/10">•</span>
              )}
              {downloads !== null && (
                <span className="flex items-center gap-1.5">
                  <Chrome className="w-3 h-3 text-emerald-400" />
                  <span className="text-white/40">Installs / Downloads:</span>
                  <span className="text-white/80 font-semibold">{downloads.toLocaleString()}</span>
                </span>
              )}
            </div>
          </div>
        )}

        {/* HERO PRODUCT CENTERPIECE: Realistic AI Workspace Mockup with ScrollStamp In Action */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-white/[0.12] bg-[#0c0d14]/90 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Mock Browser Titlebar */}
          <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <span>chatgpt.com/c/arch-revamp-v2</span>
              </div>
            </div>

            {/* Browser Right: Extension Installed Pin Icon */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.12] text-[10px] font-mono text-white/90">
                <Bookmark className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>ScrollStamp Active</span>
                <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px]">3 Bookmarks</span>
              </div>
            </div>
          </div>

          {/* Product Interface Body: Sidebar + Chat Stream */}
          <div className="grid md:grid-cols-12 min-h-[380px]">
            {/* ScrollStamp HUD Panel (Left 4 cols) */}
            <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-white/[0.08] bg-black/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 font-semibold">
                    Saved Checkpoints
                  </span>
                  <span className="text-[10px] font-mono text-white/30">Jump in 1-Click</span>
                </div>

                <div className="space-y-2">
                  {[
                    { id: 0, title: "Auth Middleware & Token Flow", time: "2 min ago", tag: "Critical Config", active: activeTab === 0 },
                    { id: 1, title: "PostgreSQL Schema Definition", time: "14 min ago", tag: "Database", active: activeTab === 1 },
                    { id: 2, title: "Deploy Script & Environment Vars", time: "1 hr ago", tag: "DevOps", active: activeTab === 2 },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={cn(
                        "w-full text-left p-2.5 rounded-xl border transition-all duration-150 flex items-start gap-2.5",
                        item.active 
                          ? "bg-white/[0.08] border-white/[0.2] shadow-sm text-white" 
                          : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] text-white/60 hover:text-white/80"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border text-[11px]",
                        item.active 
                          ? "bg-amber-400/20 border-amber-400/40 text-amber-300" 
                          : "bg-white/[0.04] border-white/[0.08] text-white/40"
                      )}>
                        <Bookmark className="w-3 h-3 fill-current" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs font-medium truncate">{item.title}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-white/50 border border-white/[0.06]">
                            {item.tag}
                          </span>
                          <span className="text-[9px] font-mono text-white/40">{item.time}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Feature Callout */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40 px-1">
                <span>Indexed locally</span>
                <span className="text-emerald-400/90 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Private
                </span>
              </div>
            </div>

            {/* Chat Stream Viewport (Right 8 cols) */}
            <div className="md:col-span-8 p-5 sm:p-6 bg-gradient-to-b from-transparent to-black/30 flex flex-col justify-between space-y-4">
              {/* Previous chat messages (faded) */}
              <div className="space-y-3 opacity-40 select-none">
                <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/60" /> User prompt · #Step 04
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-white/50">
                  How should we configure the session expiration refresh tokens?
                </div>
              </div>

              {/* Active Bookmarked Target Message - Highlighted with ScrollStamp Flag */}
              <div className="relative p-4 rounded-xl bg-white/[0.04] border border-white/[0.14] shadow-lg">
                {/* Floating Pin Indicator from ScrollStamp */}
                <div className="absolute -top-3 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400 text-black font-semibold text-[10px] font-mono shadow-md">
                  <Bookmark className="w-3 h-3 fill-black" />
                  <span>Pinned Checkpoint</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-white/90">Claude 3.7 Sonnet</span>
                  <span className="text-[10px] font-mono text-white/40">· Instruction Block</span>
                </div>

                <div className="p-3 rounded-lg bg-[#08090d] border border-white/[0.08] font-mono text-xs text-white/80 space-y-1 overflow-x-auto">
                  <div className="text-white/40">// In src/middleware/auth.ts</div>
                  <div className="text-sky-300">export const verifyAuthSession = async (req, res) =&gt; &#123;</div>
                  <div className="text-white/70 pl-4">const token = req.headers.authorization?.split(' ')[1];</div>
                  <div className="text-emerald-400/90 pl-4">return validateSignedToken(token, SECRET_KEY);</div>
                  <div className="text-sky-300">&#125;;</div>
                </div>

                <p className="text-[11px] text-white/50 mt-2.5">
                  Clicking the checkpoint on the left instantly animates the window directly back to this specific response block.
                </p>
              </div>

              {/* Supported Platforms Strip inside mockup */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                  Integrated Directly In
                </span>
                <div className="flex items-center gap-2">
                  {platforms.map((p) => (
                    <div 
                      key={p.name}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/60"
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full", p.dot)} />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Mode Feature Showcase (Linear/Apple Interactive Widget Style) */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-10">
          {/* AI Chat Mode Widget */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-300" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs shadow-inner">
                  <span className="text-blue-400 font-mono">v2</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">AI Chat Mode</h3>
                  <p className="text-[10px] font-mono text-white/50">Message-Level DOM Indexing</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
                Active HUD
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed mb-5">
              Tracks specific prompt & response blocks directly inside ChatGPT, Claude, Gemini, Perplexity, DeepSeek, and Grok.
            </p>

            {/* Micro UI Demonstration Badge */}
            <div className="p-3 rounded-xl bg-black/50 border border-white/[0.08] space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between text-white/40 pb-1.5 border-b border-white/[0.06]">
                <span>Target: DOM Node #msg-41</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Pinned
                </span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="truncate max-w-[200px] text-blue-300">"export const authConfig..."</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Jump in 1-Click</span>
              </div>
            </div>
          </div>

          {/* Scroll Mode Widget */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none transition-all duration-300" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs shadow-inner">
                  <span className="text-purple-400 font-mono">v1</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">Scroll Mode</h3>
                  <p className="text-[10px] font-mono text-white/50">Universal Web Positioning</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                Any Webpage
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed mb-5">
              Pixel-accurate position bookmarking for documentation, technical blogs, API reference guides, and GitHub code files.
            </p>

            {/* Micro UI Demonstration Badge */}
            <div className="p-3 rounded-xl bg-black/50 border border-white/[0.08] space-y-2 font-mono text-[10px]">
              <div className="flex items-center justify-between text-white/40 pb-1.5 border-b border-white/[0.06]">
                <span>Scroll Coordinate</span>
                <span className="text-purple-300 font-semibold">Y: 1,480 px</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="truncate max-w-[200px] text-emerald-300">"docs.stripe.com/api#webhooks"</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Exact Pin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

