import { AlertCircle, CheckCircle2, ArrowRight, ScrollText, Search, Clock } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-accent">Problem</span> We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Problem Card */}
            <div className="glass rounded-2xl p-8 border-accent/20 hover:border-accent/40 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">The Problem</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <ScrollText className="w-5 h-5 mt-0.5 text-accent/60 shrink-0" />
                  <span>Hours-long AI chats with crucial answers buried deep</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Search className="w-5 h-5 mt-0.5 text-accent/60 shrink-0" />
                  <span>Endless scrolling to find that one important response</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 mt-0.5 text-accent/60 shrink-0" />
                  <span>Wasted time re-reading content you've already seen</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <p className="text-sm text-muted-foreground italic">
                  "Where was that code snippet Claude gave me 2 hours ago?"
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Solution Card */}
            <div className="glass rounded-2xl p-8 border-primary/20 hover:border-primary/40 transition-colors glow group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">The Solution</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>One-click bookmarking for any message or position</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Instant navigation back to saved content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Persistent storage that survives page refreshes</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm gradient-text font-medium">
                  ✨ Pin it. Find it. Every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
