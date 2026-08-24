import { cn } from "@/lib/utils";

// Custom Handcrafted Vector Graphics for Workflow Bottleneck Section

function FrictionHeaderGraphic() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#451A03" fillOpacity="0.4" stroke="#F59E0B" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M14 7V15" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="19" r="1.2" fill="#FBBF24" />
    </svg>
  );
}

function SolutionHeaderGraphic() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#1E3A8A" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M7 8H21" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 13H21" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M7 18H15" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M17 15V22L19.5 20.25L22 22V15H17Z" fill="#3B82F6" />
    </svg>
  );
}

function CustomCheckSvg() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
      <circle cx="7.5" cy="7.5" r="6.5" fill="#1E3A8A" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1.2" />
      <path d="M4.5 7.5L6.5 9.5L10.5 5" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AiCodingChipSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="14" height="14" rx="4" fill="#1E3A8A" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1.2" />
      <path d="M5.5 6L3.5 9L5.5 12" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 6L14.5 9L12.5 12" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10.5" y1="5" x2="7.5" y2="13" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function DebuggingChipSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="14" height="14" rx="4" fill="#3B0764" fillOpacity="0.4" stroke="#A855F7" strokeWidth="1.2" />
      <path d="M5.5 6.5L8 9L5.5 11.5" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9.5" y1="11.5" x2="12.5" y2="11.5" stroke="#E9D5FF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="6" r="1.2" fill="#F43F5E" />
    </svg>
  );
}

function ResearchChipSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="14" height="14" rx="4" fill="#064E3B" fillOpacity="0.4" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3.5" stroke="#34D399" strokeWidth="1.5" />
      <path d="M10.5 10.5L14 14" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1" fill="#A7F3D0" />
    </svg>
  );
}

function DocsChipSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="14" height="14" rx="4" fill="#78350F" fillOpacity="0.4" stroke="#F59E0B" strokeWidth="1.2" />
      <path d="M5.5 5.5H12.5" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 9H12.5" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M5.5 12.5H9.5" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#05060B]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              The <span className="text-[#3B82FF]">Workflow Bottleneck</span>
            </h2>
            <p className="text-base md:text-lg text-[#A7ADBE] max-w-xl mx-auto leading-relaxed">
              When building complex projects with LLM assistants, conversations stretch into thousands of DOM elements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Problem Card */}
            <div className="apple-glass rounded-2xl p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="shrink-0 p-1 rounded-xl bg-black/40 border border-white/10">
                    <FrictionHeaderGraphic />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">The Friction</h3>
                    <p className="text-[11px] font-mono text-amber-400/80">Disorganized DOM Threads</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-white/90 font-semibold">
                        Continuing Long Threads
                      </h4>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        High Overhead
                      </span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-1.5 shrink-0" />
                        <span>Conversations grow to thousands of lines and heavy DOM trees</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-1.5 shrink-0" />
                        <span>Important instructions and config details get buried in chat history</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-1.5 shrink-0" />
                        <span>Excessive manual scrolling breaks your mental model and active flow</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-white/90 font-semibold">
                        Starting New Threads?
                      </h4>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Context Loss
                      </span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 mt-1.5 shrink-0" />
                        <span>Difficult to transfer deep workspace context and architectural setup</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 mt-1.5 shrink-0" />
                        <span>Wastes valuable developer time re-explaining project specifications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-[11px] text-[#A7ADBE] italic leading-relaxed font-mono">
                  "Where was that architecture decision the model gave me 2 hours ago?"
                </p>
              </div>
            </div>

            {/* Solution Card */}
            <div className="apple-glass rounded-2xl p-7 md:p-8 flex flex-col justify-between border-l-2 border-l-[#2563FF] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563FF]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0 p-1 rounded-xl bg-black/40 border border-white/10">
                      <SolutionHeaderGraphic />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">The ScrollStamp Way</h3>
                      <p className="text-[11px] font-mono text-blue-400">Indexed DOM Memory</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
                    Instant Index
                  </span>
                </div>
                
                <p className="text-xs text-[#A7ADBE] mb-6 leading-relaxed">
                  Turn endless scrolls into a clean, indexed workspace with quick local bookmarks.
                </p>
                
                <ul className="space-y-3.5 mb-8">
                  {[
                    "Bookmark exact AI responses with a single click",
                    "Instantly jump back to the exact DOM element",
                    "Keep using the same context without breaking the thread",
                    "Add custom tags and edit titles for quick searching",
                    "Persistent storage that survives refreshes and reloads"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs">
                      <CustomCheckSvg />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Workflow pills with custom SVG badges */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <AiCodingChipSvg />
                    <span className="text-[11px] font-medium text-white/80">AI Projects</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <DebuggingChipSvg />
                    <span className="text-[11px] font-medium text-white/80">Debugging</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <ResearchChipSvg />
                    <span className="text-[11px] font-medium text-white/80">Research</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                    <DocsChipSvg />
                    <span className="text-[11px] font-medium text-white/80">Documentation</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-between">
                <p className="text-xs font-semibold text-white font-mono">
                  Pin it. Find it. Stay focused. Every time.
                </p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  100% Local
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

