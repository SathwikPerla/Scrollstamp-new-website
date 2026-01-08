import { Pin, List, ArrowLeft, MessageSquare, Clock, Trash2, ExternalLink } from "lucide-react";

export function MockupSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It In <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A clean, intuitive interface that stays out of your way until you need it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Floating Pin Button Mockup */}
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <Pin className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Floating Pin Button</h3>
              </div>
              
              {/* Mockup */}
              <div className="relative bg-background rounded-xl p-4 min-h-[200px] border border-border/50">
                {/* Fake chat messages */}
                <div className="space-y-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20" />
                    <div className="flex-1 bg-muted/50 rounded-lg p-2 text-xs text-muted-foreground">
                      How do I implement...
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20" />
                    <div className="flex-1 bg-muted/30 rounded-lg p-2 text-xs text-muted-foreground">
                      Here's a code example...
                    </div>
                  </div>
                </div>
                
                {/* Floating button */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg pulse-glow cursor-pointer">
                    <Pin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Click the floating pin to bookmark the current message instantly.
              </p>
            </div>

            {/* Bookmark List Mockup */}
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Bookmark Panel</h3>
              </div>
              
              {/* Mockup */}
              <div className="bg-background rounded-xl border border-border/50 overflow-hidden">
                <div className="p-3 border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <img src="/favicon.png" className="w-5 h-5" alt="" />
                    <span className="text-sm font-medium">ScrollStamp</span>
                  </div>
                </div>
                
                <div className="p-2 space-y-2 max-h-[180px]">
                  {[
                    { title: "API endpoint code", time: "2 min ago", icon: MessageSquare },
                    { title: "Database schema", time: "15 min ago", icon: MessageSquare },
                    { title: "Important article", time: "1 hour ago", icon: ExternalLink },
                  ].map((bookmark, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 group cursor-pointer">
                      <bookmark.icon className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{bookmark.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {bookmark.time}
                        </p>
                      </div>
                      <Trash2 className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Access all your bookmarks from the extension popup.
              </p>
            </div>

            {/* Jump Back Mockup */}
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <ArrowLeft className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Instant Jump Back</h3>
              </div>
              
              {/* Mockup */}
              <div className="relative bg-background rounded-xl p-4 min-h-[200px] border border-border/50 overflow-hidden">
                {/* Scroll indicator */}
                <div className="absolute top-2 right-2 w-1 h-full max-h-[180px] bg-muted/50 rounded-full">
                  <div className="absolute top-1/3 w-full h-8 bg-primary/50 rounded-full animate-pulse" />
                </div>
                
                {/* Messages with highlight */}
                <div className="space-y-3">
                  <div className="flex gap-2 opacity-40">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <div className="flex-1 bg-muted/30 rounded-lg p-2 h-8" />
                  </div>
                  <div className="flex gap-2 opacity-40">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <div className="flex-1 bg-muted/30 rounded-lg p-2 h-12" />
                  </div>
                  {/* Highlighted message */}
                  <div className="flex gap-2 ring-2 ring-primary rounded-lg p-1">
                    <div className="w-6 h-6 rounded-full bg-primary/20" />
                    <div className="flex-1 bg-primary/10 rounded-lg p-2 text-xs">
                      <span className="text-primary">Bookmarked content</span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-40">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <div className="flex-1 bg-muted/30 rounded-lg p-2 h-10" />
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Click a bookmark to scroll right back to that exact message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
