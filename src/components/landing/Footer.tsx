import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05060B] relative">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo and name */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
                <img src="/favicon.png" alt="ScrollStamp" className="w-4 h-4 object-contain opacity-90" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-white">ScrollStamp</span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[#A7ADBE] text-[10px] font-mono border border-white/[0.08]">
                v2.3.0
              </span>
            </div>

            {/* Links and Contact Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#A7ADBE] hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="hidden sm:inline text-white/10">|</span>
              <a 
                href="mailto:scrollstamp.dev@gmail.com" 
                className="flex items-center gap-1.5 text-xs font-medium text-[#A7ADBE] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact: scrollstamp.dev@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-center pt-6 border-t border-white/[0.06]">
            <p className="text-xs text-[#A7ADBE] font-mono select-none leading-relaxed">
              <span>Made out of sheer frustration by </span>
              <span className="font-semibold text-white">Sathwik Perla</span>
              <span> on the mess created by long LLM chats</span>
            </p>
            <p className="text-[10px] text-white/30 mt-2 font-mono">
              © 2026 ScrollStamp. Open source
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
