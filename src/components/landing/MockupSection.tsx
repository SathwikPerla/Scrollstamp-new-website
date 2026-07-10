import { Pin, List, ArrowLeft, MessageSquare, Clock, Trash2, ExternalLink } from "lucide-react";

export function MockupSection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-border/40 bg-background/30">
      {/* Subtle overlay grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      
      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Designed to Integrate Seamlessly
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clean, lightweight layout that feels like a native part of your browser development tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Floating Pin Button Mockup */}
            <div className="bg-card border border-border/80 rounded-xl p-6 hover:border-border hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Pin className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Floating Pin Trigger</h3>
              </div>
              
              {/* Window Mockup with MacOS controls */}
              <div className="relative bg-muted/20 rounded-lg p-4 min-h-[200px] border border-border/60">
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                
                {/* Fake chat messages */}
                <div className="space-y-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded bg-primary/20 shrink-0" />
                    <div className="flex-1 bg-card/60 rounded-md p-2 text-[10px] text-muted-foreground font-mono">
                      $ npm run build
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded bg-accent/20 shrink-0" />
                    <div className="flex-1 bg-card/40 rounded-md p-2 text-[10px] text-muted-foreground leading-relaxed">
                      To build, make sure you configure your database variables first...
                    </div>
                  </div>
                </div>
                
                {/* Floating button */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:opacity-90 transition-opacity">
                    <Pin className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                A subtle, contextual button floats near messages to bookmark instantly.
              </p>
            </div>

            {/* Bookmark List Mockup */}
            <div className="bg-card border border-border/80 rounded-xl p-6 hover:border-border hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Organized Navigation Panel</h3>
              </div>
              
              {/* Window Mockup */}
              <div className="bg-muted/20 rounded-lg border border-border/60 overflow-hidden">
                <div className="p-3 border-b border-border/60 bg-card/60 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-tight text-muted-foreground uppercase">
                    ScrollStamp Extension
                  </span>
                </div>
                
                <div className="p-2 space-y-2 min-h-[155px]">
                  {[
                    { title: "API configure block", time: "2 min ago", icon: MessageSquare },
                    { title: "Database migration schema", time: "15 min ago", icon: MessageSquare },
                    { title: "Authentication Flow Docs", time: "1 hour ago", icon: ExternalLink },
                  ].map((bookmark, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-card/40 border border-border/40 hover:bg-card transition-colors group cursor-pointer">
                      <bookmark.icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono truncate">{bookmark.title}</p>
                        <p className="text-[9px] text-muted-foreground/80 flex items-center gap-1 mt-0.5">
                          <Clock className="w-2.5 h-2.5" />
                          {bookmark.time}
                        </p>
                      </div>
                      <Trash2 className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive" />
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Access your indexed checkpoints cleanly grouped by domain and task.
              </p>
            </div>

            {/* Jump Back Mockup */}
            <div className="bg-card border border-border/80 rounded-xl p-6 hover:border-border hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-4">
                <ArrowLeft className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Precise DOM Checkpoint</h3>
              </div>
              
              {/* Window Mockup */}
              <div className="relative bg-muted/20 rounded-lg p-4 min-h-[200px] border border-border/60 overflow-hidden">
                {/* Scroll indicator */}
                <div className="absolute top-2 right-2 w-1.5 h-full max-h-[180px] bg-border/40 rounded-full">
                  <div className="absolute top-1/4 w-full h-10 bg-primary/40 rounded-full" />
                </div>
                
                {/* Messages with highlight */}
                <div className="space-y-3.5">
                  <div className="flex gap-2 opacity-30">
                    <div className="w-5 h-5 rounded bg-muted shrink-0" />
                    <div className="flex-1 bg-card/40 rounded-md h-6" />
                  </div>
                  
                  {/* Highlighted active element */}
                  <div className="flex gap-2 border border-primary/40 bg-primary/5 rounded-lg p-1.5 shadow-sm">
                    <div className="w-5 h-5 rounded bg-primary/20 shrink-0" />
                    <div className="flex-1 bg-card/60 rounded-md p-1.5 text-[9px] font-mono border border-primary/20">
                      <span className="text-primary font-bold"># Bookmarked Point</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 opacity-30">
                    <div className="w-5 h-5 rounded bg-muted shrink-0" />
                    <div className="flex-1 bg-card/40 rounded-md h-8" />
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Clicking any snapshot scrolls the browser instantly back to the exact element.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
