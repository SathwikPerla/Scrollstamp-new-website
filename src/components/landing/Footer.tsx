import { Github, Bug, Heart, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo and name */}
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="ScrollStamp" className="w-8 h-8" />
              <span className="font-semibold text-lg">ScrollStamp</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                v2.1
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Bug className="w-4 h-4" />
                <span className="text-sm">Issues</span>
              </a>
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/blob/main/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">MIT License</span>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-center pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by an indie developer
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              © {new Date().getFullYear()} ScrollStamp. Open source and free forever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
