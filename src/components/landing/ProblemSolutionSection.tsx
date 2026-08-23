import { 
  AlertCircle, 
  CheckCircle2, 
  ScrollText, 
  Search, 
  Clock, 
  MessageSquare, 
  Brain, 
  RefreshCw, 
  Cpu,
  Code2,
  GraduationCap,
  BookOpen,
  Sparkles,
  Zap
} from "lucide-react";

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
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <AlertCircle className="w-4.5 h-4.5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">The Friction</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7ADBE] mb-3 flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-[#3B82FF]" />
                      Continuing the Same Long Thread
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <ScrollText className="w-3.5 h-3.5 mt-0.5 text-white/40 shrink-0" />
                        <span>Conversations grow to thousands of lines</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <Search className="w-3.5 h-3.5 mt-0.5 text-white/40 shrink-0" />
                        <span>Important instructions and config details get buried</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <Clock className="w-3.5 h-3.5 mt-0.5 text-white/40 shrink-0" />
                        <span>Excessive scrolling breaks mental model and flow</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-white/[0.05]">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#A7ADBE] mb-3 flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                      Starting a New Thread?
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <Brain className="w-3.5 h-3.5 mt-0.5 text-white/40 shrink-0" />
                        <span>Hard to transfer the current context fully</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-[#A7ADBE]">
                        <Clock className="w-3.5 h-3.5 mt-0.5 text-white/40 shrink-0" />
                        <span>Waste time re-explaining the workspace setup</span>
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
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-xl bg-[#2563FF]/15 flex items-center justify-center border border-[#2563FF]/30">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3B82FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">The ScrollStamp Way</h3>
                </div>
                
                <p className="text-xs text-[#A7ADBE] mb-6 leading-relaxed">
                  Turn endless scrolls into a clean, indexed workspace with quick local bookmarks.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Bookmark exact AI responses with a single click",
                    "Instantly jump back to the exact DOM element",
                    "Keep using the same context without breaking the thread",
                    "Add custom tags and edit titles for quick searching",
                    "Persistent storage that survives refreshes and reloads"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82FF] shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Workflow pills with Lucide icons (no emojis) */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#3B82FF] shrink-0" />
                    <span className="text-[11px] font-medium text-white/80">AI Projects</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="text-[11px] font-medium text-white/80">Debugging</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] font-medium text-white/80">Research</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-[11px] font-medium text-white/80">Documentation</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82FF] shrink-0" />
                <p className="text-xs font-semibold text-white">
                  Pin it. Find it. Stay focused. Every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
