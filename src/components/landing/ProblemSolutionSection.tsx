import { AlertCircle, CheckCircle2, ArrowRight, ScrollText, Search, Clock, MessageSquare, Brain, RefreshCw, Layers } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-accent">Problem</span> We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you ask LLMs to help build projects or solve problems, the AI provides step-by-step guidance. 
              But as you continue working, things get complicated.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Problem Card */}
            <div className="glass rounded-2xl p-8 border-accent/20 hover:border-accent/40 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">The Pain Points</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-accent mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Continuing the Same Thread
                  </h4>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ScrollText className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Conversations grow extremely long</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Search className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Important instructions get buried far above</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Excessive scrolling breaks focus and workflow</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Layers className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Threads become heavy, performance may degrade</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-accent mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Starting a New Thread?
                  </h4>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Brain className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Impossible to transfer 100% of the context</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <MessageSquare className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Must re-explain the entire problem</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" />
                      <span>Mental flow is disrupted completely</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <p className="text-sm text-muted-foreground italic">
                  "Where was that architecture decision Claude gave me 2 hours ago? I've been scrolling for 5 minutes..."
                </p>
              </div>
            </div>

            {/* Arrow for mobile */}
            <div className="flex lg:hidden justify-center">
              <ArrowRight className="w-8 h-8 text-primary rotate-90" />
            </div>

            {/* Solution Card */}
            <div className="glass rounded-2xl p-8 border-primary/20 hover:border-primary/40 transition-colors glow group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">ScrollStamp's Solution</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Turn long AI chats into navigable, structured workspaces instead of endless scrolls.
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Bookmark exact AI messages or steps with one click</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Instantly jump back to important instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Stay in the same conversation without losing context</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Organize long, step-by-step problem-solving sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span>Persistent storage that survives page refreshes</span>
                </li>
              </ul>

              {/* Use Cases */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground">🤖 AI Project Building</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground">👨‍💻 Coding & Debugging</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground">🎓 Learning & Studying</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground">🌐 Long Articles & Docs</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm gradient-text font-medium">
                  ✨ Pin it. Find it. Stay focused. Every time.
                </p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-12 text-center">
            <div className="inline-block glass rounded-xl px-8 py-4 border-primary/20">
              <p className="text-lg font-medium">
                ScrollStamp is for people who <span className="text-primary">work through long AI conversations</span>, 
                don't want to restart threads, and want to <span className="text-accent">stay focused and efficient</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
