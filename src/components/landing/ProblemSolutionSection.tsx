import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ScrollText, 
  Search, 
  Clock, 
  MessageSquare, 
  Brain, 
  RefreshCw, 
  Layers,
  Cpu,
  Code2,
  GraduationCap,
  BookOpen,
  Sparkles
} from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative border-t border-border/40 bg-background/50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              The <span className="text-primary">Workflow Problem</span> We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When building projects with AI guidance, conversations grow exponentially. 
              Navigating long threads breaks focus. ScrollStamp keeps you organized.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Problem Card */}
            <div className="bg-card/40 border border-border/80 rounded-2xl p-8 hover:border-border transition-colors">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center border border-destructive/20">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">The Pain Points</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Continuing the Same Thread
                  </h4>
                  <ul className="space-y-3.5 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ScrollText className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>Conversations grow to thousands of lines</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Search className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>Important instructions and config details get buried</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>Excessive scrolling breaks mental model and flow</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-accent" />
                    Starting a New Thread?
                  </h4>
                  <ul className="space-y-3.5 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Brain className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>Hard to transfer the current context fully</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-muted-foreground/60 shrink-0" />
                      <span>Waste time re-explaining the workspace setup</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border/60">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "Where was that architecture decision the model gave me 2 hours ago? I've been scrolling for 5 minutes..."
                </p>
              </div>
            </div>

            {/* Solution Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:border-primary/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">The ScrollStamp Way</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">
                Turn endless scrolls into a clean, indexed workspace with quick bookmarks.
              </p>
              
              <ul className="space-y-3.5 mb-8">
                {[
                  "Bookmark exact AI responses with a single click",
                  "Instantly jump back to the exact DOM element",
                  "Keep using the same context without breaking the thread",
                  "Add custom tags and edit titles for quick searching",
                  "Persistent storage that survives refreshes and reloads"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Use Cases replaced emojis with elegant Lucide icons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground/80">AI Project Building</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs font-semibold text-foreground/80">Coding & Debugging</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-foreground/80">Learning & Studying</span>
                </div>
                <div className="p-3.5 rounded-xl border border-border bg-background/50 flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-xs font-semibold text-foreground/80">Articles & Docs</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <p className="text-xs font-semibold text-primary">
                  Pin it. Find it. Stay focused. Every time.
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/30 border border-border/80 rounded-xl px-6 py-4">
              <p className="text-sm text-muted-foreground font-medium">
                ScrollStamp optimizes the developer feedback loop by indexing long browser contexts locally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
