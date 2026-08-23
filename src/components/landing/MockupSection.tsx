import { Pin, List, ArrowLeft, MessageSquare, Clock, Trash2, ExternalLink, MousePointer, Bookmark } from "lucide-react";

export function MockupSection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/[0.08] bg-[#05060B]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Designed for Flow
            </h2>
            <p className="text-base text-[#A7ADBE] max-w-xl mx-auto leading-relaxed">
              A clean, lightweight overlay that feels like a native part of your browser development tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Instant Text Selection Mockup */}
            <div className="apple-glass apple-glass-hover rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#3B82FF]">
                    <MousePointer className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">Select Text to Bookmark</h3>
                </div>
                
                {/* Window Mockup */}
                <div className="relative bg-black/40 rounded-xl p-4 min-h-[190px] border border-white/[0.08] overflow-hidden">
                  <div className="flex gap-1.5 mb-4">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  
                  {/* Text selection highlight simulation */}
                  <div className="space-y-2.5 mb-4 font-mono text-[10px]">
                    <div className="p-2 rounded bg-white/[0.03] text-white/50">
                      $ npm run build
                    </div>
                    <div className="p-2 rounded bg-[#2563FF]/20 border border-[#2563FF]/40 text-white leading-relaxed">
                      <span className="bg-[#2563FF]/60 text-white font-semibold px-1 rounded">
                        export const SECRET_KEY = process.env.API_KEY;
                      </span>
                      <span className="text-[#A7ADBE] ml-1">
                        // Bookmarked via text selection
                      </span>
                    </div>
                  </div>
                  
                  {/* Contextual Selection Badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded bg-[#2563FF] text-white font-mono text-[9px] shadow-[0_0_12px_rgba(37,99,255,0.5)]">
                    <Bookmark className="w-3 h-3 fill-current" />
                    <span>Point Saved</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-[#A7ADBE] mt-4 leading-relaxed">
                Simply select any text or instruction inside a conversation to index that exact point instantly.
              </p>
            </div>

            {/* Bookmark List Mockup */}
            <div className="apple-glass apple-glass-hover rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#3B82FF]">
                    <List className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">Organized Index Panel</h3>
                </div>
                
                {/* Window Mockup */}
                <div className="bg-black/40 rounded-xl border border-white/[0.08] overflow-hidden">
                  <div className="p-2.5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[#A7ADBE] uppercase tracking-wider">
                      ScrollStamp Panel
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400">Synced</span>
                  </div>
                  
                  <div className="p-2 space-y-1.5 min-h-[145px]">
                    {[
                      { title: "API configure block", time: "2m ago", icon: MessageSquare },
                      { title: "Database migration schema", time: "15m ago", icon: MessageSquare },
                      { title: "Authentication Flow Docs", time: "1h ago", icon: ExternalLink },
                    ].map((bookmark, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.15] transition-colors cursor-pointer group">
                        <bookmark.icon className="w-3 h-3 text-[#3B82FF] shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-mono text-white/90 truncate">{bookmark.title}</p>
                          <p className="text-[9px] text-[#A7ADBE] flex items-center gap-1 mt-0.5">
                            <Clock className="w-2.5 h-2.5 text-white/40" />
                            {bookmark.time}
                          </p>
                        </div>
                        <Trash2 className="w-3 h-3 text-[#A7ADBE] opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-[#A7ADBE] mt-4 leading-relaxed">
                Access your indexed checkpoints cleanly grouped by domain and task.
              </p>
            </div>

            {/* Jump Back Mockup */}
            <div className="apple-glass apple-glass-hover rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center text-[#3B82FF]">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">Precise DOM Checkpoint</h3>
                </div>
                
                {/* Window Mockup */}
                <div className="relative bg-black/40 rounded-xl p-4 min-h-[190px] border border-white/[0.08] overflow-hidden">
                  {/* Scroll indicator */}
                  <div className="absolute top-2 right-2 w-1 h-full max-h-[170px] bg-white/10 rounded-full">
                    <div className="absolute top-1/4 w-full h-8 bg-[#2563FF] rounded-full" />
                  </div>
                  
                  {/* Messages with highlight */}
                  <div className="space-y-3">
                    <div className="flex gap-2 opacity-30">
                      <div className="w-4 h-4 rounded bg-white/20 shrink-0" />
                      <div className="flex-1 bg-white/10 rounded h-5" />
                    </div>
                    
                    {/* Highlighted active element */}
                    <div className="flex gap-2 border border-[#2563FF]/40 bg-[#2563FF]/10 rounded-lg p-2 shadow-sm">
                      <div className="w-4 h-4 rounded bg-[#2563FF] shrink-0 mt-0.5" />
                      <div className="flex-1 bg-black/40 rounded p-1.5 text-[9px] font-mono border border-[#2563FF]/30">
                        <span className="text-[#3B82FF] font-bold"># Checkpoint Reached</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 opacity-30">
                      <div className="w-4 h-4 rounded bg-white/20 shrink-0" />
                      <div className="flex-1 bg-white/10 rounded h-6" />
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-[#A7ADBE] mt-4 leading-relaxed">
                Clicking any snapshot scrolls the browser instantly back to the exact element.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
