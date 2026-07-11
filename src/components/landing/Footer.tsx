import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-background/30 relative">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo and name */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center border border-border">
                <img src="/favicon.png" alt="ScrollStamp" className="w-4.5 h-4.5 object-contain" />
              </div>
              <span className="font-bold text-sm tracking-tight text-foreground">ScrollStamp</span>
              <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[10px] font-mono border border-border/80">
                v2.1
              </span>
            </div>

            {/* Links and Contact Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a 
                href="mailto:scrollstamp.dev@gmail.com" 
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact / Feedback: scrollstamp.dev@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-center pt-6 border-t border-border/40">
            <p className="text-xs text-muted-foreground font-mono select-none leading-relaxed">
              <span>Made out of sheer frustration by </span>
              <span className="font-bold text-foreground">Sathwik Perla</span>
              <span> on the mess created by long LLM chats</span>
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-2 font-medium">
              © 2026 ScrollStamp. Open source
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
